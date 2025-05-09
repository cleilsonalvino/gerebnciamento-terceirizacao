
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Costureira
 * 
 */
export type Costureira = $Result.DefaultSelection<Prisma.$CostureiraPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model ItemMaterial
 * 
 */
export type ItemMaterial = $Result.DefaultSelection<Prisma.$ItemMaterialPayload>
/**
 * Model Recebimento
 * 
 */
export type Recebimento = $Result.DefaultSelection<Prisma.$RecebimentoPayload>
/**
 * Model Devolucao
 * 
 */
export type Devolucao = $Result.DefaultSelection<Prisma.$DevolucaoPayload>
/**
 * Model ItemDevolucao
 * 
 */
export type ItemDevolucao = $Result.DefaultSelection<Prisma.$ItemDevolucaoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>
/**
 * Model ItemPagamento
 * 
 */
export type ItemPagamento = $Result.DefaultSelection<Prisma.$ItemPagamentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusPedido: {
  ENVIADO: 'ENVIADO',
  RECEBIDO: 'RECEBIDO',
  PRODUCAO: 'PRODUCAO',
  FINALIZADO: 'FINALIZADO',
  DEVOLVIDO: 'DEVOLVIDO'
};

export type StatusPedido = (typeof StatusPedido)[keyof typeof StatusPedido]

}

export type StatusPedido = $Enums.StatusPedido

export const StatusPedido: typeof $Enums.StatusPedido

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Costureiras
 * const costureiras = await prisma.costureira.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Costureiras
   * const costureiras = await prisma.costureira.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.costureira`: Exposes CRUD operations for the **Costureira** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Costureiras
    * const costureiras = await prisma.costureira.findMany()
    * ```
    */
  get costureira(): Prisma.CostureiraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemMaterial`: Exposes CRUD operations for the **ItemMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemMaterials
    * const itemMaterials = await prisma.itemMaterial.findMany()
    * ```
    */
  get itemMaterial(): Prisma.ItemMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recebimento`: Exposes CRUD operations for the **Recebimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recebimentos
    * const recebimentos = await prisma.recebimento.findMany()
    * ```
    */
  get recebimento(): Prisma.RecebimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devolucao`: Exposes CRUD operations for the **Devolucao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devolucaos
    * const devolucaos = await prisma.devolucao.findMany()
    * ```
    */
  get devolucao(): Prisma.DevolucaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemDevolucao`: Exposes CRUD operations for the **ItemDevolucao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemDevolucaos
    * const itemDevolucaos = await prisma.itemDevolucao.findMany()
    * ```
    */
  get itemDevolucao(): Prisma.ItemDevolucaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPagamento`: Exposes CRUD operations for the **ItemPagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPagamentos
    * const itemPagamentos = await prisma.itemPagamento.findMany()
    * ```
    */
  get itemPagamento(): Prisma.ItemPagamentoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "costureira" | "produto" | "material" | "pedido" | "itemPedido" | "itemMaterial" | "recebimento" | "devolucao" | "itemDevolucao" | "pagamento" | "itemPagamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Costureira: {
        payload: Prisma.$CostureiraPayload<ExtArgs>
        fields: Prisma.CostureiraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CostureiraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CostureiraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>
          }
          findFirst: {
            args: Prisma.CostureiraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CostureiraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>
          }
          findMany: {
            args: Prisma.CostureiraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>[]
          }
          create: {
            args: Prisma.CostureiraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>
          }
          createMany: {
            args: Prisma.CostureiraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CostureiraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>[]
          }
          delete: {
            args: Prisma.CostureiraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>
          }
          update: {
            args: Prisma.CostureiraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>
          }
          deleteMany: {
            args: Prisma.CostureiraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CostureiraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CostureiraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>[]
          }
          upsert: {
            args: Prisma.CostureiraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostureiraPayload>
          }
          aggregate: {
            args: Prisma.CostureiraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostureira>
          }
          groupBy: {
            args: Prisma.CostureiraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostureiraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CostureiraCountArgs<ExtArgs>
            result: $Utils.Optional<CostureiraCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemMaterial: {
        payload: Prisma.$ItemMaterialPayload<ExtArgs>
        fields: Prisma.ItemMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>
          }
          findFirst: {
            args: Prisma.ItemMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>
          }
          findMany: {
            args: Prisma.ItemMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>[]
          }
          create: {
            args: Prisma.ItemMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>
          }
          createMany: {
            args: Prisma.ItemMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>[]
          }
          delete: {
            args: Prisma.ItemMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>
          }
          update: {
            args: Prisma.ItemMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>
          }
          deleteMany: {
            args: Prisma.ItemMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>[]
          }
          upsert: {
            args: Prisma.ItemMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemMaterialPayload>
          }
          aggregate: {
            args: Prisma.ItemMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemMaterial>
          }
          groupBy: {
            args: Prisma.ItemMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<ItemMaterialCountAggregateOutputType> | number
          }
        }
      }
      Recebimento: {
        payload: Prisma.$RecebimentoPayload<ExtArgs>
        fields: Prisma.RecebimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecebimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecebimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>
          }
          findFirst: {
            args: Prisma.RecebimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecebimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>
          }
          findMany: {
            args: Prisma.RecebimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>[]
          }
          create: {
            args: Prisma.RecebimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>
          }
          createMany: {
            args: Prisma.RecebimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecebimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>[]
          }
          delete: {
            args: Prisma.RecebimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>
          }
          update: {
            args: Prisma.RecebimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>
          }
          deleteMany: {
            args: Prisma.RecebimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecebimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecebimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>[]
          }
          upsert: {
            args: Prisma.RecebimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecebimentoPayload>
          }
          aggregate: {
            args: Prisma.RecebimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecebimento>
          }
          groupBy: {
            args: Prisma.RecebimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecebimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecebimentoCountArgs<ExtArgs>
            result: $Utils.Optional<RecebimentoCountAggregateOutputType> | number
          }
        }
      }
      Devolucao: {
        payload: Prisma.$DevolucaoPayload<ExtArgs>
        fields: Prisma.DevolucaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevolucaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevolucaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>
          }
          findFirst: {
            args: Prisma.DevolucaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevolucaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>
          }
          findMany: {
            args: Prisma.DevolucaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>[]
          }
          create: {
            args: Prisma.DevolucaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>
          }
          createMany: {
            args: Prisma.DevolucaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevolucaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>[]
          }
          delete: {
            args: Prisma.DevolucaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>
          }
          update: {
            args: Prisma.DevolucaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>
          }
          deleteMany: {
            args: Prisma.DevolucaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevolucaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevolucaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>[]
          }
          upsert: {
            args: Prisma.DevolucaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucaoPayload>
          }
          aggregate: {
            args: Prisma.DevolucaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevolucao>
          }
          groupBy: {
            args: Prisma.DevolucaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevolucaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevolucaoCountArgs<ExtArgs>
            result: $Utils.Optional<DevolucaoCountAggregateOutputType> | number
          }
        }
      }
      ItemDevolucao: {
        payload: Prisma.$ItemDevolucaoPayload<ExtArgs>
        fields: Prisma.ItemDevolucaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemDevolucaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemDevolucaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>
          }
          findFirst: {
            args: Prisma.ItemDevolucaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemDevolucaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>
          }
          findMany: {
            args: Prisma.ItemDevolucaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>[]
          }
          create: {
            args: Prisma.ItemDevolucaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>
          }
          createMany: {
            args: Prisma.ItemDevolucaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemDevolucaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>[]
          }
          delete: {
            args: Prisma.ItemDevolucaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>
          }
          update: {
            args: Prisma.ItemDevolucaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>
          }
          deleteMany: {
            args: Prisma.ItemDevolucaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemDevolucaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemDevolucaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>[]
          }
          upsert: {
            args: Prisma.ItemDevolucaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDevolucaoPayload>
          }
          aggregate: {
            args: Prisma.ItemDevolucaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemDevolucao>
          }
          groupBy: {
            args: Prisma.ItemDevolucaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemDevolucaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemDevolucaoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemDevolucaoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      ItemPagamento: {
        payload: Prisma.$ItemPagamentoPayload<ExtArgs>
        fields: Prisma.ItemPagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>
          }
          findFirst: {
            args: Prisma.ItemPagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>
          }
          findMany: {
            args: Prisma.ItemPagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>[]
          }
          create: {
            args: Prisma.ItemPagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>
          }
          createMany: {
            args: Prisma.ItemPagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>[]
          }
          delete: {
            args: Prisma.ItemPagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>
          }
          update: {
            args: Prisma.ItemPagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPagamentoPayload>
          }
          aggregate: {
            args: Prisma.ItemPagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPagamento>
          }
          groupBy: {
            args: Prisma.ItemPagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPagamentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    costureira?: CostureiraOmit
    produto?: ProdutoOmit
    material?: MaterialOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    itemMaterial?: ItemMaterialOmit
    recebimento?: RecebimentoOmit
    devolucao?: DevolucaoOmit
    itemDevolucao?: ItemDevolucaoOmit
    pagamento?: PagamentoOmit
    itemPagamento?: ItemPagamentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CostureiraCountOutputType
   */

  export type CostureiraCountOutputType = {
    pedidos: number
    recebimentos: number
    devolucoes: number
    pagamentos: number
  }

  export type CostureiraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | CostureiraCountOutputTypeCountPedidosArgs
    recebimentos?: boolean | CostureiraCountOutputTypeCountRecebimentosArgs
    devolucoes?: boolean | CostureiraCountOutputTypeCountDevolucoesArgs
    pagamentos?: boolean | CostureiraCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * CostureiraCountOutputType without action
   */
  export type CostureiraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostureiraCountOutputType
     */
    select?: CostureiraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CostureiraCountOutputType without action
   */
  export type CostureiraCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * CostureiraCountOutputType without action
   */
  export type CostureiraCountOutputTypeCountRecebimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecebimentoWhereInput
  }

  /**
   * CostureiraCountOutputType without action
   */
  export type CostureiraCountOutputTypeCountDevolucoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevolucaoWhereInput
  }

  /**
   * CostureiraCountOutputType without action
   */
  export type CostureiraCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itensPedido: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | ProdutoCountOutputTypeCountItensPedidoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    itensMaterial: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensMaterial?: boolean | MaterialCountOutputTypeCountItensMaterialArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountItensMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemMaterialWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itensPedido: number
    itensMaterial: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | PedidoCountOutputTypeCountItensPedidoArgs
    itensMaterial?: boolean | PedidoCountOutputTypeCountItensMaterialArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemMaterialWhereInput
  }


  /**
   * Count Type DevolucaoCountOutputType
   */

  export type DevolucaoCountOutputType = {
    itensDevolucao: number
  }

  export type DevolucaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensDevolucao?: boolean | DevolucaoCountOutputTypeCountItensDevolucaoArgs
  }

  // Custom InputTypes
  /**
   * DevolucaoCountOutputType without action
   */
  export type DevolucaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevolucaoCountOutputType
     */
    select?: DevolucaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DevolucaoCountOutputType without action
   */
  export type DevolucaoCountOutputTypeCountItensDevolucaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDevolucaoWhereInput
  }


  /**
   * Count Type PagamentoCountOutputType
   */

  export type PagamentoCountOutputType = {
    itensPagamento: number
  }

  export type PagamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPagamento?: boolean | PagamentoCountOutputTypeCountItensPagamentoArgs
  }

  // Custom InputTypes
  /**
   * PagamentoCountOutputType without action
   */
  export type PagamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoCountOutputType
     */
    select?: PagamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PagamentoCountOutputType without action
   */
  export type PagamentoCountOutputTypeCountItensPagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPagamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Costureira
   */

  export type AggregateCostureira = {
    _count: CostureiraCountAggregateOutputType | null
    _avg: CostureiraAvgAggregateOutputType | null
    _sum: CostureiraSumAggregateOutputType | null
    _min: CostureiraMinAggregateOutputType | null
    _max: CostureiraMaxAggregateOutputType | null
  }

  export type CostureiraAvgAggregateOutputType = {
    id: number | null
  }

  export type CostureiraSumAggregateOutputType = {
    id: number | null
  }

  export type CostureiraMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    cpf: string | null
    dataCadastro: Date | null
    ativo: boolean | null
  }

  export type CostureiraMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    cpf: string | null
    dataCadastro: Date | null
    ativo: boolean | null
  }

  export type CostureiraCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    email: number
    endereco: number
    cpf: number
    dataCadastro: number
    ativo: number
    _all: number
  }


  export type CostureiraAvgAggregateInputType = {
    id?: true
  }

  export type CostureiraSumAggregateInputType = {
    id?: true
  }

  export type CostureiraMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereco?: true
    cpf?: true
    dataCadastro?: true
    ativo?: true
  }

  export type CostureiraMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereco?: true
    cpf?: true
    dataCadastro?: true
    ativo?: true
  }

  export type CostureiraCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereco?: true
    cpf?: true
    dataCadastro?: true
    ativo?: true
    _all?: true
  }

  export type CostureiraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Costureira to aggregate.
     */
    where?: CostureiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costureiras to fetch.
     */
    orderBy?: CostureiraOrderByWithRelationInput | CostureiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CostureiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costureiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costureiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Costureiras
    **/
    _count?: true | CostureiraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CostureiraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CostureiraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostureiraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostureiraMaxAggregateInputType
  }

  export type GetCostureiraAggregateType<T extends CostureiraAggregateArgs> = {
        [P in keyof T & keyof AggregateCostureira]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostureira[P]>
      : GetScalarType<T[P], AggregateCostureira[P]>
  }




  export type CostureiraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostureiraWhereInput
    orderBy?: CostureiraOrderByWithAggregationInput | CostureiraOrderByWithAggregationInput[]
    by: CostureiraScalarFieldEnum[] | CostureiraScalarFieldEnum
    having?: CostureiraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostureiraCountAggregateInputType | true
    _avg?: CostureiraAvgAggregateInputType
    _sum?: CostureiraSumAggregateInputType
    _min?: CostureiraMinAggregateInputType
    _max?: CostureiraMaxAggregateInputType
  }

  export type CostureiraGroupByOutputType = {
    id: number
    nome: string
    telefone: string | null
    email: string | null
    endereco: string | null
    cpf: string | null
    dataCadastro: Date
    ativo: boolean
    _count: CostureiraCountAggregateOutputType | null
    _avg: CostureiraAvgAggregateOutputType | null
    _sum: CostureiraSumAggregateOutputType | null
    _min: CostureiraMinAggregateOutputType | null
    _max: CostureiraMaxAggregateOutputType | null
  }

  type GetCostureiraGroupByPayload<T extends CostureiraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostureiraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostureiraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostureiraGroupByOutputType[P]>
            : GetScalarType<T[P], CostureiraGroupByOutputType[P]>
        }
      >
    >


  export type CostureiraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    cpf?: boolean
    dataCadastro?: boolean
    ativo?: boolean
    pedidos?: boolean | Costureira$pedidosArgs<ExtArgs>
    recebimentos?: boolean | Costureira$recebimentosArgs<ExtArgs>
    devolucoes?: boolean | Costureira$devolucoesArgs<ExtArgs>
    pagamentos?: boolean | Costureira$pagamentosArgs<ExtArgs>
    _count?: boolean | CostureiraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costureira"]>

  export type CostureiraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    cpf?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["costureira"]>

  export type CostureiraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    cpf?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["costureira"]>

  export type CostureiraSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    cpf?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }

  export type CostureiraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "email" | "endereco" | "cpf" | "dataCadastro" | "ativo", ExtArgs["result"]["costureira"]>
  export type CostureiraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Costureira$pedidosArgs<ExtArgs>
    recebimentos?: boolean | Costureira$recebimentosArgs<ExtArgs>
    devolucoes?: boolean | Costureira$devolucoesArgs<ExtArgs>
    pagamentos?: boolean | Costureira$pagamentosArgs<ExtArgs>
    _count?: boolean | CostureiraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CostureiraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CostureiraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CostureiraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Costureira"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      recebimentos: Prisma.$RecebimentoPayload<ExtArgs>[]
      devolucoes: Prisma.$DevolucaoPayload<ExtArgs>[]
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string | null
      email: string | null
      endereco: string | null
      cpf: string | null
      dataCadastro: Date
      ativo: boolean
    }, ExtArgs["result"]["costureira"]>
    composites: {}
  }

  type CostureiraGetPayload<S extends boolean | null | undefined | CostureiraDefaultArgs> = $Result.GetResult<Prisma.$CostureiraPayload, S>

  type CostureiraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CostureiraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CostureiraCountAggregateInputType | true
    }

  export interface CostureiraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Costureira'], meta: { name: 'Costureira' } }
    /**
     * Find zero or one Costureira that matches the filter.
     * @param {CostureiraFindUniqueArgs} args - Arguments to find a Costureira
     * @example
     * // Get one Costureira
     * const costureira = await prisma.costureira.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CostureiraFindUniqueArgs>(args: SelectSubset<T, CostureiraFindUniqueArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Costureira that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CostureiraFindUniqueOrThrowArgs} args - Arguments to find a Costureira
     * @example
     * // Get one Costureira
     * const costureira = await prisma.costureira.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CostureiraFindUniqueOrThrowArgs>(args: SelectSubset<T, CostureiraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Costureira that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraFindFirstArgs} args - Arguments to find a Costureira
     * @example
     * // Get one Costureira
     * const costureira = await prisma.costureira.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CostureiraFindFirstArgs>(args?: SelectSubset<T, CostureiraFindFirstArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Costureira that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraFindFirstOrThrowArgs} args - Arguments to find a Costureira
     * @example
     * // Get one Costureira
     * const costureira = await prisma.costureira.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CostureiraFindFirstOrThrowArgs>(args?: SelectSubset<T, CostureiraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Costureiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Costureiras
     * const costureiras = await prisma.costureira.findMany()
     * 
     * // Get first 10 Costureiras
     * const costureiras = await prisma.costureira.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const costureiraWithIdOnly = await prisma.costureira.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CostureiraFindManyArgs>(args?: SelectSubset<T, CostureiraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Costureira.
     * @param {CostureiraCreateArgs} args - Arguments to create a Costureira.
     * @example
     * // Create one Costureira
     * const Costureira = await prisma.costureira.create({
     *   data: {
     *     // ... data to create a Costureira
     *   }
     * })
     * 
     */
    create<T extends CostureiraCreateArgs>(args: SelectSubset<T, CostureiraCreateArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Costureiras.
     * @param {CostureiraCreateManyArgs} args - Arguments to create many Costureiras.
     * @example
     * // Create many Costureiras
     * const costureira = await prisma.costureira.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CostureiraCreateManyArgs>(args?: SelectSubset<T, CostureiraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Costureiras and returns the data saved in the database.
     * @param {CostureiraCreateManyAndReturnArgs} args - Arguments to create many Costureiras.
     * @example
     * // Create many Costureiras
     * const costureira = await prisma.costureira.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Costureiras and only return the `id`
     * const costureiraWithIdOnly = await prisma.costureira.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CostureiraCreateManyAndReturnArgs>(args?: SelectSubset<T, CostureiraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Costureira.
     * @param {CostureiraDeleteArgs} args - Arguments to delete one Costureira.
     * @example
     * // Delete one Costureira
     * const Costureira = await prisma.costureira.delete({
     *   where: {
     *     // ... filter to delete one Costureira
     *   }
     * })
     * 
     */
    delete<T extends CostureiraDeleteArgs>(args: SelectSubset<T, CostureiraDeleteArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Costureira.
     * @param {CostureiraUpdateArgs} args - Arguments to update one Costureira.
     * @example
     * // Update one Costureira
     * const costureira = await prisma.costureira.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CostureiraUpdateArgs>(args: SelectSubset<T, CostureiraUpdateArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Costureiras.
     * @param {CostureiraDeleteManyArgs} args - Arguments to filter Costureiras to delete.
     * @example
     * // Delete a few Costureiras
     * const { count } = await prisma.costureira.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CostureiraDeleteManyArgs>(args?: SelectSubset<T, CostureiraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Costureiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Costureiras
     * const costureira = await prisma.costureira.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CostureiraUpdateManyArgs>(args: SelectSubset<T, CostureiraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Costureiras and returns the data updated in the database.
     * @param {CostureiraUpdateManyAndReturnArgs} args - Arguments to update many Costureiras.
     * @example
     * // Update many Costureiras
     * const costureira = await prisma.costureira.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Costureiras and only return the `id`
     * const costureiraWithIdOnly = await prisma.costureira.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CostureiraUpdateManyAndReturnArgs>(args: SelectSubset<T, CostureiraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Costureira.
     * @param {CostureiraUpsertArgs} args - Arguments to update or create a Costureira.
     * @example
     * // Update or create a Costureira
     * const costureira = await prisma.costureira.upsert({
     *   create: {
     *     // ... data to create a Costureira
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Costureira we want to update
     *   }
     * })
     */
    upsert<T extends CostureiraUpsertArgs>(args: SelectSubset<T, CostureiraUpsertArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Costureiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraCountArgs} args - Arguments to filter Costureiras to count.
     * @example
     * // Count the number of Costureiras
     * const count = await prisma.costureira.count({
     *   where: {
     *     // ... the filter for the Costureiras we want to count
     *   }
     * })
    **/
    count<T extends CostureiraCountArgs>(
      args?: Subset<T, CostureiraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostureiraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Costureira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CostureiraAggregateArgs>(args: Subset<T, CostureiraAggregateArgs>): Prisma.PrismaPromise<GetCostureiraAggregateType<T>>

    /**
     * Group by Costureira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostureiraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CostureiraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostureiraGroupByArgs['orderBy'] }
        : { orderBy?: CostureiraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CostureiraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostureiraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Costureira model
   */
  readonly fields: CostureiraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Costureira.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CostureiraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Costureira$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Costureira$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recebimentos<T extends Costureira$recebimentosArgs<ExtArgs> = {}>(args?: Subset<T, Costureira$recebimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devolucoes<T extends Costureira$devolucoesArgs<ExtArgs> = {}>(args?: Subset<T, Costureira$devolucoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends Costureira$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Costureira$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Costureira model
   */
  interface CostureiraFieldRefs {
    readonly id: FieldRef<"Costureira", 'Int'>
    readonly nome: FieldRef<"Costureira", 'String'>
    readonly telefone: FieldRef<"Costureira", 'String'>
    readonly email: FieldRef<"Costureira", 'String'>
    readonly endereco: FieldRef<"Costureira", 'String'>
    readonly cpf: FieldRef<"Costureira", 'String'>
    readonly dataCadastro: FieldRef<"Costureira", 'DateTime'>
    readonly ativo: FieldRef<"Costureira", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Costureira findUnique
   */
  export type CostureiraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * Filter, which Costureira to fetch.
     */
    where: CostureiraWhereUniqueInput
  }

  /**
   * Costureira findUniqueOrThrow
   */
  export type CostureiraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * Filter, which Costureira to fetch.
     */
    where: CostureiraWhereUniqueInput
  }

  /**
   * Costureira findFirst
   */
  export type CostureiraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * Filter, which Costureira to fetch.
     */
    where?: CostureiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costureiras to fetch.
     */
    orderBy?: CostureiraOrderByWithRelationInput | CostureiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costureiras.
     */
    cursor?: CostureiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costureiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costureiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costureiras.
     */
    distinct?: CostureiraScalarFieldEnum | CostureiraScalarFieldEnum[]
  }

  /**
   * Costureira findFirstOrThrow
   */
  export type CostureiraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * Filter, which Costureira to fetch.
     */
    where?: CostureiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costureiras to fetch.
     */
    orderBy?: CostureiraOrderByWithRelationInput | CostureiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costureiras.
     */
    cursor?: CostureiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costureiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costureiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costureiras.
     */
    distinct?: CostureiraScalarFieldEnum | CostureiraScalarFieldEnum[]
  }

  /**
   * Costureira findMany
   */
  export type CostureiraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * Filter, which Costureiras to fetch.
     */
    where?: CostureiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costureiras to fetch.
     */
    orderBy?: CostureiraOrderByWithRelationInput | CostureiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Costureiras.
     */
    cursor?: CostureiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costureiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costureiras.
     */
    skip?: number
    distinct?: CostureiraScalarFieldEnum | CostureiraScalarFieldEnum[]
  }

  /**
   * Costureira create
   */
  export type CostureiraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * The data needed to create a Costureira.
     */
    data: XOR<CostureiraCreateInput, CostureiraUncheckedCreateInput>
  }

  /**
   * Costureira createMany
   */
  export type CostureiraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Costureiras.
     */
    data: CostureiraCreateManyInput | CostureiraCreateManyInput[]
  }

  /**
   * Costureira createManyAndReturn
   */
  export type CostureiraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * The data used to create many Costureiras.
     */
    data: CostureiraCreateManyInput | CostureiraCreateManyInput[]
  }

  /**
   * Costureira update
   */
  export type CostureiraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * The data needed to update a Costureira.
     */
    data: XOR<CostureiraUpdateInput, CostureiraUncheckedUpdateInput>
    /**
     * Choose, which Costureira to update.
     */
    where: CostureiraWhereUniqueInput
  }

  /**
   * Costureira updateMany
   */
  export type CostureiraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Costureiras.
     */
    data: XOR<CostureiraUpdateManyMutationInput, CostureiraUncheckedUpdateManyInput>
    /**
     * Filter which Costureiras to update
     */
    where?: CostureiraWhereInput
    /**
     * Limit how many Costureiras to update.
     */
    limit?: number
  }

  /**
   * Costureira updateManyAndReturn
   */
  export type CostureiraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * The data used to update Costureiras.
     */
    data: XOR<CostureiraUpdateManyMutationInput, CostureiraUncheckedUpdateManyInput>
    /**
     * Filter which Costureiras to update
     */
    where?: CostureiraWhereInput
    /**
     * Limit how many Costureiras to update.
     */
    limit?: number
  }

  /**
   * Costureira upsert
   */
  export type CostureiraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * The filter to search for the Costureira to update in case it exists.
     */
    where: CostureiraWhereUniqueInput
    /**
     * In case the Costureira found by the `where` argument doesn't exist, create a new Costureira with this data.
     */
    create: XOR<CostureiraCreateInput, CostureiraUncheckedCreateInput>
    /**
     * In case the Costureira was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostureiraUpdateInput, CostureiraUncheckedUpdateInput>
  }

  /**
   * Costureira delete
   */
  export type CostureiraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
    /**
     * Filter which Costureira to delete.
     */
    where: CostureiraWhereUniqueInput
  }

  /**
   * Costureira deleteMany
   */
  export type CostureiraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Costureiras to delete
     */
    where?: CostureiraWhereInput
    /**
     * Limit how many Costureiras to delete.
     */
    limit?: number
  }

  /**
   * Costureira.pedidos
   */
  export type Costureira$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Costureira.recebimentos
   */
  export type Costureira$recebimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    where?: RecebimentoWhereInput
    orderBy?: RecebimentoOrderByWithRelationInput | RecebimentoOrderByWithRelationInput[]
    cursor?: RecebimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecebimentoScalarFieldEnum | RecebimentoScalarFieldEnum[]
  }

  /**
   * Costureira.devolucoes
   */
  export type Costureira$devolucoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    where?: DevolucaoWhereInput
    orderBy?: DevolucaoOrderByWithRelationInput | DevolucaoOrderByWithRelationInput[]
    cursor?: DevolucaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevolucaoScalarFieldEnum | DevolucaoScalarFieldEnum[]
  }

  /**
   * Costureira.pagamentos
   */
  export type Costureira$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Costureira without action
   */
  export type CostureiraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costureira
     */
    select?: CostureiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costureira
     */
    omit?: CostureiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostureiraInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    valorUnitario: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    valorUnitario: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valorUnitario: number | null
    ativo: boolean | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valorUnitario: number | null
    ativo: boolean | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    valorUnitario: number
    ativo: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    valorUnitario?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    valorUnitario?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valorUnitario?: true
    ativo?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valorUnitario?: true
    ativo?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valorUnitario?: true
    ativo?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    valorUnitario: number
    ativo: boolean
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    ativo?: boolean
    itensPedido?: boolean | Produto$itensPedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    ativo?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "valorUnitario" | "ativo", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | Produto$itensPedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      itensPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      valorUnitario: number
      ativo: boolean
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensPedido<T extends Produto$itensPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly valorUnitario: FieldRef<"Produto", 'Float'>
    readonly ativo: FieldRef<"Produto", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itensPedido
   */
  export type Produto$itensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    unidadeMedida: string | null
    ativo: boolean | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    unidadeMedida: string | null
    ativo: boolean | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    unidadeMedida: number
    ativo: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidadeMedida?: true
    ativo?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidadeMedida?: true
    ativo?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidadeMedida?: true
    ativo?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    unidadeMedida: string
    ativo: boolean
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidadeMedida?: boolean
    ativo?: boolean
    itensMaterial?: boolean | Material$itensMaterialArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidadeMedida?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidadeMedida?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidadeMedida?: boolean
    ativo?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "unidadeMedida" | "ativo", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensMaterial?: boolean | Material$itensMaterialArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      itensMaterial: Prisma.$ItemMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      unidadeMedida: string
      ativo: boolean
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensMaterial<T extends Material$itensMaterialArgs<ExtArgs> = {}>(args?: Subset<T, Material$itensMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly nome: FieldRef<"Material", 'String'>
    readonly descricao: FieldRef<"Material", 'String'>
    readonly unidadeMedida: FieldRef<"Material", 'String'>
    readonly ativo: FieldRef<"Material", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.itensMaterial
   */
  export type Material$itensMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    where?: ItemMaterialWhereInput
    orderBy?: ItemMaterialOrderByWithRelationInput | ItemMaterialOrderByWithRelationInput[]
    cursor?: ItemMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemMaterialScalarFieldEnum | ItemMaterialScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    costureiraId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    costureiraId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    costureiraId: number | null
    dataEnvio: Date | null
    dataPrevisao: Date | null
    observacao: string | null
    status: $Enums.StatusPedido | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    costureiraId: number | null
    dataEnvio: Date | null
    dataPrevisao: Date | null
    observacao: string | null
    status: $Enums.StatusPedido | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    costureiraId: number
    dataEnvio: number
    dataPrevisao: number
    observacao: number
    status: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    costureiraId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    costureiraId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    costureiraId?: true
    dataEnvio?: true
    dataPrevisao?: true
    observacao?: true
    status?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    costureiraId?: true
    dataEnvio?: true
    dataPrevisao?: true
    observacao?: true
    status?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    costureiraId?: true
    dataEnvio?: true
    dataPrevisao?: true
    observacao?: true
    status?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    costureiraId: number
    dataEnvio: Date
    dataPrevisao: Date | null
    observacao: string | null
    status: $Enums.StatusPedido
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costureiraId?: boolean
    dataEnvio?: boolean
    dataPrevisao?: boolean
    observacao?: boolean
    status?: boolean
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
    itensPedido?: boolean | Pedido$itensPedidoArgs<ExtArgs>
    itensMaterial?: boolean | Pedido$itensMaterialArgs<ExtArgs>
    recebimento?: boolean | Pedido$recebimentoArgs<ExtArgs>
    devolucao?: boolean | Pedido$devolucaoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costureiraId?: boolean
    dataEnvio?: boolean
    dataPrevisao?: boolean
    observacao?: boolean
    status?: boolean
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costureiraId?: boolean
    dataEnvio?: boolean
    dataPrevisao?: boolean
    observacao?: boolean
    status?: boolean
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    costureiraId?: boolean
    dataEnvio?: boolean
    dataPrevisao?: boolean
    observacao?: boolean
    status?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "costureiraId" | "dataEnvio" | "dataPrevisao" | "observacao" | "status", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
    itensPedido?: boolean | Pedido$itensPedidoArgs<ExtArgs>
    itensMaterial?: boolean | Pedido$itensMaterialArgs<ExtArgs>
    recebimento?: boolean | Pedido$recebimentoArgs<ExtArgs>
    devolucao?: boolean | Pedido$devolucaoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      costureira: Prisma.$CostureiraPayload<ExtArgs>
      itensPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
      itensMaterial: Prisma.$ItemMaterialPayload<ExtArgs>[]
      recebimento: Prisma.$RecebimentoPayload<ExtArgs> | null
      devolucao: Prisma.$DevolucaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      costureiraId: number
      dataEnvio: Date
      dataPrevisao: Date | null
      observacao: string | null
      status: $Enums.StatusPedido
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    costureira<T extends CostureiraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CostureiraDefaultArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensPedido<T extends Pedido$itensPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itensMaterial<T extends Pedido$itensMaterialArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recebimento<T extends Pedido$recebimentoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$recebimentoArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    devolucao<T extends Pedido$devolucaoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$devolucaoArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly costureiraId: FieldRef<"Pedido", 'Int'>
    readonly dataEnvio: FieldRef<"Pedido", 'DateTime'>
    readonly dataPrevisao: FieldRef<"Pedido", 'DateTime'>
    readonly observacao: FieldRef<"Pedido", 'String'>
    readonly status: FieldRef<"Pedido", 'StatusPedido'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.itensPedido
   */
  export type Pedido$itensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.itensMaterial
   */
  export type Pedido$itensMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    where?: ItemMaterialWhereInput
    orderBy?: ItemMaterialOrderByWithRelationInput | ItemMaterialOrderByWithRelationInput[]
    cursor?: ItemMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemMaterialScalarFieldEnum | ItemMaterialScalarFieldEnum[]
  }

  /**
   * Pedido.recebimento
   */
  export type Pedido$recebimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    where?: RecebimentoWhereInput
  }

  /**
   * Pedido.devolucao
   */
  export type Pedido$devolucaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    where?: DevolucaoWhereInput
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "produtoId" | "quantidade" | "valorUnitario", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      produtoId: number
      quantidade: number
      valorUnitario: number
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly produtoId: FieldRef<"ItemPedido", 'Int'>
    readonly quantidade: FieldRef<"ItemPedido", 'Int'>
    readonly valorUnitario: FieldRef<"ItemPedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemMaterial
   */

  export type AggregateItemMaterial = {
    _count: ItemMaterialCountAggregateOutputType | null
    _avg: ItemMaterialAvgAggregateOutputType | null
    _sum: ItemMaterialSumAggregateOutputType | null
    _min: ItemMaterialMinAggregateOutputType | null
    _max: ItemMaterialMaxAggregateOutputType | null
  }

  export type ItemMaterialAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    materialId: number | null
    quantidade: number | null
    devolvido: number | null
  }

  export type ItemMaterialSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    materialId: number | null
    quantidade: number | null
    devolvido: number | null
  }

  export type ItemMaterialMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    materialId: number | null
    quantidade: number | null
    devolvido: number | null
  }

  export type ItemMaterialMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    materialId: number | null
    quantidade: number | null
    devolvido: number | null
  }

  export type ItemMaterialCountAggregateOutputType = {
    id: number
    pedidoId: number
    materialId: number
    quantidade: number
    devolvido: number
    _all: number
  }


  export type ItemMaterialAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    materialId?: true
    quantidade?: true
    devolvido?: true
  }

  export type ItemMaterialSumAggregateInputType = {
    id?: true
    pedidoId?: true
    materialId?: true
    quantidade?: true
    devolvido?: true
  }

  export type ItemMaterialMinAggregateInputType = {
    id?: true
    pedidoId?: true
    materialId?: true
    quantidade?: true
    devolvido?: true
  }

  export type ItemMaterialMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    materialId?: true
    quantidade?: true
    devolvido?: true
  }

  export type ItemMaterialCountAggregateInputType = {
    id?: true
    pedidoId?: true
    materialId?: true
    quantidade?: true
    devolvido?: true
    _all?: true
  }

  export type ItemMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemMaterial to aggregate.
     */
    where?: ItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMaterials to fetch.
     */
    orderBy?: ItemMaterialOrderByWithRelationInput | ItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemMaterials
    **/
    _count?: true | ItemMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaterialMaxAggregateInputType
  }

  export type GetItemMaterialAggregateType<T extends ItemMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateItemMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemMaterial[P]>
      : GetScalarType<T[P], AggregateItemMaterial[P]>
  }




  export type ItemMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemMaterialWhereInput
    orderBy?: ItemMaterialOrderByWithAggregationInput | ItemMaterialOrderByWithAggregationInput[]
    by: ItemMaterialScalarFieldEnum[] | ItemMaterialScalarFieldEnum
    having?: ItemMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemMaterialCountAggregateInputType | true
    _avg?: ItemMaterialAvgAggregateInputType
    _sum?: ItemMaterialSumAggregateInputType
    _min?: ItemMaterialMinAggregateInputType
    _max?: ItemMaterialMaxAggregateInputType
  }

  export type ItemMaterialGroupByOutputType = {
    id: number
    pedidoId: number
    materialId: number
    quantidade: number
    devolvido: number
    _count: ItemMaterialCountAggregateOutputType | null
    _avg: ItemMaterialAvgAggregateOutputType | null
    _sum: ItemMaterialSumAggregateOutputType | null
    _min: ItemMaterialMinAggregateOutputType | null
    _max: ItemMaterialMaxAggregateOutputType | null
  }

  type GetItemMaterialGroupByPayload<T extends ItemMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], ItemMaterialGroupByOutputType[P]>
        }
      >
    >


  export type ItemMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolvido?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemMaterial"]>

  export type ItemMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolvido?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemMaterial"]>

  export type ItemMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolvido?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemMaterial"]>

  export type ItemMaterialSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolvido?: boolean
  }

  export type ItemMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "materialId" | "quantidade" | "devolvido", ExtArgs["result"]["itemMaterial"]>
  export type ItemMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ItemMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ItemMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $ItemMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemMaterial"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      materialId: number
      quantidade: number
      devolvido: number
    }, ExtArgs["result"]["itemMaterial"]>
    composites: {}
  }

  type ItemMaterialGetPayload<S extends boolean | null | undefined | ItemMaterialDefaultArgs> = $Result.GetResult<Prisma.$ItemMaterialPayload, S>

  type ItemMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemMaterialCountAggregateInputType | true
    }

  export interface ItemMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemMaterial'], meta: { name: 'ItemMaterial' } }
    /**
     * Find zero or one ItemMaterial that matches the filter.
     * @param {ItemMaterialFindUniqueArgs} args - Arguments to find a ItemMaterial
     * @example
     * // Get one ItemMaterial
     * const itemMaterial = await prisma.itemMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemMaterialFindUniqueArgs>(args: SelectSubset<T, ItemMaterialFindUniqueArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemMaterialFindUniqueOrThrowArgs} args - Arguments to find a ItemMaterial
     * @example
     * // Get one ItemMaterial
     * const itemMaterial = await prisma.itemMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialFindFirstArgs} args - Arguments to find a ItemMaterial
     * @example
     * // Get one ItemMaterial
     * const itemMaterial = await prisma.itemMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemMaterialFindFirstArgs>(args?: SelectSubset<T, ItemMaterialFindFirstArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialFindFirstOrThrowArgs} args - Arguments to find a ItemMaterial
     * @example
     * // Get one ItemMaterial
     * const itemMaterial = await prisma.itemMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemMaterials
     * const itemMaterials = await prisma.itemMaterial.findMany()
     * 
     * // Get first 10 ItemMaterials
     * const itemMaterials = await prisma.itemMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemMaterialWithIdOnly = await prisma.itemMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemMaterialFindManyArgs>(args?: SelectSubset<T, ItemMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemMaterial.
     * @param {ItemMaterialCreateArgs} args - Arguments to create a ItemMaterial.
     * @example
     * // Create one ItemMaterial
     * const ItemMaterial = await prisma.itemMaterial.create({
     *   data: {
     *     // ... data to create a ItemMaterial
     *   }
     * })
     * 
     */
    create<T extends ItemMaterialCreateArgs>(args: SelectSubset<T, ItemMaterialCreateArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemMaterials.
     * @param {ItemMaterialCreateManyArgs} args - Arguments to create many ItemMaterials.
     * @example
     * // Create many ItemMaterials
     * const itemMaterial = await prisma.itemMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemMaterialCreateManyArgs>(args?: SelectSubset<T, ItemMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemMaterials and returns the data saved in the database.
     * @param {ItemMaterialCreateManyAndReturnArgs} args - Arguments to create many ItemMaterials.
     * @example
     * // Create many ItemMaterials
     * const itemMaterial = await prisma.itemMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemMaterials and only return the `id`
     * const itemMaterialWithIdOnly = await prisma.itemMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemMaterial.
     * @param {ItemMaterialDeleteArgs} args - Arguments to delete one ItemMaterial.
     * @example
     * // Delete one ItemMaterial
     * const ItemMaterial = await prisma.itemMaterial.delete({
     *   where: {
     *     // ... filter to delete one ItemMaterial
     *   }
     * })
     * 
     */
    delete<T extends ItemMaterialDeleteArgs>(args: SelectSubset<T, ItemMaterialDeleteArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemMaterial.
     * @param {ItemMaterialUpdateArgs} args - Arguments to update one ItemMaterial.
     * @example
     * // Update one ItemMaterial
     * const itemMaterial = await prisma.itemMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemMaterialUpdateArgs>(args: SelectSubset<T, ItemMaterialUpdateArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemMaterials.
     * @param {ItemMaterialDeleteManyArgs} args - Arguments to filter ItemMaterials to delete.
     * @example
     * // Delete a few ItemMaterials
     * const { count } = await prisma.itemMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemMaterialDeleteManyArgs>(args?: SelectSubset<T, ItemMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemMaterials
     * const itemMaterial = await prisma.itemMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemMaterialUpdateManyArgs>(args: SelectSubset<T, ItemMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemMaterials and returns the data updated in the database.
     * @param {ItemMaterialUpdateManyAndReturnArgs} args - Arguments to update many ItemMaterials.
     * @example
     * // Update many ItemMaterials
     * const itemMaterial = await prisma.itemMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemMaterials and only return the `id`
     * const itemMaterialWithIdOnly = await prisma.itemMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemMaterial.
     * @param {ItemMaterialUpsertArgs} args - Arguments to update or create a ItemMaterial.
     * @example
     * // Update or create a ItemMaterial
     * const itemMaterial = await prisma.itemMaterial.upsert({
     *   create: {
     *     // ... data to create a ItemMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ItemMaterialUpsertArgs>(args: SelectSubset<T, ItemMaterialUpsertArgs<ExtArgs>>): Prisma__ItemMaterialClient<$Result.GetResult<Prisma.$ItemMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialCountArgs} args - Arguments to filter ItemMaterials to count.
     * @example
     * // Count the number of ItemMaterials
     * const count = await prisma.itemMaterial.count({
     *   where: {
     *     // ... the filter for the ItemMaterials we want to count
     *   }
     * })
    **/
    count<T extends ItemMaterialCountArgs>(
      args?: Subset<T, ItemMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemMaterialAggregateArgs>(args: Subset<T, ItemMaterialAggregateArgs>): Prisma.PrismaPromise<GetItemMaterialAggregateType<T>>

    /**
     * Group by ItemMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemMaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemMaterialGroupByArgs['orderBy'] }
        : { orderBy?: ItemMaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemMaterial model
   */
  readonly fields: ItemMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemMaterial model
   */
  interface ItemMaterialFieldRefs {
    readonly id: FieldRef<"ItemMaterial", 'Int'>
    readonly pedidoId: FieldRef<"ItemMaterial", 'Int'>
    readonly materialId: FieldRef<"ItemMaterial", 'Int'>
    readonly quantidade: FieldRef<"ItemMaterial", 'Float'>
    readonly devolvido: FieldRef<"ItemMaterial", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemMaterial findUnique
   */
  export type ItemMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ItemMaterial to fetch.
     */
    where: ItemMaterialWhereUniqueInput
  }

  /**
   * ItemMaterial findUniqueOrThrow
   */
  export type ItemMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ItemMaterial to fetch.
     */
    where: ItemMaterialWhereUniqueInput
  }

  /**
   * ItemMaterial findFirst
   */
  export type ItemMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ItemMaterial to fetch.
     */
    where?: ItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMaterials to fetch.
     */
    orderBy?: ItemMaterialOrderByWithRelationInput | ItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemMaterials.
     */
    cursor?: ItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemMaterials.
     */
    distinct?: ItemMaterialScalarFieldEnum | ItemMaterialScalarFieldEnum[]
  }

  /**
   * ItemMaterial findFirstOrThrow
   */
  export type ItemMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ItemMaterial to fetch.
     */
    where?: ItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMaterials to fetch.
     */
    orderBy?: ItemMaterialOrderByWithRelationInput | ItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemMaterials.
     */
    cursor?: ItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemMaterials.
     */
    distinct?: ItemMaterialScalarFieldEnum | ItemMaterialScalarFieldEnum[]
  }

  /**
   * ItemMaterial findMany
   */
  export type ItemMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ItemMaterials to fetch.
     */
    where?: ItemMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemMaterials to fetch.
     */
    orderBy?: ItemMaterialOrderByWithRelationInput | ItemMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemMaterials.
     */
    cursor?: ItemMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemMaterials.
     */
    skip?: number
    distinct?: ItemMaterialScalarFieldEnum | ItemMaterialScalarFieldEnum[]
  }

  /**
   * ItemMaterial create
   */
  export type ItemMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemMaterial.
     */
    data: XOR<ItemMaterialCreateInput, ItemMaterialUncheckedCreateInput>
  }

  /**
   * ItemMaterial createMany
   */
  export type ItemMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemMaterials.
     */
    data: ItemMaterialCreateManyInput | ItemMaterialCreateManyInput[]
  }

  /**
   * ItemMaterial createManyAndReturn
   */
  export type ItemMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many ItemMaterials.
     */
    data: ItemMaterialCreateManyInput | ItemMaterialCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemMaterial update
   */
  export type ItemMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemMaterial.
     */
    data: XOR<ItemMaterialUpdateInput, ItemMaterialUncheckedUpdateInput>
    /**
     * Choose, which ItemMaterial to update.
     */
    where: ItemMaterialWhereUniqueInput
  }

  /**
   * ItemMaterial updateMany
   */
  export type ItemMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemMaterials.
     */
    data: XOR<ItemMaterialUpdateManyMutationInput, ItemMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ItemMaterials to update
     */
    where?: ItemMaterialWhereInput
    /**
     * Limit how many ItemMaterials to update.
     */
    limit?: number
  }

  /**
   * ItemMaterial updateManyAndReturn
   */
  export type ItemMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * The data used to update ItemMaterials.
     */
    data: XOR<ItemMaterialUpdateManyMutationInput, ItemMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ItemMaterials to update
     */
    where?: ItemMaterialWhereInput
    /**
     * Limit how many ItemMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemMaterial upsert
   */
  export type ItemMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemMaterial to update in case it exists.
     */
    where: ItemMaterialWhereUniqueInput
    /**
     * In case the ItemMaterial found by the `where` argument doesn't exist, create a new ItemMaterial with this data.
     */
    create: XOR<ItemMaterialCreateInput, ItemMaterialUncheckedCreateInput>
    /**
     * In case the ItemMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemMaterialUpdateInput, ItemMaterialUncheckedUpdateInput>
  }

  /**
   * ItemMaterial delete
   */
  export type ItemMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
    /**
     * Filter which ItemMaterial to delete.
     */
    where: ItemMaterialWhereUniqueInput
  }

  /**
   * ItemMaterial deleteMany
   */
  export type ItemMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemMaterials to delete
     */
    where?: ItemMaterialWhereInput
    /**
     * Limit how many ItemMaterials to delete.
     */
    limit?: number
  }

  /**
   * ItemMaterial without action
   */
  export type ItemMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemMaterial
     */
    select?: ItemMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemMaterial
     */
    omit?: ItemMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemMaterialInclude<ExtArgs> | null
  }


  /**
   * Model Recebimento
   */

  export type AggregateRecebimento = {
    _count: RecebimentoCountAggregateOutputType | null
    _avg: RecebimentoAvgAggregateOutputType | null
    _sum: RecebimentoSumAggregateOutputType | null
    _min: RecebimentoMinAggregateOutputType | null
    _max: RecebimentoMaxAggregateOutputType | null
  }

  export type RecebimentoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
  }

  export type RecebimentoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
  }

  export type RecebimentoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
    dataRecebimento: Date | null
    observacao: string | null
  }

  export type RecebimentoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
    dataRecebimento: Date | null
    observacao: string | null
  }

  export type RecebimentoCountAggregateOutputType = {
    id: number
    pedidoId: number
    costureiraId: number
    dataRecebimento: number
    observacao: number
    _all: number
  }


  export type RecebimentoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
  }

  export type RecebimentoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
  }

  export type RecebimentoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
    dataRecebimento?: true
    observacao?: true
  }

  export type RecebimentoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
    dataRecebimento?: true
    observacao?: true
  }

  export type RecebimentoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
    dataRecebimento?: true
    observacao?: true
    _all?: true
  }

  export type RecebimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recebimento to aggregate.
     */
    where?: RecebimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recebimentos to fetch.
     */
    orderBy?: RecebimentoOrderByWithRelationInput | RecebimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecebimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recebimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recebimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recebimentos
    **/
    _count?: true | RecebimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecebimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecebimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecebimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecebimentoMaxAggregateInputType
  }

  export type GetRecebimentoAggregateType<T extends RecebimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecebimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecebimento[P]>
      : GetScalarType<T[P], AggregateRecebimento[P]>
  }




  export type RecebimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecebimentoWhereInput
    orderBy?: RecebimentoOrderByWithAggregationInput | RecebimentoOrderByWithAggregationInput[]
    by: RecebimentoScalarFieldEnum[] | RecebimentoScalarFieldEnum
    having?: RecebimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecebimentoCountAggregateInputType | true
    _avg?: RecebimentoAvgAggregateInputType
    _sum?: RecebimentoSumAggregateInputType
    _min?: RecebimentoMinAggregateInputType
    _max?: RecebimentoMaxAggregateInputType
  }

  export type RecebimentoGroupByOutputType = {
    id: number
    pedidoId: number
    costureiraId: number
    dataRecebimento: Date
    observacao: string | null
    _count: RecebimentoCountAggregateOutputType | null
    _avg: RecebimentoAvgAggregateOutputType | null
    _sum: RecebimentoSumAggregateOutputType | null
    _min: RecebimentoMinAggregateOutputType | null
    _max: RecebimentoMaxAggregateOutputType | null
  }

  type GetRecebimentoGroupByPayload<T extends RecebimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecebimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecebimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecebimentoGroupByOutputType[P]>
            : GetScalarType<T[P], RecebimentoGroupByOutputType[P]>
        }
      >
    >


  export type RecebimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataRecebimento?: boolean
    observacao?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recebimento"]>

  export type RecebimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataRecebimento?: boolean
    observacao?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recebimento"]>

  export type RecebimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataRecebimento?: boolean
    observacao?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recebimento"]>

  export type RecebimentoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataRecebimento?: boolean
    observacao?: boolean
  }

  export type RecebimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "costureiraId" | "dataRecebimento" | "observacao", ExtArgs["result"]["recebimento"]>
  export type RecebimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }
  export type RecebimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }
  export type RecebimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }

  export type $RecebimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recebimento"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      costureira: Prisma.$CostureiraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      costureiraId: number
      dataRecebimento: Date
      observacao: string | null
    }, ExtArgs["result"]["recebimento"]>
    composites: {}
  }

  type RecebimentoGetPayload<S extends boolean | null | undefined | RecebimentoDefaultArgs> = $Result.GetResult<Prisma.$RecebimentoPayload, S>

  type RecebimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecebimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecebimentoCountAggregateInputType | true
    }

  export interface RecebimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recebimento'], meta: { name: 'Recebimento' } }
    /**
     * Find zero or one Recebimento that matches the filter.
     * @param {RecebimentoFindUniqueArgs} args - Arguments to find a Recebimento
     * @example
     * // Get one Recebimento
     * const recebimento = await prisma.recebimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecebimentoFindUniqueArgs>(args: SelectSubset<T, RecebimentoFindUniqueArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recebimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecebimentoFindUniqueOrThrowArgs} args - Arguments to find a Recebimento
     * @example
     * // Get one Recebimento
     * const recebimento = await prisma.recebimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecebimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, RecebimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recebimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoFindFirstArgs} args - Arguments to find a Recebimento
     * @example
     * // Get one Recebimento
     * const recebimento = await prisma.recebimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecebimentoFindFirstArgs>(args?: SelectSubset<T, RecebimentoFindFirstArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recebimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoFindFirstOrThrowArgs} args - Arguments to find a Recebimento
     * @example
     * // Get one Recebimento
     * const recebimento = await prisma.recebimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecebimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, RecebimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recebimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recebimentos
     * const recebimentos = await prisma.recebimento.findMany()
     * 
     * // Get first 10 Recebimentos
     * const recebimentos = await prisma.recebimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recebimentoWithIdOnly = await prisma.recebimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecebimentoFindManyArgs>(args?: SelectSubset<T, RecebimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recebimento.
     * @param {RecebimentoCreateArgs} args - Arguments to create a Recebimento.
     * @example
     * // Create one Recebimento
     * const Recebimento = await prisma.recebimento.create({
     *   data: {
     *     // ... data to create a Recebimento
     *   }
     * })
     * 
     */
    create<T extends RecebimentoCreateArgs>(args: SelectSubset<T, RecebimentoCreateArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recebimentos.
     * @param {RecebimentoCreateManyArgs} args - Arguments to create many Recebimentos.
     * @example
     * // Create many Recebimentos
     * const recebimento = await prisma.recebimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecebimentoCreateManyArgs>(args?: SelectSubset<T, RecebimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recebimentos and returns the data saved in the database.
     * @param {RecebimentoCreateManyAndReturnArgs} args - Arguments to create many Recebimentos.
     * @example
     * // Create many Recebimentos
     * const recebimento = await prisma.recebimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recebimentos and only return the `id`
     * const recebimentoWithIdOnly = await prisma.recebimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecebimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, RecebimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recebimento.
     * @param {RecebimentoDeleteArgs} args - Arguments to delete one Recebimento.
     * @example
     * // Delete one Recebimento
     * const Recebimento = await prisma.recebimento.delete({
     *   where: {
     *     // ... filter to delete one Recebimento
     *   }
     * })
     * 
     */
    delete<T extends RecebimentoDeleteArgs>(args: SelectSubset<T, RecebimentoDeleteArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recebimento.
     * @param {RecebimentoUpdateArgs} args - Arguments to update one Recebimento.
     * @example
     * // Update one Recebimento
     * const recebimento = await prisma.recebimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecebimentoUpdateArgs>(args: SelectSubset<T, RecebimentoUpdateArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recebimentos.
     * @param {RecebimentoDeleteManyArgs} args - Arguments to filter Recebimentos to delete.
     * @example
     * // Delete a few Recebimentos
     * const { count } = await prisma.recebimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecebimentoDeleteManyArgs>(args?: SelectSubset<T, RecebimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recebimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recebimentos
     * const recebimento = await prisma.recebimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecebimentoUpdateManyArgs>(args: SelectSubset<T, RecebimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recebimentos and returns the data updated in the database.
     * @param {RecebimentoUpdateManyAndReturnArgs} args - Arguments to update many Recebimentos.
     * @example
     * // Update many Recebimentos
     * const recebimento = await prisma.recebimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recebimentos and only return the `id`
     * const recebimentoWithIdOnly = await prisma.recebimento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecebimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, RecebimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recebimento.
     * @param {RecebimentoUpsertArgs} args - Arguments to update or create a Recebimento.
     * @example
     * // Update or create a Recebimento
     * const recebimento = await prisma.recebimento.upsert({
     *   create: {
     *     // ... data to create a Recebimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recebimento we want to update
     *   }
     * })
     */
    upsert<T extends RecebimentoUpsertArgs>(args: SelectSubset<T, RecebimentoUpsertArgs<ExtArgs>>): Prisma__RecebimentoClient<$Result.GetResult<Prisma.$RecebimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recebimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoCountArgs} args - Arguments to filter Recebimentos to count.
     * @example
     * // Count the number of Recebimentos
     * const count = await prisma.recebimento.count({
     *   where: {
     *     // ... the filter for the Recebimentos we want to count
     *   }
     * })
    **/
    count<T extends RecebimentoCountArgs>(
      args?: Subset<T, RecebimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecebimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recebimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecebimentoAggregateArgs>(args: Subset<T, RecebimentoAggregateArgs>): Prisma.PrismaPromise<GetRecebimentoAggregateType<T>>

    /**
     * Group by Recebimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecebimentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecebimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecebimentoGroupByArgs['orderBy'] }
        : { orderBy?: RecebimentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecebimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecebimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recebimento model
   */
  readonly fields: RecebimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recebimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecebimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    costureira<T extends CostureiraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CostureiraDefaultArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recebimento model
   */
  interface RecebimentoFieldRefs {
    readonly id: FieldRef<"Recebimento", 'Int'>
    readonly pedidoId: FieldRef<"Recebimento", 'Int'>
    readonly costureiraId: FieldRef<"Recebimento", 'Int'>
    readonly dataRecebimento: FieldRef<"Recebimento", 'DateTime'>
    readonly observacao: FieldRef<"Recebimento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recebimento findUnique
   */
  export type RecebimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * Filter, which Recebimento to fetch.
     */
    where: RecebimentoWhereUniqueInput
  }

  /**
   * Recebimento findUniqueOrThrow
   */
  export type RecebimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * Filter, which Recebimento to fetch.
     */
    where: RecebimentoWhereUniqueInput
  }

  /**
   * Recebimento findFirst
   */
  export type RecebimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * Filter, which Recebimento to fetch.
     */
    where?: RecebimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recebimentos to fetch.
     */
    orderBy?: RecebimentoOrderByWithRelationInput | RecebimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recebimentos.
     */
    cursor?: RecebimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recebimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recebimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recebimentos.
     */
    distinct?: RecebimentoScalarFieldEnum | RecebimentoScalarFieldEnum[]
  }

  /**
   * Recebimento findFirstOrThrow
   */
  export type RecebimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * Filter, which Recebimento to fetch.
     */
    where?: RecebimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recebimentos to fetch.
     */
    orderBy?: RecebimentoOrderByWithRelationInput | RecebimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recebimentos.
     */
    cursor?: RecebimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recebimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recebimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recebimentos.
     */
    distinct?: RecebimentoScalarFieldEnum | RecebimentoScalarFieldEnum[]
  }

  /**
   * Recebimento findMany
   */
  export type RecebimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * Filter, which Recebimentos to fetch.
     */
    where?: RecebimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recebimentos to fetch.
     */
    orderBy?: RecebimentoOrderByWithRelationInput | RecebimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recebimentos.
     */
    cursor?: RecebimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recebimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recebimentos.
     */
    skip?: number
    distinct?: RecebimentoScalarFieldEnum | RecebimentoScalarFieldEnum[]
  }

  /**
   * Recebimento create
   */
  export type RecebimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Recebimento.
     */
    data: XOR<RecebimentoCreateInput, RecebimentoUncheckedCreateInput>
  }

  /**
   * Recebimento createMany
   */
  export type RecebimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recebimentos.
     */
    data: RecebimentoCreateManyInput | RecebimentoCreateManyInput[]
  }

  /**
   * Recebimento createManyAndReturn
   */
  export type RecebimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Recebimentos.
     */
    data: RecebimentoCreateManyInput | RecebimentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recebimento update
   */
  export type RecebimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Recebimento.
     */
    data: XOR<RecebimentoUpdateInput, RecebimentoUncheckedUpdateInput>
    /**
     * Choose, which Recebimento to update.
     */
    where: RecebimentoWhereUniqueInput
  }

  /**
   * Recebimento updateMany
   */
  export type RecebimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recebimentos.
     */
    data: XOR<RecebimentoUpdateManyMutationInput, RecebimentoUncheckedUpdateManyInput>
    /**
     * Filter which Recebimentos to update
     */
    where?: RecebimentoWhereInput
    /**
     * Limit how many Recebimentos to update.
     */
    limit?: number
  }

  /**
   * Recebimento updateManyAndReturn
   */
  export type RecebimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * The data used to update Recebimentos.
     */
    data: XOR<RecebimentoUpdateManyMutationInput, RecebimentoUncheckedUpdateManyInput>
    /**
     * Filter which Recebimentos to update
     */
    where?: RecebimentoWhereInput
    /**
     * Limit how many Recebimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recebimento upsert
   */
  export type RecebimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Recebimento to update in case it exists.
     */
    where: RecebimentoWhereUniqueInput
    /**
     * In case the Recebimento found by the `where` argument doesn't exist, create a new Recebimento with this data.
     */
    create: XOR<RecebimentoCreateInput, RecebimentoUncheckedCreateInput>
    /**
     * In case the Recebimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecebimentoUpdateInput, RecebimentoUncheckedUpdateInput>
  }

  /**
   * Recebimento delete
   */
  export type RecebimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
    /**
     * Filter which Recebimento to delete.
     */
    where: RecebimentoWhereUniqueInput
  }

  /**
   * Recebimento deleteMany
   */
  export type RecebimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recebimentos to delete
     */
    where?: RecebimentoWhereInput
    /**
     * Limit how many Recebimentos to delete.
     */
    limit?: number
  }

  /**
   * Recebimento without action
   */
  export type RecebimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recebimento
     */
    select?: RecebimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recebimento
     */
    omit?: RecebimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecebimentoInclude<ExtArgs> | null
  }


  /**
   * Model Devolucao
   */

  export type AggregateDevolucao = {
    _count: DevolucaoCountAggregateOutputType | null
    _avg: DevolucaoAvgAggregateOutputType | null
    _sum: DevolucaoSumAggregateOutputType | null
    _min: DevolucaoMinAggregateOutputType | null
    _max: DevolucaoMaxAggregateOutputType | null
  }

  export type DevolucaoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
  }

  export type DevolucaoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
  }

  export type DevolucaoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
    dataDevolucao: Date | null
    observacao: string | null
  }

  export type DevolucaoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    costureiraId: number | null
    dataDevolucao: Date | null
    observacao: string | null
  }

  export type DevolucaoCountAggregateOutputType = {
    id: number
    pedidoId: number
    costureiraId: number
    dataDevolucao: number
    observacao: number
    _all: number
  }


  export type DevolucaoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
  }

  export type DevolucaoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
  }

  export type DevolucaoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
    dataDevolucao?: true
    observacao?: true
  }

  export type DevolucaoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
    dataDevolucao?: true
    observacao?: true
  }

  export type DevolucaoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    costureiraId?: true
    dataDevolucao?: true
    observacao?: true
    _all?: true
  }

  export type DevolucaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devolucao to aggregate.
     */
    where?: DevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucaos to fetch.
     */
    orderBy?: DevolucaoOrderByWithRelationInput | DevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devolucaos
    **/
    _count?: true | DevolucaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevolucaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevolucaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevolucaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevolucaoMaxAggregateInputType
  }

  export type GetDevolucaoAggregateType<T extends DevolucaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDevolucao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevolucao[P]>
      : GetScalarType<T[P], AggregateDevolucao[P]>
  }




  export type DevolucaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevolucaoWhereInput
    orderBy?: DevolucaoOrderByWithAggregationInput | DevolucaoOrderByWithAggregationInput[]
    by: DevolucaoScalarFieldEnum[] | DevolucaoScalarFieldEnum
    having?: DevolucaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevolucaoCountAggregateInputType | true
    _avg?: DevolucaoAvgAggregateInputType
    _sum?: DevolucaoSumAggregateInputType
    _min?: DevolucaoMinAggregateInputType
    _max?: DevolucaoMaxAggregateInputType
  }

  export type DevolucaoGroupByOutputType = {
    id: number
    pedidoId: number
    costureiraId: number
    dataDevolucao: Date
    observacao: string | null
    _count: DevolucaoCountAggregateOutputType | null
    _avg: DevolucaoAvgAggregateOutputType | null
    _sum: DevolucaoSumAggregateOutputType | null
    _min: DevolucaoMinAggregateOutputType | null
    _max: DevolucaoMaxAggregateOutputType | null
  }

  type GetDevolucaoGroupByPayload<T extends DevolucaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevolucaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevolucaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevolucaoGroupByOutputType[P]>
            : GetScalarType<T[P], DevolucaoGroupByOutputType[P]>
        }
      >
    >


  export type DevolucaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataDevolucao?: boolean
    observacao?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
    itensDevolucao?: boolean | Devolucao$itensDevolucaoArgs<ExtArgs>
    _count?: boolean | DevolucaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucao"]>

  export type DevolucaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataDevolucao?: boolean
    observacao?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucao"]>

  export type DevolucaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataDevolucao?: boolean
    observacao?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucao"]>

  export type DevolucaoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    costureiraId?: boolean
    dataDevolucao?: boolean
    observacao?: boolean
  }

  export type DevolucaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "costureiraId" | "dataDevolucao" | "observacao", ExtArgs["result"]["devolucao"]>
  export type DevolucaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
    itensDevolucao?: boolean | Devolucao$itensDevolucaoArgs<ExtArgs>
    _count?: boolean | DevolucaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DevolucaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }
  export type DevolucaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }

  export type $DevolucaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devolucao"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      costureira: Prisma.$CostureiraPayload<ExtArgs>
      itensDevolucao: Prisma.$ItemDevolucaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      costureiraId: number
      dataDevolucao: Date
      observacao: string | null
    }, ExtArgs["result"]["devolucao"]>
    composites: {}
  }

  type DevolucaoGetPayload<S extends boolean | null | undefined | DevolucaoDefaultArgs> = $Result.GetResult<Prisma.$DevolucaoPayload, S>

  type DevolucaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevolucaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevolucaoCountAggregateInputType | true
    }

  export interface DevolucaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devolucao'], meta: { name: 'Devolucao' } }
    /**
     * Find zero or one Devolucao that matches the filter.
     * @param {DevolucaoFindUniqueArgs} args - Arguments to find a Devolucao
     * @example
     * // Get one Devolucao
     * const devolucao = await prisma.devolucao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevolucaoFindUniqueArgs>(args: SelectSubset<T, DevolucaoFindUniqueArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devolucao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevolucaoFindUniqueOrThrowArgs} args - Arguments to find a Devolucao
     * @example
     * // Get one Devolucao
     * const devolucao = await prisma.devolucao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevolucaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DevolucaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devolucao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoFindFirstArgs} args - Arguments to find a Devolucao
     * @example
     * // Get one Devolucao
     * const devolucao = await prisma.devolucao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevolucaoFindFirstArgs>(args?: SelectSubset<T, DevolucaoFindFirstArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devolucao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoFindFirstOrThrowArgs} args - Arguments to find a Devolucao
     * @example
     * // Get one Devolucao
     * const devolucao = await prisma.devolucao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevolucaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DevolucaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devolucaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devolucaos
     * const devolucaos = await prisma.devolucao.findMany()
     * 
     * // Get first 10 Devolucaos
     * const devolucaos = await prisma.devolucao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devolucaoWithIdOnly = await prisma.devolucao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevolucaoFindManyArgs>(args?: SelectSubset<T, DevolucaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devolucao.
     * @param {DevolucaoCreateArgs} args - Arguments to create a Devolucao.
     * @example
     * // Create one Devolucao
     * const Devolucao = await prisma.devolucao.create({
     *   data: {
     *     // ... data to create a Devolucao
     *   }
     * })
     * 
     */
    create<T extends DevolucaoCreateArgs>(args: SelectSubset<T, DevolucaoCreateArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devolucaos.
     * @param {DevolucaoCreateManyArgs} args - Arguments to create many Devolucaos.
     * @example
     * // Create many Devolucaos
     * const devolucao = await prisma.devolucao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevolucaoCreateManyArgs>(args?: SelectSubset<T, DevolucaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devolucaos and returns the data saved in the database.
     * @param {DevolucaoCreateManyAndReturnArgs} args - Arguments to create many Devolucaos.
     * @example
     * // Create many Devolucaos
     * const devolucao = await prisma.devolucao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devolucaos and only return the `id`
     * const devolucaoWithIdOnly = await prisma.devolucao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevolucaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DevolucaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devolucao.
     * @param {DevolucaoDeleteArgs} args - Arguments to delete one Devolucao.
     * @example
     * // Delete one Devolucao
     * const Devolucao = await prisma.devolucao.delete({
     *   where: {
     *     // ... filter to delete one Devolucao
     *   }
     * })
     * 
     */
    delete<T extends DevolucaoDeleteArgs>(args: SelectSubset<T, DevolucaoDeleteArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devolucao.
     * @param {DevolucaoUpdateArgs} args - Arguments to update one Devolucao.
     * @example
     * // Update one Devolucao
     * const devolucao = await prisma.devolucao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevolucaoUpdateArgs>(args: SelectSubset<T, DevolucaoUpdateArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devolucaos.
     * @param {DevolucaoDeleteManyArgs} args - Arguments to filter Devolucaos to delete.
     * @example
     * // Delete a few Devolucaos
     * const { count } = await prisma.devolucao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevolucaoDeleteManyArgs>(args?: SelectSubset<T, DevolucaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devolucaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devolucaos
     * const devolucao = await prisma.devolucao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevolucaoUpdateManyArgs>(args: SelectSubset<T, DevolucaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devolucaos and returns the data updated in the database.
     * @param {DevolucaoUpdateManyAndReturnArgs} args - Arguments to update many Devolucaos.
     * @example
     * // Update many Devolucaos
     * const devolucao = await prisma.devolucao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devolucaos and only return the `id`
     * const devolucaoWithIdOnly = await prisma.devolucao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevolucaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DevolucaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devolucao.
     * @param {DevolucaoUpsertArgs} args - Arguments to update or create a Devolucao.
     * @example
     * // Update or create a Devolucao
     * const devolucao = await prisma.devolucao.upsert({
     *   create: {
     *     // ... data to create a Devolucao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devolucao we want to update
     *   }
     * })
     */
    upsert<T extends DevolucaoUpsertArgs>(args: SelectSubset<T, DevolucaoUpsertArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devolucaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoCountArgs} args - Arguments to filter Devolucaos to count.
     * @example
     * // Count the number of Devolucaos
     * const count = await prisma.devolucao.count({
     *   where: {
     *     // ... the filter for the Devolucaos we want to count
     *   }
     * })
    **/
    count<T extends DevolucaoCountArgs>(
      args?: Subset<T, DevolucaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevolucaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devolucao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevolucaoAggregateArgs>(args: Subset<T, DevolucaoAggregateArgs>): Prisma.PrismaPromise<GetDevolucaoAggregateType<T>>

    /**
     * Group by Devolucao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevolucaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevolucaoGroupByArgs['orderBy'] }
        : { orderBy?: DevolucaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevolucaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevolucaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devolucao model
   */
  readonly fields: DevolucaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devolucao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevolucaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    costureira<T extends CostureiraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CostureiraDefaultArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensDevolucao<T extends Devolucao$itensDevolucaoArgs<ExtArgs> = {}>(args?: Subset<T, Devolucao$itensDevolucaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Devolucao model
   */
  interface DevolucaoFieldRefs {
    readonly id: FieldRef<"Devolucao", 'Int'>
    readonly pedidoId: FieldRef<"Devolucao", 'Int'>
    readonly costureiraId: FieldRef<"Devolucao", 'Int'>
    readonly dataDevolucao: FieldRef<"Devolucao", 'DateTime'>
    readonly observacao: FieldRef<"Devolucao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Devolucao findUnique
   */
  export type DevolucaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Devolucao to fetch.
     */
    where: DevolucaoWhereUniqueInput
  }

  /**
   * Devolucao findUniqueOrThrow
   */
  export type DevolucaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Devolucao to fetch.
     */
    where: DevolucaoWhereUniqueInput
  }

  /**
   * Devolucao findFirst
   */
  export type DevolucaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Devolucao to fetch.
     */
    where?: DevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucaos to fetch.
     */
    orderBy?: DevolucaoOrderByWithRelationInput | DevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devolucaos.
     */
    cursor?: DevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucaos.
     */
    distinct?: DevolucaoScalarFieldEnum | DevolucaoScalarFieldEnum[]
  }

  /**
   * Devolucao findFirstOrThrow
   */
  export type DevolucaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Devolucao to fetch.
     */
    where?: DevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucaos to fetch.
     */
    orderBy?: DevolucaoOrderByWithRelationInput | DevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devolucaos.
     */
    cursor?: DevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucaos.
     */
    distinct?: DevolucaoScalarFieldEnum | DevolucaoScalarFieldEnum[]
  }

  /**
   * Devolucao findMany
   */
  export type DevolucaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Devolucaos to fetch.
     */
    where?: DevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucaos to fetch.
     */
    orderBy?: DevolucaoOrderByWithRelationInput | DevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devolucaos.
     */
    cursor?: DevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucaos.
     */
    skip?: number
    distinct?: DevolucaoScalarFieldEnum | DevolucaoScalarFieldEnum[]
  }

  /**
   * Devolucao create
   */
  export type DevolucaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Devolucao.
     */
    data: XOR<DevolucaoCreateInput, DevolucaoUncheckedCreateInput>
  }

  /**
   * Devolucao createMany
   */
  export type DevolucaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devolucaos.
     */
    data: DevolucaoCreateManyInput | DevolucaoCreateManyInput[]
  }

  /**
   * Devolucao createManyAndReturn
   */
  export type DevolucaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * The data used to create many Devolucaos.
     */
    data: DevolucaoCreateManyInput | DevolucaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devolucao update
   */
  export type DevolucaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Devolucao.
     */
    data: XOR<DevolucaoUpdateInput, DevolucaoUncheckedUpdateInput>
    /**
     * Choose, which Devolucao to update.
     */
    where: DevolucaoWhereUniqueInput
  }

  /**
   * Devolucao updateMany
   */
  export type DevolucaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devolucaos.
     */
    data: XOR<DevolucaoUpdateManyMutationInput, DevolucaoUncheckedUpdateManyInput>
    /**
     * Filter which Devolucaos to update
     */
    where?: DevolucaoWhereInput
    /**
     * Limit how many Devolucaos to update.
     */
    limit?: number
  }

  /**
   * Devolucao updateManyAndReturn
   */
  export type DevolucaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * The data used to update Devolucaos.
     */
    data: XOR<DevolucaoUpdateManyMutationInput, DevolucaoUncheckedUpdateManyInput>
    /**
     * Filter which Devolucaos to update
     */
    where?: DevolucaoWhereInput
    /**
     * Limit how many Devolucaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devolucao upsert
   */
  export type DevolucaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Devolucao to update in case it exists.
     */
    where: DevolucaoWhereUniqueInput
    /**
     * In case the Devolucao found by the `where` argument doesn't exist, create a new Devolucao with this data.
     */
    create: XOR<DevolucaoCreateInput, DevolucaoUncheckedCreateInput>
    /**
     * In case the Devolucao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevolucaoUpdateInput, DevolucaoUncheckedUpdateInput>
  }

  /**
   * Devolucao delete
   */
  export type DevolucaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
    /**
     * Filter which Devolucao to delete.
     */
    where: DevolucaoWhereUniqueInput
  }

  /**
   * Devolucao deleteMany
   */
  export type DevolucaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devolucaos to delete
     */
    where?: DevolucaoWhereInput
    /**
     * Limit how many Devolucaos to delete.
     */
    limit?: number
  }

  /**
   * Devolucao.itensDevolucao
   */
  export type Devolucao$itensDevolucaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    where?: ItemDevolucaoWhereInput
    orderBy?: ItemDevolucaoOrderByWithRelationInput | ItemDevolucaoOrderByWithRelationInput[]
    cursor?: ItemDevolucaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemDevolucaoScalarFieldEnum | ItemDevolucaoScalarFieldEnum[]
  }

  /**
   * Devolucao without action
   */
  export type DevolucaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucao
     */
    select?: DevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucao
     */
    omit?: DevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucaoInclude<ExtArgs> | null
  }


  /**
   * Model ItemDevolucao
   */

  export type AggregateItemDevolucao = {
    _count: ItemDevolucaoCountAggregateOutputType | null
    _avg: ItemDevolucaoAvgAggregateOutputType | null
    _sum: ItemDevolucaoSumAggregateOutputType | null
    _min: ItemDevolucaoMinAggregateOutputType | null
    _max: ItemDevolucaoMaxAggregateOutputType | null
  }

  export type ItemDevolucaoAvgAggregateOutputType = {
    id: number | null
    devolucaoId: number | null
    materialId: number | null
    quantidade: number | null
  }

  export type ItemDevolucaoSumAggregateOutputType = {
    id: number | null
    devolucaoId: number | null
    materialId: number | null
    quantidade: number | null
  }

  export type ItemDevolucaoMinAggregateOutputType = {
    id: number | null
    devolucaoId: number | null
    materialId: number | null
    quantidade: number | null
  }

  export type ItemDevolucaoMaxAggregateOutputType = {
    id: number | null
    devolucaoId: number | null
    materialId: number | null
    quantidade: number | null
  }

  export type ItemDevolucaoCountAggregateOutputType = {
    id: number
    devolucaoId: number
    materialId: number
    quantidade: number
    _all: number
  }


  export type ItemDevolucaoAvgAggregateInputType = {
    id?: true
    devolucaoId?: true
    materialId?: true
    quantidade?: true
  }

  export type ItemDevolucaoSumAggregateInputType = {
    id?: true
    devolucaoId?: true
    materialId?: true
    quantidade?: true
  }

  export type ItemDevolucaoMinAggregateInputType = {
    id?: true
    devolucaoId?: true
    materialId?: true
    quantidade?: true
  }

  export type ItemDevolucaoMaxAggregateInputType = {
    id?: true
    devolucaoId?: true
    materialId?: true
    quantidade?: true
  }

  export type ItemDevolucaoCountAggregateInputType = {
    id?: true
    devolucaoId?: true
    materialId?: true
    quantidade?: true
    _all?: true
  }

  export type ItemDevolucaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDevolucao to aggregate.
     */
    where?: ItemDevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDevolucaos to fetch.
     */
    orderBy?: ItemDevolucaoOrderByWithRelationInput | ItemDevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemDevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDevolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDevolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemDevolucaos
    **/
    _count?: true | ItemDevolucaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemDevolucaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemDevolucaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemDevolucaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemDevolucaoMaxAggregateInputType
  }

  export type GetItemDevolucaoAggregateType<T extends ItemDevolucaoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemDevolucao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemDevolucao[P]>
      : GetScalarType<T[P], AggregateItemDevolucao[P]>
  }




  export type ItemDevolucaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDevolucaoWhereInput
    orderBy?: ItemDevolucaoOrderByWithAggregationInput | ItemDevolucaoOrderByWithAggregationInput[]
    by: ItemDevolucaoScalarFieldEnum[] | ItemDevolucaoScalarFieldEnum
    having?: ItemDevolucaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemDevolucaoCountAggregateInputType | true
    _avg?: ItemDevolucaoAvgAggregateInputType
    _sum?: ItemDevolucaoSumAggregateInputType
    _min?: ItemDevolucaoMinAggregateInputType
    _max?: ItemDevolucaoMaxAggregateInputType
  }

  export type ItemDevolucaoGroupByOutputType = {
    id: number
    devolucaoId: number
    materialId: number
    quantidade: number
    _count: ItemDevolucaoCountAggregateOutputType | null
    _avg: ItemDevolucaoAvgAggregateOutputType | null
    _sum: ItemDevolucaoSumAggregateOutputType | null
    _min: ItemDevolucaoMinAggregateOutputType | null
    _max: ItemDevolucaoMaxAggregateOutputType | null
  }

  type GetItemDevolucaoGroupByPayload<T extends ItemDevolucaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemDevolucaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemDevolucaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemDevolucaoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemDevolucaoGroupByOutputType[P]>
        }
      >
    >


  export type ItemDevolucaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    devolucaoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolucao?: boolean | DevolucaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDevolucao"]>

  export type ItemDevolucaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    devolucaoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolucao?: boolean | DevolucaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDevolucao"]>

  export type ItemDevolucaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    devolucaoId?: boolean
    materialId?: boolean
    quantidade?: boolean
    devolucao?: boolean | DevolucaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDevolucao"]>

  export type ItemDevolucaoSelectScalar = {
    id?: boolean
    devolucaoId?: boolean
    materialId?: boolean
    quantidade?: boolean
  }

  export type ItemDevolucaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "devolucaoId" | "materialId" | "quantidade", ExtArgs["result"]["itemDevolucao"]>
  export type ItemDevolucaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devolucao?: boolean | DevolucaoDefaultArgs<ExtArgs>
  }
  export type ItemDevolucaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devolucao?: boolean | DevolucaoDefaultArgs<ExtArgs>
  }
  export type ItemDevolucaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devolucao?: boolean | DevolucaoDefaultArgs<ExtArgs>
  }

  export type $ItemDevolucaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemDevolucao"
    objects: {
      devolucao: Prisma.$DevolucaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      devolucaoId: number
      materialId: number
      quantidade: number
    }, ExtArgs["result"]["itemDevolucao"]>
    composites: {}
  }

  type ItemDevolucaoGetPayload<S extends boolean | null | undefined | ItemDevolucaoDefaultArgs> = $Result.GetResult<Prisma.$ItemDevolucaoPayload, S>

  type ItemDevolucaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemDevolucaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemDevolucaoCountAggregateInputType | true
    }

  export interface ItemDevolucaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemDevolucao'], meta: { name: 'ItemDevolucao' } }
    /**
     * Find zero or one ItemDevolucao that matches the filter.
     * @param {ItemDevolucaoFindUniqueArgs} args - Arguments to find a ItemDevolucao
     * @example
     * // Get one ItemDevolucao
     * const itemDevolucao = await prisma.itemDevolucao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemDevolucaoFindUniqueArgs>(args: SelectSubset<T, ItemDevolucaoFindUniqueArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemDevolucao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemDevolucaoFindUniqueOrThrowArgs} args - Arguments to find a ItemDevolucao
     * @example
     * // Get one ItemDevolucao
     * const itemDevolucao = await prisma.itemDevolucao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemDevolucaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemDevolucaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDevolucao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoFindFirstArgs} args - Arguments to find a ItemDevolucao
     * @example
     * // Get one ItemDevolucao
     * const itemDevolucao = await prisma.itemDevolucao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemDevolucaoFindFirstArgs>(args?: SelectSubset<T, ItemDevolucaoFindFirstArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDevolucao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoFindFirstOrThrowArgs} args - Arguments to find a ItemDevolucao
     * @example
     * // Get one ItemDevolucao
     * const itemDevolucao = await prisma.itemDevolucao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemDevolucaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemDevolucaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemDevolucaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemDevolucaos
     * const itemDevolucaos = await prisma.itemDevolucao.findMany()
     * 
     * // Get first 10 ItemDevolucaos
     * const itemDevolucaos = await prisma.itemDevolucao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemDevolucaoWithIdOnly = await prisma.itemDevolucao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemDevolucaoFindManyArgs>(args?: SelectSubset<T, ItemDevolucaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemDevolucao.
     * @param {ItemDevolucaoCreateArgs} args - Arguments to create a ItemDevolucao.
     * @example
     * // Create one ItemDevolucao
     * const ItemDevolucao = await prisma.itemDevolucao.create({
     *   data: {
     *     // ... data to create a ItemDevolucao
     *   }
     * })
     * 
     */
    create<T extends ItemDevolucaoCreateArgs>(args: SelectSubset<T, ItemDevolucaoCreateArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemDevolucaos.
     * @param {ItemDevolucaoCreateManyArgs} args - Arguments to create many ItemDevolucaos.
     * @example
     * // Create many ItemDevolucaos
     * const itemDevolucao = await prisma.itemDevolucao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemDevolucaoCreateManyArgs>(args?: SelectSubset<T, ItemDevolucaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemDevolucaos and returns the data saved in the database.
     * @param {ItemDevolucaoCreateManyAndReturnArgs} args - Arguments to create many ItemDevolucaos.
     * @example
     * // Create many ItemDevolucaos
     * const itemDevolucao = await prisma.itemDevolucao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemDevolucaos and only return the `id`
     * const itemDevolucaoWithIdOnly = await prisma.itemDevolucao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemDevolucaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemDevolucaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemDevolucao.
     * @param {ItemDevolucaoDeleteArgs} args - Arguments to delete one ItemDevolucao.
     * @example
     * // Delete one ItemDevolucao
     * const ItemDevolucao = await prisma.itemDevolucao.delete({
     *   where: {
     *     // ... filter to delete one ItemDevolucao
     *   }
     * })
     * 
     */
    delete<T extends ItemDevolucaoDeleteArgs>(args: SelectSubset<T, ItemDevolucaoDeleteArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemDevolucao.
     * @param {ItemDevolucaoUpdateArgs} args - Arguments to update one ItemDevolucao.
     * @example
     * // Update one ItemDevolucao
     * const itemDevolucao = await prisma.itemDevolucao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemDevolucaoUpdateArgs>(args: SelectSubset<T, ItemDevolucaoUpdateArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemDevolucaos.
     * @param {ItemDevolucaoDeleteManyArgs} args - Arguments to filter ItemDevolucaos to delete.
     * @example
     * // Delete a few ItemDevolucaos
     * const { count } = await prisma.itemDevolucao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDevolucaoDeleteManyArgs>(args?: SelectSubset<T, ItemDevolucaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDevolucaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemDevolucaos
     * const itemDevolucao = await prisma.itemDevolucao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemDevolucaoUpdateManyArgs>(args: SelectSubset<T, ItemDevolucaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDevolucaos and returns the data updated in the database.
     * @param {ItemDevolucaoUpdateManyAndReturnArgs} args - Arguments to update many ItemDevolucaos.
     * @example
     * // Update many ItemDevolucaos
     * const itemDevolucao = await prisma.itemDevolucao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemDevolucaos and only return the `id`
     * const itemDevolucaoWithIdOnly = await prisma.itemDevolucao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemDevolucaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemDevolucaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemDevolucao.
     * @param {ItemDevolucaoUpsertArgs} args - Arguments to update or create a ItemDevolucao.
     * @example
     * // Update or create a ItemDevolucao
     * const itemDevolucao = await prisma.itemDevolucao.upsert({
     *   create: {
     *     // ... data to create a ItemDevolucao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemDevolucao we want to update
     *   }
     * })
     */
    upsert<T extends ItemDevolucaoUpsertArgs>(args: SelectSubset<T, ItemDevolucaoUpsertArgs<ExtArgs>>): Prisma__ItemDevolucaoClient<$Result.GetResult<Prisma.$ItemDevolucaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemDevolucaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoCountArgs} args - Arguments to filter ItemDevolucaos to count.
     * @example
     * // Count the number of ItemDevolucaos
     * const count = await prisma.itemDevolucao.count({
     *   where: {
     *     // ... the filter for the ItemDevolucaos we want to count
     *   }
     * })
    **/
    count<T extends ItemDevolucaoCountArgs>(
      args?: Subset<T, ItemDevolucaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemDevolucaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemDevolucao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemDevolucaoAggregateArgs>(args: Subset<T, ItemDevolucaoAggregateArgs>): Prisma.PrismaPromise<GetItemDevolucaoAggregateType<T>>

    /**
     * Group by ItemDevolucao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDevolucaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemDevolucaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemDevolucaoGroupByArgs['orderBy'] }
        : { orderBy?: ItemDevolucaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemDevolucaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemDevolucaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemDevolucao model
   */
  readonly fields: ItemDevolucaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemDevolucao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemDevolucaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devolucao<T extends DevolucaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DevolucaoDefaultArgs<ExtArgs>>): Prisma__DevolucaoClient<$Result.GetResult<Prisma.$DevolucaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemDevolucao model
   */
  interface ItemDevolucaoFieldRefs {
    readonly id: FieldRef<"ItemDevolucao", 'Int'>
    readonly devolucaoId: FieldRef<"ItemDevolucao", 'Int'>
    readonly materialId: FieldRef<"ItemDevolucao", 'Int'>
    readonly quantidade: FieldRef<"ItemDevolucao", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemDevolucao findUnique
   */
  export type ItemDevolucaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDevolucao to fetch.
     */
    where: ItemDevolucaoWhereUniqueInput
  }

  /**
   * ItemDevolucao findUniqueOrThrow
   */
  export type ItemDevolucaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDevolucao to fetch.
     */
    where: ItemDevolucaoWhereUniqueInput
  }

  /**
   * ItemDevolucao findFirst
   */
  export type ItemDevolucaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDevolucao to fetch.
     */
    where?: ItemDevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDevolucaos to fetch.
     */
    orderBy?: ItemDevolucaoOrderByWithRelationInput | ItemDevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDevolucaos.
     */
    cursor?: ItemDevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDevolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDevolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDevolucaos.
     */
    distinct?: ItemDevolucaoScalarFieldEnum | ItemDevolucaoScalarFieldEnum[]
  }

  /**
   * ItemDevolucao findFirstOrThrow
   */
  export type ItemDevolucaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDevolucao to fetch.
     */
    where?: ItemDevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDevolucaos to fetch.
     */
    orderBy?: ItemDevolucaoOrderByWithRelationInput | ItemDevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDevolucaos.
     */
    cursor?: ItemDevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDevolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDevolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDevolucaos.
     */
    distinct?: ItemDevolucaoScalarFieldEnum | ItemDevolucaoScalarFieldEnum[]
  }

  /**
   * ItemDevolucao findMany
   */
  export type ItemDevolucaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDevolucaos to fetch.
     */
    where?: ItemDevolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDevolucaos to fetch.
     */
    orderBy?: ItemDevolucaoOrderByWithRelationInput | ItemDevolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemDevolucaos.
     */
    cursor?: ItemDevolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDevolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDevolucaos.
     */
    skip?: number
    distinct?: ItemDevolucaoScalarFieldEnum | ItemDevolucaoScalarFieldEnum[]
  }

  /**
   * ItemDevolucao create
   */
  export type ItemDevolucaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemDevolucao.
     */
    data: XOR<ItemDevolucaoCreateInput, ItemDevolucaoUncheckedCreateInput>
  }

  /**
   * ItemDevolucao createMany
   */
  export type ItemDevolucaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemDevolucaos.
     */
    data: ItemDevolucaoCreateManyInput | ItemDevolucaoCreateManyInput[]
  }

  /**
   * ItemDevolucao createManyAndReturn
   */
  export type ItemDevolucaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemDevolucaos.
     */
    data: ItemDevolucaoCreateManyInput | ItemDevolucaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDevolucao update
   */
  export type ItemDevolucaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemDevolucao.
     */
    data: XOR<ItemDevolucaoUpdateInput, ItemDevolucaoUncheckedUpdateInput>
    /**
     * Choose, which ItemDevolucao to update.
     */
    where: ItemDevolucaoWhereUniqueInput
  }

  /**
   * ItemDevolucao updateMany
   */
  export type ItemDevolucaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemDevolucaos.
     */
    data: XOR<ItemDevolucaoUpdateManyMutationInput, ItemDevolucaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDevolucaos to update
     */
    where?: ItemDevolucaoWhereInput
    /**
     * Limit how many ItemDevolucaos to update.
     */
    limit?: number
  }

  /**
   * ItemDevolucao updateManyAndReturn
   */
  export type ItemDevolucaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * The data used to update ItemDevolucaos.
     */
    data: XOR<ItemDevolucaoUpdateManyMutationInput, ItemDevolucaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDevolucaos to update
     */
    where?: ItemDevolucaoWhereInput
    /**
     * Limit how many ItemDevolucaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDevolucao upsert
   */
  export type ItemDevolucaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemDevolucao to update in case it exists.
     */
    where: ItemDevolucaoWhereUniqueInput
    /**
     * In case the ItemDevolucao found by the `where` argument doesn't exist, create a new ItemDevolucao with this data.
     */
    create: XOR<ItemDevolucaoCreateInput, ItemDevolucaoUncheckedCreateInput>
    /**
     * In case the ItemDevolucao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemDevolucaoUpdateInput, ItemDevolucaoUncheckedUpdateInput>
  }

  /**
   * ItemDevolucao delete
   */
  export type ItemDevolucaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
    /**
     * Filter which ItemDevolucao to delete.
     */
    where: ItemDevolucaoWhereUniqueInput
  }

  /**
   * ItemDevolucao deleteMany
   */
  export type ItemDevolucaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDevolucaos to delete
     */
    where?: ItemDevolucaoWhereInput
    /**
     * Limit how many ItemDevolucaos to delete.
     */
    limit?: number
  }

  /**
   * ItemDevolucao without action
   */
  export type ItemDevolucaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDevolucao
     */
    select?: ItemDevolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDevolucao
     */
    omit?: ItemDevolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDevolucaoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    id: number | null
    costureiraId: number | null
    valorTotal: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    id: number | null
    costureiraId: number | null
    valorTotal: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: number | null
    costureiraId: number | null
    dataPagamento: Date | null
    valorTotal: number | null
    observacao: string | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: number | null
    costureiraId: number | null
    dataPagamento: Date | null
    valorTotal: number | null
    observacao: string | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    costureiraId: number
    dataPagamento: number
    valorTotal: number
    observacao: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    id?: true
    costureiraId?: true
    valorTotal?: true
  }

  export type PagamentoSumAggregateInputType = {
    id?: true
    costureiraId?: true
    valorTotal?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    costureiraId?: true
    dataPagamento?: true
    valorTotal?: true
    observacao?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    costureiraId?: true
    dataPagamento?: true
    valorTotal?: true
    observacao?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    costureiraId?: true
    dataPagamento?: true
    valorTotal?: true
    observacao?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: number
    costureiraId: number
    dataPagamento: Date
    valorTotal: number
    observacao: string | null
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costureiraId?: boolean
    dataPagamento?: boolean
    valorTotal?: boolean
    observacao?: boolean
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
    itensPagamento?: boolean | Pagamento$itensPagamentoArgs<ExtArgs>
    _count?: boolean | PagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costureiraId?: boolean
    dataPagamento?: boolean
    valorTotal?: boolean
    observacao?: boolean
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costureiraId?: boolean
    dataPagamento?: boolean
    valorTotal?: boolean
    observacao?: boolean
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    costureiraId?: boolean
    dataPagamento?: boolean
    valorTotal?: boolean
    observacao?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "costureiraId" | "dataPagamento" | "valorTotal" | "observacao", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
    itensPagamento?: boolean | Pagamento$itensPagamentoArgs<ExtArgs>
    _count?: boolean | PagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costureira?: boolean | CostureiraDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      costureira: Prisma.$CostureiraPayload<ExtArgs>
      itensPagamento: Prisma.$ItemPagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      costureiraId: number
      dataPagamento: Date
      valorTotal: number
      observacao: string | null
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    costureira<T extends CostureiraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CostureiraDefaultArgs<ExtArgs>>): Prisma__CostureiraClient<$Result.GetResult<Prisma.$CostureiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensPagamento<T extends Pagamento$itensPagamentoArgs<ExtArgs> = {}>(args?: Subset<T, Pagamento$itensPagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'Int'>
    readonly costureiraId: FieldRef<"Pagamento", 'Int'>
    readonly dataPagamento: FieldRef<"Pagamento", 'DateTime'>
    readonly valorTotal: FieldRef<"Pagamento", 'Float'>
    readonly observacao: FieldRef<"Pagamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento.itensPagamento
   */
  export type Pagamento$itensPagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    where?: ItemPagamentoWhereInput
    orderBy?: ItemPagamentoOrderByWithRelationInput | ItemPagamentoOrderByWithRelationInput[]
    cursor?: ItemPagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPagamentoScalarFieldEnum | ItemPagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPagamento
   */

  export type AggregateItemPagamento = {
    _count: ItemPagamentoCountAggregateOutputType | null
    _avg: ItemPagamentoAvgAggregateOutputType | null
    _sum: ItemPagamentoSumAggregateOutputType | null
    _min: ItemPagamentoMinAggregateOutputType | null
    _max: ItemPagamentoMaxAggregateOutputType | null
  }

  export type ItemPagamentoAvgAggregateOutputType = {
    id: number | null
    pagamentoId: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemPagamentoSumAggregateOutputType = {
    id: number | null
    pagamentoId: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemPagamentoMinAggregateOutputType = {
    id: number | null
    pagamentoId: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemPagamentoMaxAggregateOutputType = {
    id: number | null
    pagamentoId: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemPagamentoCountAggregateOutputType = {
    id: number
    pagamentoId: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
    _all: number
  }


  export type ItemPagamentoAvgAggregateInputType = {
    id?: true
    pagamentoId?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemPagamentoSumAggregateInputType = {
    id?: true
    pagamentoId?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemPagamentoMinAggregateInputType = {
    id?: true
    pagamentoId?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemPagamentoMaxAggregateInputType = {
    id?: true
    pagamentoId?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemPagamentoCountAggregateInputType = {
    id?: true
    pagamentoId?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    _all?: true
  }

  export type ItemPagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPagamento to aggregate.
     */
    where?: ItemPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPagamentos to fetch.
     */
    orderBy?: ItemPagamentoOrderByWithRelationInput | ItemPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPagamentos
    **/
    _count?: true | ItemPagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPagamentoMaxAggregateInputType
  }

  export type GetItemPagamentoAggregateType<T extends ItemPagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPagamento[P]>
      : GetScalarType<T[P], AggregateItemPagamento[P]>
  }




  export type ItemPagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPagamentoWhereInput
    orderBy?: ItemPagamentoOrderByWithAggregationInput | ItemPagamentoOrderByWithAggregationInput[]
    by: ItemPagamentoScalarFieldEnum[] | ItemPagamentoScalarFieldEnum
    having?: ItemPagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPagamentoCountAggregateInputType | true
    _avg?: ItemPagamentoAvgAggregateInputType
    _sum?: ItemPagamentoSumAggregateInputType
    _min?: ItemPagamentoMinAggregateInputType
    _max?: ItemPagamentoMaxAggregateInputType
  }

  export type ItemPagamentoGroupByOutputType = {
    id: number
    pagamentoId: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
    _count: ItemPagamentoCountAggregateOutputType | null
    _avg: ItemPagamentoAvgAggregateOutputType | null
    _sum: ItemPagamentoSumAggregateOutputType | null
    _min: ItemPagamentoMinAggregateOutputType | null
    _max: ItemPagamentoMaxAggregateOutputType | null
  }

  type GetItemPagamentoGroupByPayload<T extends ItemPagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPagamentoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagamentoId?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    pagamento?: boolean | PagamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPagamento"]>

  export type ItemPagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagamentoId?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    pagamento?: boolean | PagamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPagamento"]>

  export type ItemPagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagamentoId?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    pagamento?: boolean | PagamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPagamento"]>

  export type ItemPagamentoSelectScalar = {
    id?: boolean
    pagamentoId?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
  }

  export type ItemPagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pagamentoId" | "pedidoId" | "produtoId" | "quantidade" | "valorUnitario" | "valorTotal", ExtArgs["result"]["itemPagamento"]>
  export type ItemPagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | PagamentoDefaultArgs<ExtArgs>
  }
  export type ItemPagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | PagamentoDefaultArgs<ExtArgs>
  }
  export type ItemPagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | PagamentoDefaultArgs<ExtArgs>
  }

  export type $ItemPagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPagamento"
    objects: {
      pagamento: Prisma.$PagamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pagamentoId: number
      pedidoId: number
      produtoId: number
      quantidade: number
      valorUnitario: number
      valorTotal: number
    }, ExtArgs["result"]["itemPagamento"]>
    composites: {}
  }

  type ItemPagamentoGetPayload<S extends boolean | null | undefined | ItemPagamentoDefaultArgs> = $Result.GetResult<Prisma.$ItemPagamentoPayload, S>

  type ItemPagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPagamentoCountAggregateInputType | true
    }

  export interface ItemPagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPagamento'], meta: { name: 'ItemPagamento' } }
    /**
     * Find zero or one ItemPagamento that matches the filter.
     * @param {ItemPagamentoFindUniqueArgs} args - Arguments to find a ItemPagamento
     * @example
     * // Get one ItemPagamento
     * const itemPagamento = await prisma.itemPagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPagamentoFindUniqueArgs>(args: SelectSubset<T, ItemPagamentoFindUniqueArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPagamentoFindUniqueOrThrowArgs} args - Arguments to find a ItemPagamento
     * @example
     * // Get one ItemPagamento
     * const itemPagamento = await prisma.itemPagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoFindFirstArgs} args - Arguments to find a ItemPagamento
     * @example
     * // Get one ItemPagamento
     * const itemPagamento = await prisma.itemPagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPagamentoFindFirstArgs>(args?: SelectSubset<T, ItemPagamentoFindFirstArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoFindFirstOrThrowArgs} args - Arguments to find a ItemPagamento
     * @example
     * // Get one ItemPagamento
     * const itemPagamento = await prisma.itemPagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPagamentos
     * const itemPagamentos = await prisma.itemPagamento.findMany()
     * 
     * // Get first 10 ItemPagamentos
     * const itemPagamentos = await prisma.itemPagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPagamentoWithIdOnly = await prisma.itemPagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPagamentoFindManyArgs>(args?: SelectSubset<T, ItemPagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPagamento.
     * @param {ItemPagamentoCreateArgs} args - Arguments to create a ItemPagamento.
     * @example
     * // Create one ItemPagamento
     * const ItemPagamento = await prisma.itemPagamento.create({
     *   data: {
     *     // ... data to create a ItemPagamento
     *   }
     * })
     * 
     */
    create<T extends ItemPagamentoCreateArgs>(args: SelectSubset<T, ItemPagamentoCreateArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPagamentos.
     * @param {ItemPagamentoCreateManyArgs} args - Arguments to create many ItemPagamentos.
     * @example
     * // Create many ItemPagamentos
     * const itemPagamento = await prisma.itemPagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPagamentoCreateManyArgs>(args?: SelectSubset<T, ItemPagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPagamentos and returns the data saved in the database.
     * @param {ItemPagamentoCreateManyAndReturnArgs} args - Arguments to create many ItemPagamentos.
     * @example
     * // Create many ItemPagamentos
     * const itemPagamento = await prisma.itemPagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPagamentos and only return the `id`
     * const itemPagamentoWithIdOnly = await prisma.itemPagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPagamento.
     * @param {ItemPagamentoDeleteArgs} args - Arguments to delete one ItemPagamento.
     * @example
     * // Delete one ItemPagamento
     * const ItemPagamento = await prisma.itemPagamento.delete({
     *   where: {
     *     // ... filter to delete one ItemPagamento
     *   }
     * })
     * 
     */
    delete<T extends ItemPagamentoDeleteArgs>(args: SelectSubset<T, ItemPagamentoDeleteArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPagamento.
     * @param {ItemPagamentoUpdateArgs} args - Arguments to update one ItemPagamento.
     * @example
     * // Update one ItemPagamento
     * const itemPagamento = await prisma.itemPagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPagamentoUpdateArgs>(args: SelectSubset<T, ItemPagamentoUpdateArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPagamentos.
     * @param {ItemPagamentoDeleteManyArgs} args - Arguments to filter ItemPagamentos to delete.
     * @example
     * // Delete a few ItemPagamentos
     * const { count } = await prisma.itemPagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPagamentoDeleteManyArgs>(args?: SelectSubset<T, ItemPagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPagamentos
     * const itemPagamento = await prisma.itemPagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPagamentoUpdateManyArgs>(args: SelectSubset<T, ItemPagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPagamentos and returns the data updated in the database.
     * @param {ItemPagamentoUpdateManyAndReturnArgs} args - Arguments to update many ItemPagamentos.
     * @example
     * // Update many ItemPagamentos
     * const itemPagamento = await prisma.itemPagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPagamentos and only return the `id`
     * const itemPagamentoWithIdOnly = await prisma.itemPagamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPagamento.
     * @param {ItemPagamentoUpsertArgs} args - Arguments to update or create a ItemPagamento.
     * @example
     * // Update or create a ItemPagamento
     * const itemPagamento = await prisma.itemPagamento.upsert({
     *   create: {
     *     // ... data to create a ItemPagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPagamento we want to update
     *   }
     * })
     */
    upsert<T extends ItemPagamentoUpsertArgs>(args: SelectSubset<T, ItemPagamentoUpsertArgs<ExtArgs>>): Prisma__ItemPagamentoClient<$Result.GetResult<Prisma.$ItemPagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoCountArgs} args - Arguments to filter ItemPagamentos to count.
     * @example
     * // Count the number of ItemPagamentos
     * const count = await prisma.itemPagamento.count({
     *   where: {
     *     // ... the filter for the ItemPagamentos we want to count
     *   }
     * })
    **/
    count<T extends ItemPagamentoCountArgs>(
      args?: Subset<T, ItemPagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPagamentoAggregateArgs>(args: Subset<T, ItemPagamentoAggregateArgs>): Prisma.PrismaPromise<GetItemPagamentoAggregateType<T>>

    /**
     * Group by ItemPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPagamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPagamentoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPagamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPagamento model
   */
  readonly fields: ItemPagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamento<T extends PagamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PagamentoDefaultArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPagamento model
   */
  interface ItemPagamentoFieldRefs {
    readonly id: FieldRef<"ItemPagamento", 'Int'>
    readonly pagamentoId: FieldRef<"ItemPagamento", 'Int'>
    readonly pedidoId: FieldRef<"ItemPagamento", 'Int'>
    readonly produtoId: FieldRef<"ItemPagamento", 'Int'>
    readonly quantidade: FieldRef<"ItemPagamento", 'Int'>
    readonly valorUnitario: FieldRef<"ItemPagamento", 'Float'>
    readonly valorTotal: FieldRef<"ItemPagamento", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemPagamento findUnique
   */
  export type ItemPagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPagamento to fetch.
     */
    where: ItemPagamentoWhereUniqueInput
  }

  /**
   * ItemPagamento findUniqueOrThrow
   */
  export type ItemPagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPagamento to fetch.
     */
    where: ItemPagamentoWhereUniqueInput
  }

  /**
   * ItemPagamento findFirst
   */
  export type ItemPagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPagamento to fetch.
     */
    where?: ItemPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPagamentos to fetch.
     */
    orderBy?: ItemPagamentoOrderByWithRelationInput | ItemPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPagamentos.
     */
    cursor?: ItemPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPagamentos.
     */
    distinct?: ItemPagamentoScalarFieldEnum | ItemPagamentoScalarFieldEnum[]
  }

  /**
   * ItemPagamento findFirstOrThrow
   */
  export type ItemPagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPagamento to fetch.
     */
    where?: ItemPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPagamentos to fetch.
     */
    orderBy?: ItemPagamentoOrderByWithRelationInput | ItemPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPagamentos.
     */
    cursor?: ItemPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPagamentos.
     */
    distinct?: ItemPagamentoScalarFieldEnum | ItemPagamentoScalarFieldEnum[]
  }

  /**
   * ItemPagamento findMany
   */
  export type ItemPagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPagamentos to fetch.
     */
    where?: ItemPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPagamentos to fetch.
     */
    orderBy?: ItemPagamentoOrderByWithRelationInput | ItemPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPagamentos.
     */
    cursor?: ItemPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPagamentos.
     */
    skip?: number
    distinct?: ItemPagamentoScalarFieldEnum | ItemPagamentoScalarFieldEnum[]
  }

  /**
   * ItemPagamento create
   */
  export type ItemPagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPagamento.
     */
    data: XOR<ItemPagamentoCreateInput, ItemPagamentoUncheckedCreateInput>
  }

  /**
   * ItemPagamento createMany
   */
  export type ItemPagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPagamentos.
     */
    data: ItemPagamentoCreateManyInput | ItemPagamentoCreateManyInput[]
  }

  /**
   * ItemPagamento createManyAndReturn
   */
  export type ItemPagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPagamentos.
     */
    data: ItemPagamentoCreateManyInput | ItemPagamentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPagamento update
   */
  export type ItemPagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPagamento.
     */
    data: XOR<ItemPagamentoUpdateInput, ItemPagamentoUncheckedUpdateInput>
    /**
     * Choose, which ItemPagamento to update.
     */
    where: ItemPagamentoWhereUniqueInput
  }

  /**
   * ItemPagamento updateMany
   */
  export type ItemPagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPagamentos.
     */
    data: XOR<ItemPagamentoUpdateManyMutationInput, ItemPagamentoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPagamentos to update
     */
    where?: ItemPagamentoWhereInput
    /**
     * Limit how many ItemPagamentos to update.
     */
    limit?: number
  }

  /**
   * ItemPagamento updateManyAndReturn
   */
  export type ItemPagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPagamentos.
     */
    data: XOR<ItemPagamentoUpdateManyMutationInput, ItemPagamentoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPagamentos to update
     */
    where?: ItemPagamentoWhereInput
    /**
     * Limit how many ItemPagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPagamento upsert
   */
  export type ItemPagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPagamento to update in case it exists.
     */
    where: ItemPagamentoWhereUniqueInput
    /**
     * In case the ItemPagamento found by the `where` argument doesn't exist, create a new ItemPagamento with this data.
     */
    create: XOR<ItemPagamentoCreateInput, ItemPagamentoUncheckedCreateInput>
    /**
     * In case the ItemPagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPagamentoUpdateInput, ItemPagamentoUncheckedUpdateInput>
  }

  /**
   * ItemPagamento delete
   */
  export type ItemPagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
    /**
     * Filter which ItemPagamento to delete.
     */
    where: ItemPagamentoWhereUniqueInput
  }

  /**
   * ItemPagamento deleteMany
   */
  export type ItemPagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPagamentos to delete
     */
    where?: ItemPagamentoWhereInput
    /**
     * Limit how many ItemPagamentos to delete.
     */
    limit?: number
  }

  /**
   * ItemPagamento without action
   */
  export type ItemPagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPagamento
     */
    select?: ItemPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPagamento
     */
    omit?: ItemPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPagamentoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CostureiraScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    email: 'email',
    endereco: 'endereco',
    cpf: 'cpf',
    dataCadastro: 'dataCadastro',
    ativo: 'ativo'
  };

  export type CostureiraScalarFieldEnum = (typeof CostureiraScalarFieldEnum)[keyof typeof CostureiraScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valorUnitario: 'valorUnitario',
    ativo: 'ativo'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    unidadeMedida: 'unidadeMedida',
    ativo: 'ativo'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    costureiraId: 'costureiraId',
    dataEnvio: 'dataEnvio',
    dataPrevisao: 'dataPrevisao',
    observacao: 'observacao',
    status: 'status'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId',
    quantidade: 'quantidade',
    valorUnitario: 'valorUnitario'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const ItemMaterialScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    materialId: 'materialId',
    quantidade: 'quantidade',
    devolvido: 'devolvido'
  };

  export type ItemMaterialScalarFieldEnum = (typeof ItemMaterialScalarFieldEnum)[keyof typeof ItemMaterialScalarFieldEnum]


  export const RecebimentoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    costureiraId: 'costureiraId',
    dataRecebimento: 'dataRecebimento',
    observacao: 'observacao'
  };

  export type RecebimentoScalarFieldEnum = (typeof RecebimentoScalarFieldEnum)[keyof typeof RecebimentoScalarFieldEnum]


  export const DevolucaoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    costureiraId: 'costureiraId',
    dataDevolucao: 'dataDevolucao',
    observacao: 'observacao'
  };

  export type DevolucaoScalarFieldEnum = (typeof DevolucaoScalarFieldEnum)[keyof typeof DevolucaoScalarFieldEnum]


  export const ItemDevolucaoScalarFieldEnum: {
    id: 'id',
    devolucaoId: 'devolucaoId',
    materialId: 'materialId',
    quantidade: 'quantidade'
  };

  export type ItemDevolucaoScalarFieldEnum = (typeof ItemDevolucaoScalarFieldEnum)[keyof typeof ItemDevolucaoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    costureiraId: 'costureiraId',
    dataPagamento: 'dataPagamento',
    valorTotal: 'valorTotal',
    observacao: 'observacao'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const ItemPagamentoScalarFieldEnum: {
    id: 'id',
    pagamentoId: 'pagamentoId',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId',
    quantidade: 'quantidade',
    valorUnitario: 'valorUnitario',
    valorTotal: 'valorTotal'
  };

  export type ItemPagamentoScalarFieldEnum = (typeof ItemPagamentoScalarFieldEnum)[keyof typeof ItemPagamentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'StatusPedido'
   */
  export type EnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido'>
    
  /**
   * Deep Input Types
   */


  export type CostureiraWhereInput = {
    AND?: CostureiraWhereInput | CostureiraWhereInput[]
    OR?: CostureiraWhereInput[]
    NOT?: CostureiraWhereInput | CostureiraWhereInput[]
    id?: IntFilter<"Costureira"> | number
    nome?: StringFilter<"Costureira"> | string
    telefone?: StringNullableFilter<"Costureira"> | string | null
    email?: StringNullableFilter<"Costureira"> | string | null
    endereco?: StringNullableFilter<"Costureira"> | string | null
    cpf?: StringNullableFilter<"Costureira"> | string | null
    dataCadastro?: DateTimeFilter<"Costureira"> | Date | string
    ativo?: BoolFilter<"Costureira"> | boolean
    pedidos?: PedidoListRelationFilter
    recebimentos?: RecebimentoListRelationFilter
    devolucoes?: DevolucaoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }

  export type CostureiraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
    recebimentos?: RecebimentoOrderByRelationAggregateInput
    devolucoes?: DevolucaoOrderByRelationAggregateInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
  }

  export type CostureiraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: CostureiraWhereInput | CostureiraWhereInput[]
    OR?: CostureiraWhereInput[]
    NOT?: CostureiraWhereInput | CostureiraWhereInput[]
    nome?: StringFilter<"Costureira"> | string
    telefone?: StringNullableFilter<"Costureira"> | string | null
    email?: StringNullableFilter<"Costureira"> | string | null
    endereco?: StringNullableFilter<"Costureira"> | string | null
    dataCadastro?: DateTimeFilter<"Costureira"> | Date | string
    ativo?: BoolFilter<"Costureira"> | boolean
    pedidos?: PedidoListRelationFilter
    recebimentos?: RecebimentoListRelationFilter
    devolucoes?: DevolucaoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }, "id" | "cpf">

  export type CostureiraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    _count?: CostureiraCountOrderByAggregateInput
    _avg?: CostureiraAvgOrderByAggregateInput
    _max?: CostureiraMaxOrderByAggregateInput
    _min?: CostureiraMinOrderByAggregateInput
    _sum?: CostureiraSumOrderByAggregateInput
  }

  export type CostureiraScalarWhereWithAggregatesInput = {
    AND?: CostureiraScalarWhereWithAggregatesInput | CostureiraScalarWhereWithAggregatesInput[]
    OR?: CostureiraScalarWhereWithAggregatesInput[]
    NOT?: CostureiraScalarWhereWithAggregatesInput | CostureiraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Costureira"> | number
    nome?: StringWithAggregatesFilter<"Costureira"> | string
    telefone?: StringNullableWithAggregatesFilter<"Costureira"> | string | null
    email?: StringNullableWithAggregatesFilter<"Costureira"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Costureira"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"Costureira"> | string | null
    dataCadastro?: DateTimeWithAggregatesFilter<"Costureira"> | Date | string
    ativo?: BoolWithAggregatesFilter<"Costureira"> | boolean
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    valorUnitario?: FloatFilter<"Produto"> | number
    ativo?: BoolFilter<"Produto"> | boolean
    itensPedido?: ItemPedidoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorUnitario?: SortOrder
    ativo?: SortOrder
    itensPedido?: ItemPedidoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    valorUnitario?: FloatFilter<"Produto"> | number
    ativo?: BoolFilter<"Produto"> | boolean
    itensPedido?: ItemPedidoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorUnitario?: SortOrder
    ativo?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    valorUnitario?: FloatWithAggregatesFilter<"Produto"> | number
    ativo?: BoolWithAggregatesFilter<"Produto"> | boolean
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    nome?: StringFilter<"Material"> | string
    descricao?: StringNullableFilter<"Material"> | string | null
    unidadeMedida?: StringFilter<"Material"> | string
    ativo?: BoolFilter<"Material"> | boolean
    itensMaterial?: ItemMaterialListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidadeMedida?: SortOrder
    ativo?: SortOrder
    itensMaterial?: ItemMaterialOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    nome?: StringFilter<"Material"> | string
    descricao?: StringNullableFilter<"Material"> | string | null
    unidadeMedida?: StringFilter<"Material"> | string
    ativo?: BoolFilter<"Material"> | boolean
    itensMaterial?: ItemMaterialListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidadeMedida?: SortOrder
    ativo?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    nome?: StringWithAggregatesFilter<"Material"> | string
    descricao?: StringNullableWithAggregatesFilter<"Material"> | string | null
    unidadeMedida?: StringWithAggregatesFilter<"Material"> | string
    ativo?: BoolWithAggregatesFilter<"Material"> | boolean
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    costureiraId?: IntFilter<"Pedido"> | number
    dataEnvio?: DateTimeFilter<"Pedido"> | Date | string
    dataPrevisao?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    observacao?: StringNullableFilter<"Pedido"> | string | null
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
    itensPedido?: ItemPedidoListRelationFilter
    itensMaterial?: ItemMaterialListRelationFilter
    recebimento?: XOR<RecebimentoNullableScalarRelationFilter, RecebimentoWhereInput> | null
    devolucao?: XOR<DevolucaoNullableScalarRelationFilter, DevolucaoWhereInput> | null
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataEnvio?: SortOrder
    dataPrevisao?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    status?: SortOrder
    costureira?: CostureiraOrderByWithRelationInput
    itensPedido?: ItemPedidoOrderByRelationAggregateInput
    itensMaterial?: ItemMaterialOrderByRelationAggregateInput
    recebimento?: RecebimentoOrderByWithRelationInput
    devolucao?: DevolucaoOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    costureiraId?: IntFilter<"Pedido"> | number
    dataEnvio?: DateTimeFilter<"Pedido"> | Date | string
    dataPrevisao?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    observacao?: StringNullableFilter<"Pedido"> | string | null
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
    itensPedido?: ItemPedidoListRelationFilter
    itensMaterial?: ItemMaterialListRelationFilter
    recebimento?: XOR<RecebimentoNullableScalarRelationFilter, RecebimentoWhereInput> | null
    devolucao?: XOR<DevolucaoNullableScalarRelationFilter, DevolucaoWhereInput> | null
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataEnvio?: SortOrder
    dataPrevisao?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    costureiraId?: IntWithAggregatesFilter<"Pedido"> | number
    dataEnvio?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    dataPrevisao?: DateTimeNullableWithAggregatesFilter<"Pedido"> | Date | string | null
    observacao?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    status?: EnumStatusPedidoWithAggregatesFilter<"Pedido"> | $Enums.StatusPedido
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    valorUnitario?: FloatFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    valorUnitario?: FloatFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    produtoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    quantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    valorUnitario?: FloatWithAggregatesFilter<"ItemPedido"> | number
  }

  export type ItemMaterialWhereInput = {
    AND?: ItemMaterialWhereInput | ItemMaterialWhereInput[]
    OR?: ItemMaterialWhereInput[]
    NOT?: ItemMaterialWhereInput | ItemMaterialWhereInput[]
    id?: IntFilter<"ItemMaterial"> | number
    pedidoId?: IntFilter<"ItemMaterial"> | number
    materialId?: IntFilter<"ItemMaterial"> | number
    quantidade?: FloatFilter<"ItemMaterial"> | number
    devolvido?: FloatFilter<"ItemMaterial"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type ItemMaterialOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type ItemMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemMaterialWhereInput | ItemMaterialWhereInput[]
    OR?: ItemMaterialWhereInput[]
    NOT?: ItemMaterialWhereInput | ItemMaterialWhereInput[]
    pedidoId?: IntFilter<"ItemMaterial"> | number
    materialId?: IntFilter<"ItemMaterial"> | number
    quantidade?: FloatFilter<"ItemMaterial"> | number
    devolvido?: FloatFilter<"ItemMaterial"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type ItemMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
    _count?: ItemMaterialCountOrderByAggregateInput
    _avg?: ItemMaterialAvgOrderByAggregateInput
    _max?: ItemMaterialMaxOrderByAggregateInput
    _min?: ItemMaterialMinOrderByAggregateInput
    _sum?: ItemMaterialSumOrderByAggregateInput
  }

  export type ItemMaterialScalarWhereWithAggregatesInput = {
    AND?: ItemMaterialScalarWhereWithAggregatesInput | ItemMaterialScalarWhereWithAggregatesInput[]
    OR?: ItemMaterialScalarWhereWithAggregatesInput[]
    NOT?: ItemMaterialScalarWhereWithAggregatesInput | ItemMaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemMaterial"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemMaterial"> | number
    materialId?: IntWithAggregatesFilter<"ItemMaterial"> | number
    quantidade?: FloatWithAggregatesFilter<"ItemMaterial"> | number
    devolvido?: FloatWithAggregatesFilter<"ItemMaterial"> | number
  }

  export type RecebimentoWhereInput = {
    AND?: RecebimentoWhereInput | RecebimentoWhereInput[]
    OR?: RecebimentoWhereInput[]
    NOT?: RecebimentoWhereInput | RecebimentoWhereInput[]
    id?: IntFilter<"Recebimento"> | number
    pedidoId?: IntFilter<"Recebimento"> | number
    costureiraId?: IntFilter<"Recebimento"> | number
    dataRecebimento?: DateTimeFilter<"Recebimento"> | Date | string
    observacao?: StringNullableFilter<"Recebimento"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
  }

  export type RecebimentoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataRecebimento?: SortOrder
    observacao?: SortOrderInput | SortOrder
    pedido?: PedidoOrderByWithRelationInput
    costureira?: CostureiraOrderByWithRelationInput
  }

  export type RecebimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: RecebimentoWhereInput | RecebimentoWhereInput[]
    OR?: RecebimentoWhereInput[]
    NOT?: RecebimentoWhereInput | RecebimentoWhereInput[]
    costureiraId?: IntFilter<"Recebimento"> | number
    dataRecebimento?: DateTimeFilter<"Recebimento"> | Date | string
    observacao?: StringNullableFilter<"Recebimento"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
  }, "id" | "pedidoId">

  export type RecebimentoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataRecebimento?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: RecebimentoCountOrderByAggregateInput
    _avg?: RecebimentoAvgOrderByAggregateInput
    _max?: RecebimentoMaxOrderByAggregateInput
    _min?: RecebimentoMinOrderByAggregateInput
    _sum?: RecebimentoSumOrderByAggregateInput
  }

  export type RecebimentoScalarWhereWithAggregatesInput = {
    AND?: RecebimentoScalarWhereWithAggregatesInput | RecebimentoScalarWhereWithAggregatesInput[]
    OR?: RecebimentoScalarWhereWithAggregatesInput[]
    NOT?: RecebimentoScalarWhereWithAggregatesInput | RecebimentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recebimento"> | number
    pedidoId?: IntWithAggregatesFilter<"Recebimento"> | number
    costureiraId?: IntWithAggregatesFilter<"Recebimento"> | number
    dataRecebimento?: DateTimeWithAggregatesFilter<"Recebimento"> | Date | string
    observacao?: StringNullableWithAggregatesFilter<"Recebimento"> | string | null
  }

  export type DevolucaoWhereInput = {
    AND?: DevolucaoWhereInput | DevolucaoWhereInput[]
    OR?: DevolucaoWhereInput[]
    NOT?: DevolucaoWhereInput | DevolucaoWhereInput[]
    id?: IntFilter<"Devolucao"> | number
    pedidoId?: IntFilter<"Devolucao"> | number
    costureiraId?: IntFilter<"Devolucao"> | number
    dataDevolucao?: DateTimeFilter<"Devolucao"> | Date | string
    observacao?: StringNullableFilter<"Devolucao"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
    itensDevolucao?: ItemDevolucaoListRelationFilter
  }

  export type DevolucaoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataDevolucao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    pedido?: PedidoOrderByWithRelationInput
    costureira?: CostureiraOrderByWithRelationInput
    itensDevolucao?: ItemDevolucaoOrderByRelationAggregateInput
  }

  export type DevolucaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: DevolucaoWhereInput | DevolucaoWhereInput[]
    OR?: DevolucaoWhereInput[]
    NOT?: DevolucaoWhereInput | DevolucaoWhereInput[]
    costureiraId?: IntFilter<"Devolucao"> | number
    dataDevolucao?: DateTimeFilter<"Devolucao"> | Date | string
    observacao?: StringNullableFilter<"Devolucao"> | string | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
    itensDevolucao?: ItemDevolucaoListRelationFilter
  }, "id" | "pedidoId">

  export type DevolucaoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataDevolucao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: DevolucaoCountOrderByAggregateInput
    _avg?: DevolucaoAvgOrderByAggregateInput
    _max?: DevolucaoMaxOrderByAggregateInput
    _min?: DevolucaoMinOrderByAggregateInput
    _sum?: DevolucaoSumOrderByAggregateInput
  }

  export type DevolucaoScalarWhereWithAggregatesInput = {
    AND?: DevolucaoScalarWhereWithAggregatesInput | DevolucaoScalarWhereWithAggregatesInput[]
    OR?: DevolucaoScalarWhereWithAggregatesInput[]
    NOT?: DevolucaoScalarWhereWithAggregatesInput | DevolucaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Devolucao"> | number
    pedidoId?: IntWithAggregatesFilter<"Devolucao"> | number
    costureiraId?: IntWithAggregatesFilter<"Devolucao"> | number
    dataDevolucao?: DateTimeWithAggregatesFilter<"Devolucao"> | Date | string
    observacao?: StringNullableWithAggregatesFilter<"Devolucao"> | string | null
  }

  export type ItemDevolucaoWhereInput = {
    AND?: ItemDevolucaoWhereInput | ItemDevolucaoWhereInput[]
    OR?: ItemDevolucaoWhereInput[]
    NOT?: ItemDevolucaoWhereInput | ItemDevolucaoWhereInput[]
    id?: IntFilter<"ItemDevolucao"> | number
    devolucaoId?: IntFilter<"ItemDevolucao"> | number
    materialId?: IntFilter<"ItemDevolucao"> | number
    quantidade?: FloatFilter<"ItemDevolucao"> | number
    devolucao?: XOR<DevolucaoScalarRelationFilter, DevolucaoWhereInput>
  }

  export type ItemDevolucaoOrderByWithRelationInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolucao?: DevolucaoOrderByWithRelationInput
  }

  export type ItemDevolucaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemDevolucaoWhereInput | ItemDevolucaoWhereInput[]
    OR?: ItemDevolucaoWhereInput[]
    NOT?: ItemDevolucaoWhereInput | ItemDevolucaoWhereInput[]
    devolucaoId?: IntFilter<"ItemDevolucao"> | number
    materialId?: IntFilter<"ItemDevolucao"> | number
    quantidade?: FloatFilter<"ItemDevolucao"> | number
    devolucao?: XOR<DevolucaoScalarRelationFilter, DevolucaoWhereInput>
  }, "id">

  export type ItemDevolucaoOrderByWithAggregationInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    _count?: ItemDevolucaoCountOrderByAggregateInput
    _avg?: ItemDevolucaoAvgOrderByAggregateInput
    _max?: ItemDevolucaoMaxOrderByAggregateInput
    _min?: ItemDevolucaoMinOrderByAggregateInput
    _sum?: ItemDevolucaoSumOrderByAggregateInput
  }

  export type ItemDevolucaoScalarWhereWithAggregatesInput = {
    AND?: ItemDevolucaoScalarWhereWithAggregatesInput | ItemDevolucaoScalarWhereWithAggregatesInput[]
    OR?: ItemDevolucaoScalarWhereWithAggregatesInput[]
    NOT?: ItemDevolucaoScalarWhereWithAggregatesInput | ItemDevolucaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemDevolucao"> | number
    devolucaoId?: IntWithAggregatesFilter<"ItemDevolucao"> | number
    materialId?: IntWithAggregatesFilter<"ItemDevolucao"> | number
    quantidade?: FloatWithAggregatesFilter<"ItemDevolucao"> | number
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    costureiraId?: IntFilter<"Pagamento"> | number
    dataPagamento?: DateTimeFilter<"Pagamento"> | Date | string
    valorTotal?: FloatFilter<"Pagamento"> | number
    observacao?: StringNullableFilter<"Pagamento"> | string | null
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
    itensPagamento?: ItemPagamentoListRelationFilter
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataPagamento?: SortOrder
    valorTotal?: SortOrder
    observacao?: SortOrderInput | SortOrder
    costureira?: CostureiraOrderByWithRelationInput
    itensPagamento?: ItemPagamentoOrderByRelationAggregateInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    costureiraId?: IntFilter<"Pagamento"> | number
    dataPagamento?: DateTimeFilter<"Pagamento"> | Date | string
    valorTotal?: FloatFilter<"Pagamento"> | number
    observacao?: StringNullableFilter<"Pagamento"> | string | null
    costureira?: XOR<CostureiraScalarRelationFilter, CostureiraWhereInput>
    itensPagamento?: ItemPagamentoListRelationFilter
  }, "id">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataPagamento?: SortOrder
    valorTotal?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagamento"> | number
    costureiraId?: IntWithAggregatesFilter<"Pagamento"> | number
    dataPagamento?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    valorTotal?: FloatWithAggregatesFilter<"Pagamento"> | number
    observacao?: StringNullableWithAggregatesFilter<"Pagamento"> | string | null
  }

  export type ItemPagamentoWhereInput = {
    AND?: ItemPagamentoWhereInput | ItemPagamentoWhereInput[]
    OR?: ItemPagamentoWhereInput[]
    NOT?: ItemPagamentoWhereInput | ItemPagamentoWhereInput[]
    id?: IntFilter<"ItemPagamento"> | number
    pagamentoId?: IntFilter<"ItemPagamento"> | number
    pedidoId?: IntFilter<"ItemPagamento"> | number
    produtoId?: IntFilter<"ItemPagamento"> | number
    quantidade?: IntFilter<"ItemPagamento"> | number
    valorUnitario?: FloatFilter<"ItemPagamento"> | number
    valorTotal?: FloatFilter<"ItemPagamento"> | number
    pagamento?: XOR<PagamentoScalarRelationFilter, PagamentoWhereInput>
  }

  export type ItemPagamentoOrderByWithRelationInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    pagamento?: PagamentoOrderByWithRelationInput
  }

  export type ItemPagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPagamentoWhereInput | ItemPagamentoWhereInput[]
    OR?: ItemPagamentoWhereInput[]
    NOT?: ItemPagamentoWhereInput | ItemPagamentoWhereInput[]
    pagamentoId?: IntFilter<"ItemPagamento"> | number
    pedidoId?: IntFilter<"ItemPagamento"> | number
    produtoId?: IntFilter<"ItemPagamento"> | number
    quantidade?: IntFilter<"ItemPagamento"> | number
    valorUnitario?: FloatFilter<"ItemPagamento"> | number
    valorTotal?: FloatFilter<"ItemPagamento"> | number
    pagamento?: XOR<PagamentoScalarRelationFilter, PagamentoWhereInput>
  }, "id">

  export type ItemPagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    _count?: ItemPagamentoCountOrderByAggregateInput
    _avg?: ItemPagamentoAvgOrderByAggregateInput
    _max?: ItemPagamentoMaxOrderByAggregateInput
    _min?: ItemPagamentoMinOrderByAggregateInput
    _sum?: ItemPagamentoSumOrderByAggregateInput
  }

  export type ItemPagamentoScalarWhereWithAggregatesInput = {
    AND?: ItemPagamentoScalarWhereWithAggregatesInput | ItemPagamentoScalarWhereWithAggregatesInput[]
    OR?: ItemPagamentoScalarWhereWithAggregatesInput[]
    NOT?: ItemPagamentoScalarWhereWithAggregatesInput | ItemPagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPagamento"> | number
    pagamentoId?: IntWithAggregatesFilter<"ItemPagamento"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPagamento"> | number
    produtoId?: IntWithAggregatesFilter<"ItemPagamento"> | number
    quantidade?: IntWithAggregatesFilter<"ItemPagamento"> | number
    valorUnitario?: FloatWithAggregatesFilter<"ItemPagamento"> | number
    valorTotal?: FloatWithAggregatesFilter<"ItemPagamento"> | number
  }

  export type CostureiraCreateInput = {
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoCreateNestedManyWithoutCostureiraInput
    recebimentos?: RecebimentoCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraUncheckedCreateInput = {
    id?: number
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoUncheckedCreateNestedManyWithoutCostureiraInput
    recebimentos?: RecebimentoUncheckedCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoUncheckedCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUpdateManyWithoutCostureiraNestedInput
    recebimentos?: RecebimentoUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUpdateManyWithoutCostureiraNestedInput
  }

  export type CostureiraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUncheckedUpdateManyWithoutCostureiraNestedInput
    recebimentos?: RecebimentoUncheckedUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUncheckedUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutCostureiraNestedInput
  }

  export type CostureiraCreateManyInput = {
    id?: number
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type CostureiraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CostureiraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao?: string | null
    valorUnitario: number
    ativo?: boolean
    itensPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    valorUnitario: number
    ativo?: boolean
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    itensPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    valorUnitario: number
    ativo?: boolean
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaterialCreateInput = {
    nome: string
    descricao?: string | null
    unidadeMedida: string
    ativo?: boolean
    itensMaterial?: ItemMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidadeMedida: string
    ativo?: boolean
    itensMaterial?: ItemMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    itensMaterial?: ItemMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    itensMaterial?: ItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidadeMedida: string
    ativo?: boolean
  }

  export type MaterialUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoCreateInput = {
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    costureira: CostureiraCreateNestedOneWithoutPedidosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    costureiraId: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialUncheckedCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoUncheckedCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    costureira?: CostureiraUpdateOneRequiredWithoutPedidosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUncheckedUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUncheckedUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    costureiraId: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
  }

  export type PedidoUpdateManyMutationInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
  }

  export type ItemPedidoCreateInput = {
    quantidade: number
    valorUnitario: number
    pedido: PedidoCreateNestedOneWithoutItensPedidoInput
    produto: ProdutoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
  }

  export type ItemPedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensPedidoNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
  }

  export type ItemPedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialCreateInput = {
    quantidade: number
    devolvido?: number
    pedido: PedidoCreateNestedOneWithoutItensMaterialInput
    material: MaterialCreateNestedOneWithoutItensMaterialInput
  }

  export type ItemMaterialUncheckedCreateInput = {
    id?: number
    pedidoId: number
    materialId: number
    quantidade: number
    devolvido?: number
  }

  export type ItemMaterialUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensMaterialNestedInput
    material?: MaterialUpdateOneRequiredWithoutItensMaterialNestedInput
  }

  export type ItemMaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialCreateManyInput = {
    id?: number
    pedidoId: number
    materialId: number
    quantidade: number
    devolvido?: number
  }

  export type ItemMaterialUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type RecebimentoCreateInput = {
    dataRecebimento?: Date | string
    observacao?: string | null
    pedido: PedidoCreateNestedOneWithoutRecebimentoInput
    costureira: CostureiraCreateNestedOneWithoutRecebimentosInput
  }

  export type RecebimentoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    costureiraId: number
    dataRecebimento?: Date | string
    observacao?: string | null
  }

  export type RecebimentoUpdateInput = {
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutRecebimentoNestedInput
    costureira?: CostureiraUpdateOneRequiredWithoutRecebimentosNestedInput
  }

  export type RecebimentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecebimentoCreateManyInput = {
    id?: number
    pedidoId: number
    costureiraId: number
    dataRecebimento?: Date | string
    observacao?: string | null
  }

  export type RecebimentoUpdateManyMutationInput = {
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecebimentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DevolucaoCreateInput = {
    dataDevolucao?: Date | string
    observacao?: string | null
    pedido: PedidoCreateNestedOneWithoutDevolucaoInput
    costureira: CostureiraCreateNestedOneWithoutDevolucoesInput
    itensDevolucao?: ItemDevolucaoCreateNestedManyWithoutDevolucaoInput
  }

  export type DevolucaoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    costureiraId: number
    dataDevolucao?: Date | string
    observacao?: string | null
    itensDevolucao?: ItemDevolucaoUncheckedCreateNestedManyWithoutDevolucaoInput
  }

  export type DevolucaoUpdateInput = {
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutDevolucaoNestedInput
    costureira?: CostureiraUpdateOneRequiredWithoutDevolucoesNestedInput
    itensDevolucao?: ItemDevolucaoUpdateManyWithoutDevolucaoNestedInput
  }

  export type DevolucaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    itensDevolucao?: ItemDevolucaoUncheckedUpdateManyWithoutDevolucaoNestedInput
  }

  export type DevolucaoCreateManyInput = {
    id?: number
    pedidoId: number
    costureiraId: number
    dataDevolucao?: Date | string
    observacao?: string | null
  }

  export type DevolucaoUpdateManyMutationInput = {
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DevolucaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemDevolucaoCreateInput = {
    materialId: number
    quantidade: number
    devolucao: DevolucaoCreateNestedOneWithoutItensDevolucaoInput
  }

  export type ItemDevolucaoUncheckedCreateInput = {
    id?: number
    devolucaoId: number
    materialId: number
    quantidade: number
  }

  export type ItemDevolucaoUpdateInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolucao?: DevolucaoUpdateOneRequiredWithoutItensDevolucaoNestedInput
  }

  export type ItemDevolucaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    devolucaoId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemDevolucaoCreateManyInput = {
    id?: number
    devolucaoId: number
    materialId: number
    quantidade: number
  }

  export type ItemDevolucaoUpdateManyMutationInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemDevolucaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    devolucaoId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type PagamentoCreateInput = {
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
    costureira: CostureiraCreateNestedOneWithoutPagamentosInput
    itensPagamento?: ItemPagamentoCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: number
    costureiraId: number
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
    itensPagamento?: ItemPagamentoUncheckedCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUpdateInput = {
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    costureira?: CostureiraUpdateOneRequiredWithoutPagamentosNestedInput
    itensPagamento?: ItemPagamentoUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    itensPagamento?: ItemPagamentoUncheckedUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoCreateManyInput = {
    id?: number
    costureiraId: number
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
  }

  export type PagamentoUpdateManyMutationInput = {
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPagamentoCreateInput = {
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
    pagamento: PagamentoCreateNestedOneWithoutItensPagamentoInput
  }

  export type ItemPagamentoUncheckedCreateInput = {
    id?: number
    pagamentoId: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
  }

  export type ItemPagamentoUpdateInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    pagamento?: PagamentoUpdateOneRequiredWithoutItensPagamentoNestedInput
  }

  export type ItemPagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagamentoId?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPagamentoCreateManyInput = {
    id?: number
    pagamentoId: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
  }

  export type ItemPagamentoUpdateManyMutationInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagamentoId?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type RecebimentoListRelationFilter = {
    every?: RecebimentoWhereInput
    some?: RecebimentoWhereInput
    none?: RecebimentoWhereInput
  }

  export type DevolucaoListRelationFilter = {
    every?: DevolucaoWhereInput
    some?: DevolucaoWhereInput
    none?: DevolucaoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecebimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DevolucaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CostureiraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    cpf?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type CostureiraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CostureiraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    cpf?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type CostureiraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    cpf?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type CostureiraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valorUnitario?: SortOrder
    ativo?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorUnitario?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valorUnitario?: SortOrder
    ativo?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valorUnitario?: SortOrder
    ativo?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    valorUnitario?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ItemMaterialListRelationFilter = {
    every?: ItemMaterialWhereInput
    some?: ItemMaterialWhereInput
    none?: ItemMaterialWhereInput
  }

  export type ItemMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidadeMedida?: SortOrder
    ativo?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidadeMedida?: SortOrder
    ativo?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidadeMedida?: SortOrder
    ativo?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[]
    notIn?: $Enums.StatusPedido[]
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type CostureiraScalarRelationFilter = {
    is?: CostureiraWhereInput
    isNot?: CostureiraWhereInput
  }

  export type RecebimentoNullableScalarRelationFilter = {
    is?: RecebimentoWhereInput | null
    isNot?: RecebimentoWhereInput | null
  }

  export type DevolucaoNullableScalarRelationFilter = {
    is?: DevolucaoWhereInput | null
    isNot?: DevolucaoWhereInput | null
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataEnvio?: SortOrder
    dataPrevisao?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataEnvio?: SortOrder
    dataPrevisao?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataEnvio?: SortOrder
    dataPrevisao?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[]
    notIn?: $Enums.StatusPedido[]
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type ItemMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
  }

  export type ItemMaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
  }

  export type ItemMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
  }

  export type ItemMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
  }

  export type ItemMaterialSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
    devolvido?: SortOrder
  }

  export type RecebimentoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataRecebimento?: SortOrder
    observacao?: SortOrder
  }

  export type RecebimentoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
  }

  export type RecebimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataRecebimento?: SortOrder
    observacao?: SortOrder
  }

  export type RecebimentoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataRecebimento?: SortOrder
    observacao?: SortOrder
  }

  export type RecebimentoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
  }

  export type ItemDevolucaoListRelationFilter = {
    every?: ItemDevolucaoWhereInput
    some?: ItemDevolucaoWhereInput
    none?: ItemDevolucaoWhereInput
  }

  export type ItemDevolucaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DevolucaoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataDevolucao?: SortOrder
    observacao?: SortOrder
  }

  export type DevolucaoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
  }

  export type DevolucaoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataDevolucao?: SortOrder
    observacao?: SortOrder
  }

  export type DevolucaoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
    dataDevolucao?: SortOrder
    observacao?: SortOrder
  }

  export type DevolucaoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    costureiraId?: SortOrder
  }

  export type DevolucaoScalarRelationFilter = {
    is?: DevolucaoWhereInput
    isNot?: DevolucaoWhereInput
  }

  export type ItemDevolucaoCountOrderByAggregateInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
  }

  export type ItemDevolucaoAvgOrderByAggregateInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
  }

  export type ItemDevolucaoMaxOrderByAggregateInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
  }

  export type ItemDevolucaoMinOrderByAggregateInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
  }

  export type ItemDevolucaoSumOrderByAggregateInput = {
    id?: SortOrder
    devolucaoId?: SortOrder
    materialId?: SortOrder
    quantidade?: SortOrder
  }

  export type ItemPagamentoListRelationFilter = {
    every?: ItemPagamentoWhereInput
    some?: ItemPagamentoWhereInput
    none?: ItemPagamentoWhereInput
  }

  export type ItemPagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataPagamento?: SortOrder
    valorTotal?: SortOrder
    observacao?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    valorTotal?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataPagamento?: SortOrder
    valorTotal?: SortOrder
    observacao?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    dataPagamento?: SortOrder
    valorTotal?: SortOrder
    observacao?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    costureiraId?: SortOrder
    valorTotal?: SortOrder
  }

  export type PagamentoScalarRelationFilter = {
    is?: PagamentoWhereInput
    isNot?: PagamentoWhereInput
  }

  export type ItemPagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    pagamentoId?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type PedidoCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<PedidoCreateWithoutCostureiraInput, PedidoUncheckedCreateWithoutCostureiraInput> | PedidoCreateWithoutCostureiraInput[] | PedidoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutCostureiraInput | PedidoCreateOrConnectWithoutCostureiraInput[]
    createMany?: PedidoCreateManyCostureiraInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type RecebimentoCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<RecebimentoCreateWithoutCostureiraInput, RecebimentoUncheckedCreateWithoutCostureiraInput> | RecebimentoCreateWithoutCostureiraInput[] | RecebimentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: RecebimentoCreateOrConnectWithoutCostureiraInput | RecebimentoCreateOrConnectWithoutCostureiraInput[]
    createMany?: RecebimentoCreateManyCostureiraInputEnvelope
    connect?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
  }

  export type DevolucaoCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<DevolucaoCreateWithoutCostureiraInput, DevolucaoUncheckedCreateWithoutCostureiraInput> | DevolucaoCreateWithoutCostureiraInput[] | DevolucaoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: DevolucaoCreateOrConnectWithoutCostureiraInput | DevolucaoCreateOrConnectWithoutCostureiraInput[]
    createMany?: DevolucaoCreateManyCostureiraInputEnvelope
    connect?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
  }

  export type PagamentoCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<PagamentoCreateWithoutCostureiraInput, PagamentoUncheckedCreateWithoutCostureiraInput> | PagamentoCreateWithoutCostureiraInput[] | PagamentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutCostureiraInput | PagamentoCreateOrConnectWithoutCostureiraInput[]
    createMany?: PagamentoCreateManyCostureiraInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<PedidoCreateWithoutCostureiraInput, PedidoUncheckedCreateWithoutCostureiraInput> | PedidoCreateWithoutCostureiraInput[] | PedidoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutCostureiraInput | PedidoCreateOrConnectWithoutCostureiraInput[]
    createMany?: PedidoCreateManyCostureiraInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type RecebimentoUncheckedCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<RecebimentoCreateWithoutCostureiraInput, RecebimentoUncheckedCreateWithoutCostureiraInput> | RecebimentoCreateWithoutCostureiraInput[] | RecebimentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: RecebimentoCreateOrConnectWithoutCostureiraInput | RecebimentoCreateOrConnectWithoutCostureiraInput[]
    createMany?: RecebimentoCreateManyCostureiraInputEnvelope
    connect?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
  }

  export type DevolucaoUncheckedCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<DevolucaoCreateWithoutCostureiraInput, DevolucaoUncheckedCreateWithoutCostureiraInput> | DevolucaoCreateWithoutCostureiraInput[] | DevolucaoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: DevolucaoCreateOrConnectWithoutCostureiraInput | DevolucaoCreateOrConnectWithoutCostureiraInput[]
    createMany?: DevolucaoCreateManyCostureiraInputEnvelope
    connect?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutCostureiraInput = {
    create?: XOR<PagamentoCreateWithoutCostureiraInput, PagamentoUncheckedCreateWithoutCostureiraInput> | PagamentoCreateWithoutCostureiraInput[] | PagamentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutCostureiraInput | PagamentoCreateOrConnectWithoutCostureiraInput[]
    createMany?: PagamentoCreateManyCostureiraInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PedidoUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<PedidoCreateWithoutCostureiraInput, PedidoUncheckedCreateWithoutCostureiraInput> | PedidoCreateWithoutCostureiraInput[] | PedidoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutCostureiraInput | PedidoCreateOrConnectWithoutCostureiraInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutCostureiraInput | PedidoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: PedidoCreateManyCostureiraInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutCostureiraInput | PedidoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutCostureiraInput | PedidoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type RecebimentoUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<RecebimentoCreateWithoutCostureiraInput, RecebimentoUncheckedCreateWithoutCostureiraInput> | RecebimentoCreateWithoutCostureiraInput[] | RecebimentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: RecebimentoCreateOrConnectWithoutCostureiraInput | RecebimentoCreateOrConnectWithoutCostureiraInput[]
    upsert?: RecebimentoUpsertWithWhereUniqueWithoutCostureiraInput | RecebimentoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: RecebimentoCreateManyCostureiraInputEnvelope
    set?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    disconnect?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    delete?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    connect?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    update?: RecebimentoUpdateWithWhereUniqueWithoutCostureiraInput | RecebimentoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: RecebimentoUpdateManyWithWhereWithoutCostureiraInput | RecebimentoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: RecebimentoScalarWhereInput | RecebimentoScalarWhereInput[]
  }

  export type DevolucaoUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<DevolucaoCreateWithoutCostureiraInput, DevolucaoUncheckedCreateWithoutCostureiraInput> | DevolucaoCreateWithoutCostureiraInput[] | DevolucaoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: DevolucaoCreateOrConnectWithoutCostureiraInput | DevolucaoCreateOrConnectWithoutCostureiraInput[]
    upsert?: DevolucaoUpsertWithWhereUniqueWithoutCostureiraInput | DevolucaoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: DevolucaoCreateManyCostureiraInputEnvelope
    set?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    disconnect?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    delete?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    connect?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    update?: DevolucaoUpdateWithWhereUniqueWithoutCostureiraInput | DevolucaoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: DevolucaoUpdateManyWithWhereWithoutCostureiraInput | DevolucaoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: DevolucaoScalarWhereInput | DevolucaoScalarWhereInput[]
  }

  export type PagamentoUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<PagamentoCreateWithoutCostureiraInput, PagamentoUncheckedCreateWithoutCostureiraInput> | PagamentoCreateWithoutCostureiraInput[] | PagamentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutCostureiraInput | PagamentoCreateOrConnectWithoutCostureiraInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutCostureiraInput | PagamentoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: PagamentoCreateManyCostureiraInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutCostureiraInput | PagamentoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutCostureiraInput | PagamentoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUncheckedUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<PedidoCreateWithoutCostureiraInput, PedidoUncheckedCreateWithoutCostureiraInput> | PedidoCreateWithoutCostureiraInput[] | PedidoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutCostureiraInput | PedidoCreateOrConnectWithoutCostureiraInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutCostureiraInput | PedidoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: PedidoCreateManyCostureiraInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutCostureiraInput | PedidoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutCostureiraInput | PedidoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type RecebimentoUncheckedUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<RecebimentoCreateWithoutCostureiraInput, RecebimentoUncheckedCreateWithoutCostureiraInput> | RecebimentoCreateWithoutCostureiraInput[] | RecebimentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: RecebimentoCreateOrConnectWithoutCostureiraInput | RecebimentoCreateOrConnectWithoutCostureiraInput[]
    upsert?: RecebimentoUpsertWithWhereUniqueWithoutCostureiraInput | RecebimentoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: RecebimentoCreateManyCostureiraInputEnvelope
    set?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    disconnect?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    delete?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    connect?: RecebimentoWhereUniqueInput | RecebimentoWhereUniqueInput[]
    update?: RecebimentoUpdateWithWhereUniqueWithoutCostureiraInput | RecebimentoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: RecebimentoUpdateManyWithWhereWithoutCostureiraInput | RecebimentoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: RecebimentoScalarWhereInput | RecebimentoScalarWhereInput[]
  }

  export type DevolucaoUncheckedUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<DevolucaoCreateWithoutCostureiraInput, DevolucaoUncheckedCreateWithoutCostureiraInput> | DevolucaoCreateWithoutCostureiraInput[] | DevolucaoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: DevolucaoCreateOrConnectWithoutCostureiraInput | DevolucaoCreateOrConnectWithoutCostureiraInput[]
    upsert?: DevolucaoUpsertWithWhereUniqueWithoutCostureiraInput | DevolucaoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: DevolucaoCreateManyCostureiraInputEnvelope
    set?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    disconnect?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    delete?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    connect?: DevolucaoWhereUniqueInput | DevolucaoWhereUniqueInput[]
    update?: DevolucaoUpdateWithWhereUniqueWithoutCostureiraInput | DevolucaoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: DevolucaoUpdateManyWithWhereWithoutCostureiraInput | DevolucaoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: DevolucaoScalarWhereInput | DevolucaoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutCostureiraNestedInput = {
    create?: XOR<PagamentoCreateWithoutCostureiraInput, PagamentoUncheckedCreateWithoutCostureiraInput> | PagamentoCreateWithoutCostureiraInput[] | PagamentoUncheckedCreateWithoutCostureiraInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutCostureiraInput | PagamentoCreateOrConnectWithoutCostureiraInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutCostureiraInput | PagamentoUpsertWithWhereUniqueWithoutCostureiraInput[]
    createMany?: PagamentoCreateManyCostureiraInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutCostureiraInput | PagamentoUpdateWithWhereUniqueWithoutCostureiraInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutCostureiraInput | PagamentoUpdateManyWithWhereWithoutCostureiraInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ItemMaterialCreateWithoutMaterialInput, ItemMaterialUncheckedCreateWithoutMaterialInput> | ItemMaterialCreateWithoutMaterialInput[] | ItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutMaterialInput | ItemMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ItemMaterialCreateManyMaterialInputEnvelope
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
  }

  export type ItemMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ItemMaterialCreateWithoutMaterialInput, ItemMaterialUncheckedCreateWithoutMaterialInput> | ItemMaterialCreateWithoutMaterialInput[] | ItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutMaterialInput | ItemMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ItemMaterialCreateManyMaterialInputEnvelope
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
  }

  export type ItemMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ItemMaterialCreateWithoutMaterialInput, ItemMaterialUncheckedCreateWithoutMaterialInput> | ItemMaterialCreateWithoutMaterialInput[] | ItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutMaterialInput | ItemMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ItemMaterialUpsertWithWhereUniqueWithoutMaterialInput | ItemMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ItemMaterialCreateManyMaterialInputEnvelope
    set?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    disconnect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    delete?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    update?: ItemMaterialUpdateWithWhereUniqueWithoutMaterialInput | ItemMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ItemMaterialUpdateManyWithWhereWithoutMaterialInput | ItemMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ItemMaterialScalarWhereInput | ItemMaterialScalarWhereInput[]
  }

  export type ItemMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ItemMaterialCreateWithoutMaterialInput, ItemMaterialUncheckedCreateWithoutMaterialInput> | ItemMaterialCreateWithoutMaterialInput[] | ItemMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutMaterialInput | ItemMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ItemMaterialUpsertWithWhereUniqueWithoutMaterialInput | ItemMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ItemMaterialCreateManyMaterialInputEnvelope
    set?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    disconnect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    delete?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    update?: ItemMaterialUpdateWithWhereUniqueWithoutMaterialInput | ItemMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ItemMaterialUpdateManyWithWhereWithoutMaterialInput | ItemMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ItemMaterialScalarWhereInput | ItemMaterialScalarWhereInput[]
  }

  export type CostureiraCreateNestedOneWithoutPedidosInput = {
    create?: XOR<CostureiraCreateWithoutPedidosInput, CostureiraUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutPedidosInput
    connect?: CostureiraWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemMaterialCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemMaterialCreateWithoutPedidoInput, ItemMaterialUncheckedCreateWithoutPedidoInput> | ItemMaterialCreateWithoutPedidoInput[] | ItemMaterialUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutPedidoInput | ItemMaterialCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemMaterialCreateManyPedidoInputEnvelope
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
  }

  export type RecebimentoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<RecebimentoCreateWithoutPedidoInput, RecebimentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: RecebimentoCreateOrConnectWithoutPedidoInput
    connect?: RecebimentoWhereUniqueInput
  }

  export type DevolucaoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<DevolucaoCreateWithoutPedidoInput, DevolucaoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: DevolucaoCreateOrConnectWithoutPedidoInput
    connect?: DevolucaoWhereUniqueInput
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemMaterialUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemMaterialCreateWithoutPedidoInput, ItemMaterialUncheckedCreateWithoutPedidoInput> | ItemMaterialCreateWithoutPedidoInput[] | ItemMaterialUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutPedidoInput | ItemMaterialCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemMaterialCreateManyPedidoInputEnvelope
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
  }

  export type RecebimentoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<RecebimentoCreateWithoutPedidoInput, RecebimentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: RecebimentoCreateOrConnectWithoutPedidoInput
    connect?: RecebimentoWhereUniqueInput
  }

  export type DevolucaoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<DevolucaoCreateWithoutPedidoInput, DevolucaoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: DevolucaoCreateOrConnectWithoutPedidoInput
    connect?: DevolucaoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusPedidoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPedido
  }

  export type CostureiraUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<CostureiraCreateWithoutPedidosInput, CostureiraUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutPedidosInput
    upsert?: CostureiraUpsertWithoutPedidosInput
    connect?: CostureiraWhereUniqueInput
    update?: XOR<XOR<CostureiraUpdateToOneWithWhereWithoutPedidosInput, CostureiraUpdateWithoutPedidosInput>, CostureiraUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemMaterialUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemMaterialCreateWithoutPedidoInput, ItemMaterialUncheckedCreateWithoutPedidoInput> | ItemMaterialCreateWithoutPedidoInput[] | ItemMaterialUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutPedidoInput | ItemMaterialCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemMaterialUpsertWithWhereUniqueWithoutPedidoInput | ItemMaterialUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemMaterialCreateManyPedidoInputEnvelope
    set?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    disconnect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    delete?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    update?: ItemMaterialUpdateWithWhereUniqueWithoutPedidoInput | ItemMaterialUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemMaterialUpdateManyWithWhereWithoutPedidoInput | ItemMaterialUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemMaterialScalarWhereInput | ItemMaterialScalarWhereInput[]
  }

  export type RecebimentoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<RecebimentoCreateWithoutPedidoInput, RecebimentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: RecebimentoCreateOrConnectWithoutPedidoInput
    upsert?: RecebimentoUpsertWithoutPedidoInput
    disconnect?: RecebimentoWhereInput | boolean
    delete?: RecebimentoWhereInput | boolean
    connect?: RecebimentoWhereUniqueInput
    update?: XOR<XOR<RecebimentoUpdateToOneWithWhereWithoutPedidoInput, RecebimentoUpdateWithoutPedidoInput>, RecebimentoUncheckedUpdateWithoutPedidoInput>
  }

  export type DevolucaoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<DevolucaoCreateWithoutPedidoInput, DevolucaoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: DevolucaoCreateOrConnectWithoutPedidoInput
    upsert?: DevolucaoUpsertWithoutPedidoInput
    disconnect?: DevolucaoWhereInput | boolean
    delete?: DevolucaoWhereInput | boolean
    connect?: DevolucaoWhereUniqueInput
    update?: XOR<XOR<DevolucaoUpdateToOneWithWhereWithoutPedidoInput, DevolucaoUpdateWithoutPedidoInput>, DevolucaoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemMaterialUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemMaterialCreateWithoutPedidoInput, ItemMaterialUncheckedCreateWithoutPedidoInput> | ItemMaterialCreateWithoutPedidoInput[] | ItemMaterialUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemMaterialCreateOrConnectWithoutPedidoInput | ItemMaterialCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemMaterialUpsertWithWhereUniqueWithoutPedidoInput | ItemMaterialUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemMaterialCreateManyPedidoInputEnvelope
    set?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    disconnect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    delete?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    connect?: ItemMaterialWhereUniqueInput | ItemMaterialWhereUniqueInput[]
    update?: ItemMaterialUpdateWithWhereUniqueWithoutPedidoInput | ItemMaterialUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemMaterialUpdateManyWithWhereWithoutPedidoInput | ItemMaterialUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemMaterialScalarWhereInput | ItemMaterialScalarWhereInput[]
  }

  export type RecebimentoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<RecebimentoCreateWithoutPedidoInput, RecebimentoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: RecebimentoCreateOrConnectWithoutPedidoInput
    upsert?: RecebimentoUpsertWithoutPedidoInput
    disconnect?: RecebimentoWhereInput | boolean
    delete?: RecebimentoWhereInput | boolean
    connect?: RecebimentoWhereUniqueInput
    update?: XOR<XOR<RecebimentoUpdateToOneWithWhereWithoutPedidoInput, RecebimentoUpdateWithoutPedidoInput>, RecebimentoUncheckedUpdateWithoutPedidoInput>
  }

  export type DevolucaoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<DevolucaoCreateWithoutPedidoInput, DevolucaoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: DevolucaoCreateOrConnectWithoutPedidoInput
    upsert?: DevolucaoUpsertWithoutPedidoInput
    disconnect?: DevolucaoWhereInput | boolean
    delete?: DevolucaoWhereInput | boolean
    connect?: DevolucaoWhereUniqueInput
    update?: XOR<XOR<DevolucaoUpdateToOneWithWhereWithoutPedidoInput, DevolucaoUpdateWithoutPedidoInput>, DevolucaoUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutItensPedidoInput = {
    create?: XOR<PedidoCreateWithoutItensPedidoInput, PedidoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensPedidoInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensPedidoInput = {
    create?: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensPedidoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItensPedidoNestedInput = {
    create?: XOR<PedidoCreateWithoutItensPedidoInput, PedidoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensPedidoInput
    upsert?: PedidoUpsertWithoutItensPedidoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensPedidoInput, PedidoUpdateWithoutItensPedidoInput>, PedidoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensPedidoInput
    upsert?: ProdutoUpsertWithoutItensPedidoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensPedidoInput, ProdutoUpdateWithoutItensPedidoInput>, ProdutoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutItensMaterialInput = {
    create?: XOR<PedidoCreateWithoutItensMaterialInput, PedidoUncheckedCreateWithoutItensMaterialInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensMaterialInput
    connect?: PedidoWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutItensMaterialInput = {
    create?: XOR<MaterialCreateWithoutItensMaterialInput, MaterialUncheckedCreateWithoutItensMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutItensMaterialInput
    connect?: MaterialWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItensMaterialNestedInput = {
    create?: XOR<PedidoCreateWithoutItensMaterialInput, PedidoUncheckedCreateWithoutItensMaterialInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensMaterialInput
    upsert?: PedidoUpsertWithoutItensMaterialInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensMaterialInput, PedidoUpdateWithoutItensMaterialInput>, PedidoUncheckedUpdateWithoutItensMaterialInput>
  }

  export type MaterialUpdateOneRequiredWithoutItensMaterialNestedInput = {
    create?: XOR<MaterialCreateWithoutItensMaterialInput, MaterialUncheckedCreateWithoutItensMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutItensMaterialInput
    upsert?: MaterialUpsertWithoutItensMaterialInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutItensMaterialInput, MaterialUpdateWithoutItensMaterialInput>, MaterialUncheckedUpdateWithoutItensMaterialInput>
  }

  export type PedidoCreateNestedOneWithoutRecebimentoInput = {
    create?: XOR<PedidoCreateWithoutRecebimentoInput, PedidoUncheckedCreateWithoutRecebimentoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutRecebimentoInput
    connect?: PedidoWhereUniqueInput
  }

  export type CostureiraCreateNestedOneWithoutRecebimentosInput = {
    create?: XOR<CostureiraCreateWithoutRecebimentosInput, CostureiraUncheckedCreateWithoutRecebimentosInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutRecebimentosInput
    connect?: CostureiraWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutRecebimentoNestedInput = {
    create?: XOR<PedidoCreateWithoutRecebimentoInput, PedidoUncheckedCreateWithoutRecebimentoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutRecebimentoInput
    upsert?: PedidoUpsertWithoutRecebimentoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutRecebimentoInput, PedidoUpdateWithoutRecebimentoInput>, PedidoUncheckedUpdateWithoutRecebimentoInput>
  }

  export type CostureiraUpdateOneRequiredWithoutRecebimentosNestedInput = {
    create?: XOR<CostureiraCreateWithoutRecebimentosInput, CostureiraUncheckedCreateWithoutRecebimentosInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutRecebimentosInput
    upsert?: CostureiraUpsertWithoutRecebimentosInput
    connect?: CostureiraWhereUniqueInput
    update?: XOR<XOR<CostureiraUpdateToOneWithWhereWithoutRecebimentosInput, CostureiraUpdateWithoutRecebimentosInput>, CostureiraUncheckedUpdateWithoutRecebimentosInput>
  }

  export type PedidoCreateNestedOneWithoutDevolucaoInput = {
    create?: XOR<PedidoCreateWithoutDevolucaoInput, PedidoUncheckedCreateWithoutDevolucaoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutDevolucaoInput
    connect?: PedidoWhereUniqueInput
  }

  export type CostureiraCreateNestedOneWithoutDevolucoesInput = {
    create?: XOR<CostureiraCreateWithoutDevolucoesInput, CostureiraUncheckedCreateWithoutDevolucoesInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutDevolucoesInput
    connect?: CostureiraWhereUniqueInput
  }

  export type ItemDevolucaoCreateNestedManyWithoutDevolucaoInput = {
    create?: XOR<ItemDevolucaoCreateWithoutDevolucaoInput, ItemDevolucaoUncheckedCreateWithoutDevolucaoInput> | ItemDevolucaoCreateWithoutDevolucaoInput[] | ItemDevolucaoUncheckedCreateWithoutDevolucaoInput[]
    connectOrCreate?: ItemDevolucaoCreateOrConnectWithoutDevolucaoInput | ItemDevolucaoCreateOrConnectWithoutDevolucaoInput[]
    createMany?: ItemDevolucaoCreateManyDevolucaoInputEnvelope
    connect?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
  }

  export type ItemDevolucaoUncheckedCreateNestedManyWithoutDevolucaoInput = {
    create?: XOR<ItemDevolucaoCreateWithoutDevolucaoInput, ItemDevolucaoUncheckedCreateWithoutDevolucaoInput> | ItemDevolucaoCreateWithoutDevolucaoInput[] | ItemDevolucaoUncheckedCreateWithoutDevolucaoInput[]
    connectOrCreate?: ItemDevolucaoCreateOrConnectWithoutDevolucaoInput | ItemDevolucaoCreateOrConnectWithoutDevolucaoInput[]
    createMany?: ItemDevolucaoCreateManyDevolucaoInputEnvelope
    connect?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
  }

  export type PedidoUpdateOneRequiredWithoutDevolucaoNestedInput = {
    create?: XOR<PedidoCreateWithoutDevolucaoInput, PedidoUncheckedCreateWithoutDevolucaoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutDevolucaoInput
    upsert?: PedidoUpsertWithoutDevolucaoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutDevolucaoInput, PedidoUpdateWithoutDevolucaoInput>, PedidoUncheckedUpdateWithoutDevolucaoInput>
  }

  export type CostureiraUpdateOneRequiredWithoutDevolucoesNestedInput = {
    create?: XOR<CostureiraCreateWithoutDevolucoesInput, CostureiraUncheckedCreateWithoutDevolucoesInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutDevolucoesInput
    upsert?: CostureiraUpsertWithoutDevolucoesInput
    connect?: CostureiraWhereUniqueInput
    update?: XOR<XOR<CostureiraUpdateToOneWithWhereWithoutDevolucoesInput, CostureiraUpdateWithoutDevolucoesInput>, CostureiraUncheckedUpdateWithoutDevolucoesInput>
  }

  export type ItemDevolucaoUpdateManyWithoutDevolucaoNestedInput = {
    create?: XOR<ItemDevolucaoCreateWithoutDevolucaoInput, ItemDevolucaoUncheckedCreateWithoutDevolucaoInput> | ItemDevolucaoCreateWithoutDevolucaoInput[] | ItemDevolucaoUncheckedCreateWithoutDevolucaoInput[]
    connectOrCreate?: ItemDevolucaoCreateOrConnectWithoutDevolucaoInput | ItemDevolucaoCreateOrConnectWithoutDevolucaoInput[]
    upsert?: ItemDevolucaoUpsertWithWhereUniqueWithoutDevolucaoInput | ItemDevolucaoUpsertWithWhereUniqueWithoutDevolucaoInput[]
    createMany?: ItemDevolucaoCreateManyDevolucaoInputEnvelope
    set?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    disconnect?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    delete?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    connect?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    update?: ItemDevolucaoUpdateWithWhereUniqueWithoutDevolucaoInput | ItemDevolucaoUpdateWithWhereUniqueWithoutDevolucaoInput[]
    updateMany?: ItemDevolucaoUpdateManyWithWhereWithoutDevolucaoInput | ItemDevolucaoUpdateManyWithWhereWithoutDevolucaoInput[]
    deleteMany?: ItemDevolucaoScalarWhereInput | ItemDevolucaoScalarWhereInput[]
  }

  export type ItemDevolucaoUncheckedUpdateManyWithoutDevolucaoNestedInput = {
    create?: XOR<ItemDevolucaoCreateWithoutDevolucaoInput, ItemDevolucaoUncheckedCreateWithoutDevolucaoInput> | ItemDevolucaoCreateWithoutDevolucaoInput[] | ItemDevolucaoUncheckedCreateWithoutDevolucaoInput[]
    connectOrCreate?: ItemDevolucaoCreateOrConnectWithoutDevolucaoInput | ItemDevolucaoCreateOrConnectWithoutDevolucaoInput[]
    upsert?: ItemDevolucaoUpsertWithWhereUniqueWithoutDevolucaoInput | ItemDevolucaoUpsertWithWhereUniqueWithoutDevolucaoInput[]
    createMany?: ItemDevolucaoCreateManyDevolucaoInputEnvelope
    set?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    disconnect?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    delete?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    connect?: ItemDevolucaoWhereUniqueInput | ItemDevolucaoWhereUniqueInput[]
    update?: ItemDevolucaoUpdateWithWhereUniqueWithoutDevolucaoInput | ItemDevolucaoUpdateWithWhereUniqueWithoutDevolucaoInput[]
    updateMany?: ItemDevolucaoUpdateManyWithWhereWithoutDevolucaoInput | ItemDevolucaoUpdateManyWithWhereWithoutDevolucaoInput[]
    deleteMany?: ItemDevolucaoScalarWhereInput | ItemDevolucaoScalarWhereInput[]
  }

  export type DevolucaoCreateNestedOneWithoutItensDevolucaoInput = {
    create?: XOR<DevolucaoCreateWithoutItensDevolucaoInput, DevolucaoUncheckedCreateWithoutItensDevolucaoInput>
    connectOrCreate?: DevolucaoCreateOrConnectWithoutItensDevolucaoInput
    connect?: DevolucaoWhereUniqueInput
  }

  export type DevolucaoUpdateOneRequiredWithoutItensDevolucaoNestedInput = {
    create?: XOR<DevolucaoCreateWithoutItensDevolucaoInput, DevolucaoUncheckedCreateWithoutItensDevolucaoInput>
    connectOrCreate?: DevolucaoCreateOrConnectWithoutItensDevolucaoInput
    upsert?: DevolucaoUpsertWithoutItensDevolucaoInput
    connect?: DevolucaoWhereUniqueInput
    update?: XOR<XOR<DevolucaoUpdateToOneWithWhereWithoutItensDevolucaoInput, DevolucaoUpdateWithoutItensDevolucaoInput>, DevolucaoUncheckedUpdateWithoutItensDevolucaoInput>
  }

  export type CostureiraCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<CostureiraCreateWithoutPagamentosInput, CostureiraUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutPagamentosInput
    connect?: CostureiraWhereUniqueInput
  }

  export type ItemPagamentoCreateNestedManyWithoutPagamentoInput = {
    create?: XOR<ItemPagamentoCreateWithoutPagamentoInput, ItemPagamentoUncheckedCreateWithoutPagamentoInput> | ItemPagamentoCreateWithoutPagamentoInput[] | ItemPagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: ItemPagamentoCreateOrConnectWithoutPagamentoInput | ItemPagamentoCreateOrConnectWithoutPagamentoInput[]
    createMany?: ItemPagamentoCreateManyPagamentoInputEnvelope
    connect?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
  }

  export type ItemPagamentoUncheckedCreateNestedManyWithoutPagamentoInput = {
    create?: XOR<ItemPagamentoCreateWithoutPagamentoInput, ItemPagamentoUncheckedCreateWithoutPagamentoInput> | ItemPagamentoCreateWithoutPagamentoInput[] | ItemPagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: ItemPagamentoCreateOrConnectWithoutPagamentoInput | ItemPagamentoCreateOrConnectWithoutPagamentoInput[]
    createMany?: ItemPagamentoCreateManyPagamentoInputEnvelope
    connect?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
  }

  export type CostureiraUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<CostureiraCreateWithoutPagamentosInput, CostureiraUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: CostureiraCreateOrConnectWithoutPagamentosInput
    upsert?: CostureiraUpsertWithoutPagamentosInput
    connect?: CostureiraWhereUniqueInput
    update?: XOR<XOR<CostureiraUpdateToOneWithWhereWithoutPagamentosInput, CostureiraUpdateWithoutPagamentosInput>, CostureiraUncheckedUpdateWithoutPagamentosInput>
  }

  export type ItemPagamentoUpdateManyWithoutPagamentoNestedInput = {
    create?: XOR<ItemPagamentoCreateWithoutPagamentoInput, ItemPagamentoUncheckedCreateWithoutPagamentoInput> | ItemPagamentoCreateWithoutPagamentoInput[] | ItemPagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: ItemPagamentoCreateOrConnectWithoutPagamentoInput | ItemPagamentoCreateOrConnectWithoutPagamentoInput[]
    upsert?: ItemPagamentoUpsertWithWhereUniqueWithoutPagamentoInput | ItemPagamentoUpsertWithWhereUniqueWithoutPagamentoInput[]
    createMany?: ItemPagamentoCreateManyPagamentoInputEnvelope
    set?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    disconnect?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    delete?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    connect?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    update?: ItemPagamentoUpdateWithWhereUniqueWithoutPagamentoInput | ItemPagamentoUpdateWithWhereUniqueWithoutPagamentoInput[]
    updateMany?: ItemPagamentoUpdateManyWithWhereWithoutPagamentoInput | ItemPagamentoUpdateManyWithWhereWithoutPagamentoInput[]
    deleteMany?: ItemPagamentoScalarWhereInput | ItemPagamentoScalarWhereInput[]
  }

  export type ItemPagamentoUncheckedUpdateManyWithoutPagamentoNestedInput = {
    create?: XOR<ItemPagamentoCreateWithoutPagamentoInput, ItemPagamentoUncheckedCreateWithoutPagamentoInput> | ItemPagamentoCreateWithoutPagamentoInput[] | ItemPagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: ItemPagamentoCreateOrConnectWithoutPagamentoInput | ItemPagamentoCreateOrConnectWithoutPagamentoInput[]
    upsert?: ItemPagamentoUpsertWithWhereUniqueWithoutPagamentoInput | ItemPagamentoUpsertWithWhereUniqueWithoutPagamentoInput[]
    createMany?: ItemPagamentoCreateManyPagamentoInputEnvelope
    set?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    disconnect?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    delete?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    connect?: ItemPagamentoWhereUniqueInput | ItemPagamentoWhereUniqueInput[]
    update?: ItemPagamentoUpdateWithWhereUniqueWithoutPagamentoInput | ItemPagamentoUpdateWithWhereUniqueWithoutPagamentoInput[]
    updateMany?: ItemPagamentoUpdateManyWithWhereWithoutPagamentoInput | ItemPagamentoUpdateManyWithWhereWithoutPagamentoInput[]
    deleteMany?: ItemPagamentoScalarWhereInput | ItemPagamentoScalarWhereInput[]
  }

  export type PagamentoCreateNestedOneWithoutItensPagamentoInput = {
    create?: XOR<PagamentoCreateWithoutItensPagamentoInput, PagamentoUncheckedCreateWithoutItensPagamentoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutItensPagamentoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type PagamentoUpdateOneRequiredWithoutItensPagamentoNestedInput = {
    create?: XOR<PagamentoCreateWithoutItensPagamentoInput, PagamentoUncheckedCreateWithoutItensPagamentoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutItensPagamentoInput
    upsert?: PagamentoUpsertWithoutItensPagamentoInput
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutItensPagamentoInput, PagamentoUpdateWithoutItensPagamentoInput>, PagamentoUncheckedUpdateWithoutItensPagamentoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[]
    notIn?: $Enums.StatusPedido[]
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[]
    notIn?: $Enums.StatusPedido[]
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutCostureiraInput = {
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutCostureiraInput = {
    id?: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialUncheckedCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoUncheckedCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutCostureiraInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutCostureiraInput, PedidoUncheckedCreateWithoutCostureiraInput>
  }

  export type PedidoCreateManyCostureiraInputEnvelope = {
    data: PedidoCreateManyCostureiraInput | PedidoCreateManyCostureiraInput[]
  }

  export type RecebimentoCreateWithoutCostureiraInput = {
    dataRecebimento?: Date | string
    observacao?: string | null
    pedido: PedidoCreateNestedOneWithoutRecebimentoInput
  }

  export type RecebimentoUncheckedCreateWithoutCostureiraInput = {
    id?: number
    pedidoId: number
    dataRecebimento?: Date | string
    observacao?: string | null
  }

  export type RecebimentoCreateOrConnectWithoutCostureiraInput = {
    where: RecebimentoWhereUniqueInput
    create: XOR<RecebimentoCreateWithoutCostureiraInput, RecebimentoUncheckedCreateWithoutCostureiraInput>
  }

  export type RecebimentoCreateManyCostureiraInputEnvelope = {
    data: RecebimentoCreateManyCostureiraInput | RecebimentoCreateManyCostureiraInput[]
  }

  export type DevolucaoCreateWithoutCostureiraInput = {
    dataDevolucao?: Date | string
    observacao?: string | null
    pedido: PedidoCreateNestedOneWithoutDevolucaoInput
    itensDevolucao?: ItemDevolucaoCreateNestedManyWithoutDevolucaoInput
  }

  export type DevolucaoUncheckedCreateWithoutCostureiraInput = {
    id?: number
    pedidoId: number
    dataDevolucao?: Date | string
    observacao?: string | null
    itensDevolucao?: ItemDevolucaoUncheckedCreateNestedManyWithoutDevolucaoInput
  }

  export type DevolucaoCreateOrConnectWithoutCostureiraInput = {
    where: DevolucaoWhereUniqueInput
    create: XOR<DevolucaoCreateWithoutCostureiraInput, DevolucaoUncheckedCreateWithoutCostureiraInput>
  }

  export type DevolucaoCreateManyCostureiraInputEnvelope = {
    data: DevolucaoCreateManyCostureiraInput | DevolucaoCreateManyCostureiraInput[]
  }

  export type PagamentoCreateWithoutCostureiraInput = {
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
    itensPagamento?: ItemPagamentoCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateWithoutCostureiraInput = {
    id?: number
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
    itensPagamento?: ItemPagamentoUncheckedCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoCreateOrConnectWithoutCostureiraInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutCostureiraInput, PagamentoUncheckedCreateWithoutCostureiraInput>
  }

  export type PagamentoCreateManyCostureiraInputEnvelope = {
    data: PagamentoCreateManyCostureiraInput | PagamentoCreateManyCostureiraInput[]
  }

  export type PedidoUpsertWithWhereUniqueWithoutCostureiraInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutCostureiraInput, PedidoUncheckedUpdateWithoutCostureiraInput>
    create: XOR<PedidoCreateWithoutCostureiraInput, PedidoUncheckedCreateWithoutCostureiraInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutCostureiraInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutCostureiraInput, PedidoUncheckedUpdateWithoutCostureiraInput>
  }

  export type PedidoUpdateManyWithWhereWithoutCostureiraInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutCostureiraInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    costureiraId?: IntFilter<"Pedido"> | number
    dataEnvio?: DateTimeFilter<"Pedido"> | Date | string
    dataPrevisao?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    observacao?: StringNullableFilter<"Pedido"> | string | null
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
  }

  export type RecebimentoUpsertWithWhereUniqueWithoutCostureiraInput = {
    where: RecebimentoWhereUniqueInput
    update: XOR<RecebimentoUpdateWithoutCostureiraInput, RecebimentoUncheckedUpdateWithoutCostureiraInput>
    create: XOR<RecebimentoCreateWithoutCostureiraInput, RecebimentoUncheckedCreateWithoutCostureiraInput>
  }

  export type RecebimentoUpdateWithWhereUniqueWithoutCostureiraInput = {
    where: RecebimentoWhereUniqueInput
    data: XOR<RecebimentoUpdateWithoutCostureiraInput, RecebimentoUncheckedUpdateWithoutCostureiraInput>
  }

  export type RecebimentoUpdateManyWithWhereWithoutCostureiraInput = {
    where: RecebimentoScalarWhereInput
    data: XOR<RecebimentoUpdateManyMutationInput, RecebimentoUncheckedUpdateManyWithoutCostureiraInput>
  }

  export type RecebimentoScalarWhereInput = {
    AND?: RecebimentoScalarWhereInput | RecebimentoScalarWhereInput[]
    OR?: RecebimentoScalarWhereInput[]
    NOT?: RecebimentoScalarWhereInput | RecebimentoScalarWhereInput[]
    id?: IntFilter<"Recebimento"> | number
    pedidoId?: IntFilter<"Recebimento"> | number
    costureiraId?: IntFilter<"Recebimento"> | number
    dataRecebimento?: DateTimeFilter<"Recebimento"> | Date | string
    observacao?: StringNullableFilter<"Recebimento"> | string | null
  }

  export type DevolucaoUpsertWithWhereUniqueWithoutCostureiraInput = {
    where: DevolucaoWhereUniqueInput
    update: XOR<DevolucaoUpdateWithoutCostureiraInput, DevolucaoUncheckedUpdateWithoutCostureiraInput>
    create: XOR<DevolucaoCreateWithoutCostureiraInput, DevolucaoUncheckedCreateWithoutCostureiraInput>
  }

  export type DevolucaoUpdateWithWhereUniqueWithoutCostureiraInput = {
    where: DevolucaoWhereUniqueInput
    data: XOR<DevolucaoUpdateWithoutCostureiraInput, DevolucaoUncheckedUpdateWithoutCostureiraInput>
  }

  export type DevolucaoUpdateManyWithWhereWithoutCostureiraInput = {
    where: DevolucaoScalarWhereInput
    data: XOR<DevolucaoUpdateManyMutationInput, DevolucaoUncheckedUpdateManyWithoutCostureiraInput>
  }

  export type DevolucaoScalarWhereInput = {
    AND?: DevolucaoScalarWhereInput | DevolucaoScalarWhereInput[]
    OR?: DevolucaoScalarWhereInput[]
    NOT?: DevolucaoScalarWhereInput | DevolucaoScalarWhereInput[]
    id?: IntFilter<"Devolucao"> | number
    pedidoId?: IntFilter<"Devolucao"> | number
    costureiraId?: IntFilter<"Devolucao"> | number
    dataDevolucao?: DateTimeFilter<"Devolucao"> | Date | string
    observacao?: StringNullableFilter<"Devolucao"> | string | null
  }

  export type PagamentoUpsertWithWhereUniqueWithoutCostureiraInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutCostureiraInput, PagamentoUncheckedUpdateWithoutCostureiraInput>
    create: XOR<PagamentoCreateWithoutCostureiraInput, PagamentoUncheckedCreateWithoutCostureiraInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutCostureiraInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutCostureiraInput, PagamentoUncheckedUpdateWithoutCostureiraInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutCostureiraInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutCostureiraInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    costureiraId?: IntFilter<"Pagamento"> | number
    dataPagamento?: DateTimeFilter<"Pagamento"> | Date | string
    valorTotal?: FloatFilter<"Pagamento"> | number
    observacao?: StringNullableFilter<"Pagamento"> | string | null
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    quantidade: number
    valorUnitario: number
    pedido: PedidoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    id?: number
    pedidoId: number
    quantidade: number
    valorUnitario: number
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    valorUnitario?: FloatFilter<"ItemPedido"> | number
  }

  export type ItemMaterialCreateWithoutMaterialInput = {
    quantidade: number
    devolvido?: number
    pedido: PedidoCreateNestedOneWithoutItensMaterialInput
  }

  export type ItemMaterialUncheckedCreateWithoutMaterialInput = {
    id?: number
    pedidoId: number
    quantidade: number
    devolvido?: number
  }

  export type ItemMaterialCreateOrConnectWithoutMaterialInput = {
    where: ItemMaterialWhereUniqueInput
    create: XOR<ItemMaterialCreateWithoutMaterialInput, ItemMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ItemMaterialCreateManyMaterialInputEnvelope = {
    data: ItemMaterialCreateManyMaterialInput | ItemMaterialCreateManyMaterialInput[]
  }

  export type ItemMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ItemMaterialWhereUniqueInput
    update: XOR<ItemMaterialUpdateWithoutMaterialInput, ItemMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<ItemMaterialCreateWithoutMaterialInput, ItemMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ItemMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ItemMaterialWhereUniqueInput
    data: XOR<ItemMaterialUpdateWithoutMaterialInput, ItemMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type ItemMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: ItemMaterialScalarWhereInput
    data: XOR<ItemMaterialUpdateManyMutationInput, ItemMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ItemMaterialScalarWhereInput = {
    AND?: ItemMaterialScalarWhereInput | ItemMaterialScalarWhereInput[]
    OR?: ItemMaterialScalarWhereInput[]
    NOT?: ItemMaterialScalarWhereInput | ItemMaterialScalarWhereInput[]
    id?: IntFilter<"ItemMaterial"> | number
    pedidoId?: IntFilter<"ItemMaterial"> | number
    materialId?: IntFilter<"ItemMaterial"> | number
    quantidade?: FloatFilter<"ItemMaterial"> | number
    devolvido?: FloatFilter<"ItemMaterial"> | number
  }

  export type CostureiraCreateWithoutPedidosInput = {
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    recebimentos?: RecebimentoCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    recebimentos?: RecebimentoUncheckedCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoUncheckedCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraCreateOrConnectWithoutPedidosInput = {
    where: CostureiraWhereUniqueInput
    create: XOR<CostureiraCreateWithoutPedidosInput, CostureiraUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    quantidade: number
    valorUnitario: number
    produto: ProdutoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    produtoId: number
    quantidade: number
    valorUnitario: number
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
  }

  export type ItemMaterialCreateWithoutPedidoInput = {
    quantidade: number
    devolvido?: number
    material: MaterialCreateNestedOneWithoutItensMaterialInput
  }

  export type ItemMaterialUncheckedCreateWithoutPedidoInput = {
    id?: number
    materialId: number
    quantidade: number
    devolvido?: number
  }

  export type ItemMaterialCreateOrConnectWithoutPedidoInput = {
    where: ItemMaterialWhereUniqueInput
    create: XOR<ItemMaterialCreateWithoutPedidoInput, ItemMaterialUncheckedCreateWithoutPedidoInput>
  }

  export type ItemMaterialCreateManyPedidoInputEnvelope = {
    data: ItemMaterialCreateManyPedidoInput | ItemMaterialCreateManyPedidoInput[]
  }

  export type RecebimentoCreateWithoutPedidoInput = {
    dataRecebimento?: Date | string
    observacao?: string | null
    costureira: CostureiraCreateNestedOneWithoutRecebimentosInput
  }

  export type RecebimentoUncheckedCreateWithoutPedidoInput = {
    id?: number
    costureiraId: number
    dataRecebimento?: Date | string
    observacao?: string | null
  }

  export type RecebimentoCreateOrConnectWithoutPedidoInput = {
    where: RecebimentoWhereUniqueInput
    create: XOR<RecebimentoCreateWithoutPedidoInput, RecebimentoUncheckedCreateWithoutPedidoInput>
  }

  export type DevolucaoCreateWithoutPedidoInput = {
    dataDevolucao?: Date | string
    observacao?: string | null
    costureira: CostureiraCreateNestedOneWithoutDevolucoesInput
    itensDevolucao?: ItemDevolucaoCreateNestedManyWithoutDevolucaoInput
  }

  export type DevolucaoUncheckedCreateWithoutPedidoInput = {
    id?: number
    costureiraId: number
    dataDevolucao?: Date | string
    observacao?: string | null
    itensDevolucao?: ItemDevolucaoUncheckedCreateNestedManyWithoutDevolucaoInput
  }

  export type DevolucaoCreateOrConnectWithoutPedidoInput = {
    where: DevolucaoWhereUniqueInput
    create: XOR<DevolucaoCreateWithoutPedidoInput, DevolucaoUncheckedCreateWithoutPedidoInput>
  }

  export type CostureiraUpsertWithoutPedidosInput = {
    update: XOR<CostureiraUpdateWithoutPedidosInput, CostureiraUncheckedUpdateWithoutPedidosInput>
    create: XOR<CostureiraCreateWithoutPedidosInput, CostureiraUncheckedCreateWithoutPedidosInput>
    where?: CostureiraWhereInput
  }

  export type CostureiraUpdateToOneWithWhereWithoutPedidosInput = {
    where?: CostureiraWhereInput
    data: XOR<CostureiraUpdateWithoutPedidosInput, CostureiraUncheckedUpdateWithoutPedidosInput>
  }

  export type CostureiraUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    recebimentos?: RecebimentoUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUpdateManyWithoutCostureiraNestedInput
  }

  export type CostureiraUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    recebimentos?: RecebimentoUncheckedUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUncheckedUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutCostureiraNestedInput
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ItemMaterialUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemMaterialWhereUniqueInput
    update: XOR<ItemMaterialUpdateWithoutPedidoInput, ItemMaterialUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemMaterialCreateWithoutPedidoInput, ItemMaterialUncheckedCreateWithoutPedidoInput>
  }

  export type ItemMaterialUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemMaterialWhereUniqueInput
    data: XOR<ItemMaterialUpdateWithoutPedidoInput, ItemMaterialUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemMaterialUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemMaterialScalarWhereInput
    data: XOR<ItemMaterialUpdateManyMutationInput, ItemMaterialUncheckedUpdateManyWithoutPedidoInput>
  }

  export type RecebimentoUpsertWithoutPedidoInput = {
    update: XOR<RecebimentoUpdateWithoutPedidoInput, RecebimentoUncheckedUpdateWithoutPedidoInput>
    create: XOR<RecebimentoCreateWithoutPedidoInput, RecebimentoUncheckedCreateWithoutPedidoInput>
    where?: RecebimentoWhereInput
  }

  export type RecebimentoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: RecebimentoWhereInput
    data: XOR<RecebimentoUpdateWithoutPedidoInput, RecebimentoUncheckedUpdateWithoutPedidoInput>
  }

  export type RecebimentoUpdateWithoutPedidoInput = {
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    costureira?: CostureiraUpdateOneRequiredWithoutRecebimentosNestedInput
  }

  export type RecebimentoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DevolucaoUpsertWithoutPedidoInput = {
    update: XOR<DevolucaoUpdateWithoutPedidoInput, DevolucaoUncheckedUpdateWithoutPedidoInput>
    create: XOR<DevolucaoCreateWithoutPedidoInput, DevolucaoUncheckedCreateWithoutPedidoInput>
    where?: DevolucaoWhereInput
  }

  export type DevolucaoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: DevolucaoWhereInput
    data: XOR<DevolucaoUpdateWithoutPedidoInput, DevolucaoUncheckedUpdateWithoutPedidoInput>
  }

  export type DevolucaoUpdateWithoutPedidoInput = {
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    costureira?: CostureiraUpdateOneRequiredWithoutDevolucoesNestedInput
    itensDevolucao?: ItemDevolucaoUpdateManyWithoutDevolucaoNestedInput
  }

  export type DevolucaoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    itensDevolucao?: ItemDevolucaoUncheckedUpdateManyWithoutDevolucaoNestedInput
  }

  export type PedidoCreateWithoutItensPedidoInput = {
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    costureira: CostureiraCreateNestedOneWithoutPedidosInput
    itensMaterial?: ItemMaterialCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItensPedidoInput = {
    id?: number
    costureiraId: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensMaterial?: ItemMaterialUncheckedCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoUncheckedCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutItensPedidoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensPedidoInput, PedidoUncheckedCreateWithoutItensPedidoInput>
  }

  export type ProdutoCreateWithoutItensPedidoInput = {
    nome: string
    descricao?: string | null
    valorUnitario: number
    ativo?: boolean
  }

  export type ProdutoUncheckedCreateWithoutItensPedidoInput = {
    id?: number
    nome: string
    descricao?: string | null
    valorUnitario: number
    ativo?: boolean
  }

  export type ProdutoCreateOrConnectWithoutItensPedidoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
  }

  export type PedidoUpsertWithoutItensPedidoInput = {
    update: XOR<PedidoUpdateWithoutItensPedidoInput, PedidoUncheckedUpdateWithoutItensPedidoInput>
    create: XOR<PedidoCreateWithoutItensPedidoInput, PedidoUncheckedCreateWithoutItensPedidoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensPedidoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensPedidoInput, PedidoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type PedidoUpdateWithoutItensPedidoInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    costureira?: CostureiraUpdateOneRequiredWithoutPedidosNestedInput
    itensMaterial?: ItemMaterialUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensMaterial?: ItemMaterialUncheckedUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUncheckedUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type ProdutoUpsertWithoutItensPedidoInput = {
    update: XOR<ProdutoUpdateWithoutItensPedidoInput, ProdutoUncheckedUpdateWithoutItensPedidoInput>
    create: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensPedidoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensPedidoInput, ProdutoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type ProdutoUpdateWithoutItensPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProdutoUncheckedUpdateWithoutItensPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoCreateWithoutItensMaterialInput = {
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    costureira: CostureiraCreateNestedOneWithoutPedidosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItensMaterialInput = {
    id?: number
    costureiraId: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoUncheckedCreateNestedOneWithoutPedidoInput
    devolucao?: DevolucaoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutItensMaterialInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensMaterialInput, PedidoUncheckedCreateWithoutItensMaterialInput>
  }

  export type MaterialCreateWithoutItensMaterialInput = {
    nome: string
    descricao?: string | null
    unidadeMedida: string
    ativo?: boolean
  }

  export type MaterialUncheckedCreateWithoutItensMaterialInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidadeMedida: string
    ativo?: boolean
  }

  export type MaterialCreateOrConnectWithoutItensMaterialInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutItensMaterialInput, MaterialUncheckedCreateWithoutItensMaterialInput>
  }

  export type PedidoUpsertWithoutItensMaterialInput = {
    update: XOR<PedidoUpdateWithoutItensMaterialInput, PedidoUncheckedUpdateWithoutItensMaterialInput>
    create: XOR<PedidoCreateWithoutItensMaterialInput, PedidoUncheckedCreateWithoutItensMaterialInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensMaterialInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensMaterialInput, PedidoUncheckedUpdateWithoutItensMaterialInput>
  }

  export type PedidoUpdateWithoutItensMaterialInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    costureira?: CostureiraUpdateOneRequiredWithoutPedidosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUncheckedUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type MaterialUpsertWithoutItensMaterialInput = {
    update: XOR<MaterialUpdateWithoutItensMaterialInput, MaterialUncheckedUpdateWithoutItensMaterialInput>
    create: XOR<MaterialCreateWithoutItensMaterialInput, MaterialUncheckedCreateWithoutItensMaterialInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutItensMaterialInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutItensMaterialInput, MaterialUncheckedUpdateWithoutItensMaterialInput>
  }

  export type MaterialUpdateWithoutItensMaterialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaterialUncheckedUpdateWithoutItensMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidadeMedida?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoCreateWithoutRecebimentoInput = {
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    costureira: CostureiraCreateNestedOneWithoutPedidosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialCreateNestedManyWithoutPedidoInput
    devolucao?: DevolucaoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutRecebimentoInput = {
    id?: number
    costureiraId: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialUncheckedCreateNestedManyWithoutPedidoInput
    devolucao?: DevolucaoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutRecebimentoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutRecebimentoInput, PedidoUncheckedCreateWithoutRecebimentoInput>
  }

  export type CostureiraCreateWithoutRecebimentosInput = {
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraUncheckedCreateWithoutRecebimentosInput = {
    id?: number
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoUncheckedCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoUncheckedCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraCreateOrConnectWithoutRecebimentosInput = {
    where: CostureiraWhereUniqueInput
    create: XOR<CostureiraCreateWithoutRecebimentosInput, CostureiraUncheckedCreateWithoutRecebimentosInput>
  }

  export type PedidoUpsertWithoutRecebimentoInput = {
    update: XOR<PedidoUpdateWithoutRecebimentoInput, PedidoUncheckedUpdateWithoutRecebimentoInput>
    create: XOR<PedidoCreateWithoutRecebimentoInput, PedidoUncheckedCreateWithoutRecebimentoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutRecebimentoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutRecebimentoInput, PedidoUncheckedUpdateWithoutRecebimentoInput>
  }

  export type PedidoUpdateWithoutRecebimentoInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    costureira?: CostureiraUpdateOneRequiredWithoutPedidosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUpdateManyWithoutPedidoNestedInput
    devolucao?: DevolucaoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutRecebimentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUncheckedUpdateManyWithoutPedidoNestedInput
    devolucao?: DevolucaoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type CostureiraUpsertWithoutRecebimentosInput = {
    update: XOR<CostureiraUpdateWithoutRecebimentosInput, CostureiraUncheckedUpdateWithoutRecebimentosInput>
    create: XOR<CostureiraCreateWithoutRecebimentosInput, CostureiraUncheckedCreateWithoutRecebimentosInput>
    where?: CostureiraWhereInput
  }

  export type CostureiraUpdateToOneWithWhereWithoutRecebimentosInput = {
    where?: CostureiraWhereInput
    data: XOR<CostureiraUpdateWithoutRecebimentosInput, CostureiraUncheckedUpdateWithoutRecebimentosInput>
  }

  export type CostureiraUpdateWithoutRecebimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUpdateManyWithoutCostureiraNestedInput
  }

  export type CostureiraUncheckedUpdateWithoutRecebimentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUncheckedUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUncheckedUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutCostureiraNestedInput
  }

  export type PedidoCreateWithoutDevolucaoInput = {
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    costureira: CostureiraCreateNestedOneWithoutPedidosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutDevolucaoInput = {
    id?: number
    costureiraId: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    itensMaterial?: ItemMaterialUncheckedCreateNestedManyWithoutPedidoInput
    recebimento?: RecebimentoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutDevolucaoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutDevolucaoInput, PedidoUncheckedCreateWithoutDevolucaoInput>
  }

  export type CostureiraCreateWithoutDevolucoesInput = {
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoCreateNestedManyWithoutCostureiraInput
    recebimentos?: RecebimentoCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraUncheckedCreateWithoutDevolucoesInput = {
    id?: number
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoUncheckedCreateNestedManyWithoutCostureiraInput
    recebimentos?: RecebimentoUncheckedCreateNestedManyWithoutCostureiraInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraCreateOrConnectWithoutDevolucoesInput = {
    where: CostureiraWhereUniqueInput
    create: XOR<CostureiraCreateWithoutDevolucoesInput, CostureiraUncheckedCreateWithoutDevolucoesInput>
  }

  export type ItemDevolucaoCreateWithoutDevolucaoInput = {
    materialId: number
    quantidade: number
  }

  export type ItemDevolucaoUncheckedCreateWithoutDevolucaoInput = {
    id?: number
    materialId: number
    quantidade: number
  }

  export type ItemDevolucaoCreateOrConnectWithoutDevolucaoInput = {
    where: ItemDevolucaoWhereUniqueInput
    create: XOR<ItemDevolucaoCreateWithoutDevolucaoInput, ItemDevolucaoUncheckedCreateWithoutDevolucaoInput>
  }

  export type ItemDevolucaoCreateManyDevolucaoInputEnvelope = {
    data: ItemDevolucaoCreateManyDevolucaoInput | ItemDevolucaoCreateManyDevolucaoInput[]
  }

  export type PedidoUpsertWithoutDevolucaoInput = {
    update: XOR<PedidoUpdateWithoutDevolucaoInput, PedidoUncheckedUpdateWithoutDevolucaoInput>
    create: XOR<PedidoCreateWithoutDevolucaoInput, PedidoUncheckedCreateWithoutDevolucaoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutDevolucaoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutDevolucaoInput, PedidoUncheckedUpdateWithoutDevolucaoInput>
  }

  export type PedidoUpdateWithoutDevolucaoInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    costureira?: CostureiraUpdateOneRequiredWithoutPedidosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutDevolucaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUncheckedUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type CostureiraUpsertWithoutDevolucoesInput = {
    update: XOR<CostureiraUpdateWithoutDevolucoesInput, CostureiraUncheckedUpdateWithoutDevolucoesInput>
    create: XOR<CostureiraCreateWithoutDevolucoesInput, CostureiraUncheckedCreateWithoutDevolucoesInput>
    where?: CostureiraWhereInput
  }

  export type CostureiraUpdateToOneWithWhereWithoutDevolucoesInput = {
    where?: CostureiraWhereInput
    data: XOR<CostureiraUpdateWithoutDevolucoesInput, CostureiraUncheckedUpdateWithoutDevolucoesInput>
  }

  export type CostureiraUpdateWithoutDevolucoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUpdateManyWithoutCostureiraNestedInput
    recebimentos?: RecebimentoUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUpdateManyWithoutCostureiraNestedInput
  }

  export type CostureiraUncheckedUpdateWithoutDevolucoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUncheckedUpdateManyWithoutCostureiraNestedInput
    recebimentos?: RecebimentoUncheckedUpdateManyWithoutCostureiraNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutCostureiraNestedInput
  }

  export type ItemDevolucaoUpsertWithWhereUniqueWithoutDevolucaoInput = {
    where: ItemDevolucaoWhereUniqueInput
    update: XOR<ItemDevolucaoUpdateWithoutDevolucaoInput, ItemDevolucaoUncheckedUpdateWithoutDevolucaoInput>
    create: XOR<ItemDevolucaoCreateWithoutDevolucaoInput, ItemDevolucaoUncheckedCreateWithoutDevolucaoInput>
  }

  export type ItemDevolucaoUpdateWithWhereUniqueWithoutDevolucaoInput = {
    where: ItemDevolucaoWhereUniqueInput
    data: XOR<ItemDevolucaoUpdateWithoutDevolucaoInput, ItemDevolucaoUncheckedUpdateWithoutDevolucaoInput>
  }

  export type ItemDevolucaoUpdateManyWithWhereWithoutDevolucaoInput = {
    where: ItemDevolucaoScalarWhereInput
    data: XOR<ItemDevolucaoUpdateManyMutationInput, ItemDevolucaoUncheckedUpdateManyWithoutDevolucaoInput>
  }

  export type ItemDevolucaoScalarWhereInput = {
    AND?: ItemDevolucaoScalarWhereInput | ItemDevolucaoScalarWhereInput[]
    OR?: ItemDevolucaoScalarWhereInput[]
    NOT?: ItemDevolucaoScalarWhereInput | ItemDevolucaoScalarWhereInput[]
    id?: IntFilter<"ItemDevolucao"> | number
    devolucaoId?: IntFilter<"ItemDevolucao"> | number
    materialId?: IntFilter<"ItemDevolucao"> | number
    quantidade?: FloatFilter<"ItemDevolucao"> | number
  }

  export type DevolucaoCreateWithoutItensDevolucaoInput = {
    dataDevolucao?: Date | string
    observacao?: string | null
    pedido: PedidoCreateNestedOneWithoutDevolucaoInput
    costureira: CostureiraCreateNestedOneWithoutDevolucoesInput
  }

  export type DevolucaoUncheckedCreateWithoutItensDevolucaoInput = {
    id?: number
    pedidoId: number
    costureiraId: number
    dataDevolucao?: Date | string
    observacao?: string | null
  }

  export type DevolucaoCreateOrConnectWithoutItensDevolucaoInput = {
    where: DevolucaoWhereUniqueInput
    create: XOR<DevolucaoCreateWithoutItensDevolucaoInput, DevolucaoUncheckedCreateWithoutItensDevolucaoInput>
  }

  export type DevolucaoUpsertWithoutItensDevolucaoInput = {
    update: XOR<DevolucaoUpdateWithoutItensDevolucaoInput, DevolucaoUncheckedUpdateWithoutItensDevolucaoInput>
    create: XOR<DevolucaoCreateWithoutItensDevolucaoInput, DevolucaoUncheckedCreateWithoutItensDevolucaoInput>
    where?: DevolucaoWhereInput
  }

  export type DevolucaoUpdateToOneWithWhereWithoutItensDevolucaoInput = {
    where?: DevolucaoWhereInput
    data: XOR<DevolucaoUpdateWithoutItensDevolucaoInput, DevolucaoUncheckedUpdateWithoutItensDevolucaoInput>
  }

  export type DevolucaoUpdateWithoutItensDevolucaoInput = {
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutDevolucaoNestedInput
    costureira?: CostureiraUpdateOneRequiredWithoutDevolucoesNestedInput
  }

  export type DevolucaoUncheckedUpdateWithoutItensDevolucaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CostureiraCreateWithoutPagamentosInput = {
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoCreateNestedManyWithoutCostureiraInput
    recebimentos?: RecebimentoCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraUncheckedCreateWithoutPagamentosInput = {
    id?: number
    nome: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    cpf?: string | null
    dataCadastro?: Date | string
    ativo?: boolean
    pedidos?: PedidoUncheckedCreateNestedManyWithoutCostureiraInput
    recebimentos?: RecebimentoUncheckedCreateNestedManyWithoutCostureiraInput
    devolucoes?: DevolucaoUncheckedCreateNestedManyWithoutCostureiraInput
  }

  export type CostureiraCreateOrConnectWithoutPagamentosInput = {
    where: CostureiraWhereUniqueInput
    create: XOR<CostureiraCreateWithoutPagamentosInput, CostureiraUncheckedCreateWithoutPagamentosInput>
  }

  export type ItemPagamentoCreateWithoutPagamentoInput = {
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
  }

  export type ItemPagamentoUncheckedCreateWithoutPagamentoInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
  }

  export type ItemPagamentoCreateOrConnectWithoutPagamentoInput = {
    where: ItemPagamentoWhereUniqueInput
    create: XOR<ItemPagamentoCreateWithoutPagamentoInput, ItemPagamentoUncheckedCreateWithoutPagamentoInput>
  }

  export type ItemPagamentoCreateManyPagamentoInputEnvelope = {
    data: ItemPagamentoCreateManyPagamentoInput | ItemPagamentoCreateManyPagamentoInput[]
  }

  export type CostureiraUpsertWithoutPagamentosInput = {
    update: XOR<CostureiraUpdateWithoutPagamentosInput, CostureiraUncheckedUpdateWithoutPagamentosInput>
    create: XOR<CostureiraCreateWithoutPagamentosInput, CostureiraUncheckedCreateWithoutPagamentosInput>
    where?: CostureiraWhereInput
  }

  export type CostureiraUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: CostureiraWhereInput
    data: XOR<CostureiraUpdateWithoutPagamentosInput, CostureiraUncheckedUpdateWithoutPagamentosInput>
  }

  export type CostureiraUpdateWithoutPagamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUpdateManyWithoutCostureiraNestedInput
    recebimentos?: RecebimentoUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUpdateManyWithoutCostureiraNestedInput
  }

  export type CostureiraUncheckedUpdateWithoutPagamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    pedidos?: PedidoUncheckedUpdateManyWithoutCostureiraNestedInput
    recebimentos?: RecebimentoUncheckedUpdateManyWithoutCostureiraNestedInput
    devolucoes?: DevolucaoUncheckedUpdateManyWithoutCostureiraNestedInput
  }

  export type ItemPagamentoUpsertWithWhereUniqueWithoutPagamentoInput = {
    where: ItemPagamentoWhereUniqueInput
    update: XOR<ItemPagamentoUpdateWithoutPagamentoInput, ItemPagamentoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<ItemPagamentoCreateWithoutPagamentoInput, ItemPagamentoUncheckedCreateWithoutPagamentoInput>
  }

  export type ItemPagamentoUpdateWithWhereUniqueWithoutPagamentoInput = {
    where: ItemPagamentoWhereUniqueInput
    data: XOR<ItemPagamentoUpdateWithoutPagamentoInput, ItemPagamentoUncheckedUpdateWithoutPagamentoInput>
  }

  export type ItemPagamentoUpdateManyWithWhereWithoutPagamentoInput = {
    where: ItemPagamentoScalarWhereInput
    data: XOR<ItemPagamentoUpdateManyMutationInput, ItemPagamentoUncheckedUpdateManyWithoutPagamentoInput>
  }

  export type ItemPagamentoScalarWhereInput = {
    AND?: ItemPagamentoScalarWhereInput | ItemPagamentoScalarWhereInput[]
    OR?: ItemPagamentoScalarWhereInput[]
    NOT?: ItemPagamentoScalarWhereInput | ItemPagamentoScalarWhereInput[]
    id?: IntFilter<"ItemPagamento"> | number
    pagamentoId?: IntFilter<"ItemPagamento"> | number
    pedidoId?: IntFilter<"ItemPagamento"> | number
    produtoId?: IntFilter<"ItemPagamento"> | number
    quantidade?: IntFilter<"ItemPagamento"> | number
    valorUnitario?: FloatFilter<"ItemPagamento"> | number
    valorTotal?: FloatFilter<"ItemPagamento"> | number
  }

  export type PagamentoCreateWithoutItensPagamentoInput = {
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
    costureira: CostureiraCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateWithoutItensPagamentoInput = {
    id?: number
    costureiraId: number
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
  }

  export type PagamentoCreateOrConnectWithoutItensPagamentoInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutItensPagamentoInput, PagamentoUncheckedCreateWithoutItensPagamentoInput>
  }

  export type PagamentoUpsertWithoutItensPagamentoInput = {
    update: XOR<PagamentoUpdateWithoutItensPagamentoInput, PagamentoUncheckedUpdateWithoutItensPagamentoInput>
    create: XOR<PagamentoCreateWithoutItensPagamentoInput, PagamentoUncheckedCreateWithoutItensPagamentoInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutItensPagamentoInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutItensPagamentoInput, PagamentoUncheckedUpdateWithoutItensPagamentoInput>
  }

  export type PagamentoUpdateWithoutItensPagamentoInput = {
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    costureira?: CostureiraUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutItensPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    costureiraId?: IntFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoCreateManyCostureiraInput = {
    id?: number
    dataEnvio?: Date | string
    dataPrevisao?: Date | string | null
    observacao?: string | null
    status?: $Enums.StatusPedido
  }

  export type RecebimentoCreateManyCostureiraInput = {
    id?: number
    pedidoId: number
    dataRecebimento?: Date | string
    observacao?: string | null
  }

  export type DevolucaoCreateManyCostureiraInput = {
    id?: number
    pedidoId: number
    dataDevolucao?: Date | string
    observacao?: string | null
  }

  export type PagamentoCreateManyCostureiraInput = {
    id?: number
    dataPagamento?: Date | string
    valorTotal: number
    observacao?: string | null
  }

  export type PedidoUpdateWithoutCostureiraInput = {
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensPedido?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    itensMaterial?: ItemMaterialUncheckedUpdateManyWithoutPedidoNestedInput
    recebimento?: RecebimentoUncheckedUpdateOneWithoutPedidoNestedInput
    devolucao?: DevolucaoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPrevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
  }

  export type RecebimentoUpdateWithoutCostureiraInput = {
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutRecebimentoNestedInput
  }

  export type RecebimentoUncheckedUpdateWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecebimentoUncheckedUpdateManyWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    dataRecebimento?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DevolucaoUpdateWithoutCostureiraInput = {
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutDevolucaoNestedInput
    itensDevolucao?: ItemDevolucaoUpdateManyWithoutDevolucaoNestedInput
  }

  export type DevolucaoUncheckedUpdateWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    itensDevolucao?: ItemDevolucaoUncheckedUpdateManyWithoutDevolucaoNestedInput
  }

  export type DevolucaoUncheckedUpdateManyWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagamentoUpdateWithoutCostureiraInput = {
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    itensPagamento?: ItemPagamentoUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    itensPagamento?: ItemPagamentoUncheckedUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateManyWithoutCostureiraInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoCreateManyProdutoInput = {
    id?: number
    pedidoId: number
    quantidade: number
    valorUnitario: number
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialCreateManyMaterialInput = {
    id?: number
    pedidoId: number
    quantidade: number
    devolvido?: number
  }

  export type ItemMaterialUpdateWithoutMaterialInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensMaterialNestedInput
  }

  export type ItemMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    produtoId: number
    quantidade: number
    valorUnitario: number
  }

  export type ItemMaterialCreateManyPedidoInput = {
    id?: number
    materialId: number
    quantidade: number
    devolvido?: number
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialUpdateWithoutPedidoInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
    material?: MaterialUpdateOneRequiredWithoutItensMaterialNestedInput
  }

  export type ItemMaterialUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemMaterialUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    devolvido?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemDevolucaoCreateManyDevolucaoInput = {
    id?: number
    materialId: number
    quantidade: number
  }

  export type ItemDevolucaoUpdateWithoutDevolucaoInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemDevolucaoUncheckedUpdateWithoutDevolucaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemDevolucaoUncheckedUpdateManyWithoutDevolucaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPagamentoCreateManyPagamentoInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
  }

  export type ItemPagamentoUpdateWithoutPagamentoInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPagamentoUncheckedUpdateWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPagamentoUncheckedUpdateManyWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}