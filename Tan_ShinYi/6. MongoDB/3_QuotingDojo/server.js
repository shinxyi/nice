// Require the Express Module
var express = require('express');
// Create an Express App
var session = require('express-session');

var app = express();
// Use native promises

app.use(session({
  secret: 'password',
  resave: true,
  saveUninitialized: true
}))

var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
  name:  { type: String, required: true},
  quote: { type: String, required: true}
}, { timestamps: { createdAt: 'created_at' }})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

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


app.get('/', function(req, res) {
  console.log(req.session.errors);
  res.render('new', {sess: req.session});
})


app.get('/quotes', function(req, res) {
  Quote.find({}).sort({created_at: -1}).exec(function(err, quotes) {
    console.log(quotes);
    if(err){
      console.log('something went wrong1');
    }else{
      res.render('index', {quotes: quotes});
    }
  })
})


app.post('/quotes', function(req, res) {
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err){
    if(err) {
      console.log('something went wrong2');
      req.session.errors = "All fields required!";
      res.redirect('/')
    }else{
      res.redirect('/quotes');
    }
  })
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
