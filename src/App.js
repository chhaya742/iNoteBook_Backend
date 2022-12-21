// import logo from './logo.svg';
import {  Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import Notes from './components/notes/addNotes/AddNotes';
import NotesList from './components/notes/notesList/NotesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import ReactTable from './components/ReactTable/ReactTable';
import GetData from './components/GetData/GetData';
import GetPost from './components/GetData/GetPost';
import Signup from './components/Signup/SignupPage';
import ToggleMode from './components/ToggleComponent/Toggle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/create-notes' element={<Notes/>}/>
        <Route path='/table' element={<ReactTable/>}/>
        <Route path='/toggle' element={<ToggleMode/>}/>
        <Route path='/get' element={<GetData/>}/>
        <Route path='/getPost' element={<GetPost/>}/>
        <Route path='/notes-list' element={<NotesList queryString=""/>}></Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={1000} pauseOnHover={false}
      />
    </>
  )
}

export default App;
