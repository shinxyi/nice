
var fs = require('fs')
var http = require('http')

var server = http.createServer(function(request,response){
    console.log('client request URL: ', request.url);
    htmlReadfile = function(errors,contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    }
    switch (request.url) {
        case '/':
            fs.readFile('index.html', 'utf8', htmlReadfile)
            break;
        default:
            response.writeHead(404);
            response.end('File not found!!!');
    }
})
//test
server.listen(6789)
console.log("Running in localhost at port 6789");
