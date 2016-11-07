// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//we're going to have /routes/index.js handle all of our routing
var route = require('./routes/index.js')(app);
// setting server to run on port 3000
app.listen(3000, function() {
 console.log("listening on port 3000!");
})

// // root route to render the index.ejs view
// app.get('/', function(req, res) {
//  res.render("index");
// })

// // post route
// app.post('/result', function(req, res) {
//  	submitted_info = {
// 		name: req.body.name,
// 		dojo_location: req.body.dojo_location,
// 		favorite_language: req.body.favorite_language,
// 		comment: req.body.comment
// 		};
// 	res.render("result",{user_data: submitted_info});
// 	})
// };

// // tell the express app to listen on port 8000
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// });