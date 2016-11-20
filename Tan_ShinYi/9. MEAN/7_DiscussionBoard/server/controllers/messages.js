"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Comment = mongoose.model('Comment'),
    Post = mongoose.model('Post'),
    Topic = mongoose.model('Topic'),
    Category = mongoose.model('Category');

console.log('messages controller');

function MessagesController() {
    this.categories = function(req, res) {
        Category.find({}, function(err, data) {
            res.json(data);
        });
    };

    this.newTopic = function(req,res){
        console.log('topic is being created!!!', req.body);
        var topic = new Topic(req.body);
        console.log("???", req.session.user);
        topic.username = req.session.user.username;
        topic.userId = req.session.user._id;

        console.log('!!!', topic);
        topic.save(function(err, topic){
          if(err){
            var errors = [];

            for(var key in err.errors){
              errors.push(err.errors[key].message);
              console.log(err.errors[key].message);
            }
            res.json({errors: errors});
          }else{
            res.json(topic);
          }
        })
      };

    this.newPost = function(req,res){
      console.log('SESSION!!!', req.session.user);
      console.log('post is being created!!!', req.body);

      Topic.findOne({_id: req.params.topicId }, function(err, topic){
        if(!topic){
          res.json({errors: ['Cannot find the topic the user is trying to post to.']});
        }else{
          var post = new Post(req.body);
          post._topic = req.params.topicId;
          post.username = req.session.user.username;
          post.userId = req.session.user._id;

          post.save(function(err){
            if(!err){
              topic.posts.push(post);
              topic.save(function(err){
                if(err){
                  res.json({errors: 'Failed to save post to DB'});
                }else{
                  res.json(post);
                }
              })
            }
          })
        }
      })
    };

    this.newComment = function(req,res){
      console.log('comment is being created!!!', req.body);

      Post.findOne({_id: req.params.postId }, function(err, post){
        if(!post){
          res.json({errors: ['Cannot find the post the user is trying to comment to.']});
        }else{
          var comment = new Comment(req.body);
          comment._post = req.params.postId;
          comment.username = req.session.user.username;
          comment.userId = req.session.user._id;

          comment.save(function(err){
            if(!err){
              post.comments.push(comment);
              post.save(function(err){
                if(err){
                  res.json({errors: 'Failed to save comment to DB'});
                }else{
                  res.json(comment);
                }
              })
            }
          })
        }
      })
    };

    //This index method finds all the topics for the dashboard pg
    this.index = function(req, res) {
        Topic.find({}, function(err, data) {
            res.json(data);
        });
    };

    //this method finds ALL messages related to a single topic
    this.topic = function(req, res) {
        Topic.findOne({_id: req.params.id})
        .populate({path: 'posts', populate: {path: 'comments'}})
        .exec(function(err, topic) {
          if(err){
            res.json({errors: ['Cannot get messages of this topic...']});
          }else{
            res.json(topic);
          }
        });
    };

    this.vote = function(req,res){
      var postId = req.params.postId;
      console.log('----', req.session.user);
      Post.findOne({_id: postId}, function(err, post){
        if(err){
          res.json({errors: ['Cannot find post to vote...']});
        }else{
          User.findOne({_id: req.session.user._id}, function(err,user){
            console.log('!!!', user);
            console.log('jsadkfl', !(user.votes.hasOwnProperty(postId)));
            if(!(user.votes.hasOwnProperty(postId))){
              user.votes[postId] = req.body.userVote;
              console.log('!!!', user)
              user.markModified('votes');
              user.save(function (err){
                if(req.body.userVote===1){
                  post.upVote++;
                }else{
                  post.downVote++;
                }
                post.save(function(err){
                  res.json({ 'updatedPost': post, 'updatedUser': user });
                });
              });
            }else if(user.votes[postId] == req.body.userVote){
              res.json({errors: ['Already voted...']});
            }else{
              user.votes[postId] = -user.votes[postId];
              user.markModified('votes');
              user.save(function(err){
                if(err){
                  res.json({errors: ['cannot save vote...']});
                }else{
                  if(req.body.userVote===1){
                    post.upVote++;
                    post.downVote--;
                  }else{
                    post.downVote++;
                    post.upVote--;
                  }
                  post.save(function(err){
                    res.json({ 'updatedPost': post, 'updatedUser': user })
                  });
                }
              })
            }
          })
        }
      })
    }
}

module.exports = new MessagesController();
