console.log("Start of code")
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })}
 
const fs=require("fs");

function readAsync(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","UTF-8",function(err,data){resolve(data);})
    })
}
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hi there");
}

solve();
console.log("End of code");

//aync await is syntactic sugar for promises 