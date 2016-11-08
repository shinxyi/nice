var fs = require('fs');
module.exports = function (request, response){
    
    console.log('client request URL: ', request.url);
    
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
	else if (request.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
					});
	}
	else if (request.url === '/cars/new'){
		fs.readFile('views/new.html', 'utf8', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
					});
	}
	else if (request.url === '/stylesheets/style.css'){
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
					});
	}
	else if (request.url === '/images/lambor.jpeg'){
		fs.readFile('images/lambor.jpeg', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
					});
	}
	else if (request.url === '/images/cats.jpeg'){
		fs.readFile('images/cats.jpeg', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
					});
	}
	
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
};

