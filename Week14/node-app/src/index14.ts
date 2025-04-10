interface People{
    name : string,
    age: number,
    greet:()=>string,
}

let persons: People={
    name: "Prajjwal",
    age: 21,
    greet :()=>{
        return "hi"  //we cant use person.name here so we use classes
    }
}

let greeting=persons.greet();
console.log(greeting);