const express = require('express');
const app = express();
const port = 3000
var db = require('./db');
var employeesController = require('./controller/employeeController');
app.use('/worldapi', employeesController);
app.listen(port, () => {
  console.log(` Server is running with ${port}`)
})