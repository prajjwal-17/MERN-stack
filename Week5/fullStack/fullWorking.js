const express=require("express");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors()); // if we add any domains then those specific will be able to send a request to us default:all can send


app.post("/sum",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        ans:a+b
     });
});

app.listen(3000);