import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/protected" className="nav-link">Protected</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
};

export default NavBar;
