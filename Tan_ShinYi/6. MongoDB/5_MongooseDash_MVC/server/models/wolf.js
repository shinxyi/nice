var mongoose = require('mongoose');

var wolfSchema = new mongoose.Schema({
 name: String,
 color: String,
 age: Number
})
var Wolf = mongoose.model('Wolf', wolfSchema); // We are setting this Schema in our Models as 'User'
