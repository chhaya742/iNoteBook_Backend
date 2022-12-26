// import logo from './logo.svg';
import {  Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import LoginForm from './components/Login/LoginForm';
import Notes from './components/Notes/addNotes/AddNotes';
import NotesList from './components/Notes/notesList/NotesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import ReactTable from './components/ReactTable/ReactTable';
import GetData from './components/GetData/GetData';
import GetPost from './components/GetData/GetPost';
import Signup from './components/Signup/SignupPage';
import ToggleMode from './components/ToggleComponent/Toggle';
import UpdateNotes from './components/Notes/UpdateNotes';
import UpdateUser from './components/UpdateUser/UpdateUser';
import ProfilePage from './components/UserProfile/ProfilePage';
import HomePage from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/create-notes' element={<Notes/>}/>
        <Route path='/table' element={<ReactTable/>}/>
        <Route path='/toggle' element={<ToggleMode/>}/>
        <Route path='/get' element={<GetData/>}/>
        <Route path='/getPost' element={<GetPost/>}/>
        <Route path='/user-profile' element={<ProfilePage/>}/>
        <Route path='/user/update-profile' element={<UpdateUser/>}/>
        <Route path='/notes/update-note' element={<UpdateNotes/>}/>
        <Route path='/notes-list' element={<NotesList queryString=""/>}></Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={1000} pauseOnHover={false}
      />
    </>
  )
}

export default App;
