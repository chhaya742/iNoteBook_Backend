import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assests/logo.png';
import { signupValidChecker } from '../../assests/styles/signupValidation';
import { useAuth } from '../Context/AuthContext';

export default function UpdateUser() {

    // <input className='form-control select-input placeholder-active active' type="Gender" name="Gender" placeholder="" value={person.Gender} onChange={(e) => handleInputChange(e.target)} />

    const [error, setError] = useState({ isError: true })
    const { updateUser } = useAuth();
    const user = localStorage.getItem("user");
    const userDetials = JSON.parse(user).userDetials

    const [person, setPerson] = useState({ id: userDetials.id, FirstName: userDetials.FirstName, LastName: userDetials.LastName, Email: userDetials.Email, password: userDetials.password, Age: userDetials.Age, Phone: userDetials.Phone, Gender: userDetials.Gender, Pin: userDetials.Pin, Address: userDetials.Address });

    const navigate = useNavigate();
    const cancelNavigate = () => {
        navigate("/notes-list")
    }

    useEffect(() => {
        if (!error.isError) {
            updateUser(person);
        }
    }, [error]);

    const handleInputChange = (e) => {
        const { name, value } = e
        setPerson({ ...person, [name]: value })

    }

    const clickHandler = async () => {
        const error = signupValidChecker(person);
        setError(error)
    };

    return (
        <div className="registration">
            <img src={logo} className="logo" alt="iNoteBook" />


            <div className='form'>

                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='FirstName'>FirstName
                            <input className='form-control select-input placeholder-active active' type="FirstName" name="FirstName" placeholder="FirstName" value={person.FirstName} onChange={(e) => handleInputChange(e.target)} />
                            {error.FirstName && <div style={{ color: "red" }}>{error.FirstName}</div>}
                        </label>

                    </div>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='LastName'>LastName
                            <input className='form-control select-input placeholder-active active' type="LastName" name="LastName" placeholder="LastName" value={person.LastName} onChange={(e) => handleInputChange(e.target)} />
                            {error.LastName && <div style={{ color: "red" }}>{error.LastName}</div>}
                        </label>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='Email'>Email
                            <input className='form-control select-input placeholder-active active' type="Email" name="Email" placeholder="nome@email.com.br" value={person.Email} onChange={(e) => handleInputChange(e.target)} />
                            {error.Email && <div style={{ color: "red" }}>{error.Email}</div>}
                        </label>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='password'>Password
                            <input className='form-control select-input placeholder-active active' type="password" name="password" placeholder="Chhaya@123" value={person.password} onChange={(e) => handleInputChange(e.target)} />
                            {error.password && <div style={{ color: "red" }}>{error.password}</div>}
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='Age'>Age
                            <input className='form-control select-input placeholder-active active' type="Age" name="Age" placeholder="" value={person.Age} onChange={(e) => handleInputChange(e.target)} />
                            {error.Age && <div style={{ color: "red" }}>{error.Age}</div>}
                        </label>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='Phone'>Phone
                            <input className='form-control select-input placeholder-active active' type="Phone" name="Phone" placeholder="" value={person.Phone} onChange={(e) => handleInputChange(e.target)} />
                            {error.Phone && <div style={{ color: "red" }}>{error.Phone}</div>}
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 mb-4">
                        <label htmlFor='Pin'>Gender
                            <select  className='form-control select-input placeholder-active active' style={{width:"162px"}} name="Gender" value={person.Gender} onChange={(e) => handleInputChange(e.target)}>
                            <option></option>
                                <option>male</option>
                                <option>female</option>
                                <option>other</option>

                            </select>
                            {error.Gender && <div style={{ color: "red" }}>{error.Gender}</div>}
                        </label>

                    </div>
                    <div className='col-md-6 mb-4'>
                        <label htmlFor='Pin'>Pin
                            <input className='form-control select-input placeholder-active active' type="Pin" name="Pin" placeholder="" value={person.Pin} onChange={(e) => handleInputChange(e.target)} />
                            {error.Pin && <div style={{ color: "red" }}>{error.Pin}</div>}
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <div className='form-outline'>
                            <label htmlFor='Address'>Address
                                <input className='form-control select-input placeholder-active active' type="Address" name="Address" placeholder="" value={person.Address} onChange={(e) => handleInputChange(e.target)} />
                                {error.Address && <div style={{ color: "red" }}>{error.Address}</div>}
                            </label>
                        </div>

                    </div>
                </div>
                <button className='btn btn-success btn-lg mb-1' onClick={clickHandler}>save</button>
                <button className='btn btn-primary btn-lg mb-1' style={{ float: "right" }} onClick={cancelNavigate} >cancel</button>

            </div>

        </div>
    )
}