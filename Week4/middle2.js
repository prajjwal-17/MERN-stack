const express = require("express");
const app = express();

function isOldEnough(age) {
    return age >= 14; // Simplified to use a single return statement
}

function isOldEnoughMiddleWare(req, res, next) {
    const age = parseInt(req.query.age, 10); // Parse age to integer
    if (isOldEnough(age)) {
        next(); // Age is valid, proceed to next middleware
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age"
        }); // Set status code and send response
    }
}

// Middleware has access to req, res, and next cycle
app.get("/ride1", isOldEnoughMiddleWare, function(req, res) {
    res.json({
        msg: "You have successfully ridden ride 1"
    });
});

app.get("/ride2", function(req, res) {
    if (isOldEnough(parseInt(req.query.age, 10))) { // Parse age to integer
        res.json({
            msg: "You have successfully ridden ride 2"
        });
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age"
        });
    }
});

app.listen(3000);
