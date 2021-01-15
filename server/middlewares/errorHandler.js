require("dotenv").config();
const AppError = require("./../helpers/appError");
const colors = require("./../helpers/colors");


const sendErrorDev = (err, res) => {
    console.error(colors.red, err.stack);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
    });
};


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "ERROR";

sendErrorDev(err, res);
};
