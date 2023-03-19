import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem('user') === 'vaxadminskaisalami');
  }, []);



  return (
    <>
      <Router>
        <nav>
          <Link to='/' >Home</Link>
          <Link to='/profile' >Profile</Link>
          {isAdmin && <Link to='/admin'>Admin</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {isAdmin && <Route path="/admin" element={<Admin />} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;
