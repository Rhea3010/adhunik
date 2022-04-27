var jwt = require("jsonwebtoken");
class JWT {

    idGenrator(userData) {
        var token = jwt.sign(userData, process.env.TOKEN_SECRET, { expiresIn: "100000000000" });
        return token;
    }

    getId(token) {
        var output = jwt.verify(token, process.env.TOKEN_SECRET);
        return output;
    }

    checkUserExicte(req, res, next) {
        var is_user = res.locals.Is_User;
        if (is_user == true) {
            next();
        } else {
            req.flash("error", "First Login");
            return res.status(200).redirect("/Admin/Login");
        }
    }
}

module.exports = JWT;