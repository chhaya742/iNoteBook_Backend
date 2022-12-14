import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import NavBar from './NavBar';
import '../assests/css/notes.css'

export default function () {
    const [file, setFile] = useState();
    const navigate = useNavigate()
    const [notes, setNotes] = useState({ Title: "", Description: "", image: "" });
    const handleRedirect = () => {
        navigate("/Notes")

    }
    const handleFileChange = (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };
         
    var addNote = (e) => {
        e.preventDefault();
        if (!file) {
            return;
          }
        console.log(notes);
        axios.post('http://localhost:4000/user/create', notes)
            .then((response) => {
                console.log(response.data.data);
                if (response.data.data.length > 0) {
                    console.log(response.data.data);
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
        <div className='iApp'>
        <h3> Notes</h3>
        <form className='form' onSubmit={addNote} >
            <div className='input-group'>
                <label htmlFor='Title'>Title </label>
                <input type="Title" name="Title"  value={notes.Title} placeholder="write title  here" onChange={(e) => {inputHandler(e.target)}} />
            </div>
            <div className='input-group'>
                <label htmlFor='Description'>Description </label>
                <textarea type="Description" name="Description"   value={notes.Description}  placeholder="write something here" onChange={(e) => { inputHandler(e.target) }} rows={5} cols={50} />
            </div>
          <div className='fileupload'>
          <label htmlFor='image'>select file </label>
          <input type="file" onChange={handleFileChange} />
          </div>
           
      
            <button className='primary' >create note</button>
        </form>
        </div>
        </div>
    )
}


// <div>
// <NavBar />
// <div className='notes'>
//     <div className='add-notes'>
//         <h2>Notes</h2>
//         <div className='input-group'>
//         <lable htmlFor="title">enter title
//             <input type="title" name="title" value={notes.Title} required placeholder="write a title" onChange={(e) => inputHandler(e.target)} />
//         </lable>
//         </div>
//     </div>
//     <button className='addnote' onChange={addNote}>create note </button>
// </div>
// </div>