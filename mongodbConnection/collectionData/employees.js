const employeesCollection = function () { }
employeesCollection.prototype.add = (req, res) => {

  var test = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_id: req.body.email_id,
    password: req.body.password
  }
  return test;


}
const employeeObject = Object.create(employeesCollection.prototype);
module.exports.employeeCollection = employeeObject;