var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
 name: String
})
var Person = mongoose.model('Person', personSchema); // We are setting this Schema in our Models as 'User'
