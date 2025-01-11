const express=require("express");
const app=express();

const users=[]; // this is mainly done through databases but for now we use array

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
         '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
        //Math.random() * options.length) gives a random decimal from 0 and 32 and math.floor rounds it up
    }
    return token;
}

app.use(express.json()); // will parse any request and we will be able to access body of post .it is a middleware

app.post("/signup",function(req,res){
     const username=req.body.username;
     const password=req.body.password;

     // some checks can be put here
     if(users.find(u=>u.username===username)){
        req.json({
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
    /*
    users.find checks whether the user trying to sign in(u.username) has a valid (username) and password,if yes then it adds a new
    property token and generates a token for it
    */
    if(foundUser){
        const token=generateToken();
        foundUser.token =token; // intead we could have also written 
        //users.find(u => u.username === username && u.password === password).token = token; this line can replace the above foundUser thing


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
     const token=req.headers.token;//can also user authorization
     let foundUser=users.find(u=>u.token===token);
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


/*
In the /signin route, the token is added to the user object (foundUser). Make sure that this token assignment happens correctly.
For the /me route to work, the token must be part of the user object stored in the users array.
*/

/*
since the tokens are stored and keep getting called it would casuse a lot of callups in the database
and hence we use Json Web Tokens or JWTs
*/