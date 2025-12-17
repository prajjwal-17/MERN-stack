// CREATE TABLE users (
// id SERIAL PRIMARY KEY ,
// username VARCHAR(50) UNIQUE NOT NULL ,
// email VARCHAR(255) UNIQUE NOT NULL ,
// password VARCHAR(255) NOT NULL,
// created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE addresses(
//  id SERIAL PRIMARY KEY ,
//  user_id INTEGER NOT NULL ,
//  city VARCHAR(100) NOT NULL ,
//  country VARCHAR(100) NOT NULL ,
//  street VARCHAR(255) NOT NULL ,
//  pincode VARCHAR(20) ,
//  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
//  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE 
// );

// setup queries on Delete Cascade means if something is deleted in users its related will be deleted in other tables as well

// INSERT INTO addresses (user_id, city, country, street, pincode)
// VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');

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
  const response = await pgClient.query(
    insertQuery
    ,
    [username, email, password] 
  ); 
  const userID=response.rows[0].id;
  
  const addressInsertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`

  const addressInsertResponse = await pgClient.query(addressInsertQuery,[userID,city ,country,street,pincode])


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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
