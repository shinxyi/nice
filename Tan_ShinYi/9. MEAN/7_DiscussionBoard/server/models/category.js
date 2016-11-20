"use strict";
var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
 name: {
           type: String,
           required: [true, "Name is Required!"],
           trim: true
         }
},{ timestamps: true});

mongoose.model('Category', categoriesSchema);
