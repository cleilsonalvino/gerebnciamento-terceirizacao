import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PedidoForm.css';

const API_URL = 'http://168.231.95.166:3001/api';

const PedidoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [costureiras, setCostureiras] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [materiais, setMateriais] = useState([]);
  
  const [pedido, setPedido] = useState({
    costureiraId: '',
    dataPrevisao: '',
    observacao: '',
    itensPedido: [{ produtoId: '', quantidade: 1 }],
    itensMaterial: [{ materialId: '', quantidade: 1 }]
  });

  const isEditing = !!id;

  // Buscar dados iniciais (costureiras, produtos, materiais)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const [costureirasRes, produtosRes, materiaisRes] = await Promise.all([
          axios.get(`${API_URL}/costureiras`),
          axios.get(`${API_URL}/produtos`),
          axios.get(`${API_URL}/materiais`)
        ]);
        
        setCostureiras(costureirasRes.data.filter(c => c.ativo));
        setProdutos(produtosRes.data.filter(p => p.ativo));
        setMateriais(materiaisRes.data.filter(m => m.ativo));
        
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar dados iniciais:', err);
        setError('Não foi possível carregar os dados necessários.');
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Buscar dados do pedido se estiver editando
  useEffect(() => {
    if (isEditing) {
      const fetchPedido = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${API_URL}/pedidos/${id}`);
          
          // Formatar os dados do pedido para o formato do formulário
          const pedidoData = {
            costureiraId: response.data.costureiraId,
            dataPrevisao: response.data.dataPrevisao ? new Date(response.data.dataPrevisao).toISOString().split('T')[0] : '',
            observacao: response.data.observacao || '',
            itensPedido: response.data.itensPedido.map(item => ({
              produtoId: item.produtoId,
              quantidade: item.quantidade
            })),
            itensMaterial: response.data.itensMaterial.map(item => ({
              materialId: item.materialId,
              quantidade: item.quantidade
            }))
          };
          
          setPedido(pedidoData);
          setLoading(false);
        } catch (err) {
          console.error('Erro ao buscar pedido:', err);
          setError('Não foi possível carregar os dados do pedido.');
          setLoading(false);
        }
      };

      fetchPedido();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({
      ...pedido,
      [name]: value
    });
  };

  const handleItemPedidoChange = (index, field, value) => {
    const newItensPedido = [...pedido.itensPedido];
    newItensPedido[index][field] = value;
    setPedido({
      ...pedido,
      itensPedido: newItensPedido
    });
  };

  const handleItemMaterialChange = (index, field, value) => {
    const newItensMaterial = [...pedido.itensMaterial];
    newItensMaterial[index][field] = value;
    setPedido({
      ...pedido,
      itensMaterial: newItensMaterial
    });
  };

  const addItemPedido = () => {
    setPedido({
      ...pedido,
      itensPedido: [...pedido.itensPedido, { produtoId: '', quantidade: 1 }]
    });
  };

  const removeItemPedido = (index) => {
    if (pedido.itensPedido.length === 1) {
      return; // Manter pelo menos um item
    }
    
    const newItensPedido = [...pedido.itensPedido];
    newItensPedido.splice(index, 1);
    setPedido({
      ...pedido,
      itensPedido: newItensPedido
    });
  };

  const addItemMaterial = () => {
    setPedido({
      ...pedido,
      itensMaterial: [...pedido.itensMaterial, { materialId: '', quantidade: 1 }]
    });
  };

  const removeItemMaterial = (index) => {
    if (pedido.itensMaterial.length === 1) {
      return; // Manter pelo menos um item
    }
    
    const newItensMaterial = [...pedido.itensMaterial];
    newItensMaterial.splice(index, 1);
    setPedido({
      ...pedido,
      itensMaterial: newItensMaterial
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!pedido.costureiraId) {
      setError('Selecione uma costureira.');
      return;
    }
    
    if (!pedido.itensPedido.some(item => item.produtoId && item.quantidade > 0)) {
      setError('Adicione pelo menos um produto ao pedido.');
      return;
    }
    
    // Remover itens vazios
    const itensPedidoFiltrados = pedido.itensPedido.filter(
      item => item.produtoId && item.quantidade > 0
    );
    
    const itensMaterialFiltrados = pedido.itensMaterial.filter(
      item => item.materialId && item.quantidade > 0
    );
    
    try {
      setLoading(true);
      setError(null);
      
      const pedidoData = {
        ...pedido,
        costureiraId: Number(pedido.costureiraId),
        itensPedido: itensPedidoFiltrados,
        itensMaterial: itensMaterialFiltrados
      };
      
      if (isEditing) {
        await axios.put(`${API_URL}/pedidos/${id}`, pedidoData);
      } else {
        await axios.post(`${API_URL}/pedidos`, pedidoData);
      }
      
      setSuccess(true);
      setLoading(false);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/pedidos');
      }, 2000);
    } catch (err) {
      console.error('Erro ao salvar pedido:', err);
      setError(err.response?.data?.error || 'Erro ao salvar pedido.');
      setLoading(false);
    }
  };

  if (loading && (isEditing || costureiras.length === 0)) {
    return (
      <div className="pedido-form">
        <h1 className="page-title">
          {isEditing ? 'Editar Pedido' : 'Novo Pedido'}
        </h1>
        <div className="card">
          <p>Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pedido-form">
      <h1 className="page-title">
        {isEditing ? 'Editar Pedido' : 'Novo Pedido'}
      </h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Pedido salvo com sucesso!</div>}
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="costureiraId" className="form-label">Costureira *</label>
            <select
              id="costureiraId"
              name="costureiraId"
              className="form-control"
              value={pedido.costureiraId}
              onChange={handleChange}
              required
              disabled={isEditing}
            >
              <option value="">Selecione uma costureira...</option>
              {costureiras.map(costureira => (
                <option key={costureira.id} value={costureira.id}>
                  {costureira.nome}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="dataPrevisao" className="form-label">Data de Previsão</label>
            <input
              type="date"
              id="dataPrevisao"
              name="dataPrevisao"
              className="form-control"
              value={pedido.dataPrevisao}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="observacao" className="form-label">Observação</label>
            <textarea
              id="observacao"
              name="observacao"
              className="form-control"
              value={pedido.observacao || ''}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-section">
            <div className="form-section-header">
              <h3>Produtos</h3>
              <button 
                type="button" 
                className="btn btn-sm btn-secondary"
                onClick={addItemPedido}
              >
                <i className="fas fa-plus"></i> Adicionar Produto
              </button>
            </div>
            
            {pedido.itensPedido.map((item, index) => (
              <div key={index} className="form-row">
                <div className="form-group col-md-6">
                  <label className="form-label">Produto *</label>
                  <select
                    className="form-control"
                    value={item.produtoId}
                    onChange={(e) => handleItemPedidoChange(index, 'produtoId', e.target.value)}
                    required
                  >
                    <option value="">Selecione um produto...</option>
                    {produtos.map(produto => (
                      <option key={produto.id} value={produto.id}>
                        {produto.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label className="form-label">Quantidade *</label>
                  <input
                    type="number"
                    className="form-control"
                    value={item.quantidade}
                    onChange={(e) => handleItemPedidoChange(index, 'quantidade', Number(e.target.value))}
                    min="1"
                    required
                  />
                </div>
                <div className="form-group col-md-2 d-flex align-items-end">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItemPedido(index)}
                    disabled={pedido.itensPedido.length === 1}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="form-section">
            <div className="form-section-header">
              <h3>Materiais</h3>
              <button 
                type="button" 
                className="btn btn-sm btn-secondary"
                onClick={addItemMaterial}
              >
                <i className="fas fa-plus"></i> Adicionar Material
              </button>
            </div>
            
            {pedido.itensMaterial.map((item, index) => (
              <div key={index} className="form-row">
                <div className="form-group col-md-6">
                  <label className="form-label">Material</label>
                  <select
                    className="form-control"
                    value={item.materialId}
                    onChange={(e) => handleItemMaterialChange(index, 'materialId', e.target.value)}
                  >
                    <option value="">Selecione um material...</option>
                    {materiais.map(material => (
                      <option key={material.id} value={material.id}>
                        {material.nome} ({material.unidadeMedida})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label className="form-label">Quantidade</label>
                  <input
                    type="number"
                    className="form-control"
                    value={item.quantidade}
                    onChange={(e) => handleItemMaterialChange(index, 'quantidade', Number(e.target.value))}
                    min="0.01"
                    step="0.01"
                  />
                </div>
                <div className="form-group col-md-2 d-flex align-items-end">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItemMaterial(index)}
                    disabled={pedido.itensMaterial.length === 1}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/pedidos')}
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

export default PedidoForm;
