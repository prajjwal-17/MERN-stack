const express=require("express");
const app=express();

function isOldEnough(age) {
    if(age<14){
        return false;
    }
    return true;
    
}
function isOldEnoughMiddleWare(req,res,next) {
    age=req.query.age;
    if(age>14){
        next()
    }
   else{
    res.json({
        msg:"Sorry you are not of age"
    });
   }
    
}

//middleware has access to req res and next cycle

app.get("/ride1",isOldEnoughMiddleWare,function(req,res){
   
        res.json({
        msg: "You have succesfully ridden ride 1"
        });
});
app.get("/ride2",function(req,res){
    if(isOldEnough(req.query.age))
    {
        res.json({
        msg: "You have succesfully ridden ride 2"
        });
    }
    else{
        res.status(411).json({
            msg:"Sorry you are not of age"
        });
    }

});

app.listen(3000);