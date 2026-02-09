import axios from "axios";
import Link from "next/link";


export default async function blogPage({params}:any
){
    const postId=(await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data
    return <div>
    Blog Page {postId}
    <br />
    title - {data.title}
    body - {data.body}
    
    <br />

    <Link href={`/blogs/${(Number(postId)+1)}`}>
      <button
  className="
    mt-3
    p-5
    bg-blue-500
    text-white
    rounded-xl
    transition-all
    duration-300
    ease-in-out
    hover:bg-red-500
    hover:rounded-3xl
  "
>
  Next Blog
</button>

    </Link>
    </div>
}