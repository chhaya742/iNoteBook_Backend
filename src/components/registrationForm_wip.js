// import { useState } from 'react';
// // import '../assests/css/login.css';
import logo from '../assests/logo.png';
import '../assests/css/signup.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signupValidChecker } from '../assests/styles/signupValidation';
import { toast } from 'react-toastify';



export default function () {

    const [user, setUser] = useState({ Name: "", Email: "", password: "", Age: "", Phone: "", Gender: "", Pin: "" });
    const [error, setError] = useState({ isError: true });
    const navigate = useNavigate();

    var redirect = () => {
        navigate("/login")
    }

    var handleSubmit = (e) => {
        e.preventDefault();

        const error = signupValidChecker(user);
        setError(error);
        
        axios.post('http://localhost:4000/user/create', user)
            .then((response) => {
                if (response.data.data.length > 0) {
                    localStorage.setItem("loginToken", response.data.data[1].token);
                    navigate("/home");
                    toast.success(`successfully signup`);
                    
                }
            })
            .catch((error) => {
                toast.error(`There was an error!, ${error}`);
                console.log(error);
            });
    };

    const inputHandler = (e) => {
        const { name, value } = e;
        setUser({ ...user, [name]: value });
    };

   
    return (
        <div className="registration">
            <img src={logo} className="logo" alt="iNoteBook" />
            <form className='form' onChange={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor='name'>name </label>
                    <input type="name" name="Name" placeholder="username" value={user.Name} onChange={e => inputHandler(e.target)} />
                    {/* {error.Name && <div style={{color:"red"}}>{error.Name}</div>} */}
                </div>
                <div className='input-group'>
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="Email" placeholder="nome@email.com.br" value={user.Email} onChange={e => inputHandler(e.target)} />
                    {/* {error.Email && <div style={{color:"red"}}>{error.Email}</div>} */}
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" placeholder="Chhaya@123" value={user.password} onChange={e => inputHandler(e.target)} />
                    {/* {error.password && <div style={{color:"red"}}>{error.password}</div>} */}
                </div>
                <div className='input-group'>
                    <label htmlFor='age'>Age </label>
                    <input type="age" name="Age" placeholder="" value={user.Age} onChange={e => inputHandler(e.target)} />
                    {/* {error.Age && <div style={{color:"red"}}>{error.Age}</div>} */}
                </div>
                <div className='input-group'>
                    <label htmlFor='phone'>Phone </label>
                    <input type="phone" name="Phone" placeholder="" value={user.Phone} onChange={e => inputHandler(e.target)} />
                    {/* {error.Phone && <div style={{color:"red"}}>{error.Phone}</div>} */}
                </div>
                <div className='input-group'>
                    <label htmlFor='Gender'>Gender </label>
                    <input type="Gender" name="Gender" placeholder="" value={user.Gender} onChange={e => inputHandler(e.target)} />
                    {/* {error.Gender && <div style={{color:"red"}}>{error.Gender}</div>} */}
                </div>
                <div className='input-group'>
                    <label htmlFor='Pin'>Pin </label>
                    <input type="Pin" name="Pin" placeholder="" value={user.Pin} onChange={e => inputHandler(e.target)} />
                    {/* {error.Pin && <div style={{color:"red"}}>{error.Pin}</div>} */}
                </div>
                <button className='primary1' >Signup</button>
            </form>
            <button className='secondry1' onClick={redirect} >Login</button>
        </div>
    )
};

