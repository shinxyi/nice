// Require the Express Module
var express = require('express');
var path = require('path');
// Create an Express App
var app = express();
// Use native promises

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes


require('./server/config/mongoose.js')

// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
var routes_setter = require('./server/config/routes2.js');
routes_setter(app)


// Setting our Server to Listen on Port: 8000
app.listen(5000, function() {
    console.log("listening on port 5000");
})
