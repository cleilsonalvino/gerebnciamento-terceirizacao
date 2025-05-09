import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  // Verifica se o link está ativo
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <Link to="/" className={`sidebar-item ${isActive('/') ? 'active' : ''}`}>
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </Link>
        
        <div className="sidebar-section">
          <h3 className="sidebar-heading">Cadastros</h3>
          <Link to="/costureiras" className={`sidebar-item ${isActive('/costureiras') ? 'active' : ''}`}>
            <i className="fas fa-users"></i>
            <span>Costureiras</span>
          </Link>
          <Link to="/produtos" className={`sidebar-item ${isActive('/produtos') ? 'active' : ''}`}>
            <i className="fas fa-tshirt"></i>
            <span>Produtos</span>
          </Link>
          <Link to="/materiais" className={`sidebar-item ${isActive('/materiais') ? 'active' : ''}`}>
            <i className="fas fa-box"></i>
            <span>Materiais</span>
          </Link>
        </div>
        
        <div className="sidebar-section">
          <h3 className="sidebar-heading">Operações</h3>
          <Link to="/pedidos" className={`sidebar-item ${isActive('/pedidos') ? 'active' : ''}`}>
            <i className="fas fa-clipboard-list"></i>
            <span>Pedidos</span>
          </Link>
          <Link to="/pagamentos" className={`sidebar-item ${isActive('/pagamentos') ? 'active' : ''}`}>
            <i className="fas fa-money-bill-wave"></i>
            <span>Pagamentos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
