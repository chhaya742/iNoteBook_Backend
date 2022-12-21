import { Link } from "react-router-dom";
import React from 'react';

import { useNavigate } from 'react-router-dom';
import './navBar.css'
import { toast } from "react-toastify";

import { AiOutlineBars } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import mono from '../../assests/image.png';


import { NavDropdown } from 'react-bootstrap'

export default function (props) {
   
    const navigate = useNavigate();
    var handleRedirect = () => {
        localStorage.removeItem("user")
        toast.success("logout Successfully")
        navigate("/login")
    }
    const user = localStorage.getItem("user")

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div>  <img src={mono} className="mono" alt="iNoteBook" /></div>
                <div> {props.search}</div>
                <Link style={{ marginLeft: "1rem" }} className="navbar-brand" to="/">iNote <span className="sr-only">(current)</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{ fontSize: "20px" }}>
                        <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/Signup">Signup</Link></li>*/}
                        <div className="notification-area"> <li className="nav-item"><Link className="nav-link" to="/About"><FiBell /></Link></li></div>
                        <div className="user-profile-dropdown">
                            <NavDropdown title=<AiOutlineBars /> id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"> Signed in as <Link>{JSON.parse(user).userDetials.Name}</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  ><button className="logout" onClick={handleRedirect}> logout</button></NavDropdown.Item>
                            </NavDropdown></div>


                    </ul>

                </div>

            </nav>

        </div>
    );
}