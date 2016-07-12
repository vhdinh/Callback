
var mongoose = require("mongoose");

var AlgorithmSchema = new mongoose.Schema({
	title : {type: String, require: true},
	description: {type: String, require: true},
	category : {type: String, require: true},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: "users"}

}, {timestamps: true});


mongoose.model("algorithms", AlgorithmSchema)