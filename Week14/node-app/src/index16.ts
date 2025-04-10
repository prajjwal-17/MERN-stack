abstract class Users {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): string;

    hello() {
        console.log("hi there");
    }
}

class Employee extends Users {
    constructor(name: string) {
        super(name);
    }

    greet(): string {
        return "hi " + this.name;
    }
}

const emp = new Employee("Prajjwal");
console.log(emp.greet()); // Output: "hi Prajjwal"
emp.hello();              // Output: "hi there"
