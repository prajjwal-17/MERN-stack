import Link from "next/link"

export default function blogsDefault(){
   return <div>
    Hey mate 

    <Link href={`/blogs/1`}>
    <button className="p-4 bg-blue-600 rounded-2xl transition-all hover:bg-red-500 hover:rounded-4xl ease-in-out duration-300" >Go to blogs page</button></Link>
   </div>
}