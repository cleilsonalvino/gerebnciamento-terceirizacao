import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CostureiraForm.css';

const API_URL = 'http://localhost:3001/api';

const CostureiraForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [costureira, setCostureira] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    cpf: '',
    ativo: true
  });

  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      const fetchCostureira = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${API_URL}/costureiras/${id}`);
          setCostureira(response.data);
          setLoading(false);
        } catch (err) {
          console.error('Erro ao buscar costureira:', err);
          setError('Não foi possível carregar os dados da costureira.');
          setLoading(false);
        }
      };

      fetchCostureira();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCostureira({
      ...costureira,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      if (isEditing) {
        await axios.put(`${API_URL}/costureiras/${id}`, costureira);
      } else {
        await axios.post(`${API_URL}/costureiras`, costureira);
      }
      
      setSuccess(true);
      setLoading(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/costureiras');
      }, 2000);
    } catch (err) {
      console.error('Erro ao salvar costureira:', err);
      setError(err.response?.data?.error || 'Erro ao salvar costureira.');
      setLoading(false);
    }
  };

  if (loading && isEditing) {
    return (
      <div className="costureira-form">
        <h1 className="page-title">
          {isEditing ? 'Editar Costureira' : 'Nova Costureira'}
        </h1>
        <div className="card">
          <p>Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="costureira-form">
      <h1 className="page-title">
        {isEditing ? 'Editar Costureira' : 'Nova Costureira'}
      </h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Costureira salva com sucesso!</div>}
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="form-control"
              value={costureira.nome}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="telefone" className="form-label">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className="form-control"
              value={costureira.telefone || ''}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={costureira.email || ''}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <textarea
              id="endereco"
              name="endereco"
              className="form-control"
              value={costureira.endereco || ''}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              className="form-control"
              value={costureira.cpf || ''}
              onChange={handleChange}
            />
          </div>
          
          {isEditing && (
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="ativo"
                name="ativo"
                className="form-check-input"
                checked={costureira.ativo}
                onChange={handleChange}
              />
              <label htmlFor="ativo" className="form-check-label">Ativo</label>
            </div>
          )}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/costureiras')}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CostureiraForm;
