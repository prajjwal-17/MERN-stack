function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}

function doOp(a,b,op){
    return op(a,b);

}

var a=10,b=15;
ans=doOp(a,b,sum);
console.log(ans);