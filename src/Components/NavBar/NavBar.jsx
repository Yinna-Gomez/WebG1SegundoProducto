import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/filter/Male" className="nav-item">Masculinos</Link></li>
        <li><Link to="/filter/Female" className="nav-item">Femeninos</Link></li>
        <li><Link to="/acercade" className="nav-item">Acerca de</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar