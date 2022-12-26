import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router';

import { notesValidat } from '../../assests/styles/notesValidation';
import './addNotes/notes.css'
import NavBar from '../NavBar/NavBar'
import { useAuth } from '../Context/AuthContext';


export default function UpdateNotes() {
    let user_id = localStorage.getItem("user")
   const {deleteNote,noteId,data,updateNote}= useAuth();
//    console.log(data);
    const [error, setError] = useState({ isError: true })
    const [file, setFile] = useState();
    const [note, setNote] = useState({id:data[0].id, user_id: JSON.parse(user_id).userDetials.id, Title: data[0].Title, Description: data[0].Description, image: data[0].image});

    const navigate = useNavigate();
    const redirecHandle = () => {
        navigate("/notes-list")
    }

    const inputHandler = (e) => {
        const { name, value } = e
        setNote({ ...note, [name]: value })

    }

    useEffect(() => {
        if (!error.isError) {
            updateNote(note);
        }
    }, [error])

    const clickHandler = async () => {
        const error = notesValidat(note);
        setError(error)
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            inputHandler(e.target)
        }
    };
    return (
        <div>
            <NavBar />
            <div className='notes'>
                <h3> Notes</h3>
                <div className='form'>
                 
                    <div className='notes-input-group' >
                        <label htmlFor='Title'>Title </label>
                        <input type="Title" name="Title" value={note.Title} placeholder="write title  here" onChange={(e) => { inputHandler(e.target) }} />
                        {error.Title && <div style={{ color: "red" }}>{error.Title}</div>}
                    </div>
                    <div className='notes-input-group'>
                        <label htmlFor='Description'>Description </label>
                        <textarea className='Description-text' type="Description" name="Description" value={note.Description} placeholder="write something here" onChange={(e) => { inputHandler(e.target) }} rows={5} cols={50} />

                    </div>
                    <div className='fileupload'>
                        <label htmlFor='image'>select file </label>
                        <input type="file" name="image" onChange={handleFileChange} />
                    </div>
                    <button className='create-note-btn' onClick={clickHandler} >update</button>
                    <button className='list-note-btn' onClick={redirecHandle}>cancel</button>

                </div>

            </div>
        </div>
    )
}