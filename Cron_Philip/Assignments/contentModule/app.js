"user strict";

var http = require('http');

var staticContents = require('./static.js');

server = http.createServer(function (request, response){
    staticContents.handleRequests(request, response);
});
server.listen(8000);
console.log("Running in localhost at port 8000");