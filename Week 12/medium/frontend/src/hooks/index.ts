import { useEffect, useState } from "react"
import axios from "axios";
import { Backend_URL } from "../config";

export interface BlogTypes {
    content: string
    title : string
    id: string
    author: {
        name: string
    }
}

export const useBlog = ({id} : {id : String}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogTypes>();
    useEffect(() =>{
        axios.get(`${Backend_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization : "Bearer "   + localStorage.getItem("token")
            }
        }).then(response => {
            setBlog(response.data.post);
            setLoading(false);
        })
    }, [id])
    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogTypes[]>([]);
    useEffect(() =>{
        axios.get(`${Backend_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization : "Bearer "   + localStorage.getItem("token")
            }
        }).then(response => {
            setBlogs(response.data.posts);
            setLoading(false);
        })
    }, [])
    return {
        loading,
        blogs
    }
}