const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET="somerandomtoken";
const app=express();
const mongoose=require("mongoose");
mongoose.connect("add ur mongoose url");
const {UserModel, TodoModel}=require("./db");
app.use(express.json());

app.post("/signup",async function(req,res){
    const email=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    console.log("Received email:", email);  
    console.log("Received password:", password);
    console.log("Received name:", name);


      await UserModel.create({
        email : email,
        password : password,
        name: name
      })

      res.json({
        message : "You are logged in"
      })
});

app.post("/signin",async function(req,res){
    const email=req.body.username;
    const password=req.body.password;
    
    const user=await UserModel.findOne({
        email : email,
        password : password
    });
    if(user){
        const token= jwt.sign({
            id : user._id.toString()
        },JWT_SECRET);
        res.json({
           token:token
        });
    }
    else{
        res.status(400).json({
            message : "Wrong Credentials"
        })
    }

});

function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userID=decodedData.id;//since we are encoding "id" in line 41 we use id here
        next();
    }
    else{
        res.status(403).json({ message : "Incorrect Credentials"});
    }
}

app.post("/todo",auth,async function(req,res){
     const userID=req.userID;
     const title=req.body.title;
     const done=req.body.done;

     await TodoModel.create({
          userID,
          title,
          done
         
     })
     res.json({
        message : "Todo Created" 
     });
});

app.get("/todos",auth,async function(req,res){
     const userID=req.userID;
     const todos= await TodoModel.find({
        userID : userID
     })
     res.json({
        todos
     });
});

app.listen(3000);

