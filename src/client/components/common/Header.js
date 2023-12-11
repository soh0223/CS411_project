// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Headerstyle.css'; // Import the styling

function Header() {
  return (
    <div className="header-container">
      <div className="left-section">
        <Link to="/" className="site-name">
          Movie Generator
        </Link>
      </div>
      <div className="right-section">
        <Link to="/discover" className="header-link">
          Discover
        </Link>
        <Link to="/history" className="header-link">
          History
        </Link>
        <Link to="/profile" className="header-link">
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Header;