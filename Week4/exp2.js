const express=require("express");

function calculateSum(a,b) {
   return a+b;
    
}

const app=express(); //similar to creating a room in a clinic

app.get("/",function(req,res){
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);
    const ans=calculateSum(a,b);
    res.send(ans.toString());
})

app.listen(3001); //deciding the address of the server(clinic)