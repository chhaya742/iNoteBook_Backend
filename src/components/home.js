import React from 'react'
import '../assests/css/home.css'
import About from './About'
import NavBar from './NavBar'
export default function (props) {

    return (
    <>
    <NavBar/>
    <div className='home'>
      
            <div className='noteList'>
            <h5 className='heading'>note1</h5>
                <ul> <li ></li></ul>
            </div>
            <div className='noteList'>
            <h5  className='heading'>note2</h5>
                <ul> <li >chhaya</li></ul>
            </div>
            <div className='noteList'>
            <h5  className='heading'>note3</h5>
                <ul> <li >chhaya</li></ul>
            </div>
            <div className='noteList'>
            <h5  className='heading'>note4</h5>
                <ul> <li ></li></ul>
            </div>
        </div>
    </>
        
    )
}
