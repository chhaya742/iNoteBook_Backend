// import { useState } from 'react';
// // import '../assests/css/login.css';
import logo from '../assests/logo.png';
import '../assests/css/signup.css'
import { useState } from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
import validate from '../validation/signupform';
export default function () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [pin, setPin] = useState('')
    const [user, setUser] = useState('');



   const navigate=useNavigate();
 
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
        axios.post('http://localhost:4000/user/create', data)
            .then((response) => {
                setUser(response.data)
            validate();
                if (response.statusText) {
                    navigate("/home")
                }
            })
            .catch((error) => {
                setUser({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (
        <div className="registration">
            <img src={logo} className="logo" alt="iNoteBook" />
            <form className='form' onSubmit={handleSubmit} >
                <div className='input-group'>
                    <label htmlFor='name'>name </label>
                    <input type="name" name="name" placeholder="username" value={name} onChange={(e) => setName(e.target.value) } />
                </div>
                <div className='input-group'>
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="email" placeholder="nome@email.com.br" value={email} onChange={(e) => setEmail(e.target.value) } />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" value={password} onChange={(e) =>setPassword(e.target.value)} />
                </div>
                <div className='input-group'>
                    <label htmlFor='age'>Age </label>
                    <input type="age" name="age" placeholder=""  value={age} onChange={(e) => setAge(e.target.value) } />
                </div>
                <div className='input-group'>
                    <label htmlFor='phone'>Phone </label>
                    <input type="phone" name="phone" placeholder="" value={phone} onChange={(e) =>  setPhone(e.target.value) } />
                </div>
                <div className='input-group'>
                    <label htmlFor='Gender'>Gender </label>
                    <input type="Gender" name="Gender" placeholder="" value={gender} onChange={(e) =>  setGender(e.target.value) } />
                </div>
                <div className='input-group'>
                    <label htmlFor='Pin'>Pin </label>
                    <input type="Pin" name="Pin" placeholder="" value={pin} onChange={(e) =>  setPin(e.target.value) }/>
                </div>
                <button className='primary1' >Signup</button>
            </form>

        </div>
    )
};

