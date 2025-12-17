// BEGIN; -- Start transaction

// INSERT INTO users (username, email, password)
// VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

// INSERT INTO addresses (user_id, city, country, street, pincode)
// VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

// COMMIT;
import express from "express";
import type { Request, Response } from "express";

import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
  user: "postgres",
  password: "randomPassword",
  host: "localhost",
  port: 5432,
  database: "mydb2",
  ssl: false
});

pgClient.connect();

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, email, password , city ,country , street , pincode } = req.body;

  if (!username || !email || !password || !city || !country || !street || !pincode) {
    return res.status(400).json({ message: "Missing fields" });
  }
  
  const insertQuery=`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
  const addressInsertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`
  
  await pgClient.query("BEGIN;"); // transaction begins
  
  const response = await pgClient.query(insertQuery,[username, email, password] ); 
  const userID=response.rows[0].id;
  await new Promise(x=>setTimeout(x,100*1000)); // to test if it works or not .. first send req via ppostman then creash backend
  const addressInsertResponse = await pgClient.query(addressInsertQuery,[userID,city ,country,street,pincode])
  

  await pgClient.query("COMMIT;"); // transaction end

  res.json({
    message: "You have signed up"
  });
  } catch (e) {
    res.json({
        message : "Error while signing up",
        error : e
    })
  }
});


// http://localhost:3000/metadata?id=10
app.get("/metadata", async (req : Request , res : Response)=>{
  const id = req.query.id ;
  
  const query1=`SELECT username,id,email FROM users WHERE id=$1`;
  const response1=await pgClient.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
  const response2=await pgClient.query(query2,[id]);

  res.json({
    user : response1.rows[0] ,
    address : response2.rows[0]
  })
})

app.get("/better-metadata" , async(req : Request , res :Response)=>{
  const id=req.query.id;
  const query = `SELECT users.id , users.username , users.email , addresses.city , addresses.country,
  addresses.street , addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id 
  WHERE users.id = $1 `;

  const response  = await pgClient.query(query, [id]);
  res.json({
    response : response.rows
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
