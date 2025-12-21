import axios from "axios";

async function getBlogs(){
    const response  =await axios.get("https://jsonplaceholder.typicode.com/todos") // assum our own backend
    return response.data;
}

export default async function Blogs(){
    const blogs=await getBlogs();
    return <div>
        {blogs.map((blog: ITodo) => (
  <Todo
    key={blog.title}
    title={blog.title}
    completed={blog.completed}
  />
))}

    </div>
}

interface ITodo{
    title : string;
    completed : boolean;
}

function Todo({title , completed}  : ITodo){
    return <div className="text-amber-200">
        {title} {completed  ? "Done" : "Not Done"}
    </div>
}