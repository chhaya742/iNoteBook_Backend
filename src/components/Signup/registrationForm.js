// import { useState } from 'react';
// // import '../assests/css/login.css';
import logo from '../../assests/logo.png';
import './signup.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { signupValidChecker } from '../../assests/styles/signupValidation';
import { toast } from 'react-toastify';

export default function () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [pin, setPin] = useState('')
    const [user, setUser] = useState('');
    const [error, setError] = useState({ isError: true });
    const navigate = useNavigate();
    
    var redirect = () => {
        navigate("/login")
    }

    var handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            "Name": name,
            "Email": email,
            "password": password,
            "Age": age,
            "Phone": phone,
            "Gender": gender,
            "Pin": pin
        }
        const error = signupValidChecker(data);
        setError(error);
        
        if (error.isError) {
            return;
        }
        axios.post('http://localhost:4000/user/create', data)
            .then((response) => {
                setUser({userDetails:response.data.data});
                if(response.data.messages.includes('Duplicate')){
                    toast.info("Enter an valid email address");
                }
                else if(response.data.messages.includes('successfully')){
                    toast.success(response.data.messages);
                }
                else{
                    toast.error(response.data.messages)
                }
                if (response.data.data.length > 0) {
                    // localStorage.setItem("user",JSON.stringify({loginToken: response.data.data[1].token}))
                    localStorage.setItem("user",JSON.stringify({userDetials: response.data.data}))
                    navigate("/home")
                }
            })
            .catch((error) => {
                setUser({ errorMessage: error.message });
                toast.error('There was an error!', error)
            });
    }

    return (
        <div className="registration">
            <img src={logo} className="logo" alt="iNoteBook" />
            <form className='form' onSubmit={handleSubmit} >
                <div className='input-group'>
                    <label htmlFor='name'>name </label>
                    <input type="name" name="name" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} />
                    {error.Name && <div style={{color:"red"}}>{error.Name}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="email" placeholder="nome@email.com.br" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.Email && <div style={{color:"red"}}>{error.Email}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error.password && <div style={{color:"red"}}>{error.password}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='age'>Age </label>
                    <input type="age" name="age" placeholder="" value={age} onChange={(e) => setAge(e.target.value)} />
                    {error.Age && <div style={{color:"red"}}>{error.Age}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='phone'>Phone </label>
                    <input type="phone" name="phone" placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {error.Phone && <div style={{color:"red"}}>{error.Phone}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Gender'>Gender </label>
                    <input type="Gender" name="Gender" placeholder="" value={gender} onChange={(e) => setGender(e.target.value)} />
                    {error.Gender && <div style={{color:"red"}}>{error.Gender}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Pin'>Pin </label>
                    <input type="Pin" name="Pin" placeholder="" value={pin} onChange={(e) => setPin(e.target.value)} />
                    {error.Pin && <div style={{color:"red"}}>{error.Pin}</div>}
                </div>
                <button className='signup-input-btn' >Signup</button>
            </form>
            <button className='signup-input-btn1' onClick={redirect} >Login</button>
        </div>
    )
};