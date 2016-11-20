"use strict";
var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
 text: {
           type: String,
           required: [true, "Post text is Required!"],
           trim: true
         },
 username: {
           type: String,
           required: [true, "Username is Required!"],
           trim: true
         },
 userId: {
           type: String,
           required: [true, "User_id is Required!"],
         },
 _post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
},{ timestamps: true});

mongoose.model('Comment', commentsSchema);
