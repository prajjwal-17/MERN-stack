import axios from "axios";

export default async function BlogPages({params}:any){
    const postId=(await params).blogId;
    return <div>
        Catch all Segements <br />
        Blog Page {JSON.stringify(postId)}
    </div>
}