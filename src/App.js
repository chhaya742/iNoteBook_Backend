// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/home';
import LoginForm from './components/loginForm';
import Notes from './components/notes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import RegistrationForm from './components/registrationForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<RegistrationForm />} />
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/Notes' element={<Notes/>} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} pauseOnHover={false}
      />
    </>
  )
}

export default App;
