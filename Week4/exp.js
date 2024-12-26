const express=require("express");

function calculateSum(n) {
    let ans=0;
    for (let i =0; i <=n; i++) {
        ans=ans+i;
        
    }
    return ans;
    
}

const app=express(); //similar to creating a room in a clinic

app.get("/",function(req,res){
    const n=req.query.n;
    const ans=calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000); //deciding the address of the server(clinic)