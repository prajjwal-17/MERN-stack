const fs=require("fs");

function readAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("aaa.txt","UTF-8",function(err,data){
            if (err){
                reject("File not read");}
            else{
            resolve(data);
            }
        })
    })
}

readAsync().then(function(x){
    console.log("File Read"+x);
}).catch(function(e){
    console.log(e);
})