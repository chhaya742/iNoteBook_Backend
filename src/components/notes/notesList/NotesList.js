import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './notesList.css'
import NavDropdown from '../../SearchBar/NotesSearchBar';


const NotesList=(props)=>{
  const [listItems, setListItems] = useState([])
  let user_id = localStorage.getItem("user");
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/Notes")
  }
function notesHandle() {
  const data = {
    user_id: JSON.parse(user_id).userDetials.id,
    page: "",
    limit: "",
    query_string: ""
  }
  axios.post('http://localhost:4000/user/notes', data)
    .then((response) => {
      localStorage.getItem("searchNotes")
      // console.log( localStorage.getItem("searchNotes"));
      setListItems(response.data.data)
      // .map((element) =>
      //   <div className='noteList' onClick={handleRedirect}>
      //     <h5 className='heading'>{element.Title}</h5>
      //     <ul>
      //       <li value={element.id}>{element.Description}</li>
      //     </ul>
      //   </div>
      // ))

    })
    .catch((error) => {
      toast.error(error.message)

    });
  
}
useEffect(() => {
  notesHandle();
}, []);

  return (
    <>
      <NavBar search= <NavDropdown/>/>
      <div className='home'>
        {listItems.map((element) =>
        <div className='noteList' onClick={handleRedirect}>
          <h5 className='heading'>{element.Title}</h5>
          <ul>
            <li value={element.id}>{element.Description}</li>
          </ul>
        </div>
      )}
        <button className='add-notes' onClick={handleRedirect}>Add note</button>
      </div>
    </>
  )


}
 export default NotesList;




