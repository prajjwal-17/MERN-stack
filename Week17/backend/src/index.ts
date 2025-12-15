import { Client } from "pg";

const pgClient = new Client({
    user : "postgres",
    password : "randomPassword",
    port : 5432,
    host : "localhost",
    database : "mydb",
    ssl : false
})

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response.rows);
}

main();

