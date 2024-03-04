import { useEffect, useState } from "react"
import axios from "axios";
import { Backend_URL } from "../config";

interface BlogTypes {
    content: string
    title : string
    id: string
    author: {
        name: string
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