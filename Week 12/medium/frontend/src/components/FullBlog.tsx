import { Appbar } from "./Appbar"
import { BlogTypes } from "../hooks"
import { Avatar } from "./BlogCard"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "./BlogSkeleton"

export const FullBlog = ({ blog }:{blog:BlogTypes}) =>{
    const { loading, blogs } = useBlogs();
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
                <Appbar></Appbar>
                <div className="flex justify-center">
                    <div className="grid grid-cols-12 w-full px-10 pt-12 max-w-screen-xl">
                        <div className="col-span-8">
                            <div className="text-5xl font-extrabold">
                                {blog.title}
                            </div>
                            <div className="text-slate-500 pt-2">
                                Posted on Date
                            </div>
                            <div className="text-xl pt-4">
                                {blog.content}
                            </div>
                        </div>
                        <div className="col-span-4 pl-4">
                            <div className="text-slate-600 text-lg">
                                Author
                            </div>
                            <div className="flex w-full pt-2">
                                <div className="pr-2 flex flex-col justify-start">
                                    <Avatar name={blog.author.name || "Anonymous"}/>
                                </div>
                                <div className="pr-2 flex flex-col justify-start">
                                    <div className="text-xl font-bold">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="text-slate-500 pt-2">
                                        If it has a circuit board, I'm interested. From the intricate workings of a smartphone to the powerful hum of a supercomputer, anything with the potential to process information, connect the world, or simply make our lives easier piques my curiosity.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}