import express from "express";
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
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Missing fields" });
        }
        await pgClient.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, password]);
        res.json({
            message: "You have signed up"
        });
    }
    catch (e) {
        res.json({
            message: "Error while signing up",
            error: e
        });
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map