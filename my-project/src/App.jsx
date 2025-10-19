import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx"
const Home = () => {
  return (
    <>
    
     
    </>
  );
};

  const App = () => {
    return (
    <>
  
    <Navbar />
    <About/>
    {/* <About/> */}
   
        <Routes>
            {/* <Route path="/about" comp></Route> */}
            <Route path="/experience" Component={Experience}></Route>
            <Route path="/Projects" Component={Projects}></Route>
            {/* <Route path="/about" Component={Contact}></Route> */}

        </Routes>
   </>

  );
};

export default App;