interface Users {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})