function setTimeoutPromisified(duration)
{
    return new Promise(resolve=>setTimeout(resolve,duration));
}

setTimeoutPromisified(2000).then(function(){
    console.log("Hi");
    return setTimeoutPromisified(4000); 
    }).then(function(){
        console.log("Hello");
        return setTimeoutPromisified(6000);
    }).then(function(){
            console.log("Hola");
    });

    //promise chaining
  
   const sortedstring=str.split("").sort().join("..");
   //asd=> ["a","s","d"]==> ["a","d","s"]