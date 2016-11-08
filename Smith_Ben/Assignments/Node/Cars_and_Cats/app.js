var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request URL: ', request.url);

	if(request.url === '/') {
		fs.readFile('./views/index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/dogs") {
		fs.readFile('./views/dogs.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === "/images/dog1.jpg" ||
	 		request.url === "/images/dog2.jpg" ||
	 		request.url === "/images/dog3.jpg" ||
	 		request.url === "/images/car1.jpg" ||
	 		request.url === "/images/car2.jpg" ||
	 		request.url === "/images/car3.jpg") {
		var image = request.url.substring(8)
		console.log(image);
		fs.readFile('./images/' + image, function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === "/cars") {
		fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === "/cars/new") {
		fs.readFile('./views/newcar.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === "/stylesheets/style.css") {
		fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}

	else {
        response.end('File not found!!!');
    }
});
server.listen(6789);

console.log("Running in localhost at port 6789");