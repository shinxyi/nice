//Standard express setup
var mongoose = require( 'mongoose' ),
    express=require('express'),
    app = express(),
    path = require('path'),
    session = require('express-session'),
    appRoot = require('app-root-path'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'password',
  resave: true,
  saveUninitialzed: true
}));

app.use(express.static(appRoot + '/client'));
app.use(express.static(appRoot + '/bower_components'));

require(appRoot + '/server/config/mongoose.js');
require(appRoot + '/server/config/routes.js')(app);

mongoose.Promise=global.Promise;

var port = 8000;
app.listen(port, function() {
  console.log('Server on port: ' + 8000);
});
