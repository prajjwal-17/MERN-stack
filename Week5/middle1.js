const express=require("express");
const app=express();

let requestCount=0;

function totalreqs(req,res,next){
   requestCount++;
   console.log("Number of requests= "+ requestCount)
   next();
}

app.use(totalreqs);

app.get("/add/:a/:b",function(req,res){
    let a=parseInt(req.params.a);
    let b=parseInt(req.params.b);
    const result=a+b
    res.json({
        "answer":result.toString()
    })
});
app.get("/sub/:a/:b",function(req,res){
    let a=parseInt(req.params.a);
    let b=parseInt(req.params.b);
    const result=a-b
    res.json({
        "answer":result.toString()
    })
});



app.listen(3000);

// sudo kill -9 5593 to kill a server forcefully