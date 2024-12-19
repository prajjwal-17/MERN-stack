const fs=require("fs");

function print(err,data)//error,arg
 {
    if (err)
    console.log("Not found");
     
    else
     console.log(data);
}

const contents=fs.readFile("Week2/a.txt","utf-8",print);
console.log(contents);

const contents2=fs.readFile("Week2/b.txt","utf-8",print);
console.log(contents2);
console.log("Done");

//this is being done simultaneously....readFile uses callback an then prints the done

