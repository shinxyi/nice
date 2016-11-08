'use strict'
var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var querystring = require('querystring');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var chatLog= [];


app.get('/', function(request, response) {
  response.render('index', {messages: chatLog});
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

var io = require("socket.io").listen(server);

var users ={};

io.sockets.on("connection", function (socket) {

  socket.on("add_user", function (username){
      users[socket['id']]=username;
      socket.broadcast.emit("added_user", username);
    })

  socket.on("add_message", function(chat){
    chatLog.push(chat);
    io.emit("added_message", chat);
  })

  socket.on("disconnect", function() {
    var name = users[socket['id']];
    socket.broadcast.emit("logged_out", name);

  });

  })
