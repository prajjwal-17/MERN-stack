const jwt=require("jsonwebtoken");

const value={
    name : "Prajjwal",
    accountNumber : 12345
};

const token = jwt.sign(value,"secret"); // this token can only be verifed by this secret
console.log(token)