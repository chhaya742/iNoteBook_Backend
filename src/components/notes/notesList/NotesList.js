import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import './notesList.css'
import NavDropdown from '../../SearchBar/NotesSearchBar';
import { useAuth } from '../../Context/AuthContext';
import { FaTrash, FaTimes } from "react-icons/fa";
import UpdateNotes from '../UpdateNotes';

const NotesList = () => {
  let user_id = localStorage.getItem("user");
  const { listItems, notesList, QueryString, deleteNote ,setNoteId,getNotesByID} = useAuth();

  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/create-notes")
  }
  const update = () => {
    if (document.querySelectorAll(".noteList li")) {
      document.querySelectorAll(".noteList li").forEach((el) => {
        console.log(el.getAttribute("value"));

        setNoteId(el.getAttribute("value"))
        getNotesByID(el.getAttribute("value"));
      })
    }
   
    navigate("/notes/update-note")
  }
  const data = {
    user_id: JSON.parse(user_id).userDetials.id,
    page: "",
    limit: "",
    query_string: QueryString
  }
  useEffect(() => {
    notesList(data);
  }, [QueryString]);

  return (
    <>
      <NavBar search=<NavDropdown /> />
      <div className='home'>
        {listItems.map((element) => {
          return (
            <div key={element.id} className='noteList' >
              <button type="button" className="close" aria-label="Close" aria-hidden="true" onClick={(e) => { if (window.confirm("Are you sure?")) { deleteNote({ id: element.id }); window.location.reload(); } }}> <FaTimes /> </button>
              <h5 className='heading' onClick={update} >{element.Title}</h5>

              <ul>
                <li value={element.id}>{element.Description}</li>
              </ul>
            </div>
          )
        }
        )}
        <button className='add-notes' onClick={handleRedirect}>Add note</button>
      </div>

    </>
  )


}
export default NotesList;




