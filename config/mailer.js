const nodemailer = require("nodemailer");
var config = require("../config/config.json");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.MyEmail, // generated ethereal user
        pass: config.MyEmailPass, // generated ethereal password
    },
});

module.exports = transporter;