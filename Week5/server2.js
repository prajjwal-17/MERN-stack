const express=require("express");
const app=express();

app.get("/add/:a/:b",function(req,res){
    let a=parseInt(req.params.a);
    let b=parseInt(req.params.b);
    const result=a+b
    res.json({
        "answer":result.toString()
    })
})
app.get("/multiply/:a/:b", function(req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    const result = a * b;
    res.json({
        "answer":result.toString()
    })
});

app.get("/divide/:a/:b", function(req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    if (b === 0) {
        res.send("Cannot divide by zero");
    } else {
        const result = a / b;
        res.json({
            "answer":result.toString()
        })
    }
});

app.get("/subtract/:a/:b", function(req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    const result = a - b;

    res.json({
        "answer":result.toString()
    })
});


app.listen(3000);

// sudo kill -9 5593 to kill a server forcefully