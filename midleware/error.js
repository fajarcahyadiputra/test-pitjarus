const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {

    const error = { ...err };

    error.message = err.message;
    if (error.code === 11000) {
        const message = "Duplicat Field";
        error = new ErrorResponse(message, 400);
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => val.message)
        error.message = new ErrorResponse(message, 500);
    }
    console.log(error.message);
    res.status(error.statusCode || 500).json({
        status: error.status || "error",
        statusCode: error.statusCode,
        message: error.message || "An unkown error occurred."
    })
}

module.exports = errorHandler