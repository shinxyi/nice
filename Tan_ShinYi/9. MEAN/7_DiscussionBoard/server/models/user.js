"use strict";
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var usersSchema = new mongoose.Schema({
 username: {
           type: String,
           required: [true, "Username is Required!"],
           unique: [true, "Username is already in use!"],
           trim: true
         },
  email: {
         type: String,
         required: [true, "Email is Required!"],
         unique: [true, "Email is already in use!"],
         validate: {
           validator: function( value ) {
             return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
           },
           message: "Email is not in the proper format: example@example.com"
         }
       },

  password: {
         type: String,
         required: [true, "Password is Required!"],
         minlength: [8, "Your password must be at least 8 characters long"],
        //  maxlength: [32, "Your password may not be more than 32 characters"],
         validate: {
           validator: function( value ) {
             return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
           },
           message: "Password failed validation, you must have at least 1 number, uppercase and special character"
         }
       },
  votes: {
         type: Object,
         default: {}
       },
},{ timestamps: true, minimize: false});

usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// usersSchema.pre('save', function(done) {
//     this.password = this.generateHash(this.password);
//     done();
// });

mongoose.model('User', usersSchema);
