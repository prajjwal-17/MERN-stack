let ctr=0;
function callback(){
    console.log(ctr);
    document.querySelectorAll("h2")[1].innerHTML=ctr;
    ctr+=1;
}

setInterval(callback,1000);  // will call this function after this interval infintely