function sum(a,b) {
    return a+b;
}

console.log(sum(5,10));
console.log(sum("5",10));

// to avoid we use parse int
function sum2(a,b) {
    return parseInt(a)+parseInt(b);
}

console.log(sum2(5,"100"));