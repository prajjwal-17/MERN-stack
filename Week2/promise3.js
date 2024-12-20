console.log("Hey");
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })}
    function callback(){
        console.log("This is Promise");
    }
    setTimeoutPromisified(3000).then(callback);
