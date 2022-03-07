var transporter = require("../config/mailer");
var config = require("../config/config.json");

class EmailSent {

    async contactUsEmailSent(data, cb) {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: config.MyEmail, // sender address
            to: data.uemail, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }, (err, sentEmail) => {
            if (err) {
                //  console.log(err);
                return cb({ Status: "err", Msg: "Error While Sending Email", Data: err });
            } else {
                /// console.log(sentEmail);
                return cb({ Status: "suc", Msg: "Email Sent", Data: sentEmail });
            }
        });
    }
}

module.exports = EmailSent;