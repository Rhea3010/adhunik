var express = require("express");
var router = express.Router();
// var Email = require("../controllers/emailSendcontroller");
// var email = new Email();


//route for get index or home page
router.get(["/index", "/"], (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs");
});

router.get(["/aboutus", "/about"], (req, res) => {
    res.status(200).render("../views/mainpages/aboutus.ejs");
});

router.get(["/contactus", "/contact"], (req, res) => {
    res.status(200).render("../views/mainpages/contactus.ejs");
});

//route for post req from contact us
router.post("/smail", (req, res) => {
    console.log(req.body);
    email.contactUsEmailSent(req.body.uemail);
    res.status(200).send("we go the data");
});

router.get("/*", (req, res) => {
    res.status(404).render("../views/mainpages/error404.ejs");
});

module.exports = router;