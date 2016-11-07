// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Use native promises

var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/mongoose_dash');

var UserSchema = new mongoose.Schema({
 name: String,
 color: String,
 age: Number
})
mongoose.model('Wolf', UserSchema); // We are setting this Schema in our Models as 'User'
var Wolf = mongoose.model('Wolf') // We are retrieving this Schema from our Models, named 'User'



// Require body-parser (to receive post data from clients)
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

// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
  Wolf.find({}, function(err, wolves) {
    if(err){
      console.log('something went wrong1');
    }else{
      res.render('index', {wolves: wolves});
    }
  })
})

app.get('/mongooses/new', function(req, res) {
  res.render('new');
})

app.get('/mongooses/:id', function(req, res) {
  Wolf.find({ _id: req.params.id }, function(err, wolf) {
    if(err){
      console.log('something went wrong2');
    }else{
      res.render('mongooses', {wolf: wolf[0]});
    }
  })
})


app.post('/mongooses', function(req, res) {
  var wolf = new Wolf({name: req.body.name, color: req.body.color, age: req.body.age});
  wolf.save(function(err){
    if(err) {
      console.log('something went wrong3');
    }else{
      res.redirect('/');
    }
  })
})

app.get('/mongooses/:id/edit', function(req, res) {
  Wolf.find({ _id: req.params.id }, function(err, wolf) {
    if(err){
      console.log('something went wrong2');
    }else{
      console.log(wolf);
      res.render('edit', {wolf: wolf[0]});
    }
  })
})


app.post('/mongooses/:id', function(req,res){
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
})

app.post('/mongooses/:id/destroy', function(req,res){
  Wolf.remove({ _id: req.params.id }, function(err) {
      if(err) {
        console.log('something went wrong5');
      }else{
        res.redirect('/');
      }
    })
  })


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
