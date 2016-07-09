
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var UserSchema = new mongoose.Schema({
	first_name : {type: String, require: true},
	last_name : {type: String, require: true},
	username : {type: String, require: true},
	email : {type: String, require: true},
	password : {type: String, require: true},
	role : {type: Number, default: 0}

}, {timestamps: true});


// BCRYPT - hashing the password
UserSchema.pre('save', function(next){
	var user = this;
	if(!user.isModified('password')){
		return next();
	} 

	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(user.password, salt, function(err, hash){
			user.password = hash;
			next();
		})
	})
})



mongoose.model("users", UserSchema)