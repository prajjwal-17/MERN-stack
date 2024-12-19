console.log("Hi");

function timeout() {
    console.log("Click Buton");

}

setTimeout(timeout,1000); // aync callback

console.log("Hello"); //sync

for(let i=0;i<10000000000;i++); //sync
console.log("Expensive operation done");



//expensive operations runs first because  after setTimeout we start doing the cpu
//intensive task i.e. the for loop and we go to the settimeout after completing loop
//it will first complete the cpu based tasks (Synchronously) then the async func
 // visualization- latenflip