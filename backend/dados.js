const { PrismaClient } = require('./generated/prisma'); // Ajuste o caminho se necessário

const prisma = new PrismaClient();

async function seed() {
  try {
    // Inserir Costureiras
    const costureira1 = await prisma.costureira.create({
      data: {
        nome: 'Maria Silva',
        telefone: '11999998888',
        email: 'maria.silva@email.com',
        endereco: 'Rua das Flores, 123',
        cpf: '123.456.789-00',
      },
    });

    const costureira2 = await prisma.costureira.create({
      data: {
        nome: 'Ana Souza',
        telefone: '21988887777',
        email: 'ana.souza@email.com',
        endereco: 'Avenida Principal, 456',
        cpf: '987.654.321-11',
      },
    });

    console.log('Costureiras inseridas:', costureira1.nome, costureira2.nome);

    // Inserir Produtos
    const produto1 = await prisma.produto.create({
      data: {
        nome: 'Vestido Longo Estampado',
        descricao: 'Vestido longo com estampa floral',
        valorUnitario: 120.50,
      },
    });

    const produto2 = await prisma.produto.create({
      data: {
        nome: 'Calça Jeans Slim',
        descricao: 'Calça jeans corte slim fit',
        valorUnitario: 85.90,
      },
    });

    console.log('Produtos inseridos:', produto1.nome, produto2.nome);

    // Inserir Materiais
    const material1 = await prisma.material.create({
      data: {
        nome: 'Tecido Algodão Estampado',
        unidadeMedida: 'metro',
      },
    });

    const material2 = await prisma.material.create({
      data: {
        nome: 'Linha de Costura',
        unidadeMedida: 'rolo',
      },
    });

    console.log('Materiais inseridos:', material1.nome, material2.nome);

    // Inserir Pedidos
    const pedido1 = await prisma.pedido.create({
      data: {
        costureiraId: costureira1.id,
        dataPrevisao: new Date('2025-05-15T10:00:00.000Z'),
        observacao: 'Pedido urgente',
        status: 'PRODUCAO',
        itensPedido: {
          create: [
            { produtoId: produto1.id, quantidade: 2, valorUnitario: produto1.valorUnitario },
            { produtoId: produto2.id, quantidade: 1, valorUnitario: produto2.valorUnitario },
          ],
        },
        itensMaterial: {
          create: [
            { materialId: material1.id, quantidade: 5.5 },
            { materialId: material2.id, quantidade: 2 },
          ],
        },
      },
    });

    const pedido2 = await prisma.pedido.create({
      data: {
        costureiraId: costureira2.id,
        dataEnvio: new Date('2025-05-10T08:00:00.000Z'),
        status: 'ENVIADO',
        itensPedido: {
          create: [
            { produtoId: produto1.id, quantidade: 1, valorUnitario: produto1.valorUnitario },
          ],
        },
        itensMaterial: {
          create: [
            { materialId: material2.id, quantidade: 1 },
          ],
        },
      },
    });

    console.log('Pedidos inseridos:', pedido1.id, pedido2.id);

    // Inserir Recebimento (exemplo para um pedido)
    const recebimento1 = await prisma.recebimento.create({
      data: {
        pedidoId: pedido1.id,
        costureiraId: costureira1.id,
        observacao: 'Recebido sem problemas',
      },
    });

    console.log('Recebimento inserido para o pedido:', recebimento1.pedidoId);

    // Inserir Devolucao (exemplo para um pedido)
    const devolucao1 = await prisma.devolucao.create({
      data: {
        pedidoId: pedido2.id,
        costureiraId: costureira2.id,
        observacao: 'Devolução de material',
        itensDevolucao: {
          create: [
            { materialId: material1.id, quantidade: 1 },
          ],
        },
      },
    });

    console.log('Devolução inserida para o pedido:', devolucao1.pedidoId);

    // Inserir Pagamento (exemplo para uma costureira)
    const pagamento1 = await prisma.pagamento.create({
      data: {
        costureiraId: costureira1.id,
        valorTotal: 200.00,
        observacao: 'Pagamento semanal',
        itensPagamento: {
          create: [
            { pedidoId: pedido1.id, produtoId: produto1.id, quantidade: 2, valorUnitario: produto1.valorUnitario, valorTotal: 2 * produto1.valorUnitario },
            { pedidoId: pedido1.id, produtoId: produto2.id, quantidade: 1, valorUnitario: produto2.valorUnitario, valorTotal: produto2.valorUnitario },
          ],
        },
      },
    });

    console.log('Pagamento inserido para a costureira:', pagamento1.costureiraId);

    console.log('Dados de exemplo inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados de exemplo:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();