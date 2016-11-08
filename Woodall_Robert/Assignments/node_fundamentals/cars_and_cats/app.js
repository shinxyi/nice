var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	console.log('Client request url:', request.url);
	
	if (request.url === '/cars') {
		fs.readFile('views/bikes.html', 'utf8', function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(content);
			response.end();
		});
	} else if (request.url === '/cats') {
		fs.readFile('views/cats.html', 'utf8', function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(content);
			response.end();
		});
	} else if (request.url === '/cars/new') {
		fs.readFile('views/new.html', 'utf8', function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(content);
			response.end();
		});
	} else if (request.url === '/images/mc1.jpeg' || 
			   request.url === '/images/mc2.jpeg' ||
			   request.url === '/images/mc3.jpeg' || 
			   request.url === '/images/mc4.jpeg' || 
			   request.url === '/images/cat1.jpeg' || 
			   request.url === '/images/cat2.jpeg' || 
			   request.url === '/images/cat3.jpeg' || 
			   request.url === '/images/cat4.jpeg') {
		var image = request.url.substr(8);
		console.log(image);
		
		fs.readFile('images/' + image, function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'image/jpeg' });
			response.write(content);
			response.end();
		});
	} else if (request.url === '/stylesheets/styles.css') {
		fs.readFile('stylesheets/styles.css', 'utf8', function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/css' });
			response.write(content);
			response.end();
		});
	} else {
		response.writeHead(404);
		response.end('Request resource is not available...');
	}
});

server.listen(6789);
console.log('waiting for client requests...');