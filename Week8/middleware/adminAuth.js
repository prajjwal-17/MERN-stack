const jwt = require("jsonwebtoken");
const  {JWT_ADMIN_PASSWORD}=require("../config");
require("dotenv").config()

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if (response) {
        req.adminId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware
}