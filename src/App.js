import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/index';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Gallery from './components/Gallery/gallery';
import Management from './components/Management/management';
import LoginModal from './components/Login/LoginModal'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/management" element={<Management/>}/>
        </Routes>
          <div className="container mt-3">
              <LoginModal />
          </div>
      </Router>

  );
}

export default App;