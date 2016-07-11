
var mongoose = require("mongoose");
var User = mongoose.model("users");
var bcrypt = require("bcrypt");

module.exports = (function(){
	return{

		login: function(req, res){
			console.log("LOGGING IN INFO IN CONTROLLER", req.body)
			User.find({username: req.body.username}, function(err, user){
				console.log("FOUND USER", user)
				if(user[0] === undefined || user[0].length == 0 || user[0].username === undefined){
					res.json({"alert" : "Username not in our system"})
				}
				else{
					bcrypt.compare(req.body.password, user[0].password, function(err, isMatch){
						if(isMatch == false){
							res.json({"alert": "Incorrect password"})
						}
						else{
							res.json(user)
						}
					})
				}
				
			})
		},

		register: function(req, res){
			console.log("IN USERS CONTROLLER registering",req.body)

			// User.findOne({username: req.body.username}, function(err, user1){
			// 	if(err){
			// 		console.log(err)
			// 	}
			// 	else{
			// 		if(user1){
			// 			res.json({"alert": "Username already in the system"})
			// 		}
			// 	}
			// })
			User.findOne({email: req.body.email}, function(err, user2){
				if(err){
					console.log(err)
				}
				else{
					if(user2){
						res.json({"alert": "Email already in the system"})
					}
					else{
					// IF there are no users, the first user will automatically be Admin 
					User.find({}, function(err,users){
						if(err){
							console.log(err)
						}
						else{
							console.log("FINDING USERS ", users)
							if(users.length > 0){
								new_user = new User({
									first_name : req.body.first_name,
									last_name : req.body.last_name,
									username : req.body.username,
									email: req.body.email,
									password : req.body.password,
									role: 0
								})
								console.log("SAVING THIS NEW USER IN WHERE THERE IS EXISTING USER ", new_user)
								new_user.save(function(err, user){
									if(err){
										console.log(err)
									}
									else{
										res.json(user)
									}
								})
							}
							else{
								new_user = new User({
									first_name : req.body.first_name,
									last_name : req.body.last_name,
									username : req.body.username,
									email: req.body.email,
									password : req.body.password,
									role: 1
								})
								console.log("SAVING THIS NEW USER IN WHERE THERE ARE NO EXISTING USER ", new_user)
								new_user.save(function(err, user){
									if(err){
										console.log(err)
									}
									else{
										res.json(user)
									}
								})	
							}	
						}
					})


					}
				}
			})

		},



	}
})();