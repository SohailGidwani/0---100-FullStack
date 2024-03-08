import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || "",
    });
    if (loading) {
       return <div>
        <Appbar></Appbar>
       <div className="flex justify-center">
        <div>
           <BlogSkeleton/>
           <br />
           <BlogSkeleton/>
           <br />
           <BlogSkeleton/>

        </div>
       </div> 
       </div> 
    }
    return <div>
        <FullBlog blog={blog}></FullBlog>
    </div>
}