// import { useState } from 'react';
// // import '../assests/css/login.css';
import logo from '../../assests/logo.png';
import './signup.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupValidChecker } from '../../assests/styles/signupValidation';
import { useAuth } from '../Context/AuthContext';


const Signup = () => {
    console.log("**********");
    const navigate = useNavigate();
    const { signupPage } = useAuth();
    const [error, setError] = useState({ isError: true })
    const [userDetail, setUserDetail] = useState({ Name: "", Email: "", password: "", Age: "", Phone: "", Gender: "", Pin: "" });

    var redirect = () => {
        navigate("/login")
    }

    useEffect(() => {
        if (!error.isError) {
            signupPage(userDetail);
        }
    }, [error]);


    const inputHandler = (e) => {
        const { name, value } = e
        setUserDetail({ ...userDetail, [name]: value })
    }

    const clickHandler = async () => {
        const error = signupValidChecker(userDetail);
        setError(error)
    };


    return (
        <div className="registration">
            <img src={logo} className="logo" alt="iNoteBook" />

            <div className='form'>
                <div className='input-group'>
                    <label htmlFor='Name'>Name </label>
                    <input type="Name" name="Name" placeholder="username" value={userDetail.Name} onChange={(e) => inputHandler(e.target)} />
                    {error.Name && <div style={{ color: "red" }}>{error.Name}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Email'>Email </label>
                    <input type="Email" name="Email" placeholder="nome@email.com.br" value={userDetail.Email} onChange={(e) => inputHandler(e.target)} />
                    {error.Email && <div style={{ color: "red" }}>{error.Email}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" value={userDetail.password} onChange={(e) => inputHandler(e.target)} />
                    {error.password && <div style={{ color: "red" }}>{error.password}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Age'>Age </label>
                    <input type="Age" name="Age" placeholder="" value={userDetail.Age} onChange={(e) => inputHandler(e.target)} />
                    {error.Age && <div style={{ color: "red" }}>{error.Age}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Phone'>Phone </label>
                    <input type="Phone" name="Phone" placeholder="" value={userDetail.Phone} onChange={(e) => inputHandler(e.target)} />
                    {error.Phone && <div style={{ color: "red" }}>{error.Phone}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Gender'>Gender </label>
                    <input type="Gender" name="Gender" placeholder="" value={userDetail.Gender} onChange={(e) => inputHandler(e.target)} />
                    {error.Gender && <div style={{ color: "red" }}>{error.Gender}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Pin'>Pin </label>
                    <input type="Pin" name="Pin" placeholder="" value={userDetail.Pin} onChange={(e) => inputHandler(e.target)} />
                    {error.Pin && <div style={{ color: "red" }}>{error.Pin}</div>}
                </div>
                <button className='signup-input-btn' onClick={clickHandler}>Signup</button>
            </div>

            <button className='signup-input-btn1' onClick={redirect} >Login</button>
        </div>
    )
};

export default Signup;