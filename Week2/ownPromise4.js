

let p=new Promise(resolve=>{ let c=0;
    for(let i=0;i<10000000000;i++)
        c=c+i;  resolve("Yosh")});

function callback(str){
    console.log(str);

}
p.then(callback);