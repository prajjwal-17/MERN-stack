// now we know token so we will create object with what we get on jwt.io

const jwt=require("jsonwebtoken");

const contents= {
    "name": "Prajjwal",
    "accountNumber": 12345,
    "iat": 1726563139
  }

const newToken=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJhamp3YWwiLCJhY2NvdW50TnVtYmVyIjoxMjM0NSwiaWF0IjoxNzI2NTYzMTM5fQ.a5mSqvjXmXDurfh4KVo0LmzIrEsK4SuINT8qvNtZtX0","secret");
console.log(newToken); 