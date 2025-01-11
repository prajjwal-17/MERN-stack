const express = require("express");
const app = express();

const users = []; // In real-world scenarios, this would be a database, but for simplicity, we use an array for now

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5',
        '6', '7', '8', '9']; // Array of characters used to generate a token

    let token = "";
    for (let i = 0; i < 32; i++) {
        // Math.random() gives a random decimal between 0 and 1, 
        // multiplying by options.length gives a decimal between 0 and 62 (length of the options array), 
        // Math.floor rounds down to the nearest integer
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.use(express.json()); // Middleware to parse JSON data from incoming requests

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists based on username
    if (users.find(u => u.username === username)) {
        res.json({
            message: "You are already signed up"
        });
        return;
    }
    // Adding new user to the array (In a real-world app, this would involve database interaction)
    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up"
    });

    console.log(users);
});

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Original code for finding the user
    const foundUser = users.find(function(u) {
        // Check if the username and password match the current user object
        if (u.username === username && u.password === password) {
            return true;  // If both match, return the user object
        } else {
            return false; // If they don't match, continue searching
        }
    });

    // Alternative: Using arrow function for more concise syntax
    // const foundUser = users.find(u => u.username === username && u.password === password);

    /*
    Explanation of foundUser:
    - The find() method searches the 'users' array for a user object whose 'username' and 'password' match the values passed in the request.
    - If a match is found, 'foundUser' will reference that user object from the array. Since arrays in JavaScript hold object references,
      'foundUser' is a direct reference to the object in the 'users' array.
    - If no match is found, 'foundUser' will be undefined.
    - Any changes made to 'foundUser' (e.g., adding a token) will directly modify the original user object inside the 'users' array.
    */

    if (foundUser) {
        const token = generateToken();
        foundUser.token = token; // Assign the generated token to the found user object

        // Alternative: This line can replace the above if you want to do it in one step
        // users.find(u => u.username === username && u.password === password).token = token;

        res.json({
            message: token
        });
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        });
    }
    console.log(users);
});

app.get("/me", function(req, res) {
    const token = req.headers.token;

    if (!token) {
        return res.status(400).send({ message: "Token is required" });
    }

    const foundUser = users.find(u => u.token === token);

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        res.status(404).send({ message: "Not found" });
    }
});


app.listen(3000); // Start the server and listen on port 3000
