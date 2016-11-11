var express = require('express');

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoteDojo');

mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({ 

    name: String,
    quote: String
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    res.render('index');
});

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);

    var quote = new Quote({name: req.body.name, quote: req.body.quote});

    quote.save(function(err) {

      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a quote!');
        res.redirect('/quotes');
      }
    });
});

app.get('/quotes', function(req, res) {

    Quote.find({}, function(err, quotes) {

        if(err){
            console.log('Failed to load quotes from database');
        } else {
            console.log('success');
        }
        res.render('quote', {quotes: quotes});
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});