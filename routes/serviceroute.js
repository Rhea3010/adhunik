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

router.get("/giftsandpromotion", (req, res) => {
    res.status(200).render("../views/servicepages/giftsandpromotion.ejs", { tname: "Gifts and Promotion Service" });
});

router.get("/hoardings", (req, res) => {
    res.status(200).render("../views/servicepages/hoardings.ejs", { tname: "Hoarding Service" });
});

router.get("/labelsandposters", (req, res) => {
    res.status(200).render("../views/servicepages/labelsandposters.ejs", { tname: "Label and Poster Service" });
});

router.get("/signages", (req, res) => {
    res.status(200).render("../views/servicepages/signages.ejs", { tname: "Signage Service" });
});

router.get("/stationaryprinting", (req, res) => {
    res.status(200).render("../views/servicepages/stationaryprinting.ejs", { tname: "Stationary Printing Service" });
});

router.get("/visitingcards", (req, res) => {
    res.status(200).render("../views/servicepages/visitngcards.ejs", { tname: "Visiting Card Service" });
});






module.exports = router;