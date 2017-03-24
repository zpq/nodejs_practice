var jwt = require("jsonwebtoken");
const jwtKey = "ssoJwt";

var u = {};

u.signJwt = function (customDatas) {
    return jwt.sign(customDatas, jwtKey);
}

u.verifyJwt= function (oldToken) {
    try {
        return jwt.verify(oldToken, jwtKey);
    } catch(err) {
        console.log("jwt decode err: " ,err)
        return {};
    }
}

module.exports = u;