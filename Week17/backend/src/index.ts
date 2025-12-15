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
  database: "mydb",
  ssl: false
});

pgClient.connect();

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }
// const insertQuery = `Insert INTO users (username , passwor, email) VALUES ('${username}' , '${email}' , '{password}')`
// if in password the user enters " ''); DELETE FROM users; " this will treat the query  as =>
// INSERT INTO users (username, email, password) VALUES (wqdqwdwd, wqdqwfqfqw,  ''); DELETE FROM users;)
// so we will have an insert query and a delete query which is a security vulnerability
// ⚠️ NEVER build SQL queries using string interpolation.
// Example of a vulnerable query:
//
// INSERT INTO users (username, email, password)
// VALUES ('${username}', '${email}', '${password}');
//
// If an attacker sends:
// password = "'); DELETE FROM users; --"
//
// The database will execute TWO statements:
// 1) INSERT ...
// 2) DELETE FROM users
//
// This is called SQL Injection.

  await pgClient.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, password] 
  ); // this array format [username , email password will prevent sql injection]
  // ✅ Use parameterized queries.
// The $1, $2, $3 placeholders ensure user input is treated as DATA,
// not executable SQL, completely preventing SQL injection.


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
