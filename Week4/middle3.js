const express = require("express");
const app = express();

// Middleware function
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

// Function to check age
function isOldEnough(age) {
    return age >= 14; // Check if age is 14 or older
}

// Apply middleware to all routes
app.use(isOldEnoughMiddleWare); // this is used when multiple functions use same middleware...will only work for functions below it

app.get("/ride1", function(req, res) {
    res.json({
        msg: "You have successfully ridden ride 1"
    });
});

app.get("/ride2", function(req, res) {
    res.json({
        msg: "You have successfully ridden ride 2"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
