var transporter = require("../config/mailer");
var config = require("../config/config.json");

class Email {

    async contactUsEmailSent(uemail) {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: config.MyEmail, // sender address
            to: uemail, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
    }

}



module.exports = Email;