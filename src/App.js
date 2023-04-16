import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Netflix from './components/All Projects/Netflix';
import Lib from './components/All Projects/Lib';
import Weather from './components/All Projects/Weather';
import OTM from './components/All Projects/OTM'
import ScrollToTop from './components/ScrollToTop';
function App() {
  return <Router>
    <Header/>
    <ScrollToTop/>

   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/netflix' element={<Netflix/>}/>
      <Route path='/lib' element={<Lib/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/otm' element={<OTM/>}/>
    </Routes>
    <Footer/>
  </Router>
  
}

export default App;
