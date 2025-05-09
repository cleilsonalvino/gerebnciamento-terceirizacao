import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DevolucaoForm.css';

const API_URL = 'http://localhost:3001/api';

const DevolucaoForm = () => {
  const { pedidoId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [pedido, setPedido] = useState(null);
  const [devolucao, setDevolucao] = useState({
    pedidoId: pedidoId,
    observacao: '',
    itensDevolucao: []
  });

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pedidos/${pedidoId}`);
        setPedido(response.data);
        
        // Verificar se o pedido já tem devolução
        if (response.data.devolucao) {
          setError('Este pedido já possui uma devolução registrada.');
        }
        
        // Verificar se o status do pedido é válido para devolução
        if (response.data.status !== 'FINALIZADO') {
          setError(`Não é possível registrar devolução para um pedido com status "${response.data.status}".`);
        }
        
        // Inicializar itens de devolução com base nos materiais do pedido
        if (response.data.itensMaterial && response.data.itensMaterial.length > 0) {
          const itensDevolucao = response.data.itensMaterial.map(item => ({
            materialId: item.materialId,
            quantidade: 0,
            quantidadeMaxima: item.quantidade,
            nomeMaterial: item.material.nome,
            unidadeMedida: item.material.unidadeMedida
          }));
          
          setDevolucao(prev => ({
            ...prev,
            itensDevolucao
          }));
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
    setDevolucao({
      ...devolucao,
      [name]: value
    });
  };

  const handleItemChange = (index, value) => {
    const newItensDevolucao = [...devolucao.itensDevolucao];
    
    // Garantir que a quantidade não exceda o máximo
    const quantidade = Math.min(
      Number(value), 
      newItensDevolucao[index].quantidadeMaxima
    );
    
    newItensDevolucao[index].quantidade = quantidade;
    
    setDevolucao({
      ...devolucao,
      itensDevolucao: newItensDevolucao
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Filtrar apenas itens com quantidade > 0
    const itensFiltrados = devolucao.itensDevolucao
      .filter(item => item.quantidade > 0)
      .map(item => ({
        materialId: item.materialId,
        quantidade: item.quantidade
      }));
    
    if (itensFiltrados.length === 0) {
      setError('Adicione pelo menos um material para devolução.');
      return;
    }
    
    try {
      setSubmitting(true);
      setError(null);
      
      const devolucaoData = {
        ...devolucao,
        itensDevolucao: itensFiltrados
      };
      
      await axios.post(`${API_URL}/devolucoes`, devolucaoData);
      
      setSuccess(true);
      setSubmitting(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate(`/pedidos/${pedidoId}`);
      }, 2000);
    } catch (err) {
      console.error('Erro ao registrar devolução:', err);
      setError(err.response?.data?.error || 'Erro ao registrar devolução.');
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
      <div className="devolucao-form">
        <h1 className="page-title">Registrar Devolução</h1>
        <div className="card">
          <p>Carregando dados do pedido...</p>
        </div>
      </div>
    );
  }

  if (!pedido) {
    return (
      <div className="devolucao-form">
        <h1 className="page-title">Registrar Devolução</h1>
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
    <div className="devolucao-form">
      <h1 className="page-title">Registrar Devolução</h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Devolução registrada com sucesso!</div>}
      
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
          <div className="form-section">
            <h3>Materiais para Devolução</h3>
            
            {devolucao.itensDevolucao.length === 0 ? (
              <p>Nenhum material disponível para devolução.</p>
            ) : (
              <div className="materiais-list">
                {devolucao.itensDevolucao.map((item, index) => (
                  <div key={index} className="material-item">
                    <div className="material-info">
                      <span className="material-name">{item.nomeMaterial}</span>
                      <span className="material-unit">({item.unidadeMedida})</span>
                    </div>
                    <div className="material-quantity">
                      <label>Quantidade a devolver:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={item.quantidade}
                        onChange={(e) => handleItemChange(index, e.target.value)}
                        min="0"
                        max={item.quantidadeMaxima}
                        step="0.01"
                      />
                      <span className="quantity-max">
                        Máx: {item.quantidadeMaxima}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="observacao" className="form-label">Observação</label>
            <textarea
              id="observacao"
              name="observacao"
              className="form-control"
              value={devolucao.observacao}
              onChange={handleChange}
              rows="3"
              placeholder="Observações sobre a devolução..."
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
              disabled={submitting || error || devolucao.itensDevolucao.length === 0}
            >
              {submitting ? 'Registrando...' : 'Registrar Devolução'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DevolucaoForm;
