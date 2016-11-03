
var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
   
    console.log('client request URL: ', request.url);
    
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
	else if (request.url === '/ninjas'){
		fs.readFile('ninjas.html', 'utf8', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
					});
	}
	else if (request.url === '/dojos/new'){
		fs.readFile('dojos.html', 'utf8', function(errors, contents){
			console.log(errors);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
					});
	}
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");