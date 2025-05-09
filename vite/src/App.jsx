import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import CostureirasList from './pages/costureiras/CostureirasList';
import CostureiraForm from './pages/costureiras/CostureiraForm';
import ProdutosList from './pages/produtos/ProdutosList';
import ProdutoForm from './pages/produtos/ProdutoForm';
import MateriaisList from './pages/materiais/MateriaisList';
import MaterialForm from './pages/materiais/MaterialForm';
import PedidosList from './pages/pedidos/PedidosList';
import PedidoForm from './pages/pedidos/PedidoForm';
import PedidoDetalhes from './pages/pedidos/PedidoDetalhes';
import RecebimentoForm from './pages/recebimentos/RecebimentoForm';
import DevolucaoForm from './pages/devolucoes/DevolucaoForm';
import PagamentosList from './pages/pagamentos/PagamentosList';
import PagamentoForm from './pages/pagamentos/PagamentoForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              
              {/* Rotas para Costureiras */}
              <Route path="/costureiras" element={<CostureirasList />} />
              <Route path="/costureiras/novo" element={<CostureiraForm />} />
              <Route path="/costureiras/editar/:id" element={<CostureiraForm />} />
              
              {/* Rotas para Produtos */}
              <Route path="/produtos" element={<ProdutosList />} />
              <Route path="/produtos/novo" element={<ProdutoForm />} />
              <Route path="/produtos/editar/:id" element={<ProdutoForm />} />
              
              {/* Rotas para Materiais */}
              <Route path="/materiais" element={<MateriaisList />} />
              <Route path="/materiais/novo" element={<MaterialForm />} />
              <Route path="/materiais/editar/:id" element={<MaterialForm />} />
              
              {/* Rotas para Pedidos */}
              <Route path="/pedidos" element={<PedidosList />} />
              <Route path="/pedidos/novo" element={<PedidoForm />} />
              <Route path="/pedidos/editar/:id" element={<PedidoForm />} />
              <Route path="/pedidos/:id" element={<PedidoDetalhes />} />
              
              {/* Rotas para Recebimentos */}
              <Route path="/recebimentos/novo/:pedidoId" element={<RecebimentoForm />} />
              
              {/* Rotas para Devoluções */}
              <Route path="/devolucoes/novo/:pedidoId" element={<DevolucaoForm />} />
              
              {/* Rotas para Pagamentos */}
              <Route path="/pagamentos" element={<PagamentosList />} />
              <Route path="/pagamentos/novo" element={<PagamentoForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
