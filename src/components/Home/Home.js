import React from 'react'
import './home.css';
import NotesList from '../Notes/notesList/NotesList';
import LoginForm from '../Login/LoginForm';


export default function () {
    const user=localStorage.getItem("user")
    // console.log(user);
  
    return (
        <>
        {user ?<NotesList queryString=""/>:<LoginForm/>}
        </>

    )
}
