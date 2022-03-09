var fs = require("fs");

let httpsOptions = {
    key: fs.readFileSync("./ssl/key.pem"),
    cert: fs.readFileSync("./ssl/key-cert.pem")
}
module.exports = httpsOptions;