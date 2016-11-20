"use strict";
var mongoose = require('mongoose');

var topicsSchema = new mongoose.Schema({
 topic: {
           type: String,
           required: [true, "Topic is Required!"],
           trim: true
         },

 description: {
           type: String,
           required: [true, "Description is Required!"],
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
 category: {
           type: String,
           required: [true, "Category is Required!"],
           trim: true
         },
 posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
},{ timestamps: true});

mongoose.model('Topic', topicsSchema);
