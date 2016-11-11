var express = require('express');

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messageBoard');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({ 

    name: {type: String, required: true, minlength: 1},
    message: {type: String, required: true, minlength: 1},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({ 

    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true, minlength: 1},
    comment: {type: String, required: true, minlength: 1},
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    Message.find({}, false, true).populate('comments').exec(function(err, messages) {
        console.log(messages);
        if(err){
            console.log('Failed to load messages from database');
        } else {
            console.log('success');

            res.render('index', {messages: messages});
        }
    });
});

app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);

    var newMessage = new Message({name: req.body.name, message: req.body.message});

    newMessage.save(function(err) {

      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a message!');
        res.redirect('/');
      }
    });
});

app.post('/comment/:messageId', function(req, res) {

    var messageId = req.params.messageId

    Message.findOne({_id: messageId}, function(err, message) {
        console.log(message);
        var newComment = new Comment(req.body);

        newComment._message = message._id;
        message.comments.push(newComment);
        
        newComment.save(function(err){
           if(err) {
             console.log('something went wrong');
           } else {
             console.log('successfully added a comment!');

             message.save(function(err) {
                res.redirect('/');
            });
           }
        });
    });
});





app.listen(8000, function() {
    console.log("listening on port 8000");
});