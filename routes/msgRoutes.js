var express = require("express");
var router = express.Router();
var ContactUSForm = require("../controller/contactUsFormController");
const { json } = require("express/lib/response");
var contactUSForm = new ContactUSForm();

router.get("/ShowAllMsg", (req, res) => {
    contactUSForm.getAllMsg((CbData) => {
        return res.status(200).render("../views/mainpages/MSg.ejs", { tname: "ALL MSG", data: CbData.data });
    });
});

router.get("/ChangeStatus/:id/:Status", (req, res) => {
    contactUSForm.changeStatus(req.params, (CbData) => {
        res.status(200).redirect("/ShowAllMsg");
    });
});


module.exports = router;