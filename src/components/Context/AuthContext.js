import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [noteId, setNoteId] = useState([]);
    const [login, setLogin] = useState([]);
    const [user, setUser] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [notes, setNotes] = useState([]);
    const [QueryString, setQueryString] = useState("");
    const [deletenote, setDeleteNotes] = useState("");
    const [data, setData] = useState([]);
    const [updatenotes, setUpdatenotes] = useState();
    const [updateuser, setUpdateUser] = useState();


    const loginPage = async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/user/login", data);
            if (response.data.status) {
                console.log(response.data.data);
                setLogin(response.data.data)
                // console.log(response.data.data.token);
                localStorage.setItem("authToken", response.data.data.token);
                localStorage.setItem("user", JSON.stringify({ userDetials: response.data.data }));
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
                toast.success(response.data.messages)
                // console.log( response.data.data);
                localStorage.setItem("authToken", response.data.data.token);
                localStorage.setItem("user", JSON.stringify({ userDetials: response.data.data }));
                navigate("/notes-list")

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

    const deleteNote = async (data) => {
        // console.log(data);
        try {
            const response = await axios.post("http://localhost:4000/notes/delete", data);
            // console.log(response.data);
            if (response.data.status) {
                setDeleteNotes(response.data.data)
                // navigate("/notes-list")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getNotesByID = async (id) => {
        // console.log(id);
        try {
            const response = await axios.post("http://localhost:4000/notes/get/", { id: id });
            // console.log(response.data);
            if (response.data.status) {
                setData(response.data.data)
                // navigate("/notes-list")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }

    }

    const updateNote = async (id) => {
        // console.log(id);
        try {
            const response = await axios.post("http://localhost:4000/notes/get", { id: id });
            // console.log(response.data);
            if (response.data.status) {
                setUpdatenotes(response.data.data)
                // navigate("/notes-list")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async (userData) => {
        console.log(userData);
        try {
            const response = await axios.post("http://localhost:4000/user/update", userData);
            // console.log(response.data);
            if (response.data.status) {
                setUpdateUser(response.data.data)
                navigate("/user-profile")
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ loginPage, signupPage, listItems, notesList, addNotes, setQueryString, QueryString, deleteNote, noteId, setNoteId, data, getNotesByID, updateNote ,updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }