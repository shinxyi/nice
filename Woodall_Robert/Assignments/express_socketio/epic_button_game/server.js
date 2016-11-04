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
var clickCount = 0;

io.sockets.on('connection', function(socket) {
	/* socket event handlers here */
	socket.on('epic_click', function(data) {
		clickCount++;	
		io.emit('server_update', clickCount);
	});
	
	socket.on('reset', function(data) {
		clickCount = 0;
		io.emit('server_update', clickCount);
	})
});