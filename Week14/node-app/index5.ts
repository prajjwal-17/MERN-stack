function valid(age:number){
    if(age>=18) return true;
    else return false;
}

let ans=valid(17);
ans?console.log("Yes"):console.log("No");