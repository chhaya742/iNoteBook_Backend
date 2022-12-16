import React from 'react'
import './home.css';
import NotesList from '../notes/notesList/NotesList';
import LoginForm from '../Login/LoginForm';


export default function () {
    const user=localStorage.getItem("user")
  
    return (
        <>
        {user ?<NotesList/>:<LoginForm/>}
        </>

    )
}
