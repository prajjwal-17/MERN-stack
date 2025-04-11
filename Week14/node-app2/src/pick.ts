interface User{
    id:string;
    name : string;
    age : string;
    email: string;
    password : string;
}

type UpdateProps = Pick<User,'name'|'age'|'email' > //generics

function updateUser(updatedProps: UpdateProps){
    // hit the database to update the user
    
}

/*
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

*/