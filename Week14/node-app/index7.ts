console.log("Hey there");
function del2(fn:()=>void){
    setTimeout(fn,5000);
}

del2(()=>{
    console.log("5 seconds have passed");
})
//better way