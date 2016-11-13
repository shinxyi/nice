console.log('friends model');
var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema({
 fname: String,
 lname: String,
 birthday: Date
},{ timestamps: true});
var Friend = mongoose.model('Friend', friendSchema); // We are setting this Schema in our Models as 'User'
