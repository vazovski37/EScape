import { useState, useEffect } from "react";
import { signInWithFacebook } from "./firebase";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import  Home  from './pages/Home'
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import'./App.css'

function App() {


  const isAdmin =false

    return (
 <>
 <Router>
    <nav>
    <Link to='/' > home </Link>
    <Link to='/profile' > profile </Link>
    {isAdmin && <Link to='/admin'> admin</Link>}
    </nav>
  <Routes>  
    
    <Route path="/" element={<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    {isAdmin && <Route path="/admin" element={<Admin />} />}

  </Routes>
 </Router>
 <button onClick={signInWithFacebook} > sign</button>
 </>
    );
}




export default App;
