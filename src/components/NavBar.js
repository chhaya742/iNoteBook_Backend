
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import {useNavigate } from 'react-router-dom';
import loginForm from "./loginForm";


export default function () {
    const navigate = useNavigate();
    var handleRedirect = () => {
        navigate("/login")
    }

    return (
        <div><nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">iNote <span className="sr-only">(current)</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                

                    <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" to="/Signup">Signup</Link></li>*/}
                    <button className="logout" onClick={handleRedirect} onClickCapture={loginForm.logout}>logout</button>
                </ul>
            </div>
        </nav></div>
    )

}