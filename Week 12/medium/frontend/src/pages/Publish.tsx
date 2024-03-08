import { Appbar } from "../components/Appbar"
import axios from "axios"
import { Backend_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Publish = () =>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    
    return <div>
            <Appbar/>
            <div className="flex justify-center w-full pt-5 px-2">
                    <div className="max-w-screen-lg w-full">
                        <input onChange={(e)=>{
                            setTitle(e.target.value);
                        }} type="text"className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none" placeholder="Title goes here...." required/>
                        <TextEditor onChange={(e)=>{
                            setContent(e.target.value);
                        }}/>
                        <div className="flex items-center justify-between pr-3 py-2">
                            <button onClick={async () => {
                               const response = await axios.post(`${Backend_URL}/api/v1/blog`,{
                                title: title,
                                content: content,
                               },{
                                headers: {
                                    Authorization : "Bearer "   + localStorage.getItem("token")
                                }
                               });
                               navigate(`/blog/${response.data.id}`);
                            }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 ">
                                Post blog
                            </button>
                    </div>
                    </div>
            </div>
    </div>
}

function TextEditor({onChange} : {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <form className="pt-4">
            <div className="w-full mb-4 border-0 border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-gray-50 rounded-lg ">
                    <textarea onChange={onChange} className="bg-gray-50 w-full px-0 text-sm text-gray-900 border-0 focus:outline-none" placeholder="Add your thoughts here ..." required />
                </div>
            </div>
        </form>
}