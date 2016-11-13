var people = require('../controllers/people.js');
module.exports = function(app){
  app.get('/', function(req, res) {
    people.show(req, res);
  })

  app.get('/new/:name', function(req, res) {
    people.new(req,res);
  })


  app.get('/:name', function(req,res){
    people.get_one(req,res);
  })

  app.get('/remove/:name', function(req, res) {
    people.remove(req,res);
  })
}
