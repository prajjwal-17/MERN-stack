const fs=require("fs");
const content=fs.readFileSync("Week2/a.txt","utf-8"); // synchronously
console.log(content);

// const content2=fs.readFile("Week2/a.txt","utf-8");// asynchronusly
// console.log(content2);

//for loop is a cpu bound task whereas reading file is i/o bound
