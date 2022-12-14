import { useState } from 'react';
import '../assests/css/login.css';
import logo from '../assests/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import React from 'react'

export default function () {
    const navigate = useNavigate();
    const [token, setToekn] = useState(['loginToken']);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    
    var handleRedirect = () => {
        navigate("/Signup")
    }

    var handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            Email: email,
            password: password
        }
        axios.post('http://localhost:4000/user/login', data)
            .then((response) => {
                setUser(response.data)
                // setCookie('loginToken', response.data.data.token, { path: '/home' });
                console.log(response);
                if (response.data.data.id) {
                    localStorage.setItem("loginToken",response.data.data.token)
                    setToekn(response.data.data.token);
                    navigate("/home")
                }else{
                    alert(response.data.messages)
                }
            })
            .catch((error) => {
                setUser({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    return (
        <div className="iApp">
            <img src={logo} className="logo" alt="iNoteBook" />
            <form className='form' onSubmit={handleSubmit} >
                <div className='input-group'>
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="email" placeholder="nome@email.com.br" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button className='primary' >LogIn</button>
            </form>
            <button className='secondry' onClick={handleRedirect} >Signup</button>
            
        </div>);
}

