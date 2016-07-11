console.log("IN ROUTE.JS")

var users = require("../controllers/users.js");


module.exports = function(app){

	app.post('/login', function(req, res){
		users.login(req,res)
	})

	app.post("/register", function(req, res){
		// console.log("IN ROUTE JS REGISTERING" , req.body)
		users.register(req,res)
	})

	// app.get("/getUsers", function(req, res){
	// 	users.getUsers(req,res)
	// })
	
}