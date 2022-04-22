var express = require("express");
var router = express.Router();
var AdminData = require("../controller/AdminController");
var adminData = new AdminData();


//LogIn Routes
{
    router.get("/LogIn", (req, res) => {
        return res.status(200).render("../views/admin/login.ejs", { tname: "Admin LogIn" });
    });

    router.post("/Login", (req, res) => {
        console.log("🚀 ~ file: adminroute.js ~ line 14 ~ router.post ~ req", req.body)

    });
}


// Route for Registration
{
    router.get("/Register", (req, res) => {
        return res.status(200).render("../views/admin/Register.ejs", { tname: "Admin Register" });
    });

    router.post("/Save", (req, res) => {
        adminData.SaveAdmin(req.body, (CbData) => {
            if (CbData.Status == "error") {
                req.flash("ERROR", "Data Not Saved");
                return res.status(200).redirect("/Admin/Register");
            } else {
                req.flash("SUCC", "Data Saved");
                return res.status(200).redirect("/Admin/Login");
            }
        });
    });
}
// router.get("/forgetpassword", (req, res) => {
//     // res.status(200).render("../views/servicepages/screenoffset.ejs", { tname: "Screen Printing Service" });
// });



module.exports = router;