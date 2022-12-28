import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import NavBar from '../../NavBar/NavBar'
import './notes.css'
import { notesValidat } from '../../../assests/styles/notesValidation';
import { useAuth } from '../../Context/AuthContext';


export default function () {
    let user_id = localStorage.getItem("user")
    // console.log(user_id);
    const [file, setFile] = useState();
    const [error, setError] = useState({ isError: true })
    const navigate = useNavigate()
    const [notes, setNotes] = useState({ user_id: JSON.parse(user_id).userDetials.id, Title: "", Description: "", image: "" });
    const { addNotes } = useAuth();

    const redirecHandle = () => {
        navigate("/notes-list")

    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            inputHandler(e.target)
        }
    };
    useEffect(() => {
        if (!error.isError) {
            addNotes(notes);
        }
    }, [error])

    const inputHandler = (e) => {
        const { name, value } = e;
        setNotes({ ...notes, [name]: value })
    }

    const clickHandler = () => {
        const error = notesValidat(notes);
        setError(error);
    }
    return (
        <div>
            <NavBar />
            <div className='notes'>
                <h3> Notes</h3>
                <div className='form'>
                    <button className='list-note-btn' onClick={redirecHandle}>notes list</button>
                    <div className='notes-input-group' >
                        <label htmlFor='Title'>Title </label>
                        <input type="Title" name="Title" value={notes.Title} placeholder="write title  here" onChange={(e) => { inputHandler(e.target) }} />
                        {error.Title && <div style={{ color: "red" }}>{error.Title}</div>}
                    </div>
                    <div className='notes-input-group'>
                        <label htmlFor='Description'>Description </label>
                        <textarea className='Description-text' type="Description" name="Description" value={notes.Description} placeholder="write something here" onChange={(e) => { inputHandler(e.target) }} rows={5} cols={50} />

                    </div>
                    <div className='fileupload'>
                        <label htmlFor='image'>select file </label>
                        <input type="file" name="image" onChange={handleFileChange} />
                    </div>
                    <button className='create-note-btn' onClick={clickHandler} >create note</button>
                   
                </div>

            </div>
        </div>
    )
}
