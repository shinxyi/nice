var fs = require('fs');

module.exports.handleRequest = function(request, response) {
	response.writeHead(200, {'Content-type': 'text/html'});
	console.log('client request:', request.url);
	
	if(request.url === '/') {
		fs.readFile('views/index.html', 'utf8', function(errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(content); 
			response.end();
		});
	} else if(request.url === '/dojo.html') {
		fs.readFile('views/dojo.html', 'utf8', function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(content);
			response.end();
		});
	} else if(request.url === '/stylesheets/styles.css') {
		fs.readFile('stylesheets/styles.css', 'utf8', function (errors, content) {
			response.writeHead(200, { 'Content-Type': 'text/css' });
			response.write(content);
			response.end();
		});
	} else {
		response.writeHead(404);
		response.end('Requested resource is not available...');
	}
};
