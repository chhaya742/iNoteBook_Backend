import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const NotesList=()=>{
  
  console.log("dfsdf");
  const [listItems, setListItems] = useState()
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
      setListItems(response.data.data.map((element) =>
        <div className='noteList' onClick={handleRedirect}>
          <h5 className='heading'>{element.Title}</h5>
          <ul>
            <li value={element.id}>{element.Description}</li>
          </ul>
        </div>
      ))

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
      <NavBar />
      <div className='home'>
        {listItems}
        <button onClick={handleRedirect}>add</button>
      </div>
    </>
  )


}
 export default NotesList;




