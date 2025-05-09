import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CostureirasList.css';

const API_URL = 'http://168.231.95.166:3001/api';

const CostureirasList = () => {
  const [costureiras, setCostureiras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCostureiras = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/costureiras`);
        setCostureiras(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar costureiras:', err);
        setError('Não foi possível carregar as costureiras. Verifique se o servidor está rodando.');
        setLoading(false);
      }
    };

    fetchCostureiras();
  }, []);

  const handleRemove = async (id) => {
    if (window.confirm('Tem certeza que deseja remover esta costureira?')) {
      try {
        await axios.delete(`${API_URL}/costureiras/${id}`);
        setCostureiras(costureiras.filter(costureira => costureira.id !== id));
      } catch (err) {
        console.error('Erro ao remover costureira:', err);
        setError('Não foi possível remover a costureira.');
      }
    }
  };

  if (loading) {
    return (
      <div className="costureiras-list">
        <h1 className="page-title">Costureiras</h1>
        <div className="card">
          <p>Carregando costureiras...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="costureiras-list">
      <div className="page-header">
        <h1 className="page-title">Costureiras</h1>
        <Link to="/costureiras/novo" className="btn btn-primary">
          <i className="fas fa-plus"></i> Nova Costureira
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card">
        {costureiras.length === 0 ? (
          <p>Nenhuma costureira cadastrada.</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>CPF</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {costureiras.map(costureira => (
                  <tr key={costureira.id}>
                    <td>{costureira.nome}</td>
                    <td>{costureira.telefone || '-'}</td>
                    <td>{costureira.email || '-'}</td>
                    <td>{costureira.cpf || '-'}</td>
                    <td>
                      <span className={`status ${costureira.ativo ? 'active' : 'inactive'}`}>
                        {costureira.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="actions">
                      <Link to={`/costureiras/editar/${costureira.id}`} className="btn-action edit">
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleRemove(costureira.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostureirasList;
