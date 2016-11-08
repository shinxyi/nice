var http = require('http');


var static_contents= require('./static.js');
console.log(static_contents);
server =  http.createServer(function(request, respose){
	static_contents(request,respose);
});

server.listen(8000);
console.log('Running in localhost at port 8000');