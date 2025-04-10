interface Address{
    city: string;
    country : string;
    pincode: number;
    houseNumber: String;
}

interface User{
    name : string;
    age: number;
    address : Address;
}
interface Office{
    address: Address;
}

let newUser : User={
    name: "Prajjwal",
    age: 5,
    address:{
        city : "Dehradun",
        country : "India",
        pincode : 248001,
        houseNumber: "76/3"
    }
}

console.log(newUser.name);