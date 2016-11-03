var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	console.log('client request URL:', request.url);
	
	if (request.url === '/') {
		fs.readFile('index.html', 'utf8', function (errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/ninjas') {
		fs.readFile('ninjas.html', 'utf8', function (errors, content) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(content);
			response.end();
		});
	} else if (request.url === '/dojos/new') {
		fs.readFile('dojos.html', 'utf8', function (errors, content) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(content);
			response.end();
		});
	} else {
		response.writeHead(404);
		response.end('Requested URL is not available...');
	}
});

server.listen(6789);
console.log('waiting to serve requests...');