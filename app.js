// all var are here
const express = require("express");
const http = require("http");
const ejs = require("ejs");

//port number
const port = 3500 | process.env.port;

//creating application
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//kind of giving them acess with name
app.use("/img", express.static(__dirname + "/images"));
app.use("/css", express.static(__dirname + "/css/style.css"));
app.use("/css", express.static(__dirname + "/css/style1.css"));

app.use("/js", express.static(__dirname + "/js"));

//seting view engine
app.set("view engine", "ejs");

app.use("/", require("./routes/mainPageRoutes"));


//staring http server
http.createServer(app).listen(port, () => {
    console.log(port);
});