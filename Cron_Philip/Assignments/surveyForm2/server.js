var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log(socket.id);

  //all the socket code goes in here!

  socket.on("postingForm", function (data){
      console.log(data);
      var response = 'You emitted the following information to the server: ' + JSON.stringify(data);
      socket.emit('updatedMessage', response);
      response = 'Your lucky number emitted by the server is ' + Math.floor(Math.random() * (1000 - 1) + 1);
      socket.emit('randomNumber', response);
  });
});

