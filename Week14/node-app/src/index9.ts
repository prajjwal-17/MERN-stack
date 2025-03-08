function greeter(user:{
    name : string,
    age : number
}){
  console.log("hello ",user.name);
}
greeter({
    name : "Prajjwal",
    age : 21
});