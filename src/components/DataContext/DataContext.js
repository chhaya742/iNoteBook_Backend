import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data,setData]=useState([]);
    const [post, setPost] = useState([]);
    const [postDetails,setPostDetails]=useState()

    const getPost = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPost(result.data)

        } catch (error) {
            console.log(error);
        }
    }


    const createPost = async (Email,password) => {
        try {
            const result = await axios.get("http://localhost:4000/user/login",{Email,password});
            setPostDetails(result.data)

        } catch (error) {
            console.log(error);
        }
    }


   const getData= async()=>{
        try {
            const response= await axios.get("https://jsonplaceholder.typicode.com/users");

            setData(response.data)
        } catch (error) {
            console.log(error);
            
        }
    }


useEffect(()=>{
    getPost()
    getData()
    createPost()
},[])

    return (
        <dataContext.Provider value={{data,post,postDetails,createPost}}>
            {children}
        </dataContext.Provider>
    )
}

const useData=()=>useContext(dataContext)

export {DataProvider,useData}
