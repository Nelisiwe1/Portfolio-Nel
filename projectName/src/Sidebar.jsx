import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <nav className={`fixed top-0 left-0 h-screen bg-orange-600 w-64 ${isOpen ? 'block' : 'hidden'}`}>
      <button onClick={closeSidebar} className="absolute top-2 right-2 md:hidden">
        <AiOutlineClose className="text-gray-600 w-6 h-6" />
      </button>
      <ul className="flex flex-col justify-center items-center h-full">
        <li className="my-4">
          <Link to="/" onClick={closeSidebar} className="flex items-center justify-center text-black text-lg">
            <FontAwesomeIcon icon={faHome} className="mr-2 text-xl" />
            Home
          </Link>
        </li>
        <li className="my-4">
          <Link to="/about" onClick={closeSidebar} className="flex items-center justify-center text-black text-lg">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-xl" />
            About
          </Link>
        </li>
        <li className="my-4">
          <Link to="/portfolio" onClick={closeSidebar} className="flex items-center justify-center text-black text-lg">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-xl" />
            Portfolio
          </Link>
        </li>
        <li className="my-4">
          <Link to="/experience" onClick={closeSidebar} className="flex items-center justify-center text-black text-lg">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-xl" />
            Experience
          </Link>
        </li>
        <li className="my-4">
          <Link to="/contact" onClick={closeSidebar} className="flex items-center justify-center text-black text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
