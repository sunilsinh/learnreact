/**
 * User model schema with validation
 */
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
	first_name : {
		type : String,
		required : [ true, " first_name is required" ]
	},
	last_name : {
		type : String,
		required : [ true, " last_name is required" ]
	},
	email : {
		type : String,
		required : [ true, "email is required" ]
	},
	password : {
		type : String,
		required : [ true, "password is required" ]
	}
});

mongoose.model("authusers",UserSchema);
module.exports = mongoose.model("authusers");
