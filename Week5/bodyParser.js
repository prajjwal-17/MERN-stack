const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//in express if we want to send json data we need to parse it first
app.use(bodyParser.json()); 
app.post("/mult", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a * b
    })
});

app.listen(3000);