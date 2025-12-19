import { PrismaClient } from "@prisma/client";




const client = new PrismaClient(); 

async function createUser(){ 
    await client.user.create({ 
        data : { 
            username: "Prajjwal", 
            password : "1234", 
            age : 21, 
            city : "Delhi" 
        } 
    }) 
} 
createUser();