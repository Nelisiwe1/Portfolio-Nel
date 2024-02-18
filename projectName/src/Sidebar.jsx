import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css'; // Import your CSS file

function Sidebar() {
  return (
    <header>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item current">
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              My Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experince" className="nav-link">
              How To Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Sidebar;