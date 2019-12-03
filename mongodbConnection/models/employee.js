/**
 * User model schema with validation
 */
var mongoose = require("mongoose");
var EmployeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, " first_name is required"]
  },
  last_name: {
    type: String,
    required: [true, " last_name is required"]
  },
  email_id: {
    type: String,
    required: [true, "email_id is required"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  }
});

mongoose.model("employees", EmployeeSchema);
module.exports = mongoose.model("employees");
