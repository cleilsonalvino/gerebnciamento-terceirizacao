import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    costureiras: 0,
    produtos: 0,
    pedidos: 0,
    pedidosFinalizados: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Buscar estatísticas básicas
        const [costureirasRes, produtosRes, pedidosRes] = await Promise.all([
          axios.get(`${API_URL}/costureiras`),
          axios.get(`${API_URL}/produtos`),
          axios.get(`${API_URL}/pedidos`)
        ]);

        const pedidosFinalizados = pedidosRes.data.filter(
          pedido => pedido.status === 'FINALIZADO'
        ).length;

        setStats({
          costureiras: costureirasRes.data.length,
          produtos: produtosRes.data.length,
          pedidos: pedidosRes.data.length,
          pedidosFinalizados
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar estatísticas:', err);
        setError('Não foi possível carregar as estatísticas. Verifique se o servidor está rodando.');
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <h1 className="page-title">Dashboard</h1>
        <div className="card">
          <p>Carregando estatísticas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <h1 className="page-title">Dashboard</h1>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      
      <div className="stats-container">
        <div className="card stats-card">
          <h3>Costureiras</h3>
          <div className="stats-value">{stats.costureiras}</div>
          <Link to="/costureiras" className="btn btn-primary btn-sm">Ver Costureiras</Link>
        </div>
        
        <div className="card stats-card">
          <h3>Produtos</h3>
          <div className="stats-value">{stats.produtos}</div>
          <Link to="/produtos" className="btn btn-primary btn-sm">Ver Produtos</Link>
        </div>
        
        <div className="card stats-card">
          <h3>Pedidos</h3>
          <div className="stats-value">{stats.pedidos}</div>
          <Link to="/pedidos" className="btn btn-primary btn-sm">Ver Pedidos</Link>
        </div>
        
        <div className="card stats-card">
          <h3>Pedidos Finalizados</h3>
          <div className="stats-value">{stats.pedidosFinalizados}</div>
          <div className="stats-percentage">
            {stats.pedidos > 0 
              ? `${Math.round((stats.pedidosFinalizados / stats.pedidos) * 100)}%` 
              : '0%'}
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2>Ações Rápidas</h2>
        <div className="quick-actions">
          <Link to="/pedidos/novo" className="btn btn-primary">Novo Pedido</Link>
          <Link to="/costureiras/novo" className="btn btn-secondary">Nova Costureira</Link>
          <Link to="/produtos/novo" className="btn btn-secondary">Novo Produto</Link>
          <Link to="/pagamentos/novo" className="btn btn-success">Registrar Pagamento</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
