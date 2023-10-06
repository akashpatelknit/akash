import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import AboutMyself from './components/AboutMe/AboutMyself'
import Footer from './components/Layout/Footer/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<AboutMyself />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
