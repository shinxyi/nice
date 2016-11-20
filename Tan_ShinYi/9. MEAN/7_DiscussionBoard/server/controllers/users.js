"use strict";

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Comment = mongoose.model('Comment'),
    Post = mongoose.model('Post'),
    Topic = mongoose.model('Topic');

console.log('users controller');

function UsersController() {
    this.getOne = function(req, res) {
      User.findOne({_id: req.params.id}, function(err, data) {
        var info = { username: data.username };

        Comment.find({userId: req.params.id},function(err, userComments){
          info.comments = userComments.length;
          Post.find({userId: req.params.id},function(err, userPosts){
            info.posts = userPosts.length;
            Topic.find({userId: req.params.id},function(err, userTopics){
              info.topics = userTopics.length;
              console.log("????", info);
              res.json(info);

            })

          })

        })
      });
    };

    this.create = function(req,res){
        console.log('user is being created!!!', req.body);
        var user = new User(req.body);
        user.password = user.generateHash(req.body.password);
        user.save(function(err, user){
          if(err){
            var errors = [];

            for(var key in err.errors){
              errors.push(err.errors[key].message);
              console.log(err.errors[key].message);
            }

            if(err.errmsg){
              //below indicates duplication of email without
              //hinting to the user what has really happened.
              errors.push("Something went wrong...");
              console.log(err.errmsg);
            }
            res.json({errors: errors});
          }else{
            req.session.user = user;
            res.json(user);
          }
        })
      };

      this.login = function(req,res){
        console.log('TRYING TO LOG IN', req.body);

        User.findOne({email: req.body.email }, function(err, user){
          var errors = [];
          if(err || !user){
            errors.push('Please check your email/password combination.');
            res.json({errors: errors});
          }else{
            console.log('!!!!');
            if(user.validPassword(req.body.password)){
              req.session.user = user;
              console.log('!!!!', req.session.user);
              res.json(user);
            }else{
              console.log('???');
              errors.push('Please check your email/password combination.');
              res.json({errors: errors});
            }
          }
        })
      };

      this.logout = function(req,res){
        req.session.user = undefined;
        console.log('logged out');
      }
}

module.exports = new UsersController();
