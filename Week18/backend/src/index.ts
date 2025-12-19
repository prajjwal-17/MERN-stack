import { PrismaClient } from "@prisma/client";




const client = new PrismaClient(); 


async function createUser(){ 
    await client.user.create({ 
        data : { 
            username: "Tester2", 
            password : "1234", 
            age : 10, 
            city : "Delhi" 
        } 
    }) 
} 




async function deleteUser(){
    await client.user.delete({
        where : {
            id : 1
        }
    })
}



async function updateUser() {
  await client.user.update({
    where: {
      id: 2
    },
    data: {
      username: "TesterUpdated"
    }
  });
}

async function findUser() {
  const user  = await client.user.findFirst({
    where: {
      id: 2
    }

  });
  console.log(user?.username); // question mark because user can be null here
}


//Run them only 1 at a time
// createUser(); // run with diff values
// deleteUser();
// updateUser();
findUser();