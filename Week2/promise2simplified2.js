function waitfor3s(resolve){
    setTimeout(resolve,3000);
}



function setTimeoutPromisified(ms){
    return new Promise(waitfor3s);
}

function callback(){
    console.log("3 seconds have passed");
}

setTimeoutPromisified().then(callback); //note this happens without giving arguments