var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/messageBoard');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name cannot be blank"], minlength:[4 , "Name must be at 3 character long"]},
	message: {type: String, required: [true, "Message cannot be blank"], minlength:[2,"Message minimum is 10 characters"]},
	comments:[{type: Schema.Types.ObjectId, ref:'Comments'}]
	
},{timestamps: true});

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name cannot be blank"], minlength:[4 , "Name must be at 3 character long"]},
	_message:[{type: Schema.Types.ObjectId, ref:"Messages"}],
	comment:{type: String, required: [true, "Message cannot be blank"], minlength:[2,"Message minimum is 10 characters"]},

},{timestamps: true}); //need tocontinue from here

mongoose.model('Messages', MessageSchema);
mongoose.model('Comments',CommentSchema);

var Messages = mongoose.model('Messages');
var Comments = mongoose.model('Comments');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	Messages.find({}).sort({createdAt: -1})
	.populate('comments')
	.exec(function(err, messages){
		//console.log(messages[0].comments)
		res.render('index.ejs', {messages: messages});
	});});

//routes goes here
app.post('/message', function(req, res){
	
	//place to add to the database
	var messages = new Messages({name: req.body.name, message: req.body.message});
	messages.save(function(err){
		if(err){
			console.log('Something went wrong');
			res.render('index',{title: "you have errors", errors:messages.errors});
		} else{console.log('messages successfully added');
		res.redirect('/');}
	});
	
});

app.post('/message/:id', function(req, res){
	Messages.findOne({_id: req.params.id}, function(err, message){
		var comment = new Comments(req.body);
		comment._message = message._id;

		comment.save(function(err){
			console.log(message.commennts)
			message.comments.push(comment);
			message.save(function(err){
				if(err){
					console.log('Error while adding a comment');
				}else{
					res.redirect('/');
				}
			});
		});
	});
});

app.listen(8000, function(){
	console.log('listening on port 8000');
});