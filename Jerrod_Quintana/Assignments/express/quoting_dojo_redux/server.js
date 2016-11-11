var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    server = app.listen(5000);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 4},
 quote: {type: String, required: true, minlength: 10},
 likes: Number
}, {timestamps: true})
var Quote = mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
 res.render("index");
})

app.post('/quotes', function(req, res){
  req.body.likes = 0;
  var quote = new Quote(req.body);
  quote.save(function(err){
    if(err){
      res.render('errors', {err: err})
    } else {
      res.redirect('/quotes')
    }}
  )
})
app.get('/quotes', function(req, res){
  Quote.find({}).sort({likes: -1}).exec(function(err, results){
    if(err){console.log(err)}
    res.render('quotes', {quotes: results})
  })
})

app.get('/quotes/like/:id', function(req, res){
  Quote.find({_id: req.params.id}, function(err, result){
    var like = result[0].likes;
    like += 1;
    Quote.update({_id: req.params.id}, {$set: {likes: like}}, function(err){
      if(err){
        res.render('errors', {err: err})
      }
      res.redirect('/quotes')
    })
  })
})

// How to pull the users or all the documents from the User collection to pass to the view

// app.get('/', function(req, res) {
//   User.find({}, function(err, results){
//     if (err){
//       console.log(err)
//     }
//     res.render("index", {users: results});
//   });
// })
          // The above function is asynchronous, where it's almost like a time delay, and the data is only accessible within this function, so i have to return or render the page within the function.


// example of database entry

// app.post('/users', function(req, res){
//   var user = new User({name: req.body.name, age: req.body.age});
//   user.save(function(err){
//     if(err){
//       console.log('something went wrong')
//     } else {
//       console.log('successfully added a user!')
//     }
//   })
//   res.redirect('/');
