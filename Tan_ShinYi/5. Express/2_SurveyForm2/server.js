'use strict'
var express = require("express");
var app = express();
var querystring = require('querystring');

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
  response.render('index');
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {

  socket.on("posting_form", function (data){
      var result = querystring.parse(data);
      socket.emit('updated_message', result);
      var num = Math.floor((Math.random()*1000))+1;
      socket.emit('random_number', num)

    });

  })
