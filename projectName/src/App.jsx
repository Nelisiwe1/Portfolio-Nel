// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar.js is in the same directory
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
 // Assuming you have Home.js, About.js, Work.js, Contact.js in your project

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            {/* Define your routes using <Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
