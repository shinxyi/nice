var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})



var server = app.listen(5000);
var count = 0;
var io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
  io.emit('server_response', count);
  socket.on('button_clicked', function () {
    //  FULL BROADCAST:
    count += 1;
    io.emit("server_response", count);
  })
  socket.on('reset', function(){
    count = 0;
    io.emit('server_response',count)
  })

})
