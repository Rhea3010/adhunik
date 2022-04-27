var Admin = require("../module/Admin");
var uuid = require("uuid");

class AdminData {

    async SaveAdmin(adminInfo, cb) {
        let data = {
            UID: uuid.v4(),
            UName: adminInfo.Uname,
            UEmail: adminInfo.Uemail,
            UPass: adminInfo.Upass
        };
        let adminModel = new Admin(data);
        await adminModel.save((err, done) => {
            if (err) {
                return cb({ Status: "error", Msg: err, Data: null });
            } else {
                return cb({ Status: "Sucess", Msg: "Data Saved", Data: done });
            }
        });
    }

    async CheckAdmin(adminInfo, cb) {
        Admin.findOne({ UEmail: adminInfo.uemail, UPass: adminInfo.upass }, (err, admin) => {
            console.log("🚀 ~ file: AdminController.js ~ line 34 ~ AdminData ~ Admin.findOne ~ admin", admin)
            if (err) {
                return cb({ Status: "error", Msg: err, data: null });
            } else if (admin == null) {
                return cb({ Status: "error", Msg: "No Recored Founed", data: null });
            } else {
                return cb({ Status: "Sucess", Msg: "Data Found", data: admin });
            }
        });

    }

}

module.exports = AdminData