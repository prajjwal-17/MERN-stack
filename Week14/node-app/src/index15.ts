interface People {
    name: string;
    age: number;
}

class Manager implements People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let Nuser = new Manager("Prajjwal", 30);
console.log(Nuser.name);
