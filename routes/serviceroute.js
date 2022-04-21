var express = require("express");
var router = express.Router();


//route for get index or home page

router.get("/FlexBanner", (req, res) => {
    res.status(200).render("../views/servicepages/FlexBanner.ejs", { tname: "FlexBanner Service" });
});


router.get("/digital", (req, res) => {
    res.status(200).render("../views/servicepages/digital.ejs", { tname: "Digital Service" });
});

router.get("/ScreenPrinting", (req, res) => {
    res.status(200).render("../views/servicepages/screenoffset.ejs", { tname: "Screen Printing Service" });
});



module.exports = router;