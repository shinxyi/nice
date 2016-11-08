var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url ==="/car1.jpeg"){
      fs.readFile('./images/car1.jpeg', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/car2.jpeg"){
      fs.readFile('./images/car2.jpeg', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/car3.jpeg"){
      fs.readFile('./images/car3.jpeg', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/stylesheets/style.css"){
      fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/cats"){
      fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/cat1.jpeg"){
      fs.readFile('./images/cat1.jpeg', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/cat2.jpeg"){
      fs.readFile('./images/cat2.jpeg', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/cat3.jpeg"){
      fs.readFile('./images/cat3.jpeg', function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
      })
    }

    else if (request.url === "/cars/new") {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else {
        response.end('URL request is not available.');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
