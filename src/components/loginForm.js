import { useState } from 'react';
import '../assests/css/login.css';
import logo from '../assests/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginValidation } from '../assests/styles/signupValidation';
import {toast} from 'react-toastify';

import React from 'react'

export default function () {
    const navigate = useNavigate();
    const [token, setToekn] = useState(['loginToken']);
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const [error, setError] = useState({ isError: true })

    var handleRedirect = () => {
        navigate("/Signup")
    }

    var handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            Email: Email,
            password: password
        }

        const error = loginValidation(data);
        setError(error)
        axios.post('http://localhost:4000/user/login', data)
            .then((response) => {
                setUser(response.data)
                // setCookie('loginToken', response.data.data.token, { path: '/home' });
                console.log(response);
                if (response.data.data.id) {
                    localStorage.setItem("loginToken", response.data.data.token)
                    setToekn(response.data.data.token);
                    navigate("/home")
                } else {
                    // alert(response.data.messages)
                    toast.error(response.data.messages)
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
                    {error.Email && <div style={{ color: "red" }}>{error.Email}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" onChange={(e) => { setPassword(e.target.value) }} />
                    {error.password && <div style={{ color: "red" }}>{error.password}</div>}
                </div>
                <button className='primary' >LogIn</button>
            </form>
            <button className='secondry' onClick={handleRedirect} >Signup</button>

        </div>);
}

