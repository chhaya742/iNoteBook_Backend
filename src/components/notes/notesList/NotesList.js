import React, { useEffect } from 'react'
import NavBar from '../../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import './notesList.css'
import NavDropdown from '../../SearchBar/NotesSearchBar';
import { useAuth } from '../../Context/AuthContext';


const NotesList = (props) => {
  let user_id = localStorage.getItem("user");
  const { listItems, notesList, QueryString } = useAuth();
  console.log("queryString", QueryString);

  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/create-notes")
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
              <div key={element.Title} className='noteList' onClick={handleRedirect} >
                <h5 className='heading'>{element.Title}</h5>
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




