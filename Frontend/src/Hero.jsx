import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import logo from './assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      

      <div className="navbar-center">
        <div className="logo"><img src={logo} alt="logo" /></div>
        
        <Link to="/add">Create User</Link>
        <Link to="/view">View User</Link>
        <Link to="/edit">Manage User</Link>
        
       
      </div>

    </nav>
  );
}

export default Navbar;
