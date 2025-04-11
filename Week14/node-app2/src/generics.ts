function identity<T>(arg:T):T{
    return arg;
}

let output1=identity<string>("mystring");
let output2=identity<number>(4);

console.log(output1," \n ",output2);