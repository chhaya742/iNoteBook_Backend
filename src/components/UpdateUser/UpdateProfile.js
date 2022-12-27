import React, { useState } from 'react'
import { AiOutlinePlusSquare, AiOutlineGithub } from "react-icons/ai";
import { ImSphere } from "react-icons/im";
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { useNavigate } from 'react-router';


export default function UpdateProfile() {
    const navigate=useNavigate();
    const [person, setPerson] = useState({ id: "", FirstName: "Prem", LastName: "Parmar", Email: "premparmar@gmail.com", password: "Prem@123", Age: "17", Phone: "8798763456", Gender: "male ", Pin: "12345", Address: "Ahmdabad", Image: "" });
    const [bio, setBio] = useState({ Role: "Full Stack Developer", BioData: "Bay Area, San Francisco, CA", Website: "https://mdbootst", Github: "mdbootstrap", Instagram: "@mdbootstrap", Twitter: "mdbootstrap", Facebook: "mdbootstrap" });

    const handleInputChange = (e) => {
        const { name, value } = e
        setPerson({ ...person, [name]: value })

    }
    const cancelNavigate = () => {
        navigate("/notes-list")
    }
    const handleBioChange = (e) => {
        const { name, value } = e
        setBio({ ...bio, [name]: value })

    }
    console.log(person);


    return (
        <div>
            <div style={{ paddingTop: "3rem; padding-bottom: 3rem" }}>
                <section style={{ backgroundColor: " rgb(238, 238, 238)" }}>
                    <div className="container py-5" style={{ maxWidth: "905px" }}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <label >
                                            <img className="img-fluid rounded-circle" src="/static/media/profile.dd6f4668c7d7c8df8e36.png" alt="avatar" style={{ width: "150px" }} />

                                            <input style={{ width: "0px" }} id="photo-upload" type="file" name='Image' value={person.Image} onChange={(e) => handleInputChange(e.target)} />
                                            <AiOutlinePlusSquare />
                                        </label>

                                        <input style={{ border: "aliceblue" }} className="text-muted mb-1" type="Role" name="Role" placeholder="Role" value={bio.Role} onChange={(e) => handleBioChange(e.target)} />
                                        <input style={{ border: "aliceblue" }} className="text-muted mb-4" type="BioData" name="BioData" placeholder="BioData" value={bio.BioData} onChange={(e) => handleBioChange(e.target)} />
                                        

                                        <div className="d-flex justify-content-center mb-2">
                                            <button className="ripple ripple-surface btn btn-primary" role="button">Follow</button>
                                            <button className="ripple ripple-surface btn btn-outline-primary ms-1" role="button">Message</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="card mb-4 mb-lg-0" >
                                    <div className="card-body p-0">
                                        <ul className="list-group rounded-3" >
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-">
                                                <div className='icon'><ImSphere style={{
                                                    color: '#333333', width: "62px",
                                                    height: "25px"
                                                }} /></div>

                                                <input style={{ border: "aliceblue" }} className="card-text" type="Website" name="Website" placeholder="Website" value={bio.Website} onChange={(e) => handleBioChange(e.target)} />
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <div className='icon'><AiOutlineGithub style={{
                                                    color: '#333333', width: "62px",
                                                    height: "25px"
                                                }} /></div>
                                                <input style={{ border: "aliceblue" }} className="card-text" type="Github" name="Github" placeholder="Github" value={bio.Github} onChange={(e) => handleBioChange(e.target)} />
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <div className='icon'>   <TiSocialTwitter style={{
                                                    color: '#333333', width: "62px",
                                                    height: "25px"
                                                }} /></div>
                                                <input style={{ border: "aliceblue" }} className="card-text" type="Instagram" name="Instagram" placeholder="Instagram" value={bio.Instagram} onChange={(e) => handleBioChange(e.target)} />
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <div className='icon'>   <TiSocialInstagram style={{
                                                    color: '#333333', width: "62px",
                                                    height: "25px"
                                                }} /></div>
                                                <input style={{ border: "aliceblue" }} className="card-text" type="Twitter" name="Twitter" placeholder="Twitter" value={bio.Twitter} onChange={(e) => handleBioChange(e.target)} />
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <div className='icon'>   <TiSocialFacebook style={{
                                                    color: '#333333', width: "62px",
                                                    height: "25px"
                                                }} /></div>
                                                <input style={{ border: "aliceblue" }} className="card-text" type="Facebook" name="Facebook" placeholder="Facebook" value={bio.Facebook} onChange={(e) => handleBioChange(e.target)} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">

                                                <p className="card-text">Full Name</p>
                                            </div><div className="col-sm-9">

                                                <input style={{ border: "aliceblue" }} className="card-text text-muted" type="FirstName" name="FirstName" placeholder="FirstName" value={person.FirstName} onChange={(e) => handleInputChange(e.target)} />
                                            </div>

                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="card-text">LastName</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input style={{ border: "aliceblue" }} className="card-text text-muted" type="LastName" name="LastName" placeholder="LastName" value={person.LastName} onChange={(e) => handleInputChange(e.target)} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="card-text">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input style={{ border: "aliceblue" }} className="card-text text-muted" type="Email" name="Email" placeholder="Email" value={person.Email} onChange={(e) => handleInputChange(e.target)} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="card-text">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input style={{ border: "aliceblue" }} className="card-text text-muted" type="Phone" name="Phone" placeholder="Phone" value={person.Phone} onChange={(e) => handleInputChange(e.target)} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="card-text">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input style={{ border: "aliceblue" }} className="card-text text-muted" type="Address" name="Address" placeholder="Address" value={person.Address} onChange={(e) => handleInputChange(e.target)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="card-text mb-4"><span className="text-primary font-italic me-1">assigment</span>Project Status</p>
                                                <p className="card-text mb-1" style={{ fontSize: "0.77rem" }}>Web Design</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>Website Markup</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ width: "72%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>One Page</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: "89%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>Mobile Template</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>Backend API</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style={{ width: "66%" }}></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="card-text mb-4">
                                                    <span className="text-primary font-italic me-1">assigment</span> Project Status</p>
                                                <p className="card-text mb-1" style={{ fontSize: "0.77rem" }}>Web Design</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "88%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>Website Markup</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ width: "72%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>One Page</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: "89%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>Mobile Template</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" sstyle={{ width: "55%" }}></div>
                                                </div>
                                                <p className="card-text mt-4 mb-1" style={{ fontSize: "0.77rem" }}>Backend API</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style={{ width: "66%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ float: "right", borderRadius: "5px", border: "none", cursor: "pointer", fontFamily: "&quot;Open Sans&quot;, sansSerif", backgroundColor: "white", color: "black", marginTop: "30px" }}>   update</button>
                        <button style={{ borderRadius: "5px", border: "none", cursor: "pointer", fontFamily: "&quot;Open Sans&quot;, sansSerif", backgroundColor: "black", color: "white", marginTop: "30px" }} onClick={cancelNavigate}> back</button>
                    </div>
                </section>
            </div>

        </div>
    )
}

