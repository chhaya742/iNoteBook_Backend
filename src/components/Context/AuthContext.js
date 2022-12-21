import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
         
    const navigate = useNavigate();
    const [login, setLogin] = useState([]);
    const [user,setUser] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [notes, setNotes] = useState([]);
    const [QueryString, setQueryString] = useState("")

    
    const loginPage = async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/user/login", data);
            if (response.data.status) {
                setLogin(response.data)
                localStorage.setItem("authToken", response.data.data.token);
                localStorage.setItem("user",JSON.stringify({userDetials: response.data.data}));
                navigate("/notes-list");
            } else {
                toast.error(response.data.messages);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signupPage = async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/user/create", data);
            if (response.data.status) {
                setUser(response.data)
                localStorage.setItem("authToken", response.data.data.token);
                localStorage.setItem("user",JSON.stringify({userDetials: response.data.data}));
                navigate("/NotesList")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const notesList = async (data) => {
       
        try {
            const response = await axios.post("http://localhost:4000/user/notes", data);
            if (response.data.status) {
                setListItems(response.data.data)
                navigate("/notes-list")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addNotes = async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/notes/create", data);
            if (response.data.status) {
                setNotes(response.data.data)
                navigate("/notes-list")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ loginPage ,signupPage,listItems,notesList,addNotes,setQueryString,QueryString}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }