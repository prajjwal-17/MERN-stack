function rand(resolve){ // promise class takes a function(rand) whose first argument is also a -
    // function(resolve)
      
   // resolve(); definned a promise and immediately resolved it...code runs immediately
   setTimeout(resolve,3000);// resolve runs after 3 seconds
}

let p=new Promise(rand);//promise is supporsed to return something eventually

function callback(){
    console.log("promise suceeded");
}
p.then(callback);

//the callback gets called when the first argument of promise class,which is a function(rand),has its 
//first argument called(resolve)