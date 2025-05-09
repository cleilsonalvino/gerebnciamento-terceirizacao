import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Sistema de Gerenciamento de Terceirização
        </Link>
        <div className="navbar-menu">
          <div className="navbar-item">
            <span className="user-info">
              <i className="fas fa-user"></i> Usuário
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
