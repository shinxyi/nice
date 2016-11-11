// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var mongoose = require('mongoose');
// Require mongoose
mongoose.connect('mongodb://localhost/monDash');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.Promise = global.Promise;
// Use native promises
var OwlSchema = new mongoose.Schema({
 name: String,
 age: Number
});
mongoose.model('Owl', OwlSchema); // We are setting this Schema in our Models as 'Owl'
var Owl = mongoose.model('Owl'); // We are retrieving this Schema from our Models, named 'Owl'
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {

    Owl.find({}, function(err, owls){

        if(err){
            console.log('Failed to load owls from database');
        } else {
            console.log('success');
        }
        res.render('index', {owls: owls});
    });
});
app.get('/owls/:id', function(req, res) {

  Owl.findOne({_id: req.params.id}, function(err, owl) {

      if(err){
        console.log('Failed to load owls from database');
      } else {
        console.log('success');
      }
    res.render('profile', {owl: owl});

  });

});
// Add Owl Request 
app.post('/owls', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new Owl with the name and age corresponding to those from req.body
  var owl = new Owl({name: req.body.name, age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  owl.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a owl!');
      res.redirect('/');
    }
  });
});

app.get('/owls/:id/edit', function(req, res) {

  Owl.findOne({_id: req.params.id}, function(err, owl) {

      if(err){
        console.log('Failed to load owls from database');
      } else {
        console.log('success');
      }
    res.render('edit', {owl: owl});

  });

});

app.post('/owls/:id', function(req, res) {
  console.log("POST DATA", req.body);

  Owl.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err) {

      if(err){
        console.log('Failed to load owls from database');
      } else {
        console.log('success');

        res.redirect('/')
      }

  });

});

app.get('/owls/:id/destroy', function(req, res) {

  Owl.remove({_id: req.params.id}, function(err) {

    if(err){
      console.log('Failed to load owls from database');
    } else {
      console.log('success');

      res.redirect('/')
    }

  });
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});