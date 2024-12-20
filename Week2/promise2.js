//A Promise in Js is an object that represents the eventual completion(or failure) of an asynchronomous 
// operation and its resulting value

//Promises provide cleaner syntax then callbacks and save us from callback hell


function setTimeoutPromisified(ms){
    let p= new Promise(resolve=>setTimeout(resolve,ms));
    // here p holds a promise object that has a function which has another function as an
    //  argument and performs whatever is written after the arrow... and resolve does what is written in callback 
    return p;// returning an object of promise class
}

function callback(){
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);//the callback func can also be defined here

// let p=setTimeoutPromisified(3000).then(callback) ;
// console.log(p);    this also works


// (a, b) => a + b  // Equivalent to function(a, b) { return a + b; }
// resolve has the same work as that of callback


/*
let p = new Promise(resolve => setTimeout(resolve, ms));
Here, p is a Promise object. The Promise constructor takes an executor function,
 which in this case is the arrow function resolve => setTimeout(resolve, ms).
Executor Function:

The executor function resolve => setTimeout(resolve, ms) is defined to take a single
 argument, resolve. This resolve is a function provided by the Promise constructor that
is used to fulfill the Promise.Inside the executor function, setTimeout(resolve, ms) is
 called. setTimeout will wait for ms milliseconds and then call the resolve function.
What Happens in the Executor Function:

setTimeout(resolve, ms): 

This schedules the resolve function to be executed after ms
 milliseconds. Essentially, it sets a timer and, once the timer expires, resolve is called.
resolve Function: The resolve function is used to fulfill or resolve the Promise. When it 
is called, the Promise transitions from a "pending" state to a "fulfilled" state. If there 
is a  .then handler attached to this Promise, that handler will be executed when the Promise 
is resolved. 

resolve and callback:

In the Promise Context:
When the Promise is resolved (after ms milliseconds), any callbacks registered with .then
will be executed. The resolve function doesn't directly control what happens in the callback. 
Instead, it changes the state of the Promise to fulfilled. The callback function will be
 executed as a result of this state change if it's registered via .then.

*/