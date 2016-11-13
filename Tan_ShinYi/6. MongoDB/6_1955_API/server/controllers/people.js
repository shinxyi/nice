var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
  show: function(req, res) {
    Person.find({}, function(err, people) {
      if(err){
        console.log('something went wrong1');
      }else{
        res.json(people);
      }
    })
  },

  new: function(req, res) {
    var person = new Person({name: req.params.name});
    person.save(function(err){
      if(err) {
        console.log('something went wrong2');
      }else{
        res.redirect('/');
      }
    })
  },

  get_one: function(req,res){
    Person.findOne({ name: req.params.name }, function(err, person) {
        if(err) {
          console.log('something went wrong3');
        }else{
          res.json({person: person});
        }
      })
  },
  remove: function(req,res){
    Person.remove({ name: req.params.name }, function(err) {
        if(err) {
          console.log('something went wrong4');
        }else{
          res.redirect('/');
        }
      })
    }
}
