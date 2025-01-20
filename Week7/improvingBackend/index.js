const bcrypt=require("bcrypt")
const {z}=require("zod");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prajjwalchamp17:pawnstar1234@cluster0.feqps.mongodb.net/todo-prajjwal-database3");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string()
            .min(8, "Password must be at least 8 characters long")
            .max(30, "Password must be at most 30 characters long")
            .refine((value) => {
                // Check for at least one uppercase letter
                const hasUpperCase = /[A-Z]/.test(value);
                // Check for at least one lowercase letter
                const hasLowerCase = /[a-z]/.test(value);
                // Check for at least one special character
                const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
                // Return true if all conditions are met
                return hasUpperCase && hasLowerCase && hasSpecialChar;
            }, {
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
            })
    });
    
    // const parsedData=requiredBody.parse(req.body); this will either return data or throw an error
    const parsedDataWithSuccess=requiredBody.safeParse(req.body); // this will show what the error is
    
    if (!parsedDataWithSuccess.success) {
        res.status(409).json({
            message: "Incorrect Format",
            errors: parsedDataWithSuccess.error.errors  // Send error details if needed
        });
        return;
    }

    const { email, password, name } = req.body;
   
   let errorThrown=false;
   try{
    const hashedpassword=await bcrypt.hash(password,5);//syntax bcrypt.hash(plainpassword,number of rounds)    no. of rounds means complexity ..
    //if we dont give the second argument then it wont take a long time so we can avoid await
    console.log(hashedpassword);

    await UserModel.create({
        email: email,
        password: hashedpassword,
        name: name
    });
    
   }catch(e){
      res.status(405).json({
        message : "User already exists"
      });
      errorThrown= true;
   }
   if(!errorThrown){
    res.json({
        message : "You are signed up"
    });  // using this server doesnt crashes
   }
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        // password: password, we dont send this beacuse users password cannot be compared to the hash
    });

    if(!response){
        res.status(403).json({
            message : "User doesnt exist"
        });
        return;
    }

    const passwordMatch=await bcrypt.compare(password,response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);