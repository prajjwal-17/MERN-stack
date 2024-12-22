function setTimeoutPromisified(duration)
{
    return new Promise(resolve=>setTimeout(resolve,duration));
}

setTimeoutPromisified(2000).then(function(){
    console.log("Hi");
    setTimeoutPromisified(4000).then(function(){
        console.log("Hello");
        setTimeoutPromisified(6000).then(function(){
            console.log("Hola");
        })   
    })
});