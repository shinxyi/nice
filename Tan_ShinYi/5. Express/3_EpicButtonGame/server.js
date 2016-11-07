'use strict'
var express = require("express");
var app = express();
var querystring = require('querystring');
var counter = 0;

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
  response.render('index', {counter: counter} );
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);



io.sockets.on('connection', function (socket) {

  socket.on("button_clicked", function (){
      counter++;
      io.emit('updated_counter', {count: counter });
      //note to self: io.emit ensures FULL BROADCAST
      //aka, all users will see the update in real time
    });
  socket.on("reset_clicked", function (){
      counter = 0;
      io.emit('updated_counter', {count: counter });
    });

  })
