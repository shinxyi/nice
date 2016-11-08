var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board');

/* set up schema */
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	message: {type: String, required: true, minlength: 1},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
var CommentSchema = new mongoose.Schema({
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
	name: {type: String, required: true, minlength: 1},
	comment: {type: String, required: true, minlength: 1},
}, { timestamps: true });

/* create models and assign to vars for use later */
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/static')));

app.set('/views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	Message.find({}).populate('comments').exec(function(errors, messages) {
		console.log('/: messages ->', messages);
		if (errors) {
			console.log('/: errors occured during retrieval of document(s)...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			} 
		} else {
			response.render('index', {messages: messages});
		}
	});
});

app.post('/message/add', function(request, response) {
	if (!request.body.name || !request.body.message) {
		console.log('/message/add: required data not present in request...message not added');
		response.redirect('/');
		return;
	}
	
	var message = new Message({name: request.body.name, message: request.body.message});
	message.save(function(errors) {
		if (errors) {
			console.log('/: errors occured during save of document(s)...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			} 
		} else {
			response.redirect('/');
		}
	});	
});

app.post('/comment/add/:mid', function(request, response) {
	Message.findOne({_id: request.params.mid}, function(errors, message) {
		if (errors) {
			console.log('/comment/add/mid: error occurred during retrieval of document(s)...');
			
			for (var index in errors) {
				console.log('-', errors[index]);
			} 
		} else {
			var comment = new Comment(request.body);
			
			comment._message = message._id;
			comment.save(function(errors) {
				if (errors) {
					console.log('/comment/add/mid: error occurred during save of comment...');

					for (var index in errors) {
						console.log('-', errors[index]);
					} 
				} else {
					message.comments.push(comment);
					message.save(function(errors) {
						if (errors) {
							console.log('/comment/add/mid: error occurred during save of message...');

							for (var index in errors) {
								console.log('-', errors[index]);
							} 
						} else {
							response.redirect('/');	
						}
					});					
				}
			});
		}		
	});
});

app.listen(8000, function() {
	console.log('server is listening on port 8000...');
});