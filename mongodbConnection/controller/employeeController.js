var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const cors = require('cors')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());
const employeeModel = require('../models/employee');

const sendResponse = require('../common/setStatus').common;
const commonQuery = require('../common/query');
const employeeCollection = require('../collectionData/employees').employeeCollection

router.post('/add', async (req, res) => {
  try {
    let result = await commonQuery.createQuery(
      employeeModel, employeeCollection.add(req, res))
    if (result) {
      console.log("welcome", result)
      sendResponse.setResponse(res, 200, true, "successfully added", result)
    }
  } catch (err) {
    sendResponse.setResponse(res, 401, true, "Unable to add data", err)
  }
})

module.exports = router;