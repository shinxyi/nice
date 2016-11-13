var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

console.log('friends controller');

function FriendsController(){

  this.index = function(req,res){
    Friend.find({}, function(err, friends){
      if(err){
        console.log('cannot index friends');
      }else{
        res.json(friends);
      }
    })
  };

  this.create = function(req,res){
    var friend = new Friend({name: req.body.name, age: req.body.age});
    friend.save(function(err){
      if(err){
        console.log('friend cannot be created/saved');
      }else{
        res.redirect('/friends');
      }
    })
  };

  this.update = function(req,res){
    Friend.findOne({ _id: req.params.id}, function(err, friend){
      friend.name = req.body.name;
      friend.age = req.body.age;
      friend.save(function(err){
        if(err){
          console.log('cannot find friend to update');
        }else{
          res.redirect('/friends/' + req.params.id );
        }
      })
    })
  };

  this.delete = function(req,res){
    console.log(req.params.id);
    Friend.remove({_id:req.params.id}, function(err){
      if(err){
        console.log('cannot delete friend');
      }else{
        console.log('deleted 1 friend');
      }
    })
  };

  this.show = function(req,res){
    console.log('made it to friends Controller in server!')
    Friend.findOne({_id: req.params.id}, function(err,friend){
      if(err){
        console.log('cannot find this friend');
      }else{
        res.json(friend);
      }
    })
  };
}

module.exports = new FriendsController();
