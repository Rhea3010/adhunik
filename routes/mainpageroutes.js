var express = require("express");
var router = express.Router();
var EmailSent = require("../controller/emailsendcontroller");
var emailsent = new EmailSent();


//route for get index or home page
router.get(["/index", "/"], (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs");
});

router.get(["/AboutUs", "/about"], (req, res) => {
    res.status(200).render("../views/mainpages/aboutus.ejs");
});


router.get(["/Services", "/about"], (req, res) => {
    res.status(200).render("../views/mainpages/services.ejs");
});

// Route for Contact Us
{
    router.get(["/ContactUS", "/contact"], (req, res) => {
        return res.status(200).render("../views/mainpages/contactus.ejs");
    });

    router.post("/ContactUs", (req, res) => {
        emailsent.contactUsEmailSent(req.body, (CbData) => {
            console.log(CbData.Data);
            if (CbData.Status == "err") {
                req.flash("ERROR", "Email Not Sent");
                return res.status(200).redirect("/Contactus");
            } else {
                req.flash("SUCC", "Email Sent");
                return res.status(200).redirect("/Contactus");
            }
        });
    });
}


router.get("/*", (req, res) => {
    res.status(404).render("../views/mainpages/error404.ejs");
});

module.exports = router;