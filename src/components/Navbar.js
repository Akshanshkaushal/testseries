import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

import { logo } from './images';
 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-body-tertiary">
      <div className="container brand">
       
        <a className="navbar-brand">
        <Link to="/">
        <img className="logo" src={logo} alt="better brains" />
        </Link>
        </a>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
              <Link to="/">
                Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
              <Link to="/inspiring_stories">
                Inspiring Stories
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/important_tips">
                Important Tips
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/">
                Contact us
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/community">
                Community
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/login">
                Login/Sign-UP
                </Link>
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
