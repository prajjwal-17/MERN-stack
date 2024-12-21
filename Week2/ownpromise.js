class Promise2{
    constructor(fn){
        this.fn=fn;
        this.fn(()=>{this.resolve();})

        fn(afterdone);
    }
    then(callback)
    {
        this.resolve=callback;
    }
}

function readTheFile(resolve)
{
    setTimeout(function(){
        console.log("callback based setTimeout has been completed");
        resolve()
    },3000);
}

function setTimeoutPromisified(){
    return new Promise2(readTheFile);
}

let p=setTimeoutPromisified();
function callback(){
    console.log("Callback called");
}
p.then(callback);