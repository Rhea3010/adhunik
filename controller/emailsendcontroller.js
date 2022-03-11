var transporter = require("../config/mailer");
var config = require("../config/config.json");
var ejs = require("ejs");
class EmailSent {

    async contactUsEmailSent(data, cb) {
        // send mail with defined transport object
        await ejs.renderFile("./views/emailtemplates/thankyou.ejs", { Uname: data.uname, Umobile: data.uphone }, async(err, thanskyoufile) => {
            if (err) {
                console.log(err);
            } else {
                let info = await transporter.sendMail({
                    from: config.MyEmail, // sender address
                    to: data.uemail, // list of receivers
                    subject: "Thank You For contacting", // Subject line
                    text: "", // plain text body
                    html: thanskyoufile, // html body
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
        });
    }
}

module.exports = EmailSent;