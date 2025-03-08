interface TodoType{
    title : string;
    description : string;
    done : boolean;
}

interface TodoInput{
    todo : TodoType;
}

function Todo(props:TodoInput){

}
// <Todo todo={{
//     title:"Go to gym",
//     description : "At time 9 to 10",
//     done : "false"
// }}/> tsx component