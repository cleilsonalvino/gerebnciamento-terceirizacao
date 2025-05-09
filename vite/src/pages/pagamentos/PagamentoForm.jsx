import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PagamentoForm.css';

const API_URL = 'http://168.231.95.166:3001/api';

const PagamentoForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [costureiras, setCostureiras] = useState([]);
  const [pedidosFinalizados, setPedidosFinalizados] = useState([]);
  
  const [pagamento, setPagamento] = useState({
    costureiraId: '',
    pedidoIds: [],
    observacao: ''
  });
  
  const [valorTotal, setValorTotal] = useState(0);

  // Buscar costureiras
  useEffect(() => {
    const fetchCostureiras = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/costureiras`);
        setCostureiras(response.data.filter(c => c.ativo));
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar costureiras:', err);
        setError('Não foi possível carregar as costureiras.');
        setLoading(false);
      }
    };

    fetchCostureiras();
  }, []);

  // Buscar pedidos finalizados quando uma costureira for selecionada
  useEffect(() => {
    const fetchPedidosFinalizados = async () => {
      if (!pagamento.costureiraId) {
        setPedidosFinalizados([]);
        return;
      }
      
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pedidos/finalizados/${pagamento.costureiraId}`);
        setPedidosFinalizados(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar pedidos finalizados:', err);
        setError('Não foi possível carregar os pedidos finalizados.');
        setLoading(false);
      }
    };

    fetchPedidosFinalizados();
  }, [pagamento.costureiraId]);

  // Calcular valor total quando pedidos selecionados mudarem
  useEffect(() => {
    const calcularValorTotal = () => {
      let total = 0;
      
      pagamento.pedidoIds.forEach(pedidoId => {
        const pedido = pedidosFinalizados.find(p => p.id === Number(pedidoId));
        if (pedido) {
          pedido.itensPedido.forEach(item => {
            total += item.quantidade * item.valorUnitario;
          });
        }
      });
      
      setValorTotal(total);
    };

    calcularValorTotal();
  }, [pagamento.pedidoIds, pedidosFinalizados]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPagamento({
      ...pagamento,
      [name]: value
    });
  };

  const handlePedidoChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setPagamento({
        ...pagamento,
        pedidoIds: [...pagamento.pedidoIds, value]
      });
    } else {
      setPagamento({
        ...pagamento,
        pedidoIds: pagamento.pedidoIds.filter(id => id !== value)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (pagamento.pedidoIds.length === 0) {
      setError('Selecione pelo menos um pedido para pagamento.');
      return;
    }
    
    try {
      setSubmitting(true);
      setError(null);
      
      const pagamentoData = {
        ...pagamento,
        costureiraId: Number(pagamento.costureiraId),
        pedidoIds: pagamento.pedidoIds.map(id => Number(id)),
        valorTotal
      };
      
      await axios.post(`${API_URL}/pagamentos`, pagamentoData);
      
      setSuccess(true);
      setSubmitting(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/pagamentos');
      }, 2000);
    } catch (err) {
      console.error('Erro ao registrar pagamento:', err);
      setError(err.response?.data?.error || 'Erro ao registrar pagamento.');
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (loading && costureiras.length === 0) {
    return (
      <div className="pagamento-form">
        <h1 className="page-title">Novo Pagamento</h1>
        <div className="card">
          <p>Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pagamento-form">
      <h1 className="page-title">Novo Pagamento</h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Pagamento registrado com sucesso!</div>}
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="costureiraId" className="form-label">Costureira *</label>
            <select
              id="costureiraId"
              name="costureiraId"
              className="form-control"
              value={pagamento.costureiraId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma costureira...</option>
              {costureiras.map(costureira => (
                <option key={costureira.id} value={costureira.id}>
                  {costureira.nome}
                </option>
              ))}
            </select>
          </div>
          
          {pagamento.costureiraId && (
            <div className="form-section">
              <h3>Pedidos Finalizados</h3>
              
              {pedidosFinalizados.length === 0 ? (
                <p>Nenhum pedido finalizado disponível para pagamento.</p>
              ) : (
                <div className="pedidos-list">
                  {pedidosFinalizados.map(pedido => (
                    <div key={pedido.id} className="pedido-item">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id={`pedido-${pedido.id}`}
                          value={pedido.id}
                          checked={pagamento.pedidoIds.includes(String(pedido.id))}
                          onChange={handlePedidoChange}
                          className="form-check-input"
                        />
                        <label htmlFor={`pedido-${pedido.id}`} className="form-check-label">
                          Pedido #{pedido.id} - {formatDate(pedido.dataEnvio)}
                        </label>
                      </div>
                      
                      <div className="pedido-details">
                        <div className="pedido-produtos">
                          <h4>Produtos</h4>
                          <ul>
                            {pedido.itensPedido.map(item => (
                              <li key={item.id}>
                                {item.produto.nome} - {item.quantidade} unidades x {formatCurrency(item.valorUnitario)} = {formatCurrency(item.quantidade * item.valorUnitario)}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pedido-total">
                          <strong>Total do Pedido:</strong> {formatCurrency(
                            pedido.itensPedido.reduce(
                              (total, item) => total + (item.quantidade * item.valorUnitario), 
                              0
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="observacao" className="form-label">Observação</label>
            <textarea
              id="observacao"
              name="observacao"
              className="form-control"
              value={pagamento.observacao}
              onChange={handleChange}
              rows="3"
              placeholder="Observações sobre o pagamento..."
            ></textarea>
          </div>
          
          <div className="pagamento-total">
            <h3>Valor Total do Pagamento:</h3>
            <div className="valor-total">{formatCurrency(valorTotal)}</div>
          </div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/pagamentos')}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={submitting || pagamento.pedidoIds.length === 0}
            >
              {submitting ? 'Registrando...' : 'Registrar Pagamento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PagamentoForm;
