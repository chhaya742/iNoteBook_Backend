import React from 'react'
import { FormControl } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContext';

// import './notesList.css'


export default function NavDropdown() {
  const {setQueryString} = useAuth();
const clickHandler=(e)=>{
  e.preventDefault();
  console.log("dfsd");
}
  return (
    <div>
      <form className="d-flex">
        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e) => setQueryString(e.target.value)} />
        <button variant="outline-success" onClick={clickHandler} >Search</button>
      </form></div>
  )
}
