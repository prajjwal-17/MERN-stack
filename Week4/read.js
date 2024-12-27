const fs=require("fs");
function main(filename){
   
   fs.readFile(filename,'utf-8',function(err,data){
  let total=0;
  for(let i=0;i<data.length;i++)
     { 
    if(data[i]==" ")
        total++;
    }
   console.log(total+1);
}) 
      
}

main(process.argv[2]);

 
//  node read.js /mnt/c/Users/prajj/Desktop/Web\ Dev/Week4/sample.txt   will run by this command since it is wsl
//  the backslash is for space because unix treats it like a seperator
//  node read.js "/mnt/c/Users/prajj/Desktop/Web Dev/Week4/sample.txt"     ---this uses inverted commaas
// The main function is called with process.argv[2] as the argument. process.argv is an array 
// containing command-line arguments passed to the Node.js process. process.argv[2] refers to 
//  the third argument provided when running the script, which is expected to be the file path.