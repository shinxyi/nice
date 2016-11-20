console.log('product model');
var mongoose = require('mongoose');
var urlRegex = require('url-regex');


var productSchema = new mongoose.Schema({
  name: {
           type: String,
           required: [true, "Product name is Required!"],
           trim: true
         },
  img: {
           type: String,
           trim: true,
           validate: {
             validator: function( value ) {
               return urlRegex().test( value );
             },
             message: "image must be in url format"
           }
         },
  description: {
           type: String,
           trim: true,
           required: [true, "Description is Required!"]
         },
  quantity: {
           type: Number,
           min: [0, "Cannot have negative quantity value."],
           required: [true, "Product must have quantity"]
  }
},{ timestamps: true});


var Product = mongoose.model('Product', productSchema);
