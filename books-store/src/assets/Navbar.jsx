import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../Image/Group 1.png';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img className='logo-img' src={image} alt="Description of the image"/><h1>Kalvium Books</h1>
      </div>
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;