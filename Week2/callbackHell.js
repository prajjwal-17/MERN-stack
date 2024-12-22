// function callback(){
//     console.log("Hi");
// }

// setTimeout(function(){
//     console.log("Hi");
// },3000);


function callback(){
    console.log("Hi");
}

setTimeout(function(){
    console.log("Hi");
    setTimeout(function(){console.log("Hello");
        setTimeout(function(){console.log("Hola");},7000);
    },5000);
},3000);
// nested