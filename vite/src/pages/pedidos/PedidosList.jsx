import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PedidosList.css';

const API_URL = 'http://localhost:3001/api';

const PedidosList = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pedidos`);
        setPedidos(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar pedidos:', err);
        setError('Não foi possível carregar os pedidos. Verifique se o servidor está rodando.');
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  const handleRemove = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este pedido?')) {
      try {
        await axios.delete(`${API_URL}/pedidos/${id}`);
        setPedidos(pedidos.filter(pedido => pedido.id !== id));
      } catch (err) {
        console.error('Erro ao remover pedido:', err);
        setError(err.response?.data?.error || 'Não foi possível remover o pedido.');
      }
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

  if (loading) {
    return (
      <div className="pedidos-list">
        <h1 className="page-title">Pedidos</h1>
        <div className="card">
          <p>Carregando pedidos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pedidos-list">
      <div className="page-header">
        <h1 className="page-title">Pedidos</h1>
        <Link to="/pedidos/novo" className="btn btn-primary">
          <i className="fas fa-plus"></i> Novo Pedido
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card">
        {pedidos.length === 0 ? (
          <p>Nenhum pedido cadastrado.</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Costureira</th>
                  <th>Data de Envio</th>
                  <th>Previsão</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map(pedido => (
                  <tr key={pedido.id}>
                    <td>{pedido.id}</td>
                    <td>{pedido.costureira.nome}</td>
                    <td>{formatDate(pedido.dataEnvio)}</td>
                    <td>{formatDate(pedido.dataPrevisao)}</td>
                    <td>
                      <span className={`status ${getStatusClass(pedido.status)}`}>
                        {getStatusLabel(pedido.status)}
                      </span>
                    </td>
                    <td className="actions">
                      <Link to={`/pedidos/${pedido.id}`} className="btn-action view">
                        <i className="fas fa-eye"></i>
                      </Link>
                      <Link to={`/pedidos/editar/${pedido.id}`} className="btn-action edit">
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleRemove(pedido.id)}
                        disabled={['RECEBIDO', 'FINALIZADO', 'DEVOLVIDO'].includes(pedido.status)}
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

export default PedidosList;
