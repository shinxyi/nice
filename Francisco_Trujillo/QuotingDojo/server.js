var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/quotingDojo');
mongoose.Promise = global.Promise;
var QuoteSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name cannot be blank"], minlength:[3 , "Name must be at 3 character long"]},
	quote: {type: String, required: [true, "Quote cannot be blank"], minlength:[10,"Quote minimum is 10 characters"]}
	
},{timestamps: true});
mongoose.model('Quotes', QuoteSchema);
var Quotes = mongoose.model('Quotes')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
		res.render('index.ejs');
	});



app.get("/quotes", function(req,res){
	Quotes.find({}, function(err, quotes){
		if(err){
			console.log('Something went wrong while getting the info to edit the item');
			
		}
		res.render('quote.ejs', {quotes:quotes});
	});
});
//routes goes here
app.post('/quotes/add', function(req, res){
	
	//place to add to the database
	var quotes = new Quotes({name: req.body.name, quote: req.body.quote});
	quotes.save(function(err){
		if(err){
			console.log('Something went wrong');
			res.render('index',{title: "you have errors", errors:quotes.errors});
		} else{console.log('quote successfully added');
		res.redirect('/quotes');}
	});
	
});


app.listen(8000, function(){
	console.log('listening on port 8000');
});