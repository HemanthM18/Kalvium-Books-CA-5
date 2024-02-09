import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../Image/Group 1.png';

const Navbar = () => {
  return (
    <nav>
      {/* Logo section */}
      <div className='logo'>
        {/* Logo image */}
        <img className='logo-img' src={image} alt="Description of the image" />
        {/* Heading */}
        <h1>Kalvium Books</h1>
      </div>
      {/* Register button linking to the registration page */}
      <div>
        <Link to="/register"> {/* Using Link component to navigate to the registration page */}
          <button>Register</button> {/* Register button */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component
