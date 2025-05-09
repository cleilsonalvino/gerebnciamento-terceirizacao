import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProdutoForm.css';

const API_URL = 'http://localhost:3001/api';

const ProdutoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    valorUnitario: '',
    ativo: true
  });

  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      const fetchProduto = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${API_URL}/produtos/${id}`);
          setProduto(response.data);
          setLoading(false);
        } catch (err) {
          console.error('Erro ao buscar produto:', err);
          setError('Não foi possível carregar os dados do produto.');
          setLoading(false);
        }
      };

      fetchProduto();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduto({
      ...produto,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação do valor unitário
    const valorUnitario = parseFloat(produto.valorUnitario);
    if (isNaN(valorUnitario) || valorUnitario <= 0) {
      setError('O valor unitário deve ser um número positivo.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const produtoData = {
        ...produto,
        valorUnitario
      };
      
      if (isEditing) {
        await axios.put(`${API_URL}/produtos/${id}`, produtoData);
      } else {
        await axios.post(`${API_URL}/produtos`, produtoData);
      }
      
      setSuccess(true);
      setLoading(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/produtos');
      }, 2000);
    } catch (err) {
      console.error('Erro ao salvar produto:', err);
      setError(err.response?.data?.error || 'Erro ao salvar produto.');
      setLoading(false);
    }
  };

  if (loading && isEditing) {
    return (
      <div className="produto-form">
        <h1 className="page-title">
          {isEditing ? 'Editar Produto' : 'Novo Produto'}
        </h1>
        <div className="card">
          <p>Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="produto-form">
      <h1 className="page-title">
        {isEditing ? 'Editar Produto' : 'Novo Produto'}
      </h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Produto salvo com sucesso!</div>}
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="form-control"
              value={produto.nome}
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
              value={produto.descricao || ''}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="valorUnitario" className="form-label">Valor Unitário *</label>
            <div className="input-group">
              <span className="input-group-text">R$</span>
              <input
                type="number"
                id="valorUnitario"
                name="valorUnitario"
                className="form-control"
                value={produto.valorUnitario}
                onChange={handleChange}
                step="0.01"
                min="0.01"
                required
              />
            </div>
          </div>
          
          {isEditing && (
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="ativo"
                name="ativo"
                className="form-check-input"
                checked={produto.ativo}
                onChange={handleChange}
              />
              <label htmlFor="ativo" className="form-check-label">Ativo</label>
            </div>
          )}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/produtos')}
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

export default ProdutoForm;
