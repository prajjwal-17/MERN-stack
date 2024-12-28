const path=require("path");

console.log(__dirname);
console.log(__dirname+ "../../file2.js");
console.log(__dirname+ "../../file2.js"+"/projects"+"index.js");
console.log(path.join(__dirname, "../../file2.js","/week4","file2.js")); // resolves the ../ problem in print    
//note this is not a standard correct path



/*
   "chalk": "^5.3.0",
    "express": "^4.19.2"

    format---> MAJOR.MINOR.PATCH
    major is when breaking changes are added---like a big announcement for eg 
    major ver 19.0.1-->  20.0.0
    minor ver 19.0.1-->  19.1.1
    patch ver 19.0.1-->  19.0.2
*/ 

