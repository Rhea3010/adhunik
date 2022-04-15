var ContactUSForm = require("../module/contactUs");

class ContactUs {

    SaveContactUs(data, cb) {
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

    changeStatus(data, cb) {
        var status = data.Status == 'true' ? false : true;
        ContactUSForm.findByIdAndUpdate({ _id: data.id }, { Status: status }, (err, ChangeData) => {
            if (err) {
                return cb({ Status: "error", msg: err, data: null });
            } else {
                return cb({ Status: "sucess", msg: "Change Done", data: ChangeData });
            }
        });
    }
}

module.exports = ContactUs;