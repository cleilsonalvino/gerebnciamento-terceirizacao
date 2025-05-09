import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProdutosList.css';

const API_URL = 'http://localhost:3001/api';

const ProdutosList = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/produtos`);
        setProdutos(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Não foi possível carregar os produtos. Verifique se o servidor está rodando.');
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  const handleRemove = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este produto?')) {
      try {
        await axios.delete(`${API_URL}/produtos/${id}`);
        setProdutos(produtos.filter(produto => produto.id !== id));
      } catch (err) {
        console.error('Erro ao remover produto:', err);
        setError('Não foi possível remover o produto.');
      }
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (loading) {
    return (
      <div className="produtos-list">
        <h1 className="page-title">Produtos</h1>
        <div className="card">
          <p>Carregando produtos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="produtos-list">
      <div className="page-header">
        <h1 className="page-title">Produtos</h1>
        <Link to="/produtos/novo" className="btn btn-primary">
          <i className="fas fa-plus"></i> Novo Produto
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card">
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Valor Unitário</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map(produto => (
                  <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao || '-'}</td>
                    <td>{formatCurrency(produto.valorUnitario)}</td>
                    <td>
                      <span className={`status ${produto.ativo ? 'active' : 'inactive'}`}>
                        {produto.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="actions">
                      <Link to={`/produtos/editar/${produto.id}`} className="btn-action edit">
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleRemove(produto.id)}
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

export default ProdutosList;
