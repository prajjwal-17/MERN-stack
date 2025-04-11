interface Admins{
    name: string;
    permissions: string;
}

interface Userss{
    name : string;
    age : number;
}

type userOrAdmin=Admins | Userss;

function greetings(user1: userOrAdmin){
    console.log(user1.name);
    // console.log(user1.age); will give an error since user can be boh user or admin  
}