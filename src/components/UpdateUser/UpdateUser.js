import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assests/logo.png';
import { signupValidChecker } from '../../assests/styles/signupValidation';

export default function UpdateUser() {
    const [error, setError] = useState({ isError: true })
    const [person, setPerson] = useState({ Name: "chhaya", Email: "chhaya@123", password: "Chhaya@123", Age: "22", Phone: "8754567443", Gender: "female", Pin: "34343" });

    const navigate=useNavigate();
const cancelNavigate=()=>{
    navigate("/notes-list")
}

   const handleInputChange=(e)=>{
    const {name,value}=e
    setPerson({...person,[name]:value})

   }

   const clickHandler = async () => {
    const error = signupValidChecker(person);
    setError(error)
};

    return (
        <div className="registration">
            <img src={logo} className="logo" alt="iNoteBook" />

            <div className='form'>
                <div className='input-group'>
                    <label htmlFor='Name'>Name </label>
                    <input type="Name" name="Name" placeholder="username" value={person.Name} onChange={(e) => handleInputChange(e.target)} />
                    {error.Name && <div style={{ color: "red" }}>{error.Name}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Email'>Email </label>
                    <input type="Email" name="Email" placeholder="nome@email.com.br" value={person.Email} onChange={(e) => handleInputChange(e.target)} />
                    {error.Email && <div style={{ color: "red" }}>{error.Email}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" value={person.password} onChange={(e) => handleInputChange(e.target)} />
                    {error.password && <div style={{ color: "red" }}>{error.password}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Age'>Age </label>
                    <input type="Age" name="Age" placeholder="" value={person.Age} onChange={(e) => handleInputChange(e.target)} />
                    {error.Age && <div style={{ color: "red" }}>{error.Age}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Phone'>Phone </label>
                    <input type="Phone" name="Phone" placeholder="" value={person.Phone} onChange={(e) => handleInputChange(e.target)} />
                    {error.Phone && <div style={{ color: "red" }}>{error.Phone}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Gender'>Gender </label>
                    <input type="Gender" name="Gender" placeholder="" value={person.Gender} onChange={(e) => handleInputChange(e.target)} />
                    {error.Gender && <div style={{ color: "red" }}>{error.Gender}</div>}
                </div>
                <div className='input-group'>
                    <label htmlFor='Pin'>Pin </label>
                    <input type="Pin" name="Pin" placeholder="" value={person.Pin} onChange={(e) => handleInputChange(e.target)} />
                    {error.Pin && <div style={{ color: "red" }}>{error.Pin}</div>}
                </div>
                <button className='signup-input-btn' onClick={clickHandler}>update</button>
            </div>
            <button className='signup-input-btn' onClick={cancelNavigate}>cancel</button>
        </div>
    )
}