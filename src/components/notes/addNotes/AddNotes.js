import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import NavBar from '../../NavBar';
import './notes.css'
import { toast } from 'react-toastify';
import { notesValidat } from '../../../assests/styles/notesValidation';


export default function () {
    let user_id = localStorage.getItem("user")
    const [file, setFile] = useState();
    const [error, setError] = useState({ isError: true })
    const navigate = useNavigate()
    const [notes, setNotes] = useState({ user_id: JSON.parse(user_id).userDetials.id, Title: "", Description: "", image: "" });
    const redirecHandle=()=>{
        navigate("/notesList")

    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            inputHandler(e.target)
        }
    };

    var addNote = (e) => {
        e.preventDefault();
        console.log(notes);
        const error = notesValidat(notes);
        setError(error)
        
       if( error.isError){
        return;
       }

        axios.post('http://localhost:4000/notes/create', notes)
            .then((response) => {
                console.log(response.data);
                if (response.data.data.length > 0) {
                    toast.success(`create successfully `);
                    navigate("/notesList")
                }
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }
    const inputHandler = (e) => {
        const { name, value } = e;
        setNotes({ ...notes, [name]: value })
    }
    return (
        <div>
            <NavBar />
            <div className='notes'>
                <h3> Notes</h3>
                <form className='form' onSubmit={addNote} >
                <button className='list-note-btn'  onClick={redirecHandle}>notes list</button>
                    <div className='input-group ' >
                        <label htmlFor='Title'>Title </label>
                        <input type="Title" name="Title" value={notes.Title} placeholder="write title  here" onChange={(e) => { inputHandler(e.target) }} />
                        {error.Title && <div style={{ color: "red" }}>{error.Title}</div>}
                    </div>
                    <div className='input-group'>
                        <label htmlFor='Description'>Description </label>
                        <textarea className='Description-text' type="Description" name="Description" value={notes.Description} placeholder="write something here" onChange={(e) => { inputHandler(e.target) }} rows={5} cols={50} />
                    
                        </div>
                    <div className='fileupload'>
                        <label htmlFor='image'>select file </label>
                        <input type="file" name="image" onChange={handleFileChange} />
                    </div>
                    <button className='create-note-btn' >create note</button>
                    
                </form>
            </div>
        </div>
    )
}
