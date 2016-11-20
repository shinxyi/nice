"use strict";
var mongoose = require('mongoose');

var postsSchema = new mongoose.Schema({
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
 upVote: {
           type: Number,
           default: 0,
           min: 0
         },
 downVote: {
           type: Number,
           default: 0,
           min: 0
         },
 _topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
 comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
},{ timestamps: true});

mongoose.model('Post', postsSchema);
