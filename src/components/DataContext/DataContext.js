import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data,setData]=useState([]);
    const [post, setPost] = useState([]);

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
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts",{Email,password});
            setPost(result.data)

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
},[])

    return (
        <dataContext.Provider value={{data,post,createPost}}>
            {children}
        </dataContext.Provider>
    )
}

const useData=()=>useContext(dataContext)

export {DataProvider,useData}
