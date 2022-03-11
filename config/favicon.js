var favicon = require("serve-favicon");

module.exports = function(app) {
    app.use(favicon("./public/Images/Logo/favicon-16x16.png"));
}