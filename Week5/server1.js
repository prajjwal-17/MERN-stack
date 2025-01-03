const express=require("express");
const app=express();

app.get("/add",function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    const result=a+b
    res.json({
        "answer":result.toString()
    })
})
app.get("/multiply", function(req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    const result = a * b;
    res.json({
        "answer":result.toString()
    })
});

app.get("/divide", function(req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    if (b === 0) {
        res.send("Cannot divide by zero");
    } else {
        const result = a / b;
        res.json({
            "answer":result.toString()
        })
    }
});

app.get("/subtract", function(req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    const result = a - b;

    res.json({
        "answer":result.toString()
    })
});


app.listen(3001);