console.log('friends model');
var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema({
 name: String,
 age: Number
})
var Friend = mongoose.model('Friend', friendSchema); // We are setting this Schema in our Models as 'User'
