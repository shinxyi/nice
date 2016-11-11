
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('quotes', QuoteSchema);


// Root Request
app.get('/', function(req, res) {
    res.render('welcome');
});

// Add Quote Request 
app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err){
    if(err) { console.log(err); }
    res.redirect('/quotes');
  });
});

app.get('/quotes', function(req, res) {
// Logic to grab all quotes and pass into the rendered view
  Quote.find({}, function(err, results){
    if(err) { console.log(err); }
    res.render('quotes', { quotes: results });
  });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})