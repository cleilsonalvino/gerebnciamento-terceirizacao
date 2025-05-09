import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './PedidoDetalhes.css';

const API_URL = 'http://168.231.95.166:3001/api';

const PedidoDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pedido, setPedido] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusUpdateLoading, setStatusUpdateLoading] = useState(false);

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pedidos/${id}`);
        setPedido(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar pedido:', err);
        setError('Não foi possível carregar os dados do pedido.');
        setLoading(false);
      }
    };

    fetchPedido();
  }, [id]);

  const handleStatusUpdate = async (status) => {
    try {
      setStatusUpdateLoading(true);
      await axios.put(`${API_URL}/pedidos/${id}/status`, { status });
      
      // Atualizar o pedido após a mudança de status
      const response = await axios.get(`${API_URL}/pedidos/${id}`);
      setPedido(response.data);
      setStatusUpdateLoading(false);
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
      setError('Não foi possível atualizar o status do pedido.');
      setStatusUpdateLoading(false);
    }
  };

  const getStatusLabel = (status) => {
    const statusMap = {
      'ENVIADO': 'Enviado',
      'RECEBIDO': 'Recebido',
      'PRODUCAO': 'Em Produção',
      'FINALIZADO': 'Finalizado',
      'DEVOLVIDO': 'Devolvido'
    };
    return statusMap[status] || status;
  };

  const getStatusClass = (status) => {
    const statusClassMap = {
      'ENVIADO': 'sent',
      'RECEBIDO': 'received',
      'PRODUCAO': 'production',
      'FINALIZADO': 'finished',
      'DEVOLVIDO': 'returned'
    };
    return statusClassMap[status] || '';
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

  if (loading) {
    return (
      <div className="pedido-detalhes">
        <h1 className="page-title">Detalhes do Pedido</h1>
        <div className="card">
          <p>Carregando dados do pedido...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pedido-detalhes">
        <h1 className="page-title">Detalhes do Pedido</h1>
        <div className="alert alert-danger">{error}</div>
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

  if (!pedido) {
    return (
      <div className="pedido-detalhes">
        <h1 className="page-title">Detalhes do Pedido</h1>
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
    <div className="pedido-detalhes">
      <div className="page-header">
        <h1 className="page-title">Pedido #{pedido.id}</h1>
        <div className="page-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/pedidos')}
          >
            Voltar
          </button>
          {pedido.status === 'ENVIADO' && (
            <Link 
              to={`/recebimentos/novo/${pedido.id}`} 
              className="btn btn-primary"
            >
              Registrar Recebimento
            </Link>
          )}
          {pedido.status === 'FINALIZADO' && (
            <Link 
              to={`/devolucoes/novo/${pedido.id}`} 
              className="btn btn-warning"
            >
              Registrar Devolução
            </Link>
          )}
        </div>
      </div>

      <div className="card">
        <div className="pedido-status">
          <h3>Status</h3>
          <div className="status-badge">
            <span className={`status ${getStatusClass(pedido.status)}`}>
              {getStatusLabel(pedido.status)}
            </span>
          </div>
          
          {/* Ações de mudança de status */}
          {!statusUpdateLoading && (
            <div className="status-actions">
              {pedido.status === 'RECEBIDO' && (
                <button 
                  className="btn btn-sm btn-info"
                  onClick={() => handleStatusUpdate('PRODUCAO')}
                >
                  Iniciar Produção
                </button>
              )}
              {pedido.status === 'PRODUCAO' && (
                <button 
                  className="btn btn-sm btn-success"
                  onClick={() => handleStatusUpdate('FINALIZADO')}
                >
                  Finalizar Produção
                </button>
              )}
            </div>
          )}
          {statusUpdateLoading && <p>Atualizando status...</p>}
        </div>

        <div className="pedido-info">
          <div className="info-section">
            <h3>Informações Gerais</h3>
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
                <span className="info-label">Previsão de Entrega:</span>
                <span className="info-value">{formatDate(pedido.dataPrevisao)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Observação:</span>
                <span className="info-value">{pedido.observacao || '-'}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Produtos</h3>
            {pedido.itensPedido.length === 0 ? (
              <p>Nenhum produto adicionado.</p>
            ) : (
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Quantidade</th>
                      <th>Valor Unitário</th>
                      <th>Valor Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedido.itensPedido.map(item => (
                      <tr key={item.id}>
                        <td>{item.produto.nome}</td>
                        <td>{item.quantidade}</td>
                        <td>{formatCurrency(item.valorUnitario)}</td>
                        <td>{formatCurrency(item.quantidade * item.valorUnitario)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                      <td>
                        <strong>
                          {formatCurrency(
                            pedido.itensPedido.reduce(
                              (total, item) => total + (item.quantidade * item.valorUnitario), 
                              0
                            )
                          )}
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>

          <div className="info-section">
            <h3>Materiais</h3>
            {pedido.itensMaterial.length === 0 ? (
              <p>Nenhum material adicionado.</p>
            ) : (
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Unidade</th>
                      <th>Quantidade Enviada</th>
                      <th>Quantidade Devolvida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedido.itensMaterial.map(item => (
                      <tr key={item.id}>
                        <td>{item.material.nome}</td>
                        <td>{item.material.unidadeMedida}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.devolvido || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {pedido.recebimento && (
            <div className="info-section">
              <h3>Recebimento</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Data de Recebimento:</span>
                  <span className="info-value">{formatDate(pedido.recebimento.dataRecebimento)}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Observação:</span>
                  <span className="info-value">{pedido.recebimento.observacao || '-'}</span>
                </div>
              </div>
            </div>
          )}

          {pedido.devolucao && (
            <div className="info-section">
              <h3>Devolução</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Data de Devolução:</span>
                  <span className="info-value">{formatDate(pedido.devolucao.dataDevolucao)}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Observação:</span>
                  <span className="info-value">{pedido.devolucao.observacao || '-'}</span>
                </div>
              </div>
              
              <h4>Materiais Devolvidos</h4>
              {pedido.devolucao.itensDevolucao.length === 0 ? (
                <p>Nenhum material devolvido.</p>
              ) : (
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Material</th>
                        <th>Quantidade Devolvida</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pedido.devolucao.itensDevolucao.map(item => {
                        const material = pedido.itensMaterial.find(m => m.materialId === item.materialId)?.material;
                        return (
                          <tr key={item.id}>
                            <td>{material ? material.nome : `Material #${item.materialId}`}</td>
                            <td>{item.quantidade}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PedidoDetalhes;
