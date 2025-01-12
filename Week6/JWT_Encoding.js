const express=require("express");
const app=express();
const jwt=require("jsonwebtoken")
const JWT_SECRET="randomsamridhiprajjwal"

const users=[]; 

//no need to genrate tokens in JWTS

app.use(express.json()); 

app.post("/signup",function(req,res){
     const username=req.body.username;
     const password=req.body.password;

     // some checks can be put here
     if(users.find(u=>u.username===username)){
        res.json({
            message : "You are already signed up"
        })
        return ;
     }
     // some more checks can be put here

     users.push({
        username: username,
        password: password
     })
     res.json({
        message:"You are signed up"
     })

     console.log(users);


});

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const foundUser=users.find(function(u){
        if(u.username===username && u.password===password){
            return true;
        }
        else return false;
    })
   
    if(foundUser){
        const token=jwt.sign({
            username : username
        },JWT_SECRET) // converting username to json
        //no need to store the token

        res.json({
            message: token
        })
    }
    else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
    


});

app.get("/me",function(req,res){
     const token=req.headers.token;//will now send JWT
     const decodedInformation=jwt.verify(token,JWT_SECRET); //will get back json object==> username
     const username=decodedInformation.username; //since decodeinformation is a jwt object with a key called username.to get additional info we need to hit the database


     let foundUser=users.find(u=>u.username===username);
     if (foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
     }
     else{
        res.status(404).send({ message : "Not found"});
     }
     
});



app.listen(3000);