'use strict';

var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index');
});

var server = app.listen(8000, function() {
	console.log('listening on port 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	console.log('socket', socket.id, 'connection in use');
	
	/* build socket event handlers here... */
	socket.on('posting_form', function(data) {
		var response = {};
		response.message = 'You emitted the following information to the server:';
		response.value = JSON.stringify(data);
		socket.emit('updated_message', response);
		
		response.message = 'Your lucky number emitted by the server:';
		response.value = Math.floor(Math.random() * (1000 - 1) + 1);
		socket.emit('random_number', response);
	});
});