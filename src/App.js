// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import Notes from './components/notes/addNotes/AddNotes';
import NotesList from './components/notes/notesList/NotesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import RegistrationForm from './components/Signup/registrationForm';
import ReactTable from './components/ReactTable/ReactTable';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Signup" element={<RegistrationForm/>} />
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/Notes' element={<Notes/>}/>
        <Route path='/table' element={<ReactTable/>}/>
        <Route path='/notesList' element={<NotesList/>}></Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={1000} pauseOnHover={false}
      />
    </>
  )
}

export default App;
