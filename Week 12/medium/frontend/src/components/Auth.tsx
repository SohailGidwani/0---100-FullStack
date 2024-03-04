import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@sohailgidwani05/medium-common";
import axios from "axios";
import { Backend_URL } from "../config";

export const Auth = ({ type } : {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    });
    async function sendRequest(){
        try {
            const response = await axios.post(`${Backend_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt.jwt);
            navigate("/blog/bulk")     
        } catch (error) {
            alert("Error: something went wrong while signing up");
        }
       

    }
    return <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                    <div>
                            <div className="px-10">
                                <div className="text-3xl font-extrabold">
                                    {type === "signup" ?"Create an account":"Signin with email"}
                                </div>
                                <div className="text-slate-400">
                                    {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                                    <Link to={type === "signup" ? "/signin" : "/signup"} className="pl-2 underline">{type === "signup"? "Signin":"Signup Here"}</Link>
                                </div>
                            </div>
                            <div className="pt-4">{type === "signup"? 
                                <LabelledInput label="Name" placeholder="Your full name...." onChange={(e)=>{
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    })
                                }
                                }/> : null}
                                <LabelledInput label="Email ID" placeholder="Your Email ID...." onChange={(e)=>{
                                    setPostInputs({
                                        ...postInputs,
                                        email: e.target.value
                                    })
                                }
                                }/> 
                                <LabelledInput label="Pasword" type="password" placeholder="Your Pasword...." onChange={(e)=>{
                                    setPostInputs({
                                        ...postInputs,
                                        password: e.target.value
                                    })
                                }
                                }/>
                            <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type === "signup" ? "Sign Up" : "Sign In"}</button> 
                        </div>
                    </div>
                </div>
            </div>
}

interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;

}

function LabelledInput( {label, placeholder, onChange, type} : LabelledInputType){
    return <div>
            <label className="block mb-2 text-sm font-semibold text-black pt-2">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
}