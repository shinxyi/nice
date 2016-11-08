'use strict';

var http = require('http');
var staticlib = require('./staticlib');

var server = http.createServer(function(request, response) {
	staticlib.handleRequest(request, response);
});

server.listen(8000);
console.log('listening for requests on port 8000...');