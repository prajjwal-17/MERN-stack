console.log("Hey there");
function del(fn:()=>void){
    setTimeout(fn,5000);
}

del(()=>{
    console.log("5 seconds have passed");
})
//better way