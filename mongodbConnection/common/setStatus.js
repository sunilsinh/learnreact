var sendResponse = {};
sendResponse.setResponse = function (res = null, statusCode = "", status = true, message = "", data = null) {
  return res.status(statusCode).json({
    status: status,
    statusCode: statusCode,
    message: message,
    data: data
  }).end();
}

module.exports.common = sendResponse;