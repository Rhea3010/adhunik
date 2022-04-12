var ContactUSForm = require("../module/contactUs");

class ContactUs {

    SaveContactUs(data, cb) {
        console.log("🚀 ~ file: contactUsFormController.js ~ line 6 ~ ContactUs ~ SaveContactUs ~ data", data);
        let Cdata = {
            Fullname: data.uname,
            Email: data.uemail,
            MPhone: data.uphone,
            Msg: data.umsg
        };
        let contactUsdata = new ContactUSForm(Cdata);
        contactUsdata.save((err, savedata) => {
            if (err) {
                return cb({
                    status: "error",
                    msg: "Error on Data Save",
                    data: null
                });
            } else {
                return cb({
                    status: "success",
                    msg: "Data Save",
                    data: savedata
                });
            }
        });
    }

    getAllMsg(cb) {
        ContactUSForm.find({}, (err, Msgdata) => {
            if (err) {
                return cb({
                    status: "error",
                    msg: err,
                    data: null
                });
            } else {
                return cb({
                    status: "sucess",
                    msg: "data Found",
                    data: Msgdata
                });
            }
        });
    }
}

module.exports = ContactUs;