import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RecebimentoForm.css';

const API_URL = 'http://168.231.95.166:3001/api';

const RecebimentoForm = () => {
  const { pedidoId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [pedido, setPedido] = useState(null);
  const [recebimento, setRecebimento] = useState({
    pedidoId: pedidoId,
    observacao: ''
  });

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pedidos/${pedidoId}`);
        setPedido(response.data);
        
        // Verificar se o pedido já tem recebimento
        if (response.data.recebimento) {
          setError('Este pedido já possui um recebimento registrado.');
        }
        
        // Verificar se o status do pedido é válido para recebimento
        if (response.data.status !== 'ENVIADO') {
          setError(`Não é possível registrar recebimento para um pedido com status "${response.data.status}".`);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar pedido:', err);
        setError('Não foi possível carregar os dados do pedido.');
        setLoading(false);
      }
    };

    fetchPedido();
  }, [pedidoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecebimento({
      ...recebimento,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      setError(null);
      
      await axios.post(`${API_URL}/recebimentos`, recebimento);
      
      setSuccess(true);
      setSubmitting(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate(`/pedidos/${pedidoId}`);
      }, 2000);
    } catch (err) {
      console.error('Erro ao registrar recebimento:', err);
      setError(err.response?.data?.error || 'Erro ao registrar recebimento.');
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <div className="recebimento-form">
        <h1 className="page-title">Registrar Recebimento</h1>
        <div className="card">
          <p>Carregando dados do pedido...</p>
        </div>
      </div>
    );
  }

  if (!pedido) {
    return (
      <div className="recebimento-form">
        <h1 className="page-title">Registrar Recebimento</h1>
        <div className="alert alert-warning">Pedido não encontrado.</div>
        <div className="card">
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/pedidos')}
          >
            Voltar para Pedidos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="recebimento-form">
      <h1 className="page-title">Registrar Recebimento</h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Recebimento registrado com sucesso!</div>}
      
      <div className="card">
        <div className="pedido-info">
          <h3>Informações do Pedido #{pedido.id}</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Costureira:</span>
              <span className="info-value">{pedido.costureira.nome}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Data de Envio:</span>
              <span className="info-value">{formatDate(pedido.dataEnvio)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status:</span>
              <span className="info-value">{pedido.status}</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="observacao" className="form-label">Observação</label>
            <textarea
              id="observacao"
              name="observacao"
              className="form-control"
              value={recebimento.observacao}
              onChange={handleChange}
              rows="3"
              placeholder="Observações sobre o recebimento..."
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate(`/pedidos/${pedidoId}`)}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={submitting || error}
            >
              {submitting ? 'Registrando...' : 'Registrar Recebimento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecebimentoForm;
