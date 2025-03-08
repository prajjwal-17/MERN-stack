let firstname:string="Prajjwal";
let age:number=21;

// type UserType={
//      firstname: string,
//      lastname: string,
//      age:number
// }

interface UserType{
    firstname: string,
    lastname: string,
    age:number
}

function greet2(user: UserType){

}

let user: UserType={
    firstname:"Prajjwal",
    age:21,
    lastname:"Rawat"
}