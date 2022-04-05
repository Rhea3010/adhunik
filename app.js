// all var are here
const express = require("express");
const https = require("https");
const ejs = require("ejs");
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var httpsOptions = require("./config/https");
var favicon = require("./config/favicon");
var connectDB = require("./config/connection");

//port number
const port = 3500 | process.env.port;

//creating application
var app = express();

app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser('Darpan the Great'));
app.use(session({ cookie: { maxAge: 60000 }, saveUninitialized: false, secret: "Rhea is Good Deig", resave: false }));

app.use((req, res, next) => {
    res.locals.SUCC = req.flash("SUCC");
    res.locals.ERROR = req.flash("ERROR");
    next();
});

favicon(app);

//kind of giving them acess with name
app.use("/img", express.static(__dirname + "/public/images"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/js", express.static(__dirname + "/public/js"));

//seting view engine
app.set("view engine", "ejs");

app.use("/", require("./routes/mainPageRoutes"));


//staring http server
https.createServer(httpsOptions, app).listen(port, () => {
    console.log("port number is ", port);
});