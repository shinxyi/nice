var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var flash = require('connect-flash');
var session = require('express-session');
var app = express();



app.use(session({secret: 'secret squirrel'}));
app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render('index');
});

app.get('/result', function(req, res){
  var user = req.flash('info')[0];
  console.log(user);
  res.render('result', { user: user });
});

app.post('/result', function(req, res){
  // console.log(req.body)
  req.flash('info', req.body);

  res.redirect('/result');
});

app.listen(5000, function(){
  console.log("Server is listening on port 5000");
});
