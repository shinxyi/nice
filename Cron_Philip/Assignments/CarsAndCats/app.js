var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if (request.url === "/cars") {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('./views/carsNew.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/stylesheets/style.css") {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/green.jpeg") {
        fs.readFile('./images/green.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/red.jpeg") {
        fs.readFile('./images/red.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/black.jpeg") {
        fs.readFile('./images/black.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/cat1.jpeg") {
        fs.readFile('./images/cat1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/cat2.jpeg") {
        fs.readFile('./images/cat2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/cat3.jpeg") {
        fs.readFile('./images/cat3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(400);
        response.end('URL requested is not available');
    }
});

server.listen(7077);

console.log("Running in localhost at port 7077");