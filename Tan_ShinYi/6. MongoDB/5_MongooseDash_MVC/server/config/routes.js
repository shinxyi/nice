var wolves = require('../controllers/wolves.js');
module.exports = function(app){
  app.get('/', function(req, res) {
    wolves.show(req, res);
  })

  app.get('/mongooses/new', function(req, res) {
    res.render('new');
  })

  app.get('/mongooses/:id', function(req, res) {
    wolves.get_one(req,res);
  })


  app.post('/mongooses', function(req, res) {
    wolves.new(req,res);
  })

  app.get('/mongooses/:id/edit', function(req, res) {
    wolves.edit(req,res);
  })


  app.post('/mongooses/:id', function(req,res){
    wolves.process_edit(req,res);
  })

  app.post('/mongooses/:id/destroy', function(req,res){
      wolves.destory(req,res);
  })

}
