import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MateriaisList.css';

const API_URL = 'http://localhost:3001/api';

const MateriaisList = () => {
  const [materiais, setMateriais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMateriais = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/materiais`);
        setMateriais(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar materiais:', err);
        setError('Não foi possível carregar os materiais. Verifique se o servidor está rodando.');
        setLoading(false);
      }
    };

    fetchMateriais();
  }, []);

  const handleRemove = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este material?')) {
      try {
        await axios.delete(`${API_URL}/materiais/${id}`);
        setMateriais(materiais.filter(material => material.id !== id));
      } catch (err) {
        console.error('Erro ao remover material:', err);
        setError('Não foi possível remover o material.');
      }
    }
  };

  if (loading) {
    return (
      <div className="materiais-list">
        <h1 className="page-title">Materiais</h1>
        <div className="card">
          <p>Carregando materiais...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="materiais-list">
      <div className="page-header">
        <h1 className="page-title">Materiais</h1>
        <Link to="/materiais/novo" className="btn btn-primary">
          <i className="fas fa-plus"></i> Novo Material
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card">
        {materiais.length === 0 ? (
          <p>Nenhum material cadastrado.</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Unidade de Medida</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {materiais.map(material => (
                  <tr key={material.id}>
                    <td>{material.nome}</td>
                    <td>{material.descricao || '-'}</td>
                    <td>{material.unidadeMedida}</td>
                    <td>
                      <span className={`status ${material.ativo ? 'active' : 'inactive'}`}>
                        {material.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="actions">
                      <Link to={`/materiais/editar/${material.id}`} className="btn-action edit">
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleRemove(material.id)}
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

export default MateriaisList;
