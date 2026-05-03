import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/images/Homepage/HIRISTAN.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Hiristhan Logo" className="navbar-logo-img" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-items">
          <li className="navbar-item navbar-item-dropdown">
            <span onClick={toggleServicesDropdown} className="dropdown-toggle">
              Services
            </span>
            {isServicesDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/hire-salesforce-professionals">Salesforce Professionals</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/hire-salesforce-developer">Salesforce Developer</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/hire-servicenow-professionals">ServiceNow</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/hire-servicenow-itsm-developer">ServiceNow ITSM Developer</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Jobs</Link>
          </li>
        </ul>
        <div className="navbar-action">
          <Link to="/contact" className="start-hiring-btn">Start Hiring</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;