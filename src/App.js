import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Management from './pages/management';
import SignUp from "./pages/signup";

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
            <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
  );
}

export default App;