import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // Import the cross icon
import Homepage from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <nav className={`fixed top-0 left-0 h-screen bg-orange-600 w-64 ${isOpen ? 'block' : 'hidden'}`}>
      <button onClick={closeSidebar} className="absolute top-2 right-2 md:hidden">
        <AiOutlineClose className="text-gray-600 w-6 h-6" />
      </button>
      <ul>
        
        <li><Homepage to="/">Home</Homepage></li>
        <li><About to="/about">About</About></li>
        <li><Portfolio to="/portfolio">Portfolio</Portfolio></li>
        <li><Experience to="/experience">Experience</Experience></li>
        <li><Contact to="/contact">Contact</Contact></li>
        {/* Add more links as needed */}
        
      </ul>
    </nav>
  );
};

export default Sidebar;
