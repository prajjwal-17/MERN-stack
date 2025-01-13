const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signjwt(username, password) {
    const usernameRespnse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password); // Validate password, not username again

    // Correct logic: If username is invalid OR password is invalid, return null
    if (!usernameRespnse.success || !passwordResponse.success) {
        return null;
    }

    // Sign the JWT if both validations pass
    const signature = jwt.sign({
        username: username
    }, jwtPassword);

    return signature;
}

const ans = signjwt("prajjwalchamp17@gmail.com", "sgrgrehgrd");
console.log(ans);

function decodeJwt(token){
    const decode = jwt.decode(token)
    if(decode) return true;
    else return false;
}

const decodeToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWpqd2FsY2hhbXAxN0BnbWFpbC5jb20iLCJpYXQiOjE3MjY1NjY0ODN9.7QVUyFHyP0NQl9vznpzzrD7f_1ZU9mzrGBgXrmtES5M";//will return false for random string like asfegwf
console.log(decodeJwt(decodeToken));

function verifyJwt(token){
    try{
    const verified=jwt.verify(token,jwtPassword);
    if(verified) return true;
    }catch(e){
        //nothing to write  using try catch since it will give an exception if no value is returned
    }
   return false;
}
console.log(verifyJwt("adfgrsgsdv"));