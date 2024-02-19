import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import './index.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
