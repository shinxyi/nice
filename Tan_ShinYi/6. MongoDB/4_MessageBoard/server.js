// Require the Express Module
var express = require('express');
// Create an Express App
var session = require('express-session');

var app = express();
// Use native promises

app.use(session({
  secret: 'password',
  resave: true,
  saveUninitialized: true
}))

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

//CREATING A NEW --POST MODEL--
var postSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 4},
 text: { type: String, required: true },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: { createdAt: 'created_at' }});
mongoose.model('Post', postSchema);
var Post = mongoose.model('Post')


//CREATING A NEW --COMMENT MODEL--
var commentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 name: {type: String, required: true, minlength: 4},
 text: { type: String, required: true },
}, { timestamps: { createdAt: 'created_at' }});
mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment')


// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes


app.get('/', function (req, res){
 Post.find({})
 .populate('comments')
 .sort({created_at: -1})
 .exec(function(err, posts) {
      console.log(posts);
      res.render('index', {posts: posts, sess: req.session});
        });
});

app.post('/post', function (req,res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      req.session.errors = [];

      if(req.body.name.length<4){
        req.session.errors.push('Name must be at least 4 characters long.');
      }
      if(req.body.text.length<1){
        req.session.errors.push('Message field cannot be empty.');
      }
      res.redirect('/');
    }else{
      res.redirect('/');
    }
  })
})

 app.post('/comment/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;
        comment.save(function(err){
                post.comments.push(comment);
                post.save(function(err){
                     if(err) {
                           req.session.errors = [];

                           if(req.body.name.length<4){
                             req.session.errors.push('Name must be at least 4 characters long.');
                           }
                           if(req.body.text.length<1){
                             req.session.errors.push('Comment field cannot be empty.');
                           }
                           console.log('Error');

                           res.redirect('/');
                     } else {
                          res.redirect('/');
                     }
                 });
         });
    });
 });

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
