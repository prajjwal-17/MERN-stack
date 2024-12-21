const fs=require("fs");

function readTheFile(sendFinalVal){
    fs.readFile("Week2/a.txt","utf-8",function(err,data){
        sendFinalVal(data); // once the async op is done and data is obtained that data is transferred to 
        //this sendFinalVal and this data wiill automatically reach the callback
    })
}

function readFile(filename){
    return new Promise(readTheFile);
}

const p=readFile();
function callback(contents){
    console.log(contents);
}
p.then(callback);