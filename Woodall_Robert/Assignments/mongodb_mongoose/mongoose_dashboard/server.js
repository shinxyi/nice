'use strict';

var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dog_dashboard');

var DogSchema = new mongoose.Schema({
	name: String,
	age: Number,
	height: Number		
});

mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog')

app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('/views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	/* find all Dogs in db */
	Dog.find({}, function(errors, dogs) {
		if (errors) {
			console.log('/: errors finding all users in db...');

			for (var index in errors) {
				console.log('-', errors[index]);
			}

			response.redirect('/');
		} else {
			response.render('index', {dogs: dogs});
		}
	});
});

app.get('/dogs/view/:id', function(request, response) {
	Dog.findOne({_id: request.params.id}, function(errors, dog) {
		if(errors) {
			console.log('/dogs/view/id: errors occured during find of document...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			}
		} else {
			response.render('view', { dog: dog });	
		}
	});
});

app.get('/dogs/edit/:id', function(request, response) {
	Dog.findOne({_id: request.params.id}, function(errors, dog) {
		if(errors) {
			console.log('/dogs/edit/id: errors occured during find of document...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			}
		} else {
			response.render('edit', { dog: dog });	
		}
	});
});

app.get('/dogs/remove/:id', function(request, response) {
	Dog.remove({_id: request.params.id}, function(errors) {
		if (errors) {
			console.log('/dogs/remove/id: errors occured during removal of document...');

				for (var index in errors) {
					console.log('-', errors[index]);
				}
		} else {
			response.redirect('/');
		}
	});
});

app.post('/dogs/add', function(request, response) {
	if (!request.body.name || !request.body.age || !request.body.height) {
		console.log('/dogs/add: missing necessary fields from post data');
		response.redirect('/');
		return;
	}
	
	var dog = new Dog({name: request.body.name, age: request.body.age, height: request.body.height});
	dog.save(function(errors, dog) {
		if(errors) {
			console.log('/dogs/add: errors occured during save of document...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			}
		} else {
			response.redirect('/');	
		}
	});	
});

app.post('/dogs/update/:id', function(request, response) {
	if (!request.body.name || !request.body.age || !request.body.height) {
		console.log('/dogs/add: missing necessary fields from post data');
		response.redirect('/');
		return;
	}
	
	Dog.update({_id: request.params.id}, {$set: {name: request.body.name, age: request.body.age, height: request.body.height}}, function(errors) {
		if(errors) {
			console.log('/dogs/update/id: errors occured during update of document...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			}
		} else {
			response.redirect('/');	
		}
	});
});

app.listen(8000, function() {
	console.log('listening on port 8000...');
});