const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
const JWT_SECRET="prajjsam1705"

const users=[]




app.use(express.json())


function logger(req,res,next){
    console.log(req.method+" : request came to this method");
    next();
}

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/Auth.Html") //___dirname holds the current directory
})

app.post("/signup",logger,function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if(users.find((u)=>u.username==username))
        res.json({
            message:"You are already signed up"
        })
    
    else{
        users.push({
            username,
            password
            //another way if key and value have same name
        })
        res.json({
            message : "You are signed up"
        });
    }
    console.log(users);

});

app.post("/signin",logger,function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const foundUser=users.find((u)=>u.username==username && u.password==password);

    if(foundUser){
        const token=jwt.sign({
            username:username
        },JWT_SECRET)

        res.json({
            token:token
        });

    }
    else{
        res.status(400).send({
            message : "Bad Credentials"
        });
    }
    console.log(users);
});



function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username;
        next();
    }
    else{
        res.json({
            message : "You are not logged in"
        })
    }
}


app.get("/me",logger,auth,function(req,res){
    
    
    let foundUser=users.find((u)=>u.username==req.username); // req object here is same as req obj in auth function

    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    }
    else{
        res.status(401).send({
            message: "Not found"
        });
    }


})

app.listen(3001);