var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');
module.exports = {
  show: function(req, res) {
    Wolf.find({}, function(err, wolves) {
      if(err){
        console.log('something went wrong1');
      }else{
        res.render('index', {wolves: wolves});
      }
    })
  },

  get_one: function(req, res) {
    Wolf.find({ _id: req.params.id }, function(err, wolf) {
      if(err){
        console.log('something went wrong2');
      }else{
        res.render('mongooses', {wolf: wolf[0]});
      }
    })
  },

  new: function(req, res) {
    var wolf = new Wolf({name: req.body.name, color: req.body.color, age: req.body.age});
    wolf.save(function(err){
      if(err) {
        console.log('something went wrong3');
      }else{
        res.redirect('/');
      }
    })
  },

  edit: function(req, res) {
    Wolf.find({ _id: req.params.id }, function(err, wolf) {
      if(err){
        console.log('something went wrong2');
      }else{
        console.log(wolf);
        res.render('edit', {wolf: wolf[0]});
      }
    })
  },
  process_edit: function(req,res){
    Wolf.findOne({ _id: req.params.id }, function(err, wolf) {
      wolf.name = req.body.name;
      wolf.color = req.body.color;
      wolf.age = req.body.age;
      wolf.save(function(err){
        if(err) {
          console.log('something went wrong4');
        }else{
          res.redirect('/mongooses/' + req.params.id);
        }
      })
    })
  },
  destory: function(req,res){
    Wolf.remove({ _id: req.params.id }, function(err) {
        if(err) {
          console.log('something went wrong5');
        }else{
          res.redirect('/');
        }
      })
    }
}
