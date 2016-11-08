var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/mongooseDashboard');
mongoose.Promise = global.Promise;
var AnimalSchema = new mongoose.Schema({
	name: String,
	
},{timestamps: true});
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	Animal.find({}, function(err, animals){
		if(err){
			console.log("something went wrong retieving the data error# 1234");
		}
		res.render('index.ejs', {animals: animals});
	});
});

app.get('/animals/remove/:id', function(req, res){
	Animal.remove({_id: req.params.id},function(err){
		if(err){
			console.log('Document could not be removed');
		}
		console.log('Item succesfully removed');
		res.redirect('/');
	});

});

app.get('/animals/edit/:id', function(req,res){
	Animal.find({_id:req.params.id}, function(err, animals){
		if(err){
			console.log('Something went wrong while getting the info to edit the item');
			
		}
		res.render('edit.ejs', {animals:animals});
	});
});
//routes goes here
app.post('/animals', function(req, res){
	
	//place to add to the database
	var animal = new Animal({name: req.body.name});
	animal.save(function(err){
		if(err){
			console.log('Something went wrong');
		} else{console.log('animal successfully added');}
		res.redirect('/');
	});
	
});
app.post('/animals/:id', function(req, res){
	Animal.update({_id: req.params.id}, {name: req.body.name}, function(err){
		if(err){
			console.log("Error while updating name");
		}
		res.redirect('/');
	});
});

app.listen(5000, function(){
	console.log('listening on port 5000');
});
