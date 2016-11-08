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
var users = {};
var messages = [];

io.sockets.on('connection', function(socket) {
	console.log('new connection - socket id:', socket.id);
	
	/* socket event handlers here */
	socket.on('user_joined', function(data) {
		users[socket.id] = data;
		
		socket.emit('user_added', messages);
		socket.broadcast.emit('new_user_joined', users[socket.id]);
	});
	
	socket.on('new_message', function(data) {
		var message = {name: users[socket.id], message: data};
		messages.push(message);
		io.emit('new_message', message);
	});
	
	socket.on('disconnect', function() {
		socket.broadcast.emit('user_left', users[socket.id]);
		delete users[socket.id];
	});
});