const express=require("express");
const app=express();

const users=
[
   {
    name : 'John',
    kidneys:[{healthy: false}]
   }
];

app.get("/", function(req,res){
    const johnkidneys=users[0].kidneys;
    const numberofkidneys=johnkidneys.length;
    let numberofHealthyKidnneys=0;
    for(let i=0;i<johnkidneys.length;i++)
    {
        if(johnkidneys[i].healthy)
            numberofHealthyKidnneys++;
    }
    const numberofunhealthykidneys=numberofkidneys-numberofHealthyKidnneys;
    res.json({
        numberofkidneys,
        numberofHealthyKidnneys,
        numberofunhealthykidneys

    })
})


app.use(express.json()); // to parse and get json body on server
app.post("/",function(req,res){
    const isHealthy =req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })

    }
)
//post work is done on postman


    app.put("/",function(req,res){
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy=true; // making every element healthy if something was helathy or unhealthy
            
        }
        res.json({});
    })
    
    
    
    app.delete("/",function(req,res){
        
        if(isThereAtLeastOneUnhealthyKidney()){
       
        const newkidneys=[];
        for (let i = 0; i < users[0].kidneys.length; i++) {
           if(users[0].kidneys.healthy){
            newkidneys.push({
                healthy:true
            })
           }
            
        }
        users[0].kidneys=newkidneys;
        res.json({
            msg: "done"
        })
    }
    else{
        res.status(411).json({
            msg: "No bad kidneys"
        })
    }
}
)

    function isThereAtLeastOneUnhealthyKidney(){
        letatleastoneunhealthykidney=false
        for (let index = 0; index < users[0].kidneys.length; index++) {
            if(users[0].kidneys[index].healthy)
                letatleastoneunhealthykidney=true;
            
        }
        return letatleastoneunhealthykidney;
    }

app.listen(3000);