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
    else if (request.url ==="/stylesheets/style.css"){
      fs.readFile('style.css', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url ==="/ninjas"){
      fs.readFile('ninjas.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
      })
    }
    else if (request.url === "/dojo/new") {
         fs.readFile('dojos.html', 'utf8', function (errors, contents){
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
