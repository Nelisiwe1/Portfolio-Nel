import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Import CSS file for styles

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={closeSidebar} className="close-btn">
        <AiOutlineClose className="text-gray-600 w-6 h-6" />
      </button>
      <ul className="flex flex-col justify-center items-center h-full">
        <li className="menu-item">
          <Link to="/" onClick={closeSidebar} className="menu-link">
            <FontAwesomeIcon icon={faHome} className="mr-2 text-xl" />
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" onClick={closeSidebar} className="menu-link">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-xl" />
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/portfolio" onClick={closeSidebar} className="menu-link">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-xl" />
            Portfolio
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/experience" onClick={closeSidebar} className="menu-link">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-xl" />
            Experience
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/contact" onClick={closeSidebar} className="menu-link">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
