import {React,useState,useEffect} from 'react'
import { FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import NotesList from '../notes/notesList/NotesList';

// import './notesList.css'


export default function NavDropdown() {
    const [QueryString, setQueryString] = useState("")
    const [listItems, setListItems] = useState()
    let user_id = localStorage.getItem("user");
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/Notes")
      }

    function notesHandle(e) {
        e.preventDefault();

        const data = {
          user_id: JSON.parse(user_id).userDetials.id,
          page: "",
          limit: "",
          query_string: QueryString
        }
        console.log(data);
        axios.post('http://localhost:4000/user/notes', data)
          .then((response) => {
            console.log(response.data.data);
            localStorage.setItem("searchNotes", JSON.stringify(response.data.data))
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
    //   useEffect(() => {
    //     notesHandle();
    //   }, []);
   
    return (
        <div>
        <form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e) => setQueryString(e.target.value)} />
            <button variant="outline-success" onClick={notesHandle} >Search</button>
        </form></div>
    )
}
