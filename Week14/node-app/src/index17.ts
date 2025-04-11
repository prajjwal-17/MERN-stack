type Employees={
    name:string;
    startDate: string;
};

type Managers={
    name: string;
    department:string;
}

type Lead=Employees&Managers;  //intersection

let e: Employees={
    name : "Prajjwal",
    startDate:"01-02-2024"
}
let m: Managers={
    name : "Rawat",
    department:"IT"
}

let l: Lead={
    name:"NEW",
    startDate:"02-05-2023",
    department:"network"
}