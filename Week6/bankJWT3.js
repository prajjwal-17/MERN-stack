const jwt = require("jsonwebtoken");

const value = {
    name: "Prajjwal",
    accountNumber: 12345
};

const secret = "aSuperSecureAndRandomKeyThatNoOneCanGuess12345!";
const token = jwt.sign(value, secret); // Use a strong secret
console.log("Generated Token:", token);

// Verifying the token
const decoded = jwt.verify(token, secret);
console.log("Decoded Token:", decoded);
