var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
 res.render("index");
})
app.post('/result', function(req, res){
  var r = req.body
  // This is just for pratice and to remind me, but req.body is the same as request.form, so r is no equal to an immutable dictionary with all the form data

  // var info = {
  //   name: r.name,
  //   location: r.location,
  //   language: r.language,
  //   comment: r.comment
  // }

  // ********** I've commented out the above dictionary because it was pointless if i've already plugged all the requst.form data into r, but both work. I could also make each key equal to the req (or request).body.'name', such as location: req.body.location
  res.render('result', {user: r})
  // so i passed the key 'info' equal to r, or the immutable dictionary after I hit /process
})






app.listen(5000);
