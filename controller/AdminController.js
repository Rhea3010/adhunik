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


}

module.exports = AdminData