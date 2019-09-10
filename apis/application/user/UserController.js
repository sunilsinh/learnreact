var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var bcrypt = require("bcryptjs");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());
var User = require('./User');
var jwt = require("jsonwebtoken");
var sendResponse = require('../commonComponent/./common').common;
// for supersecret
var config = require("../config");
/**	
 * Add new user data
 */
router.post("/registration", (req, res) => {
	userAvailability(req, res)
		.then((userData) => {
			console.log(userData);
			if (userData == null) {
				var hashedPassword = bcrypt.hashSync(req.body.password, 8);
				console.log(req.body);
				console.log(hashedPassword);
				User.create({
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email_id: req.body.email_id,
					password: hashedPassword
				}, (err, data) => {
					if (err) {
						sendResponse.setResponse(res, 500, false, `Something went wrong ${err}`, data);
					} else {
						sendResponse.setResponse(res, 200, true, `Data successfully added`, data);
					}
				});

			} else {
				sendResponse.setResponse(res, 200, true, `User already exist`);
			}
		});
});
router.post('/userlogin', function (req, res) {
	User.findOne({
		email_id: req.body.email_id
	}, (err, data) => {

		if (err) {
			sendResponse.setResponse(res, 500, false, "something went wrong", null);
			return;
		}
		if (!data) {
			sendResponse.setResponse(res, 401, false, "Unable to fetch data", null);
			return;
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, data.password);
		console.log(passwordIsValid);
		if (!passwordIsValid) {
			sendResponse.setResponse(res, 401, false, "Authentication failed", null);
		} else {
			// sendResponse(res, 200, "users data", data);
			// Generate token
			var token = jwt.sign({
				id: data._id,
				email_id: data.email_id
			}, config.secret, {
				expiresIn: 86400 // expires in 24 hours
			});
			sendResponse.setResponse(res, 200, true, "Generated token", { token: token });
		}
	});
});
/**
 * Created on 5th sept 2019
 */
router.get('/verifytoken', function (req, res, next) {
	var token = req.headers['x-access-token'];
	if (!token) {
		res.status(403).json({
			auth: false, message: "no token provided."
		}).end();
	}
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(500).json({
				auth: false,
				message: "failed to authenticate token."
			});
		} else {
			// if everythig is correct
			req.userId = decoded.id;
			console.log(decoded);
			res.status(200).json({
				auth: true,
				message: "authorized",
				data: decoded
			});
			//next();

		}
	})
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/getallusers', function (req, res) {
	User.find({}, function (err, data) {
		if (err) {
			sendResponse.setResponse(res, 500, false, "There was a problem finding the users.");
		} else {
			sendResponse.setResponse(res, 200, true, `All users data`, data);
		}
	});
});
// GETS A SINGLE USER FROM THE DATABASE
router.get('/getuserbyid/:id', function (req, res) {
	User.findById(req.params.id, function (err, data) {
		if (err) return sendResponse.setResponse(res, 500, false, "There was a problem finding the users.");
		if (!data) return sendResponse.setResponse(res, 404, false, "User not found");
		sendResponse.setResponse(res, 200, true, `Single users data`, data);
	});
});

// DELETES A USER FROM THE DATABASE
router.delete('/deleteuserbyid/:id', function (req, res) {
	User.findOneAndDelete(req.params.id, function (err, data) {
		if (err) return sendResponse.setResponse(res, 500, false, "There was a problem finding the users.");
		sendResponse.setResponse(res, 200, true, `User ${data.first_name} was deleted`, data);
	});
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/updateuserbyid/:id', function (req, res) {
	console.log("welcome");
	User.findOneAndUpdate(req.params.id, req.body, { new: true }, function (err, data) {
		console.log(data);
		if (err) return sendResponse.setResponse(res, 500, false, "There was a problem to update user's data.");
		sendResponse.setResponse(res, 200, true, `Updated user's data`, data);
	});
});


/**
 * Check user availability
 * Date : 08 july 2019
 */

const userAvailability = (req, res) => {

	return User.findOne({
		"email_id": req.body.email_id
	}).then((data) => {

		return data;
		//sendResponse.setResponse(res, 200, `${req.body.email} Email id already exist`);
	}, (err) => {
		throw new Error(`Something went wrong ${err.message}`);
	});
}
module.exports = router;