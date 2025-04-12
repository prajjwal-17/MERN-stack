// interface User {
//   id: string;
//   name: string;
// }

// type Users = { [key: string]: User };

// const users: Users = {
//   'abc123': { id: 'abc123', name: 'John Doe' },
//   'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// };


interface MyUser {
    id: string;
    name: string;
  }
  
  type MyUserMap = Record<string, MyUser>;
  
  const myUsers: MyUserMap = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(myUsers['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
  