'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index');
});

app.post('/submit_survey', function(request, response) {
	// store form data
	var result = {
		name: request.body.name,
		location: request.body.location,
		language: request.body.language,
		comment: request.body.comment
	};
	
	response.render('result', {result: result});
});

app.listen(8000, function() {
	console.log('listening on port 8000');
});