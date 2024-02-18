import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css'; // Import your CSS file

function Sidebar() {
  return (
    <Router>
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
              <Link to="/experience" className="nav-link">
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Define Route components for each route */}
      <Route path="/" exact>
        {/* Component to render for Home route */}
        {/* Example: <HomeComponent /> */}
      </Route>
      <Route path="/about">
        {/* Component to render for About route */}
        {/* Example: <AboutComponent /> */}
      </Route>
      <Route path="/portfolio">
        {/* Component to render for Portfolio route */}
        {/* Example: <PortfolioComponent /> */}
      </Route>
      <Route path="/experience">
        {/* Component to render for Experience route */}
        {/* Example: <ExperienceComponent /> */}
      </Route>
    </Router>
  );
}

export default Sidebar;
