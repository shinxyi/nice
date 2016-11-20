console.log('customer model');
var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
 name: {
           type: String,
           required: [true, "Name is Required!"],
           unique: [true],
           trim: true
         }
},{ timestamps: true});

var Customer = mongoose.model('Customer', customerSchema);
