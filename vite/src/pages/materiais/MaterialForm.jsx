import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MaterialForm.css';

const API_URL = 'http://168.231.95.166:3001/api';

const MaterialForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [material, setMaterial] = useState({
    nome: '',
    descricao: '',
    unidadeMedida: '',
    ativo: true
  });

  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      const fetchMaterial = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${API_URL}/materiais/${id}`);
          setMaterial(response.data);
          setLoading(false);
        } catch (err) {
          console.error('Erro ao buscar material:', err);
          setError('Não foi possível carregar os dados do material.');
          setLoading(false);
        }
      };

      fetchMaterial();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMaterial({
      ...material,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!material.unidadeMedida) {
      setError('A unidade de medida é obrigatória.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      if (isEditing) {
        await axios.put(`${API_URL}/materiais/${id}`, material);
      } else {
        await axios.post(`${API_URL}/materiais`, material);
      }
      
      setSuccess(true);
      setLoading(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/materiais');
      }, 2000);
    } catch (err) {
      console.error('Erro ao salvar material:', err);
      setError(err.response?.data?.error || 'Erro ao salvar material.');
      setLoading(false);
    }
  };

  if (loading && isEditing) {
    return (
      <div className="material-form">
        <h1 className="page-title">
          {isEditing ? 'Editar Material' : 'Novo Material'}
        </h1>
        <div className="card">
          <p>Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="material-form">
      <h1 className="page-title">
        {isEditing ? 'Editar Material' : 'Novo Material'}
      </h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Material salvo com sucesso!</div>}
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="form-control"
              value={material.nome}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              className="form-control"
              value={material.descricao || ''}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="unidadeMedida" className="form-label">Unidade de Medida *</label>
            <select
              id="unidadeMedida"
              name="unidadeMedida"
              className="form-control"
              value={material.unidadeMedida}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="metro">Metro</option>
              <option value="unidade">Unidade</option>
              <option value="kg">Quilograma (kg)</option>
              <option value="g">Grama (g)</option>
              <option value="cm">Centímetro (cm)</option>
              <option value="m²">Metro Quadrado (m²)</option>
              <option value="rolo">Rolo</option>
              <option value="pacote">Pacote</option>
              <option value="caixa">Caixa</option>
            </select>
          </div>
          
          {isEditing && (
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="ativo"
                name="ativo"
                className="form-check-input"
                checked={material.ativo}
                onChange={handleChange}
              />
              <label htmlFor="ativo" className="form-check-label">Ativo</label>
            </div>
          )}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/materiais')}
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

export default MaterialForm;
