import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PagamentosList.css';

const API_URL = 'http://168.231.95.166:3001/api';

const PagamentosList = () => {
  const [pagamentos, setPagamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPagamentos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/pagamentos`);
        setPagamentos(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar pagamentos:', err);
        setError('Não foi possível carregar os pagamentos. Verifique se o servidor está rodando.');
        setLoading(false);
      }
    };

    fetchPagamentos();
  }, []);

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
      <div className="pagamentos-list">
        <h1 className="page-title">Pagamentos</h1>
        <div className="card">
          <p>Carregando pagamentos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pagamentos-list">
      <div className="page-header">
        <h1 className="page-title">Pagamentos</h1>
        <Link to="/pagamentos/novo" className="btn btn-primary">
          <i className="fas fa-plus"></i> Novo Pagamento
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card">
        {pagamentos.length === 0 ? (
          <p>Nenhum pagamento registrado.</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Costureira</th>
                  <th>Data</th>
                  <th>Valor Total</th>
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {pagamentos.map(pagamento => (
                  <tr key={pagamento.id}>
                    <td>{pagamento.id}</td>
                    <td>{pagamento.costureira.nome}</td>
                    <td>{formatDate(pagamento.dataPagamento)}</td>
                    <td className="valor">{formatCurrency(pagamento.valorTotal)}</td>
                    <td>
                      <button 
                        className="btn-action view"
                        onClick={() => {
                          // Implementar visualização de detalhes do pagamento
                          alert(`Detalhes do pagamento ${pagamento.id} para ${pagamento.costureira.nome}`);
                        }}
                      >
                        <i className="fas fa-eye"></i>
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

export default PagamentosList;
