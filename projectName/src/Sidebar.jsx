import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // Import the cross icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <nav className={`fixed top-0 left-0 h-screen bg-orange-600 w-64 ${isOpen ? 'block' : 'hidden'}`}>
      <button onClick={closeSidebar} className="absolute top-2 right-2 md:hidden">
        <AiOutlineClose className="text-gray-600 w-6 h-6" />
      </button>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} />
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faBriefcase} />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/experience">
            <FontAwesomeIcon icon={faBriefcase} />
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Sidebar;
