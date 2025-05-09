
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.CostureiraScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  telefone: 'telefone',
  email: 'email',
  endereco: 'endereco',
  cpf: 'cpf',
  dataCadastro: 'dataCadastro',
  ativo: 'ativo'
};

exports.Prisma.ProdutoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao',
  valorUnitario: 'valorUnitario',
  ativo: 'ativo'
};

exports.Prisma.MaterialScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao',
  unidadeMedida: 'unidadeMedida',
  ativo: 'ativo'
};

exports.Prisma.PedidoScalarFieldEnum = {
  id: 'id',
  costureiraId: 'costureiraId',
  dataEnvio: 'dataEnvio',
  dataPrevisao: 'dataPrevisao',
  observacao: 'observacao',
  status: 'status'
};

exports.Prisma.ItemPedidoScalarFieldEnum = {
  id: 'id',
  pedidoId: 'pedidoId',
  produtoId: 'produtoId',
  quantidade: 'quantidade',
  valorUnitario: 'valorUnitario'
};

exports.Prisma.ItemMaterialScalarFieldEnum = {
  id: 'id',
  pedidoId: 'pedidoId',
  materialId: 'materialId',
  quantidade: 'quantidade',
  devolvido: 'devolvido'
};

exports.Prisma.RecebimentoScalarFieldEnum = {
  id: 'id',
  pedidoId: 'pedidoId',
  costureiraId: 'costureiraId',
  dataRecebimento: 'dataRecebimento',
  observacao: 'observacao'
};

exports.Prisma.DevolucaoScalarFieldEnum = {
  id: 'id',
  pedidoId: 'pedidoId',
  costureiraId: 'costureiraId',
  dataDevolucao: 'dataDevolucao',
  observacao: 'observacao'
};

exports.Prisma.ItemDevolucaoScalarFieldEnum = {
  id: 'id',
  devolucaoId: 'devolucaoId',
  materialId: 'materialId',
  quantidade: 'quantidade'
};

exports.Prisma.PagamentoScalarFieldEnum = {
  id: 'id',
  costureiraId: 'costureiraId',
  dataPagamento: 'dataPagamento',
  valorTotal: 'valorTotal',
  observacao: 'observacao'
};

exports.Prisma.ItemPagamentoScalarFieldEnum = {
  id: 'id',
  pagamentoId: 'pagamentoId',
  pedidoId: 'pedidoId',
  produtoId: 'produtoId',
  quantidade: 'quantidade',
  valorUnitario: 'valorUnitario',
  valorTotal: 'valorTotal'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.StatusPedido = exports.$Enums.StatusPedido = {
  ENVIADO: 'ENVIADO',
  RECEBIDO: 'RECEBIDO',
  PRODUCAO: 'PRODUCAO',
  FINALIZADO: 'FINALIZADO',
  DEVOLVIDO: 'DEVOLVIDO'
};

exports.Prisma.ModelName = {
  Costureira: 'Costureira',
  Produto: 'Produto',
  Material: 'Material',
  Pedido: 'Pedido',
  ItemPedido: 'ItemPedido',
  ItemMaterial: 'ItemMaterial',
  Recebimento: 'Recebimento',
  Devolucao: 'Devolucao',
  ItemDevolucao: 'ItemDevolucao',
  Pagamento: 'Pagamento',
  ItemPagamento: 'ItemPagamento'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
