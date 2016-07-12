
var mongoose = require("mongoose");
var User = mongoose.model("users");
var Algorithm = mongoose.model('algorithms');

module.exports = {
	addAlgorithm: function(req,res){
		console.log(req.body)
		var newAlgorithm = new Algorithm(req.body);
		newAlgorithm.save(function(err){
			if(err){
				res.json(err)
			}
		})
	}
}