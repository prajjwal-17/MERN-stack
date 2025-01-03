const express = require("express");

const app = express();

//in express if we want to send json data we need to parse it first
app.use(express.json()); //when we use middleware we just put name but when we user express.json we call it because it returns another funvtuon

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);