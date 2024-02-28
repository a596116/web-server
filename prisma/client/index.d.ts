
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model LineUser
 * 
 */
export type LineUser = $Result.DefaultSelection<Prisma.$LineUserPayload>
/**
 * Model LineUserArticle
 * 
 */
export type LineUserArticle = $Result.DefaultSelection<Prisma.$LineUserArticlePayload>
/**
 * Model LineUserCategory
 * 
 */
export type LineUserCategory = $Result.DefaultSelection<Prisma.$LineUserCategoryPayload>
/**
 * Model NikeList
 * 
 */
export type NikeList = $Result.DefaultSelection<Prisma.$NikeListPayload>
/**
 * Model HypeBeastList
 * 
 */
export type HypeBeastList = $Result.DefaultSelection<Prisma.$HypeBeastListPayload>
/**
 * Model IthomeList
 * 
 */
export type IthomeList = $Result.DefaultSelection<Prisma.$IthomeListPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs>;

  /**
   * `prisma.lineUser`: Exposes CRUD operations for the **LineUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineUsers
    * const lineUsers = await prisma.lineUser.findMany()
    * ```
    */
  get lineUser(): Prisma.LineUserDelegate<ExtArgs>;

  /**
   * `prisma.lineUserArticle`: Exposes CRUD operations for the **LineUserArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineUserArticles
    * const lineUserArticles = await prisma.lineUserArticle.findMany()
    * ```
    */
  get lineUserArticle(): Prisma.LineUserArticleDelegate<ExtArgs>;

  /**
   * `prisma.lineUserCategory`: Exposes CRUD operations for the **LineUserCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineUserCategories
    * const lineUserCategories = await prisma.lineUserCategory.findMany()
    * ```
    */
  get lineUserCategory(): Prisma.LineUserCategoryDelegate<ExtArgs>;

  /**
   * `prisma.nikeList`: Exposes CRUD operations for the **NikeList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NikeLists
    * const nikeLists = await prisma.nikeList.findMany()
    * ```
    */
  get nikeList(): Prisma.NikeListDelegate<ExtArgs>;

  /**
   * `prisma.hypeBeastList`: Exposes CRUD operations for the **HypeBeastList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HypeBeastLists
    * const hypeBeastLists = await prisma.hypeBeastList.findMany()
    * ```
    */
  get hypeBeastList(): Prisma.HypeBeastListDelegate<ExtArgs>;

  /**
   * `prisma.ithomeList`: Exposes CRUD operations for the **IthomeList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IthomeLists
    * const ithomeLists = await prisma.ithomeList.findMany()
    * ```
    */
  get ithomeList(): Prisma.IthomeListDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    UserRole: 'UserRole',
    RolePermission: 'RolePermission',
    LineUser: 'LineUser',
    LineUserArticle: 'LineUserArticle',
    LineUserCategory: 'LineUserCategory',
    NikeList: 'NikeList',
    HypeBeastList: 'HypeBeastList',
    IthomeList: 'IthomeList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'permission' | 'userRole' | 'rolePermission' | 'lineUser' | 'lineUserArticle' | 'lineUserCategory' | 'nikeList' | 'hypeBeastList' | 'ithomeList'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>,
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>,
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      LineUser: {
        payload: Prisma.$LineUserPayload<ExtArgs>
        fields: Prisma.LineUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>
          }
          findFirst: {
            args: Prisma.LineUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>
          }
          findMany: {
            args: Prisma.LineUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>[]
          }
          create: {
            args: Prisma.LineUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>
          }
          createMany: {
            args: Prisma.LineUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LineUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>
          }
          update: {
            args: Prisma.LineUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>
          }
          deleteMany: {
            args: Prisma.LineUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LineUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LineUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserPayload>
          }
          aggregate: {
            args: Prisma.LineUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLineUser>
          }
          groupBy: {
            args: Prisma.LineUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LineUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineUserCountArgs<ExtArgs>,
            result: $Utils.Optional<LineUserCountAggregateOutputType> | number
          }
        }
      }
      LineUserArticle: {
        payload: Prisma.$LineUserArticlePayload<ExtArgs>
        fields: Prisma.LineUserArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineUserArticleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineUserArticleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>
          }
          findFirst: {
            args: Prisma.LineUserArticleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineUserArticleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>
          }
          findMany: {
            args: Prisma.LineUserArticleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>[]
          }
          create: {
            args: Prisma.LineUserArticleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>
          }
          createMany: {
            args: Prisma.LineUserArticleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LineUserArticleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>
          }
          update: {
            args: Prisma.LineUserArticleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>
          }
          deleteMany: {
            args: Prisma.LineUserArticleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LineUserArticleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LineUserArticleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserArticlePayload>
          }
          aggregate: {
            args: Prisma.LineUserArticleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLineUserArticle>
          }
          groupBy: {
            args: Prisma.LineUserArticleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LineUserArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineUserArticleCountArgs<ExtArgs>,
            result: $Utils.Optional<LineUserArticleCountAggregateOutputType> | number
          }
        }
      }
      LineUserCategory: {
        payload: Prisma.$LineUserCategoryPayload<ExtArgs>
        fields: Prisma.LineUserCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineUserCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineUserCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>
          }
          findFirst: {
            args: Prisma.LineUserCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineUserCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>
          }
          findMany: {
            args: Prisma.LineUserCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>[]
          }
          create: {
            args: Prisma.LineUserCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>
          }
          createMany: {
            args: Prisma.LineUserCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LineUserCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>
          }
          update: {
            args: Prisma.LineUserCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>
          }
          deleteMany: {
            args: Prisma.LineUserCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LineUserCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LineUserCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LineUserCategoryPayload>
          }
          aggregate: {
            args: Prisma.LineUserCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLineUserCategory>
          }
          groupBy: {
            args: Prisma.LineUserCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LineUserCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineUserCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<LineUserCategoryCountAggregateOutputType> | number
          }
        }
      }
      NikeList: {
        payload: Prisma.$NikeListPayload<ExtArgs>
        fields: Prisma.NikeListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NikeListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NikeListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>
          }
          findFirst: {
            args: Prisma.NikeListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NikeListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>
          }
          findMany: {
            args: Prisma.NikeListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>[]
          }
          create: {
            args: Prisma.NikeListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>
          }
          createMany: {
            args: Prisma.NikeListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NikeListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>
          }
          update: {
            args: Prisma.NikeListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>
          }
          deleteMany: {
            args: Prisma.NikeListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NikeListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NikeListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NikeListPayload>
          }
          aggregate: {
            args: Prisma.NikeListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNikeList>
          }
          groupBy: {
            args: Prisma.NikeListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NikeListGroupByOutputType>[]
          }
          count: {
            args: Prisma.NikeListCountArgs<ExtArgs>,
            result: $Utils.Optional<NikeListCountAggregateOutputType> | number
          }
        }
      }
      HypeBeastList: {
        payload: Prisma.$HypeBeastListPayload<ExtArgs>
        fields: Prisma.HypeBeastListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HypeBeastListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HypeBeastListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>
          }
          findFirst: {
            args: Prisma.HypeBeastListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HypeBeastListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>
          }
          findMany: {
            args: Prisma.HypeBeastListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>[]
          }
          create: {
            args: Prisma.HypeBeastListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>
          }
          createMany: {
            args: Prisma.HypeBeastListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HypeBeastListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>
          }
          update: {
            args: Prisma.HypeBeastListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>
          }
          deleteMany: {
            args: Prisma.HypeBeastListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HypeBeastListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HypeBeastListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HypeBeastListPayload>
          }
          aggregate: {
            args: Prisma.HypeBeastListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHypeBeastList>
          }
          groupBy: {
            args: Prisma.HypeBeastListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HypeBeastListGroupByOutputType>[]
          }
          count: {
            args: Prisma.HypeBeastListCountArgs<ExtArgs>,
            result: $Utils.Optional<HypeBeastListCountAggregateOutputType> | number
          }
        }
      }
      IthomeList: {
        payload: Prisma.$IthomeListPayload<ExtArgs>
        fields: Prisma.IthomeListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IthomeListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IthomeListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>
          }
          findFirst: {
            args: Prisma.IthomeListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IthomeListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>
          }
          findMany: {
            args: Prisma.IthomeListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>[]
          }
          create: {
            args: Prisma.IthomeListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>
          }
          createMany: {
            args: Prisma.IthomeListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IthomeListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>
          }
          update: {
            args: Prisma.IthomeListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>
          }
          deleteMany: {
            args: Prisma.IthomeListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IthomeListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IthomeListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IthomeListPayload>
          }
          aggregate: {
            args: Prisma.IthomeListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIthomeList>
          }
          groupBy: {
            args: Prisma.IthomeListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IthomeListGroupByOutputType>[]
          }
          count: {
            args: Prisma.IthomeListCountArgs<ExtArgs>,
            result: $Utils.Optional<IthomeListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserRole: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | UserCountOutputTypeCountUserRoleArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }



  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    RolePermission: number
    UserRole: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | RoleCountOutputTypeCountRolePermissionArgs
    UserRole?: boolean | RoleCountOutputTypeCountUserRoleArgs
  }

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }



  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    Role: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role?: boolean | PermissionCountOutputTypeCountRoleArgs
  }

  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }



  /**
   * Count Type LineUserCountOutputType
   */

  export type LineUserCountOutputType = {
    category: number
    Article: number
  }

  export type LineUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | LineUserCountOutputTypeCountCategoryArgs
    Article?: boolean | LineUserCountOutputTypeCountArticleArgs
  }

  // Custom InputTypes

  /**
   * LineUserCountOutputType without action
   */
  export type LineUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCountOutputType
     */
    select?: LineUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LineUserCountOutputType without action
   */
  export type LineUserCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineUserCategoryWhereInput
  }


  /**
   * LineUserCountOutputType without action
   */
  export type LineUserCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineUserArticleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    account: string | null
    password: string | null
    avatar: string | null
    status: boolean | null
    gender: string | null
    birthday: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    account: string | null
    password: string | null
    avatar: string | null
    status: boolean | null
    gender: string | null
    birthday: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    account: number
    password: number
    avatar: number
    status: number
    gender: number
    birthday: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    account?: true
    password?: true
    avatar?: true
    status?: true
    gender?: true
    birthday?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    account?: true
    password?: true
    avatar?: true
    status?: true
    gender?: true
    birthday?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    account?: true
    password?: true
    avatar?: true
    status?: true
    gender?: true
    birthday?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    account: string
    password: string
    avatar: string
    status: boolean
    gender: string
    birthday: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    account?: boolean
    password?: boolean
    avatar?: boolean
    status?: boolean
    gender?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    account?: boolean
    password?: boolean
    avatar?: boolean
    status?: boolean
    gender?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      account: string
      password: string
      avatar: string
      status: boolean
      gender: string
      birthday: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserRole<T extends User$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly account: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.UserRole
   */
  export type User$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    creator: string | null
    remark: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    creator: string | null
    remark: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    creator: number
    remark: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    creator?: true
    remark?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    creator?: true
    remark?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    creator?: true
    remark?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    creator: string
    remark: string | null
    created_at: Date
    updated_at: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creator?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
    RolePermission?: boolean | Role$RolePermissionArgs<ExtArgs>
    UserRole?: boolean | Role$UserRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    creator?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | Role$RolePermissionArgs<ExtArgs>
    UserRole?: boolean | Role$UserRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      creator: string
      remark: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    RolePermission<T extends Role$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Role$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserRole<T extends Role$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly creator: FieldRef<"Role", 'String'>
    readonly remark: FieldRef<"Role", 'String'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly updated_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.RolePermission
   */
  export type Role$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }


  /**
   * Role.UserRole
   */
  export type Role$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    creator: string | null
    remark: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    creator: string | null
    remark: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    creator: number
    remark: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    creator?: true
    remark?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    creator?: true
    remark?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    creator?: true
    remark?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    creator: string
    remark: string | null
    created_at: Date
    updated_at: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creator?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
    Role?: boolean | Permission$RoleArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    creator?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role?: boolean | Permission$RoleArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      Role: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      creator: string
      remark: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }


  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends PermissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Permissions.
     *     @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     *     @example
     *     // Create many Permissions
     *     const permission = await prisma.permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PermissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends PermissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends PermissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Role<T extends Permission$RoleArgs<ExtArgs> = {}>(args?: Subset<T, Permission$RoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly creator: FieldRef<"Permission", 'String'>
    readonly remark: FieldRef<"Permission", 'String'>
    readonly created_at: FieldRef<"Permission", 'DateTime'>
    readonly updated_at: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }


  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }


  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission.Role
   */
  export type Permission$RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }


  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
  }



  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    created_at: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    created_at: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    created_at: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    created_at?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    created_at?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    created_at?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    userId: number
    roleId: number
    created_at: Date
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    created_at?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }


  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleId: number
      created_at: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }


  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
    **/
    create<T extends UserRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserRoles.
     *     @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     *     @example
     *     // Create many UserRoles
     *     const userRole = await prisma.userRole.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
    **/
    delete<T extends UserRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
    **/
    upsert<T extends UserRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
    readonly created_at: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }


  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }


  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }


  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }


  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
  }



  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionSumAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    created_at?: true
    updated_at?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    created_at?: true
    updated_at?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: number
    roleId: number
    permissionId: number
    created_at: Date
    updated_at: Date
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }


  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      permissionId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }


  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RolePermissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RolePermission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RolePermissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RolePermissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
    **/
    create<T extends RolePermissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RolePermissions.
     *     @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     *     @example
     *     // Create many RolePermissions
     *     const rolePermission = await prisma.rolePermission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RolePermissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
    **/
    delete<T extends RolePermissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RolePermissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RolePermissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RolePermissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
    **/
    upsert<T extends RolePermissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>
    ): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RolePermission model
   */ 
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'Int'>
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
    readonly created_at: FieldRef<"RolePermission", 'DateTime'>
    readonly updated_at: FieldRef<"RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }


  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }


  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }


  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }


  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }


  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }


  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }


  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
  }


  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }


  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }


  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
  }


  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }



  /**
   * Model LineUser
   */

  export type AggregateLineUser = {
    _count: LineUserCountAggregateOutputType | null
    _min: LineUserMinAggregateOutputType | null
    _max: LineUserMaxAggregateOutputType | null
  }

  export type LineUserMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    pictureUrl: string | null
    status: boolean | null
    callback: string | null
    url: string | null
    type: string | null
    nike_broadcast: boolean | null
    hypebeast_broadcast: boolean | null
    ithome_broadcast: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LineUserMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    pictureUrl: string | null
    status: boolean | null
    callback: string | null
    url: string | null
    type: string | null
    nike_broadcast: boolean | null
    hypebeast_broadcast: boolean | null
    ithome_broadcast: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LineUserCountAggregateOutputType = {
    id: number
    displayName: number
    pictureUrl: number
    status: number
    callback: number
    url: number
    type: number
    nike_broadcast: number
    hypebeast_broadcast: number
    ithome_broadcast: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LineUserMinAggregateInputType = {
    id?: true
    displayName?: true
    pictureUrl?: true
    status?: true
    callback?: true
    url?: true
    type?: true
    nike_broadcast?: true
    hypebeast_broadcast?: true
    ithome_broadcast?: true
    created_at?: true
    updated_at?: true
  }

  export type LineUserMaxAggregateInputType = {
    id?: true
    displayName?: true
    pictureUrl?: true
    status?: true
    callback?: true
    url?: true
    type?: true
    nike_broadcast?: true
    hypebeast_broadcast?: true
    ithome_broadcast?: true
    created_at?: true
    updated_at?: true
  }

  export type LineUserCountAggregateInputType = {
    id?: true
    displayName?: true
    pictureUrl?: true
    status?: true
    callback?: true
    url?: true
    type?: true
    nike_broadcast?: true
    hypebeast_broadcast?: true
    ithome_broadcast?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LineUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineUser to aggregate.
     */
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     */
    orderBy?: LineUserOrderByWithRelationInput | LineUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineUsers
    **/
    _count?: true | LineUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineUserMaxAggregateInputType
  }

  export type GetLineUserAggregateType<T extends LineUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLineUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineUser[P]>
      : GetScalarType<T[P], AggregateLineUser[P]>
  }




  export type LineUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineUserWhereInput
    orderBy?: LineUserOrderByWithAggregationInput | LineUserOrderByWithAggregationInput[]
    by: LineUserScalarFieldEnum[] | LineUserScalarFieldEnum
    having?: LineUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineUserCountAggregateInputType | true
    _min?: LineUserMinAggregateInputType
    _max?: LineUserMaxAggregateInputType
  }

  export type LineUserGroupByOutputType = {
    id: string
    displayName: string | null
    pictureUrl: string | null
    status: boolean | null
    callback: string | null
    url: string | null
    type: string | null
    nike_broadcast: boolean | null
    hypebeast_broadcast: boolean | null
    ithome_broadcast: boolean | null
    created_at: Date
    updated_at: Date
    _count: LineUserCountAggregateOutputType | null
    _min: LineUserMinAggregateOutputType | null
    _max: LineUserMaxAggregateOutputType | null
  }

  type GetLineUserGroupByPayload<T extends LineUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineUserGroupByOutputType[P]>
            : GetScalarType<T[P], LineUserGroupByOutputType[P]>
        }
      >
    >


  export type LineUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    status?: boolean
    callback?: boolean
    url?: boolean
    type?: boolean
    nike_broadcast?: boolean
    hypebeast_broadcast?: boolean
    ithome_broadcast?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | LineUser$categoryArgs<ExtArgs>
    Article?: boolean | LineUser$ArticleArgs<ExtArgs>
    _count?: boolean | LineUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineUser"]>

  export type LineUserSelectScalar = {
    id?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    status?: boolean
    callback?: boolean
    url?: boolean
    type?: boolean
    nike_broadcast?: boolean
    hypebeast_broadcast?: boolean
    ithome_broadcast?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LineUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | LineUser$categoryArgs<ExtArgs>
    Article?: boolean | LineUser$ArticleArgs<ExtArgs>
    _count?: boolean | LineUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LineUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineUser"
    objects: {
      category: Prisma.$LineUserCategoryPayload<ExtArgs>[]
      Article: Prisma.$LineUserArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string | null
      pictureUrl: string | null
      status: boolean | null
      callback: string | null
      url: string | null
      type: string | null
      nike_broadcast: boolean | null
      hypebeast_broadcast: boolean | null
      ithome_broadcast: boolean | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lineUser"]>
    composites: {}
  }


  type LineUserGetPayload<S extends boolean | null | undefined | LineUserDefaultArgs> = $Result.GetResult<Prisma.$LineUserPayload, S>

  type LineUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LineUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LineUserCountAggregateInputType | true
    }

  export interface LineUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineUser'], meta: { name: 'LineUser' } }
    /**
     * Find zero or one LineUser that matches the filter.
     * @param {LineUserFindUniqueArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LineUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserFindUniqueArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LineUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LineUserFindUniqueOrThrowArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LineUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LineUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserFindFirstArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LineUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserFindFirstArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LineUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserFindFirstOrThrowArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LineUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LineUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineUsers
     * const lineUsers = await prisma.lineUser.findMany()
     * 
     * // Get first 10 LineUsers
     * const lineUsers = await prisma.lineUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineUserWithIdOnly = await prisma.lineUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LineUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LineUser.
     * @param {LineUserCreateArgs} args - Arguments to create a LineUser.
     * @example
     * // Create one LineUser
     * const LineUser = await prisma.lineUser.create({
     *   data: {
     *     // ... data to create a LineUser
     *   }
     * })
     * 
    **/
    create<T extends LineUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCreateArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LineUsers.
     *     @param {LineUserCreateManyArgs} args - Arguments to create many LineUsers.
     *     @example
     *     // Create many LineUsers
     *     const lineUser = await prisma.lineUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LineUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LineUser.
     * @param {LineUserDeleteArgs} args - Arguments to delete one LineUser.
     * @example
     * // Delete one LineUser
     * const LineUser = await prisma.lineUser.delete({
     *   where: {
     *     // ... filter to delete one LineUser
     *   }
     * })
     * 
    **/
    delete<T extends LineUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserDeleteArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LineUser.
     * @param {LineUserUpdateArgs} args - Arguments to update one LineUser.
     * @example
     * // Update one LineUser
     * const lineUser = await prisma.lineUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LineUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserUpdateArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LineUsers.
     * @param {LineUserDeleteManyArgs} args - Arguments to filter LineUsers to delete.
     * @example
     * // Delete a few LineUsers
     * const { count } = await prisma.lineUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LineUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineUsers
     * const lineUser = await prisma.lineUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LineUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LineUser.
     * @param {LineUserUpsertArgs} args - Arguments to update or create a LineUser.
     * @example
     * // Update or create a LineUser
     * const lineUser = await prisma.lineUser.upsert({
     *   create: {
     *     // ... data to create a LineUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineUser we want to update
     *   }
     * })
    **/
    upsert<T extends LineUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserUpsertArgs<ExtArgs>>
    ): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LineUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCountArgs} args - Arguments to filter LineUsers to count.
     * @example
     * // Count the number of LineUsers
     * const count = await prisma.lineUser.count({
     *   where: {
     *     // ... the filter for the LineUsers we want to count
     *   }
     * })
    **/
    count<T extends LineUserCountArgs>(
      args?: Subset<T, LineUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineUserAggregateArgs>(args: Subset<T, LineUserAggregateArgs>): Prisma.PrismaPromise<GetLineUserAggregateType<T>>

    /**
     * Group by LineUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserGroupByArgs} args - Group by arguments.
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
      T extends LineUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineUserGroupByArgs['orderBy'] }
        : { orderBy?: LineUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineUser model
   */
  readonly fields: LineUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends LineUser$categoryArgs<ExtArgs> = {}>(args?: Subset<T, LineUser$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    Article<T extends LineUser$ArticleArgs<ExtArgs> = {}>(args?: Subset<T, LineUser$ArticleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LineUser model
   */ 
  interface LineUserFieldRefs {
    readonly id: FieldRef<"LineUser", 'String'>
    readonly displayName: FieldRef<"LineUser", 'String'>
    readonly pictureUrl: FieldRef<"LineUser", 'String'>
    readonly status: FieldRef<"LineUser", 'Boolean'>
    readonly callback: FieldRef<"LineUser", 'String'>
    readonly url: FieldRef<"LineUser", 'String'>
    readonly type: FieldRef<"LineUser", 'String'>
    readonly nike_broadcast: FieldRef<"LineUser", 'Boolean'>
    readonly hypebeast_broadcast: FieldRef<"LineUser", 'Boolean'>
    readonly ithome_broadcast: FieldRef<"LineUser", 'Boolean'>
    readonly created_at: FieldRef<"LineUser", 'DateTime'>
    readonly updated_at: FieldRef<"LineUser", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LineUser findUnique
   */
  export type LineUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * Filter, which LineUser to fetch.
     */
    where: LineUserWhereUniqueInput
  }


  /**
   * LineUser findUniqueOrThrow
   */
  export type LineUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * Filter, which LineUser to fetch.
     */
    where: LineUserWhereUniqueInput
  }


  /**
   * LineUser findFirst
   */
  export type LineUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * Filter, which LineUser to fetch.
     */
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     */
    orderBy?: LineUserOrderByWithRelationInput | LineUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUsers.
     */
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUsers.
     */
    distinct?: LineUserScalarFieldEnum | LineUserScalarFieldEnum[]
  }


  /**
   * LineUser findFirstOrThrow
   */
  export type LineUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * Filter, which LineUser to fetch.
     */
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     */
    orderBy?: LineUserOrderByWithRelationInput | LineUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUsers.
     */
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUsers.
     */
    distinct?: LineUserScalarFieldEnum | LineUserScalarFieldEnum[]
  }


  /**
   * LineUser findMany
   */
  export type LineUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * Filter, which LineUsers to fetch.
     */
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     */
    orderBy?: LineUserOrderByWithRelationInput | LineUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineUsers.
     */
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     */
    skip?: number
    distinct?: LineUserScalarFieldEnum | LineUserScalarFieldEnum[]
  }


  /**
   * LineUser create
   */
  export type LineUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * The data needed to create a LineUser.
     */
    data: XOR<LineUserCreateInput, LineUserUncheckedCreateInput>
  }


  /**
   * LineUser createMany
   */
  export type LineUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineUsers.
     */
    data: LineUserCreateManyInput | LineUserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LineUser update
   */
  export type LineUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * The data needed to update a LineUser.
     */
    data: XOR<LineUserUpdateInput, LineUserUncheckedUpdateInput>
    /**
     * Choose, which LineUser to update.
     */
    where: LineUserWhereUniqueInput
  }


  /**
   * LineUser updateMany
   */
  export type LineUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineUsers.
     */
    data: XOR<LineUserUpdateManyMutationInput, LineUserUncheckedUpdateManyInput>
    /**
     * Filter which LineUsers to update
     */
    where?: LineUserWhereInput
  }


  /**
   * LineUser upsert
   */
  export type LineUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * The filter to search for the LineUser to update in case it exists.
     */
    where: LineUserWhereUniqueInput
    /**
     * In case the LineUser found by the `where` argument doesn't exist, create a new LineUser with this data.
     */
    create: XOR<LineUserCreateInput, LineUserUncheckedCreateInput>
    /**
     * In case the LineUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUserUpdateInput, LineUserUncheckedUpdateInput>
  }


  /**
   * LineUser delete
   */
  export type LineUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
    /**
     * Filter which LineUser to delete.
     */
    where: LineUserWhereUniqueInput
  }


  /**
   * LineUser deleteMany
   */
  export type LineUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineUsers to delete
     */
    where?: LineUserWhereInput
  }


  /**
   * LineUser.category
   */
  export type LineUser$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    where?: LineUserCategoryWhereInput
    orderBy?: LineUserCategoryOrderByWithRelationInput | LineUserCategoryOrderByWithRelationInput[]
    cursor?: LineUserCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineUserCategoryScalarFieldEnum | LineUserCategoryScalarFieldEnum[]
  }


  /**
   * LineUser.Article
   */
  export type LineUser$ArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    where?: LineUserArticleWhereInput
    orderBy?: LineUserArticleOrderByWithRelationInput | LineUserArticleOrderByWithRelationInput[]
    cursor?: LineUserArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineUserArticleScalarFieldEnum | LineUserArticleScalarFieldEnum[]
  }


  /**
   * LineUser without action
   */
  export type LineUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUser
     */
    select?: LineUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserInclude<ExtArgs> | null
  }



  /**
   * Model LineUserArticle
   */

  export type AggregateLineUserArticle = {
    _count: LineUserArticleCountAggregateOutputType | null
    _avg: LineUserArticleAvgAggregateOutputType | null
    _sum: LineUserArticleSumAggregateOutputType | null
    _min: LineUserArticleMinAggregateOutputType | null
    _max: LineUserArticleMaxAggregateOutputType | null
  }

  export type LineUserArticleAvgAggregateOutputType = {
    id: number | null
  }

  export type LineUserArticleSumAggregateOutputType = {
    id: number | null
  }

  export type LineUserArticleMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    authorId: string | null
  }

  export type LineUserArticleMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    authorId: string | null
  }

  export type LineUserArticleCountAggregateOutputType = {
    id: number
    url: number
    type: number
    created_at: number
    updated_at: number
    authorId: number
    _all: number
  }


  export type LineUserArticleAvgAggregateInputType = {
    id?: true
  }

  export type LineUserArticleSumAggregateInputType = {
    id?: true
  }

  export type LineUserArticleMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    created_at?: true
    updated_at?: true
    authorId?: true
  }

  export type LineUserArticleMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    created_at?: true
    updated_at?: true
    authorId?: true
  }

  export type LineUserArticleCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    created_at?: true
    updated_at?: true
    authorId?: true
    _all?: true
  }

  export type LineUserArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineUserArticle to aggregate.
     */
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     */
    orderBy?: LineUserArticleOrderByWithRelationInput | LineUserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineUserArticles
    **/
    _count?: true | LineUserArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineUserArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineUserArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineUserArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineUserArticleMaxAggregateInputType
  }

  export type GetLineUserArticleAggregateType<T extends LineUserArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateLineUserArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineUserArticle[P]>
      : GetScalarType<T[P], AggregateLineUserArticle[P]>
  }




  export type LineUserArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineUserArticleWhereInput
    orderBy?: LineUserArticleOrderByWithAggregationInput | LineUserArticleOrderByWithAggregationInput[]
    by: LineUserArticleScalarFieldEnum[] | LineUserArticleScalarFieldEnum
    having?: LineUserArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineUserArticleCountAggregateInputType | true
    _avg?: LineUserArticleAvgAggregateInputType
    _sum?: LineUserArticleSumAggregateInputType
    _min?: LineUserArticleMinAggregateInputType
    _max?: LineUserArticleMaxAggregateInputType
  }

  export type LineUserArticleGroupByOutputType = {
    id: number
    url: string
    type: string
    created_at: Date
    updated_at: Date
    authorId: string
    _count: LineUserArticleCountAggregateOutputType | null
    _avg: LineUserArticleAvgAggregateOutputType | null
    _sum: LineUserArticleSumAggregateOutputType | null
    _min: LineUserArticleMinAggregateOutputType | null
    _max: LineUserArticleMaxAggregateOutputType | null
  }

  type GetLineUserArticleGroupByPayload<T extends LineUserArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineUserArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineUserArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineUserArticleGroupByOutputType[P]>
            : GetScalarType<T[P], LineUserArticleGroupByOutputType[P]>
        }
      >
    >


  export type LineUserArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
    author?: boolean | LineUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineUserArticle"]>

  export type LineUserArticleSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
  }

  export type LineUserArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | LineUserDefaultArgs<ExtArgs>
  }


  export type $LineUserArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineUserArticle"
    objects: {
      author: Prisma.$LineUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      type: string
      created_at: Date
      updated_at: Date
      authorId: string
    }, ExtArgs["result"]["lineUserArticle"]>
    composites: {}
  }


  type LineUserArticleGetPayload<S extends boolean | null | undefined | LineUserArticleDefaultArgs> = $Result.GetResult<Prisma.$LineUserArticlePayload, S>

  type LineUserArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LineUserArticleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LineUserArticleCountAggregateInputType | true
    }

  export interface LineUserArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineUserArticle'], meta: { name: 'LineUserArticle' } }
    /**
     * Find zero or one LineUserArticle that matches the filter.
     * @param {LineUserArticleFindUniqueArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LineUserArticleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserArticleFindUniqueArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LineUserArticle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LineUserArticleFindUniqueOrThrowArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LineUserArticleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserArticleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LineUserArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleFindFirstArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LineUserArticleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserArticleFindFirstArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LineUserArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleFindFirstOrThrowArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LineUserArticleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserArticleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LineUserArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineUserArticles
     * const lineUserArticles = await prisma.lineUserArticle.findMany()
     * 
     * // Get first 10 LineUserArticles
     * const lineUserArticles = await prisma.lineUserArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineUserArticleWithIdOnly = await prisma.lineUserArticle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LineUserArticleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserArticleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LineUserArticle.
     * @param {LineUserArticleCreateArgs} args - Arguments to create a LineUserArticle.
     * @example
     * // Create one LineUserArticle
     * const LineUserArticle = await prisma.lineUserArticle.create({
     *   data: {
     *     // ... data to create a LineUserArticle
     *   }
     * })
     * 
    **/
    create<T extends LineUserArticleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserArticleCreateArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LineUserArticles.
     *     @param {LineUserArticleCreateManyArgs} args - Arguments to create many LineUserArticles.
     *     @example
     *     // Create many LineUserArticles
     *     const lineUserArticle = await prisma.lineUserArticle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LineUserArticleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserArticleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LineUserArticle.
     * @param {LineUserArticleDeleteArgs} args - Arguments to delete one LineUserArticle.
     * @example
     * // Delete one LineUserArticle
     * const LineUserArticle = await prisma.lineUserArticle.delete({
     *   where: {
     *     // ... filter to delete one LineUserArticle
     *   }
     * })
     * 
    **/
    delete<T extends LineUserArticleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserArticleDeleteArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LineUserArticle.
     * @param {LineUserArticleUpdateArgs} args - Arguments to update one LineUserArticle.
     * @example
     * // Update one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LineUserArticleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserArticleUpdateArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LineUserArticles.
     * @param {LineUserArticleDeleteManyArgs} args - Arguments to filter LineUserArticles to delete.
     * @example
     * // Delete a few LineUserArticles
     * const { count } = await prisma.lineUserArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LineUserArticleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserArticleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineUserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineUserArticles
     * const lineUserArticle = await prisma.lineUserArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LineUserArticleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserArticleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LineUserArticle.
     * @param {LineUserArticleUpsertArgs} args - Arguments to update or create a LineUserArticle.
     * @example
     * // Update or create a LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.upsert({
     *   create: {
     *     // ... data to create a LineUserArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineUserArticle we want to update
     *   }
     * })
    **/
    upsert<T extends LineUserArticleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserArticleUpsertArgs<ExtArgs>>
    ): Prisma__LineUserArticleClient<$Result.GetResult<Prisma.$LineUserArticlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LineUserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleCountArgs} args - Arguments to filter LineUserArticles to count.
     * @example
     * // Count the number of LineUserArticles
     * const count = await prisma.lineUserArticle.count({
     *   where: {
     *     // ... the filter for the LineUserArticles we want to count
     *   }
     * })
    **/
    count<T extends LineUserArticleCountArgs>(
      args?: Subset<T, LineUserArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineUserArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineUserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineUserArticleAggregateArgs>(args: Subset<T, LineUserArticleAggregateArgs>): Prisma.PrismaPromise<GetLineUserArticleAggregateType<T>>

    /**
     * Group by LineUserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleGroupByArgs} args - Group by arguments.
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
      T extends LineUserArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineUserArticleGroupByArgs['orderBy'] }
        : { orderBy?: LineUserArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineUserArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineUserArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineUserArticle model
   */
  readonly fields: LineUserArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineUserArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineUserArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends LineUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LineUserDefaultArgs<ExtArgs>>): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LineUserArticle model
   */ 
  interface LineUserArticleFieldRefs {
    readonly id: FieldRef<"LineUserArticle", 'Int'>
    readonly url: FieldRef<"LineUserArticle", 'String'>
    readonly type: FieldRef<"LineUserArticle", 'String'>
    readonly created_at: FieldRef<"LineUserArticle", 'DateTime'>
    readonly updated_at: FieldRef<"LineUserArticle", 'DateTime'>
    readonly authorId: FieldRef<"LineUserArticle", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LineUserArticle findUnique
   */
  export type LineUserArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * Filter, which LineUserArticle to fetch.
     */
    where: LineUserArticleWhereUniqueInput
  }


  /**
   * LineUserArticle findUniqueOrThrow
   */
  export type LineUserArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * Filter, which LineUserArticle to fetch.
     */
    where: LineUserArticleWhereUniqueInput
  }


  /**
   * LineUserArticle findFirst
   */
  export type LineUserArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * Filter, which LineUserArticle to fetch.
     */
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     */
    orderBy?: LineUserArticleOrderByWithRelationInput | LineUserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUserArticles.
     */
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUserArticles.
     */
    distinct?: LineUserArticleScalarFieldEnum | LineUserArticleScalarFieldEnum[]
  }


  /**
   * LineUserArticle findFirstOrThrow
   */
  export type LineUserArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * Filter, which LineUserArticle to fetch.
     */
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     */
    orderBy?: LineUserArticleOrderByWithRelationInput | LineUserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUserArticles.
     */
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUserArticles.
     */
    distinct?: LineUserArticleScalarFieldEnum | LineUserArticleScalarFieldEnum[]
  }


  /**
   * LineUserArticle findMany
   */
  export type LineUserArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * Filter, which LineUserArticles to fetch.
     */
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     */
    orderBy?: LineUserArticleOrderByWithRelationInput | LineUserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineUserArticles.
     */
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     */
    skip?: number
    distinct?: LineUserArticleScalarFieldEnum | LineUserArticleScalarFieldEnum[]
  }


  /**
   * LineUserArticle create
   */
  export type LineUserArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a LineUserArticle.
     */
    data: XOR<LineUserArticleCreateInput, LineUserArticleUncheckedCreateInput>
  }


  /**
   * LineUserArticle createMany
   */
  export type LineUserArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineUserArticles.
     */
    data: LineUserArticleCreateManyInput | LineUserArticleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LineUserArticle update
   */
  export type LineUserArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a LineUserArticle.
     */
    data: XOR<LineUserArticleUpdateInput, LineUserArticleUncheckedUpdateInput>
    /**
     * Choose, which LineUserArticle to update.
     */
    where: LineUserArticleWhereUniqueInput
  }


  /**
   * LineUserArticle updateMany
   */
  export type LineUserArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineUserArticles.
     */
    data: XOR<LineUserArticleUpdateManyMutationInput, LineUserArticleUncheckedUpdateManyInput>
    /**
     * Filter which LineUserArticles to update
     */
    where?: LineUserArticleWhereInput
  }


  /**
   * LineUserArticle upsert
   */
  export type LineUserArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the LineUserArticle to update in case it exists.
     */
    where: LineUserArticleWhereUniqueInput
    /**
     * In case the LineUserArticle found by the `where` argument doesn't exist, create a new LineUserArticle with this data.
     */
    create: XOR<LineUserArticleCreateInput, LineUserArticleUncheckedCreateInput>
    /**
     * In case the LineUserArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUserArticleUpdateInput, LineUserArticleUncheckedUpdateInput>
  }


  /**
   * LineUserArticle delete
   */
  export type LineUserArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
    /**
     * Filter which LineUserArticle to delete.
     */
    where: LineUserArticleWhereUniqueInput
  }


  /**
   * LineUserArticle deleteMany
   */
  export type LineUserArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineUserArticles to delete
     */
    where?: LineUserArticleWhereInput
  }


  /**
   * LineUserArticle without action
   */
  export type LineUserArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     */
    select?: LineUserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserArticleInclude<ExtArgs> | null
  }



  /**
   * Model LineUserCategory
   */

  export type AggregateLineUserCategory = {
    _count: LineUserCategoryCountAggregateOutputType | null
    _min: LineUserCategoryMinAggregateOutputType | null
    _max: LineUserCategoryMaxAggregateOutputType | null
  }

  export type LineUserCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    authorId: string | null
  }

  export type LineUserCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    authorId: string | null
  }

  export type LineUserCategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    authorId: number
    _all: number
  }


  export type LineUserCategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    authorId?: true
  }

  export type LineUserCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    authorId?: true
  }

  export type LineUserCategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    authorId?: true
    _all?: true
  }

  export type LineUserCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineUserCategory to aggregate.
     */
    where?: LineUserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserCategories to fetch.
     */
    orderBy?: LineUserCategoryOrderByWithRelationInput | LineUserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineUserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineUserCategories
    **/
    _count?: true | LineUserCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineUserCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineUserCategoryMaxAggregateInputType
  }

  export type GetLineUserCategoryAggregateType<T extends LineUserCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLineUserCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineUserCategory[P]>
      : GetScalarType<T[P], AggregateLineUserCategory[P]>
  }




  export type LineUserCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineUserCategoryWhereInput
    orderBy?: LineUserCategoryOrderByWithAggregationInput | LineUserCategoryOrderByWithAggregationInput[]
    by: LineUserCategoryScalarFieldEnum[] | LineUserCategoryScalarFieldEnum
    having?: LineUserCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineUserCategoryCountAggregateInputType | true
    _min?: LineUserCategoryMinAggregateInputType
    _max?: LineUserCategoryMaxAggregateInputType
  }

  export type LineUserCategoryGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    authorId: string
    _count: LineUserCategoryCountAggregateOutputType | null
    _min: LineUserCategoryMinAggregateOutputType | null
    _max: LineUserCategoryMaxAggregateOutputType | null
  }

  type GetLineUserCategoryGroupByPayload<T extends LineUserCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineUserCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineUserCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineUserCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], LineUserCategoryGroupByOutputType[P]>
        }
      >
    >


  export type LineUserCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
    author?: boolean | LineUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineUserCategory"]>

  export type LineUserCategorySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
  }

  export type LineUserCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | LineUserDefaultArgs<ExtArgs>
  }


  export type $LineUserCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineUserCategory"
    objects: {
      author: Prisma.$LineUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
      authorId: string
    }, ExtArgs["result"]["lineUserCategory"]>
    composites: {}
  }


  type LineUserCategoryGetPayload<S extends boolean | null | undefined | LineUserCategoryDefaultArgs> = $Result.GetResult<Prisma.$LineUserCategoryPayload, S>

  type LineUserCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LineUserCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LineUserCategoryCountAggregateInputType | true
    }

  export interface LineUserCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineUserCategory'], meta: { name: 'LineUserCategory' } }
    /**
     * Find zero or one LineUserCategory that matches the filter.
     * @param {LineUserCategoryFindUniqueArgs} args - Arguments to find a LineUserCategory
     * @example
     * // Get one LineUserCategory
     * const lineUserCategory = await prisma.lineUserCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LineUserCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LineUserCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LineUserCategoryFindUniqueOrThrowArgs} args - Arguments to find a LineUserCategory
     * @example
     * // Get one LineUserCategory
     * const lineUserCategory = await prisma.lineUserCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LineUserCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LineUserCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryFindFirstArgs} args - Arguments to find a LineUserCategory
     * @example
     * // Get one LineUserCategory
     * const lineUserCategory = await prisma.lineUserCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LineUserCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LineUserCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryFindFirstOrThrowArgs} args - Arguments to find a LineUserCategory
     * @example
     * // Get one LineUserCategory
     * const lineUserCategory = await prisma.lineUserCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LineUserCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LineUserCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineUserCategories
     * const lineUserCategories = await prisma.lineUserCategory.findMany()
     * 
     * // Get first 10 LineUserCategories
     * const lineUserCategories = await prisma.lineUserCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineUserCategoryWithIdOnly = await prisma.lineUserCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LineUserCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LineUserCategory.
     * @param {LineUserCategoryCreateArgs} args - Arguments to create a LineUserCategory.
     * @example
     * // Create one LineUserCategory
     * const LineUserCategory = await prisma.lineUserCategory.create({
     *   data: {
     *     // ... data to create a LineUserCategory
     *   }
     * })
     * 
    **/
    create<T extends LineUserCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCategoryCreateArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LineUserCategories.
     *     @param {LineUserCategoryCreateManyArgs} args - Arguments to create many LineUserCategories.
     *     @example
     *     // Create many LineUserCategories
     *     const lineUserCategory = await prisma.lineUserCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LineUserCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LineUserCategory.
     * @param {LineUserCategoryDeleteArgs} args - Arguments to delete one LineUserCategory.
     * @example
     * // Delete one LineUserCategory
     * const LineUserCategory = await prisma.lineUserCategory.delete({
     *   where: {
     *     // ... filter to delete one LineUserCategory
     *   }
     * })
     * 
    **/
    delete<T extends LineUserCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCategoryDeleteArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LineUserCategory.
     * @param {LineUserCategoryUpdateArgs} args - Arguments to update one LineUserCategory.
     * @example
     * // Update one LineUserCategory
     * const lineUserCategory = await prisma.lineUserCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LineUserCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCategoryUpdateArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LineUserCategories.
     * @param {LineUserCategoryDeleteManyArgs} args - Arguments to filter LineUserCategories to delete.
     * @example
     * // Delete a few LineUserCategories
     * const { count } = await prisma.lineUserCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LineUserCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LineUserCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineUserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineUserCategories
     * const lineUserCategory = await prisma.lineUserCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LineUserCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LineUserCategory.
     * @param {LineUserCategoryUpsertArgs} args - Arguments to update or create a LineUserCategory.
     * @example
     * // Update or create a LineUserCategory
     * const lineUserCategory = await prisma.lineUserCategory.upsert({
     *   create: {
     *     // ... data to create a LineUserCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineUserCategory we want to update
     *   }
     * })
    **/
    upsert<T extends LineUserCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LineUserCategoryUpsertArgs<ExtArgs>>
    ): Prisma__LineUserCategoryClient<$Result.GetResult<Prisma.$LineUserCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LineUserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryCountArgs} args - Arguments to filter LineUserCategories to count.
     * @example
     * // Count the number of LineUserCategories
     * const count = await prisma.lineUserCategory.count({
     *   where: {
     *     // ... the filter for the LineUserCategories we want to count
     *   }
     * })
    **/
    count<T extends LineUserCategoryCountArgs>(
      args?: Subset<T, LineUserCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineUserCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineUserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineUserCategoryAggregateArgs>(args: Subset<T, LineUserCategoryAggregateArgs>): Prisma.PrismaPromise<GetLineUserCategoryAggregateType<T>>

    /**
     * Group by LineUserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCategoryGroupByArgs} args - Group by arguments.
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
      T extends LineUserCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineUserCategoryGroupByArgs['orderBy'] }
        : { orderBy?: LineUserCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineUserCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineUserCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineUserCategory model
   */
  readonly fields: LineUserCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineUserCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineUserCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends LineUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LineUserDefaultArgs<ExtArgs>>): Prisma__LineUserClient<$Result.GetResult<Prisma.$LineUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LineUserCategory model
   */ 
  interface LineUserCategoryFieldRefs {
    readonly id: FieldRef<"LineUserCategory", 'String'>
    readonly name: FieldRef<"LineUserCategory", 'String'>
    readonly created_at: FieldRef<"LineUserCategory", 'DateTime'>
    readonly updated_at: FieldRef<"LineUserCategory", 'DateTime'>
    readonly authorId: FieldRef<"LineUserCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LineUserCategory findUnique
   */
  export type LineUserCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LineUserCategory to fetch.
     */
    where: LineUserCategoryWhereUniqueInput
  }


  /**
   * LineUserCategory findUniqueOrThrow
   */
  export type LineUserCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LineUserCategory to fetch.
     */
    where: LineUserCategoryWhereUniqueInput
  }


  /**
   * LineUserCategory findFirst
   */
  export type LineUserCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LineUserCategory to fetch.
     */
    where?: LineUserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserCategories to fetch.
     */
    orderBy?: LineUserCategoryOrderByWithRelationInput | LineUserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUserCategories.
     */
    cursor?: LineUserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUserCategories.
     */
    distinct?: LineUserCategoryScalarFieldEnum | LineUserCategoryScalarFieldEnum[]
  }


  /**
   * LineUserCategory findFirstOrThrow
   */
  export type LineUserCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LineUserCategory to fetch.
     */
    where?: LineUserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserCategories to fetch.
     */
    orderBy?: LineUserCategoryOrderByWithRelationInput | LineUserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUserCategories.
     */
    cursor?: LineUserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUserCategories.
     */
    distinct?: LineUserCategoryScalarFieldEnum | LineUserCategoryScalarFieldEnum[]
  }


  /**
   * LineUserCategory findMany
   */
  export type LineUserCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LineUserCategories to fetch.
     */
    where?: LineUserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserCategories to fetch.
     */
    orderBy?: LineUserCategoryOrderByWithRelationInput | LineUserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineUserCategories.
     */
    cursor?: LineUserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserCategories.
     */
    skip?: number
    distinct?: LineUserCategoryScalarFieldEnum | LineUserCategoryScalarFieldEnum[]
  }


  /**
   * LineUserCategory create
   */
  export type LineUserCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LineUserCategory.
     */
    data: XOR<LineUserCategoryCreateInput, LineUserCategoryUncheckedCreateInput>
  }


  /**
   * LineUserCategory createMany
   */
  export type LineUserCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineUserCategories.
     */
    data: LineUserCategoryCreateManyInput | LineUserCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LineUserCategory update
   */
  export type LineUserCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LineUserCategory.
     */
    data: XOR<LineUserCategoryUpdateInput, LineUserCategoryUncheckedUpdateInput>
    /**
     * Choose, which LineUserCategory to update.
     */
    where: LineUserCategoryWhereUniqueInput
  }


  /**
   * LineUserCategory updateMany
   */
  export type LineUserCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineUserCategories.
     */
    data: XOR<LineUserCategoryUpdateManyMutationInput, LineUserCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LineUserCategories to update
     */
    where?: LineUserCategoryWhereInput
  }


  /**
   * LineUserCategory upsert
   */
  export type LineUserCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LineUserCategory to update in case it exists.
     */
    where: LineUserCategoryWhereUniqueInput
    /**
     * In case the LineUserCategory found by the `where` argument doesn't exist, create a new LineUserCategory with this data.
     */
    create: XOR<LineUserCategoryCreateInput, LineUserCategoryUncheckedCreateInput>
    /**
     * In case the LineUserCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUserCategoryUpdateInput, LineUserCategoryUncheckedUpdateInput>
  }


  /**
   * LineUserCategory delete
   */
  export type LineUserCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
    /**
     * Filter which LineUserCategory to delete.
     */
    where: LineUserCategoryWhereUniqueInput
  }


  /**
   * LineUserCategory deleteMany
   */
  export type LineUserCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineUserCategories to delete
     */
    where?: LineUserCategoryWhereInput
  }


  /**
   * LineUserCategory without action
   */
  export type LineUserCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineUserCategory
     */
    select?: LineUserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LineUserCategoryInclude<ExtArgs> | null
  }



  /**
   * Model NikeList
   */

  export type AggregateNikeList = {
    _count: NikeListCountAggregateOutputType | null
    _avg: NikeListAvgAggregateOutputType | null
    _sum: NikeListSumAggregateOutputType | null
    _min: NikeListMinAggregateOutputType | null
    _max: NikeListMaxAggregateOutputType | null
  }

  export type NikeListAvgAggregateOutputType = {
    id: number | null
  }

  export type NikeListSumAggregateOutputType = {
    id: number | null
  }

  export type NikeListMinAggregateOutputType = {
    id: number | null
    title: string | null
    descs: string | null
    img: string | null
    link: string | null
    time: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NikeListMaxAggregateOutputType = {
    id: number | null
    title: string | null
    descs: string | null
    img: string | null
    link: string | null
    time: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NikeListCountAggregateOutputType = {
    id: number
    title: number
    descs: number
    img: number
    link: number
    time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NikeListAvgAggregateInputType = {
    id?: true
  }

  export type NikeListSumAggregateInputType = {
    id?: true
  }

  export type NikeListMinAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
  }

  export type NikeListMaxAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
  }

  export type NikeListCountAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NikeListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NikeList to aggregate.
     */
    where?: NikeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NikeLists to fetch.
     */
    orderBy?: NikeListOrderByWithRelationInput | NikeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NikeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NikeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NikeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NikeLists
    **/
    _count?: true | NikeListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NikeListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NikeListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NikeListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NikeListMaxAggregateInputType
  }

  export type GetNikeListAggregateType<T extends NikeListAggregateArgs> = {
        [P in keyof T & keyof AggregateNikeList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNikeList[P]>
      : GetScalarType<T[P], AggregateNikeList[P]>
  }




  export type NikeListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NikeListWhereInput
    orderBy?: NikeListOrderByWithAggregationInput | NikeListOrderByWithAggregationInput[]
    by: NikeListScalarFieldEnum[] | NikeListScalarFieldEnum
    having?: NikeListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NikeListCountAggregateInputType | true
    _avg?: NikeListAvgAggregateInputType
    _sum?: NikeListSumAggregateInputType
    _min?: NikeListMinAggregateInputType
    _max?: NikeListMaxAggregateInputType
  }

  export type NikeListGroupByOutputType = {
    id: number
    title: string
    descs: string | null
    img: string
    link: string
    time: string
    created_at: Date
    updated_at: Date
    _count: NikeListCountAggregateOutputType | null
    _avg: NikeListAvgAggregateOutputType | null
    _sum: NikeListSumAggregateOutputType | null
    _min: NikeListMinAggregateOutputType | null
    _max: NikeListMaxAggregateOutputType | null
  }

  type GetNikeListGroupByPayload<T extends NikeListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NikeListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NikeListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NikeListGroupByOutputType[P]>
            : GetScalarType<T[P], NikeListGroupByOutputType[P]>
        }
      >
    >


  export type NikeListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descs?: boolean
    img?: boolean
    link?: boolean
    time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["nikeList"]>

  export type NikeListSelectScalar = {
    id?: boolean
    title?: boolean
    descs?: boolean
    img?: boolean
    link?: boolean
    time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $NikeListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NikeList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      descs: string | null
      img: string
      link: string
      time: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["nikeList"]>
    composites: {}
  }


  type NikeListGetPayload<S extends boolean | null | undefined | NikeListDefaultArgs> = $Result.GetResult<Prisma.$NikeListPayload, S>

  type NikeListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NikeListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NikeListCountAggregateInputType | true
    }

  export interface NikeListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NikeList'], meta: { name: 'NikeList' } }
    /**
     * Find zero or one NikeList that matches the filter.
     * @param {NikeListFindUniqueArgs} args - Arguments to find a NikeList
     * @example
     * // Get one NikeList
     * const nikeList = await prisma.nikeList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NikeListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NikeListFindUniqueArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NikeList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NikeListFindUniqueOrThrowArgs} args - Arguments to find a NikeList
     * @example
     * // Get one NikeList
     * const nikeList = await prisma.nikeList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NikeListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NikeListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NikeList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListFindFirstArgs} args - Arguments to find a NikeList
     * @example
     * // Get one NikeList
     * const nikeList = await prisma.nikeList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NikeListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NikeListFindFirstArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NikeList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListFindFirstOrThrowArgs} args - Arguments to find a NikeList
     * @example
     * // Get one NikeList
     * const nikeList = await prisma.nikeList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NikeListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NikeListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NikeLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NikeLists
     * const nikeLists = await prisma.nikeList.findMany()
     * 
     * // Get first 10 NikeLists
     * const nikeLists = await prisma.nikeList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nikeListWithIdOnly = await prisma.nikeList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NikeListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NikeListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NikeList.
     * @param {NikeListCreateArgs} args - Arguments to create a NikeList.
     * @example
     * // Create one NikeList
     * const NikeList = await prisma.nikeList.create({
     *   data: {
     *     // ... data to create a NikeList
     *   }
     * })
     * 
    **/
    create<T extends NikeListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NikeListCreateArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NikeLists.
     *     @param {NikeListCreateManyArgs} args - Arguments to create many NikeLists.
     *     @example
     *     // Create many NikeLists
     *     const nikeList = await prisma.nikeList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NikeListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NikeListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NikeList.
     * @param {NikeListDeleteArgs} args - Arguments to delete one NikeList.
     * @example
     * // Delete one NikeList
     * const NikeList = await prisma.nikeList.delete({
     *   where: {
     *     // ... filter to delete one NikeList
     *   }
     * })
     * 
    **/
    delete<T extends NikeListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NikeListDeleteArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NikeList.
     * @param {NikeListUpdateArgs} args - Arguments to update one NikeList.
     * @example
     * // Update one NikeList
     * const nikeList = await prisma.nikeList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NikeListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NikeListUpdateArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NikeLists.
     * @param {NikeListDeleteManyArgs} args - Arguments to filter NikeLists to delete.
     * @example
     * // Delete a few NikeLists
     * const { count } = await prisma.nikeList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NikeListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NikeListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NikeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NikeLists
     * const nikeList = await prisma.nikeList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NikeListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NikeListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NikeList.
     * @param {NikeListUpsertArgs} args - Arguments to update or create a NikeList.
     * @example
     * // Update or create a NikeList
     * const nikeList = await prisma.nikeList.upsert({
     *   create: {
     *     // ... data to create a NikeList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NikeList we want to update
     *   }
     * })
    **/
    upsert<T extends NikeListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NikeListUpsertArgs<ExtArgs>>
    ): Prisma__NikeListClient<$Result.GetResult<Prisma.$NikeListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NikeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListCountArgs} args - Arguments to filter NikeLists to count.
     * @example
     * // Count the number of NikeLists
     * const count = await prisma.nikeList.count({
     *   where: {
     *     // ... the filter for the NikeLists we want to count
     *   }
     * })
    **/
    count<T extends NikeListCountArgs>(
      args?: Subset<T, NikeListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NikeListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NikeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NikeListAggregateArgs>(args: Subset<T, NikeListAggregateArgs>): Prisma.PrismaPromise<GetNikeListAggregateType<T>>

    /**
     * Group by NikeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NikeListGroupByArgs} args - Group by arguments.
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
      T extends NikeListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NikeListGroupByArgs['orderBy'] }
        : { orderBy?: NikeListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NikeListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNikeListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NikeList model
   */
  readonly fields: NikeListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NikeList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NikeListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NikeList model
   */ 
  interface NikeListFieldRefs {
    readonly id: FieldRef<"NikeList", 'Int'>
    readonly title: FieldRef<"NikeList", 'String'>
    readonly descs: FieldRef<"NikeList", 'String'>
    readonly img: FieldRef<"NikeList", 'String'>
    readonly link: FieldRef<"NikeList", 'String'>
    readonly time: FieldRef<"NikeList", 'String'>
    readonly created_at: FieldRef<"NikeList", 'DateTime'>
    readonly updated_at: FieldRef<"NikeList", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * NikeList findUnique
   */
  export type NikeListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * Filter, which NikeList to fetch.
     */
    where: NikeListWhereUniqueInput
  }


  /**
   * NikeList findUniqueOrThrow
   */
  export type NikeListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * Filter, which NikeList to fetch.
     */
    where: NikeListWhereUniqueInput
  }


  /**
   * NikeList findFirst
   */
  export type NikeListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * Filter, which NikeList to fetch.
     */
    where?: NikeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NikeLists to fetch.
     */
    orderBy?: NikeListOrderByWithRelationInput | NikeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NikeLists.
     */
    cursor?: NikeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NikeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NikeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NikeLists.
     */
    distinct?: NikeListScalarFieldEnum | NikeListScalarFieldEnum[]
  }


  /**
   * NikeList findFirstOrThrow
   */
  export type NikeListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * Filter, which NikeList to fetch.
     */
    where?: NikeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NikeLists to fetch.
     */
    orderBy?: NikeListOrderByWithRelationInput | NikeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NikeLists.
     */
    cursor?: NikeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NikeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NikeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NikeLists.
     */
    distinct?: NikeListScalarFieldEnum | NikeListScalarFieldEnum[]
  }


  /**
   * NikeList findMany
   */
  export type NikeListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * Filter, which NikeLists to fetch.
     */
    where?: NikeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NikeLists to fetch.
     */
    orderBy?: NikeListOrderByWithRelationInput | NikeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NikeLists.
     */
    cursor?: NikeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NikeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NikeLists.
     */
    skip?: number
    distinct?: NikeListScalarFieldEnum | NikeListScalarFieldEnum[]
  }


  /**
   * NikeList create
   */
  export type NikeListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * The data needed to create a NikeList.
     */
    data: XOR<NikeListCreateInput, NikeListUncheckedCreateInput>
  }


  /**
   * NikeList createMany
   */
  export type NikeListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NikeLists.
     */
    data: NikeListCreateManyInput | NikeListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NikeList update
   */
  export type NikeListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * The data needed to update a NikeList.
     */
    data: XOR<NikeListUpdateInput, NikeListUncheckedUpdateInput>
    /**
     * Choose, which NikeList to update.
     */
    where: NikeListWhereUniqueInput
  }


  /**
   * NikeList updateMany
   */
  export type NikeListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NikeLists.
     */
    data: XOR<NikeListUpdateManyMutationInput, NikeListUncheckedUpdateManyInput>
    /**
     * Filter which NikeLists to update
     */
    where?: NikeListWhereInput
  }


  /**
   * NikeList upsert
   */
  export type NikeListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * The filter to search for the NikeList to update in case it exists.
     */
    where: NikeListWhereUniqueInput
    /**
     * In case the NikeList found by the `where` argument doesn't exist, create a new NikeList with this data.
     */
    create: XOR<NikeListCreateInput, NikeListUncheckedCreateInput>
    /**
     * In case the NikeList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NikeListUpdateInput, NikeListUncheckedUpdateInput>
  }


  /**
   * NikeList delete
   */
  export type NikeListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
    /**
     * Filter which NikeList to delete.
     */
    where: NikeListWhereUniqueInput
  }


  /**
   * NikeList deleteMany
   */
  export type NikeListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NikeLists to delete
     */
    where?: NikeListWhereInput
  }


  /**
   * NikeList without action
   */
  export type NikeListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NikeList
     */
    select?: NikeListSelect<ExtArgs> | null
  }



  /**
   * Model HypeBeastList
   */

  export type AggregateHypeBeastList = {
    _count: HypeBeastListCountAggregateOutputType | null
    _avg: HypeBeastListAvgAggregateOutputType | null
    _sum: HypeBeastListSumAggregateOutputType | null
    _min: HypeBeastListMinAggregateOutputType | null
    _max: HypeBeastListMaxAggregateOutputType | null
  }

  export type HypeBeastListAvgAggregateOutputType = {
    id: number | null
  }

  export type HypeBeastListSumAggregateOutputType = {
    id: number | null
  }

  export type HypeBeastListMinAggregateOutputType = {
    id: number | null
    title: string | null
    descs: string | null
    img: string | null
    link: string | null
    time: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HypeBeastListMaxAggregateOutputType = {
    id: number | null
    title: string | null
    descs: string | null
    img: string | null
    link: string | null
    time: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HypeBeastListCountAggregateOutputType = {
    id: number
    title: number
    descs: number
    img: number
    link: number
    time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HypeBeastListAvgAggregateInputType = {
    id?: true
  }

  export type HypeBeastListSumAggregateInputType = {
    id?: true
  }

  export type HypeBeastListMinAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
  }

  export type HypeBeastListMaxAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
  }

  export type HypeBeastListCountAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HypeBeastListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HypeBeastList to aggregate.
     */
    where?: HypeBeastListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HypeBeastLists to fetch.
     */
    orderBy?: HypeBeastListOrderByWithRelationInput | HypeBeastListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HypeBeastListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HypeBeastLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HypeBeastLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HypeBeastLists
    **/
    _count?: true | HypeBeastListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HypeBeastListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HypeBeastListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HypeBeastListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HypeBeastListMaxAggregateInputType
  }

  export type GetHypeBeastListAggregateType<T extends HypeBeastListAggregateArgs> = {
        [P in keyof T & keyof AggregateHypeBeastList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHypeBeastList[P]>
      : GetScalarType<T[P], AggregateHypeBeastList[P]>
  }




  export type HypeBeastListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HypeBeastListWhereInput
    orderBy?: HypeBeastListOrderByWithAggregationInput | HypeBeastListOrderByWithAggregationInput[]
    by: HypeBeastListScalarFieldEnum[] | HypeBeastListScalarFieldEnum
    having?: HypeBeastListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HypeBeastListCountAggregateInputType | true
    _avg?: HypeBeastListAvgAggregateInputType
    _sum?: HypeBeastListSumAggregateInputType
    _min?: HypeBeastListMinAggregateInputType
    _max?: HypeBeastListMaxAggregateInputType
  }

  export type HypeBeastListGroupByOutputType = {
    id: number
    title: string
    descs: string | null
    img: string
    link: string
    time: string
    created_at: Date
    updated_at: Date
    _count: HypeBeastListCountAggregateOutputType | null
    _avg: HypeBeastListAvgAggregateOutputType | null
    _sum: HypeBeastListSumAggregateOutputType | null
    _min: HypeBeastListMinAggregateOutputType | null
    _max: HypeBeastListMaxAggregateOutputType | null
  }

  type GetHypeBeastListGroupByPayload<T extends HypeBeastListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HypeBeastListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HypeBeastListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HypeBeastListGroupByOutputType[P]>
            : GetScalarType<T[P], HypeBeastListGroupByOutputType[P]>
        }
      >
    >


  export type HypeBeastListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descs?: boolean
    img?: boolean
    link?: boolean
    time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hypeBeastList"]>

  export type HypeBeastListSelectScalar = {
    id?: boolean
    title?: boolean
    descs?: boolean
    img?: boolean
    link?: boolean
    time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $HypeBeastListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HypeBeastList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      descs: string | null
      img: string
      link: string
      time: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["hypeBeastList"]>
    composites: {}
  }


  type HypeBeastListGetPayload<S extends boolean | null | undefined | HypeBeastListDefaultArgs> = $Result.GetResult<Prisma.$HypeBeastListPayload, S>

  type HypeBeastListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HypeBeastListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HypeBeastListCountAggregateInputType | true
    }

  export interface HypeBeastListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HypeBeastList'], meta: { name: 'HypeBeastList' } }
    /**
     * Find zero or one HypeBeastList that matches the filter.
     * @param {HypeBeastListFindUniqueArgs} args - Arguments to find a HypeBeastList
     * @example
     * // Get one HypeBeastList
     * const hypeBeastList = await prisma.hypeBeastList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HypeBeastListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HypeBeastListFindUniqueArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HypeBeastList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HypeBeastListFindUniqueOrThrowArgs} args - Arguments to find a HypeBeastList
     * @example
     * // Get one HypeBeastList
     * const hypeBeastList = await prisma.hypeBeastList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HypeBeastListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HypeBeastListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HypeBeastList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListFindFirstArgs} args - Arguments to find a HypeBeastList
     * @example
     * // Get one HypeBeastList
     * const hypeBeastList = await prisma.hypeBeastList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HypeBeastListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HypeBeastListFindFirstArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HypeBeastList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListFindFirstOrThrowArgs} args - Arguments to find a HypeBeastList
     * @example
     * // Get one HypeBeastList
     * const hypeBeastList = await prisma.hypeBeastList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HypeBeastListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HypeBeastListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HypeBeastLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HypeBeastLists
     * const hypeBeastLists = await prisma.hypeBeastList.findMany()
     * 
     * // Get first 10 HypeBeastLists
     * const hypeBeastLists = await prisma.hypeBeastList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hypeBeastListWithIdOnly = await prisma.hypeBeastList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HypeBeastListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HypeBeastListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HypeBeastList.
     * @param {HypeBeastListCreateArgs} args - Arguments to create a HypeBeastList.
     * @example
     * // Create one HypeBeastList
     * const HypeBeastList = await prisma.hypeBeastList.create({
     *   data: {
     *     // ... data to create a HypeBeastList
     *   }
     * })
     * 
    **/
    create<T extends HypeBeastListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HypeBeastListCreateArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HypeBeastLists.
     *     @param {HypeBeastListCreateManyArgs} args - Arguments to create many HypeBeastLists.
     *     @example
     *     // Create many HypeBeastLists
     *     const hypeBeastList = await prisma.hypeBeastList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HypeBeastListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HypeBeastListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HypeBeastList.
     * @param {HypeBeastListDeleteArgs} args - Arguments to delete one HypeBeastList.
     * @example
     * // Delete one HypeBeastList
     * const HypeBeastList = await prisma.hypeBeastList.delete({
     *   where: {
     *     // ... filter to delete one HypeBeastList
     *   }
     * })
     * 
    **/
    delete<T extends HypeBeastListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HypeBeastListDeleteArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HypeBeastList.
     * @param {HypeBeastListUpdateArgs} args - Arguments to update one HypeBeastList.
     * @example
     * // Update one HypeBeastList
     * const hypeBeastList = await prisma.hypeBeastList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HypeBeastListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HypeBeastListUpdateArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HypeBeastLists.
     * @param {HypeBeastListDeleteManyArgs} args - Arguments to filter HypeBeastLists to delete.
     * @example
     * // Delete a few HypeBeastLists
     * const { count } = await prisma.hypeBeastList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HypeBeastListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HypeBeastListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HypeBeastLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HypeBeastLists
     * const hypeBeastList = await prisma.hypeBeastList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HypeBeastListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HypeBeastListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HypeBeastList.
     * @param {HypeBeastListUpsertArgs} args - Arguments to update or create a HypeBeastList.
     * @example
     * // Update or create a HypeBeastList
     * const hypeBeastList = await prisma.hypeBeastList.upsert({
     *   create: {
     *     // ... data to create a HypeBeastList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HypeBeastList we want to update
     *   }
     * })
    **/
    upsert<T extends HypeBeastListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HypeBeastListUpsertArgs<ExtArgs>>
    ): Prisma__HypeBeastListClient<$Result.GetResult<Prisma.$HypeBeastListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HypeBeastLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListCountArgs} args - Arguments to filter HypeBeastLists to count.
     * @example
     * // Count the number of HypeBeastLists
     * const count = await prisma.hypeBeastList.count({
     *   where: {
     *     // ... the filter for the HypeBeastLists we want to count
     *   }
     * })
    **/
    count<T extends HypeBeastListCountArgs>(
      args?: Subset<T, HypeBeastListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HypeBeastListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HypeBeastList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HypeBeastListAggregateArgs>(args: Subset<T, HypeBeastListAggregateArgs>): Prisma.PrismaPromise<GetHypeBeastListAggregateType<T>>

    /**
     * Group by HypeBeastList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HypeBeastListGroupByArgs} args - Group by arguments.
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
      T extends HypeBeastListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HypeBeastListGroupByArgs['orderBy'] }
        : { orderBy?: HypeBeastListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HypeBeastListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHypeBeastListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HypeBeastList model
   */
  readonly fields: HypeBeastListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HypeBeastList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HypeBeastListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HypeBeastList model
   */ 
  interface HypeBeastListFieldRefs {
    readonly id: FieldRef<"HypeBeastList", 'Int'>
    readonly title: FieldRef<"HypeBeastList", 'String'>
    readonly descs: FieldRef<"HypeBeastList", 'String'>
    readonly img: FieldRef<"HypeBeastList", 'String'>
    readonly link: FieldRef<"HypeBeastList", 'String'>
    readonly time: FieldRef<"HypeBeastList", 'String'>
    readonly created_at: FieldRef<"HypeBeastList", 'DateTime'>
    readonly updated_at: FieldRef<"HypeBeastList", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * HypeBeastList findUnique
   */
  export type HypeBeastListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * Filter, which HypeBeastList to fetch.
     */
    where: HypeBeastListWhereUniqueInput
  }


  /**
   * HypeBeastList findUniqueOrThrow
   */
  export type HypeBeastListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * Filter, which HypeBeastList to fetch.
     */
    where: HypeBeastListWhereUniqueInput
  }


  /**
   * HypeBeastList findFirst
   */
  export type HypeBeastListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * Filter, which HypeBeastList to fetch.
     */
    where?: HypeBeastListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HypeBeastLists to fetch.
     */
    orderBy?: HypeBeastListOrderByWithRelationInput | HypeBeastListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HypeBeastLists.
     */
    cursor?: HypeBeastListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HypeBeastLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HypeBeastLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HypeBeastLists.
     */
    distinct?: HypeBeastListScalarFieldEnum | HypeBeastListScalarFieldEnum[]
  }


  /**
   * HypeBeastList findFirstOrThrow
   */
  export type HypeBeastListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * Filter, which HypeBeastList to fetch.
     */
    where?: HypeBeastListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HypeBeastLists to fetch.
     */
    orderBy?: HypeBeastListOrderByWithRelationInput | HypeBeastListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HypeBeastLists.
     */
    cursor?: HypeBeastListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HypeBeastLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HypeBeastLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HypeBeastLists.
     */
    distinct?: HypeBeastListScalarFieldEnum | HypeBeastListScalarFieldEnum[]
  }


  /**
   * HypeBeastList findMany
   */
  export type HypeBeastListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * Filter, which HypeBeastLists to fetch.
     */
    where?: HypeBeastListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HypeBeastLists to fetch.
     */
    orderBy?: HypeBeastListOrderByWithRelationInput | HypeBeastListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HypeBeastLists.
     */
    cursor?: HypeBeastListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HypeBeastLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HypeBeastLists.
     */
    skip?: number
    distinct?: HypeBeastListScalarFieldEnum | HypeBeastListScalarFieldEnum[]
  }


  /**
   * HypeBeastList create
   */
  export type HypeBeastListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * The data needed to create a HypeBeastList.
     */
    data: XOR<HypeBeastListCreateInput, HypeBeastListUncheckedCreateInput>
  }


  /**
   * HypeBeastList createMany
   */
  export type HypeBeastListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HypeBeastLists.
     */
    data: HypeBeastListCreateManyInput | HypeBeastListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HypeBeastList update
   */
  export type HypeBeastListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * The data needed to update a HypeBeastList.
     */
    data: XOR<HypeBeastListUpdateInput, HypeBeastListUncheckedUpdateInput>
    /**
     * Choose, which HypeBeastList to update.
     */
    where: HypeBeastListWhereUniqueInput
  }


  /**
   * HypeBeastList updateMany
   */
  export type HypeBeastListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HypeBeastLists.
     */
    data: XOR<HypeBeastListUpdateManyMutationInput, HypeBeastListUncheckedUpdateManyInput>
    /**
     * Filter which HypeBeastLists to update
     */
    where?: HypeBeastListWhereInput
  }


  /**
   * HypeBeastList upsert
   */
  export type HypeBeastListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * The filter to search for the HypeBeastList to update in case it exists.
     */
    where: HypeBeastListWhereUniqueInput
    /**
     * In case the HypeBeastList found by the `where` argument doesn't exist, create a new HypeBeastList with this data.
     */
    create: XOR<HypeBeastListCreateInput, HypeBeastListUncheckedCreateInput>
    /**
     * In case the HypeBeastList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HypeBeastListUpdateInput, HypeBeastListUncheckedUpdateInput>
  }


  /**
   * HypeBeastList delete
   */
  export type HypeBeastListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
    /**
     * Filter which HypeBeastList to delete.
     */
    where: HypeBeastListWhereUniqueInput
  }


  /**
   * HypeBeastList deleteMany
   */
  export type HypeBeastListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HypeBeastLists to delete
     */
    where?: HypeBeastListWhereInput
  }


  /**
   * HypeBeastList without action
   */
  export type HypeBeastListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HypeBeastList
     */
    select?: HypeBeastListSelect<ExtArgs> | null
  }



  /**
   * Model IthomeList
   */

  export type AggregateIthomeList = {
    _count: IthomeListCountAggregateOutputType | null
    _avg: IthomeListAvgAggregateOutputType | null
    _sum: IthomeListSumAggregateOutputType | null
    _min: IthomeListMinAggregateOutputType | null
    _max: IthomeListMaxAggregateOutputType | null
  }

  export type IthomeListAvgAggregateOutputType = {
    id: number | null
  }

  export type IthomeListSumAggregateOutputType = {
    id: number | null
  }

  export type IthomeListMinAggregateOutputType = {
    id: number | null
    title: string | null
    descs: string | null
    img: string | null
    link: string | null
    time: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IthomeListMaxAggregateOutputType = {
    id: number | null
    title: string | null
    descs: string | null
    img: string | null
    link: string | null
    time: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IthomeListCountAggregateOutputType = {
    id: number
    title: number
    descs: number
    img: number
    link: number
    time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IthomeListAvgAggregateInputType = {
    id?: true
  }

  export type IthomeListSumAggregateInputType = {
    id?: true
  }

  export type IthomeListMinAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
  }

  export type IthomeListMaxAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
  }

  export type IthomeListCountAggregateInputType = {
    id?: true
    title?: true
    descs?: true
    img?: true
    link?: true
    time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IthomeListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IthomeList to aggregate.
     */
    where?: IthomeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IthomeLists to fetch.
     */
    orderBy?: IthomeListOrderByWithRelationInput | IthomeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IthomeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IthomeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IthomeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IthomeLists
    **/
    _count?: true | IthomeListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IthomeListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IthomeListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IthomeListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IthomeListMaxAggregateInputType
  }

  export type GetIthomeListAggregateType<T extends IthomeListAggregateArgs> = {
        [P in keyof T & keyof AggregateIthomeList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIthomeList[P]>
      : GetScalarType<T[P], AggregateIthomeList[P]>
  }




  export type IthomeListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IthomeListWhereInput
    orderBy?: IthomeListOrderByWithAggregationInput | IthomeListOrderByWithAggregationInput[]
    by: IthomeListScalarFieldEnum[] | IthomeListScalarFieldEnum
    having?: IthomeListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IthomeListCountAggregateInputType | true
    _avg?: IthomeListAvgAggregateInputType
    _sum?: IthomeListSumAggregateInputType
    _min?: IthomeListMinAggregateInputType
    _max?: IthomeListMaxAggregateInputType
  }

  export type IthomeListGroupByOutputType = {
    id: number
    title: string
    descs: string | null
    img: string
    link: string
    time: string
    created_at: Date
    updated_at: Date
    _count: IthomeListCountAggregateOutputType | null
    _avg: IthomeListAvgAggregateOutputType | null
    _sum: IthomeListSumAggregateOutputType | null
    _min: IthomeListMinAggregateOutputType | null
    _max: IthomeListMaxAggregateOutputType | null
  }

  type GetIthomeListGroupByPayload<T extends IthomeListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IthomeListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IthomeListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IthomeListGroupByOutputType[P]>
            : GetScalarType<T[P], IthomeListGroupByOutputType[P]>
        }
      >
    >


  export type IthomeListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descs?: boolean
    img?: boolean
    link?: boolean
    time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ithomeList"]>

  export type IthomeListSelectScalar = {
    id?: boolean
    title?: boolean
    descs?: boolean
    img?: boolean
    link?: boolean
    time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $IthomeListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IthomeList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      descs: string | null
      img: string
      link: string
      time: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ithomeList"]>
    composites: {}
  }


  type IthomeListGetPayload<S extends boolean | null | undefined | IthomeListDefaultArgs> = $Result.GetResult<Prisma.$IthomeListPayload, S>

  type IthomeListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IthomeListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IthomeListCountAggregateInputType | true
    }

  export interface IthomeListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IthomeList'], meta: { name: 'IthomeList' } }
    /**
     * Find zero or one IthomeList that matches the filter.
     * @param {IthomeListFindUniqueArgs} args - Arguments to find a IthomeList
     * @example
     * // Get one IthomeList
     * const ithomeList = await prisma.ithomeList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IthomeListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IthomeListFindUniqueArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IthomeList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IthomeListFindUniqueOrThrowArgs} args - Arguments to find a IthomeList
     * @example
     * // Get one IthomeList
     * const ithomeList = await prisma.ithomeList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IthomeListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IthomeListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IthomeList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListFindFirstArgs} args - Arguments to find a IthomeList
     * @example
     * // Get one IthomeList
     * const ithomeList = await prisma.ithomeList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IthomeListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IthomeListFindFirstArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IthomeList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListFindFirstOrThrowArgs} args - Arguments to find a IthomeList
     * @example
     * // Get one IthomeList
     * const ithomeList = await prisma.ithomeList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IthomeListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IthomeListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IthomeLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IthomeLists
     * const ithomeLists = await prisma.ithomeList.findMany()
     * 
     * // Get first 10 IthomeLists
     * const ithomeLists = await prisma.ithomeList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ithomeListWithIdOnly = await prisma.ithomeList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IthomeListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IthomeListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IthomeList.
     * @param {IthomeListCreateArgs} args - Arguments to create a IthomeList.
     * @example
     * // Create one IthomeList
     * const IthomeList = await prisma.ithomeList.create({
     *   data: {
     *     // ... data to create a IthomeList
     *   }
     * })
     * 
    **/
    create<T extends IthomeListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IthomeListCreateArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IthomeLists.
     *     @param {IthomeListCreateManyArgs} args - Arguments to create many IthomeLists.
     *     @example
     *     // Create many IthomeLists
     *     const ithomeList = await prisma.ithomeList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IthomeListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IthomeListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IthomeList.
     * @param {IthomeListDeleteArgs} args - Arguments to delete one IthomeList.
     * @example
     * // Delete one IthomeList
     * const IthomeList = await prisma.ithomeList.delete({
     *   where: {
     *     // ... filter to delete one IthomeList
     *   }
     * })
     * 
    **/
    delete<T extends IthomeListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IthomeListDeleteArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IthomeList.
     * @param {IthomeListUpdateArgs} args - Arguments to update one IthomeList.
     * @example
     * // Update one IthomeList
     * const ithomeList = await prisma.ithomeList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IthomeListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IthomeListUpdateArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IthomeLists.
     * @param {IthomeListDeleteManyArgs} args - Arguments to filter IthomeLists to delete.
     * @example
     * // Delete a few IthomeLists
     * const { count } = await prisma.ithomeList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IthomeListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IthomeListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IthomeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IthomeLists
     * const ithomeList = await prisma.ithomeList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IthomeListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IthomeListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IthomeList.
     * @param {IthomeListUpsertArgs} args - Arguments to update or create a IthomeList.
     * @example
     * // Update or create a IthomeList
     * const ithomeList = await prisma.ithomeList.upsert({
     *   create: {
     *     // ... data to create a IthomeList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IthomeList we want to update
     *   }
     * })
    **/
    upsert<T extends IthomeListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IthomeListUpsertArgs<ExtArgs>>
    ): Prisma__IthomeListClient<$Result.GetResult<Prisma.$IthomeListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IthomeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListCountArgs} args - Arguments to filter IthomeLists to count.
     * @example
     * // Count the number of IthomeLists
     * const count = await prisma.ithomeList.count({
     *   where: {
     *     // ... the filter for the IthomeLists we want to count
     *   }
     * })
    **/
    count<T extends IthomeListCountArgs>(
      args?: Subset<T, IthomeListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IthomeListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IthomeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IthomeListAggregateArgs>(args: Subset<T, IthomeListAggregateArgs>): Prisma.PrismaPromise<GetIthomeListAggregateType<T>>

    /**
     * Group by IthomeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IthomeListGroupByArgs} args - Group by arguments.
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
      T extends IthomeListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IthomeListGroupByArgs['orderBy'] }
        : { orderBy?: IthomeListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IthomeListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIthomeListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IthomeList model
   */
  readonly fields: IthomeListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IthomeList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IthomeListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IthomeList model
   */ 
  interface IthomeListFieldRefs {
    readonly id: FieldRef<"IthomeList", 'Int'>
    readonly title: FieldRef<"IthomeList", 'String'>
    readonly descs: FieldRef<"IthomeList", 'String'>
    readonly img: FieldRef<"IthomeList", 'String'>
    readonly link: FieldRef<"IthomeList", 'String'>
    readonly time: FieldRef<"IthomeList", 'String'>
    readonly created_at: FieldRef<"IthomeList", 'DateTime'>
    readonly updated_at: FieldRef<"IthomeList", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * IthomeList findUnique
   */
  export type IthomeListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * Filter, which IthomeList to fetch.
     */
    where: IthomeListWhereUniqueInput
  }


  /**
   * IthomeList findUniqueOrThrow
   */
  export type IthomeListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * Filter, which IthomeList to fetch.
     */
    where: IthomeListWhereUniqueInput
  }


  /**
   * IthomeList findFirst
   */
  export type IthomeListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * Filter, which IthomeList to fetch.
     */
    where?: IthomeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IthomeLists to fetch.
     */
    orderBy?: IthomeListOrderByWithRelationInput | IthomeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IthomeLists.
     */
    cursor?: IthomeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IthomeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IthomeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IthomeLists.
     */
    distinct?: IthomeListScalarFieldEnum | IthomeListScalarFieldEnum[]
  }


  /**
   * IthomeList findFirstOrThrow
   */
  export type IthomeListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * Filter, which IthomeList to fetch.
     */
    where?: IthomeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IthomeLists to fetch.
     */
    orderBy?: IthomeListOrderByWithRelationInput | IthomeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IthomeLists.
     */
    cursor?: IthomeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IthomeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IthomeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IthomeLists.
     */
    distinct?: IthomeListScalarFieldEnum | IthomeListScalarFieldEnum[]
  }


  /**
   * IthomeList findMany
   */
  export type IthomeListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * Filter, which IthomeLists to fetch.
     */
    where?: IthomeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IthomeLists to fetch.
     */
    orderBy?: IthomeListOrderByWithRelationInput | IthomeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IthomeLists.
     */
    cursor?: IthomeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IthomeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IthomeLists.
     */
    skip?: number
    distinct?: IthomeListScalarFieldEnum | IthomeListScalarFieldEnum[]
  }


  /**
   * IthomeList create
   */
  export type IthomeListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * The data needed to create a IthomeList.
     */
    data: XOR<IthomeListCreateInput, IthomeListUncheckedCreateInput>
  }


  /**
   * IthomeList createMany
   */
  export type IthomeListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IthomeLists.
     */
    data: IthomeListCreateManyInput | IthomeListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IthomeList update
   */
  export type IthomeListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * The data needed to update a IthomeList.
     */
    data: XOR<IthomeListUpdateInput, IthomeListUncheckedUpdateInput>
    /**
     * Choose, which IthomeList to update.
     */
    where: IthomeListWhereUniqueInput
  }


  /**
   * IthomeList updateMany
   */
  export type IthomeListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IthomeLists.
     */
    data: XOR<IthomeListUpdateManyMutationInput, IthomeListUncheckedUpdateManyInput>
    /**
     * Filter which IthomeLists to update
     */
    where?: IthomeListWhereInput
  }


  /**
   * IthomeList upsert
   */
  export type IthomeListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * The filter to search for the IthomeList to update in case it exists.
     */
    where: IthomeListWhereUniqueInput
    /**
     * In case the IthomeList found by the `where` argument doesn't exist, create a new IthomeList with this data.
     */
    create: XOR<IthomeListCreateInput, IthomeListUncheckedCreateInput>
    /**
     * In case the IthomeList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IthomeListUpdateInput, IthomeListUncheckedUpdateInput>
  }


  /**
   * IthomeList delete
   */
  export type IthomeListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
    /**
     * Filter which IthomeList to delete.
     */
    where: IthomeListWhereUniqueInput
  }


  /**
   * IthomeList deleteMany
   */
  export type IthomeListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IthomeLists to delete
     */
    where?: IthomeListWhereInput
  }


  /**
   * IthomeList without action
   */
  export type IthomeListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IthomeList
     */
    select?: IthomeListSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    account: 'account',
    password: 'password',
    avatar: 'avatar',
    status: 'status',
    gender: 'gender',
    birthday: 'birthday',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creator: 'creator',
    remark: 'remark',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creator: 'creator',
    remark: 'remark',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    created_at: 'created_at'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const LineUserScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    pictureUrl: 'pictureUrl',
    status: 'status',
    callback: 'callback',
    url: 'url',
    type: 'type',
    nike_broadcast: 'nike_broadcast',
    hypebeast_broadcast: 'hypebeast_broadcast',
    ithome_broadcast: 'ithome_broadcast',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LineUserScalarFieldEnum = (typeof LineUserScalarFieldEnum)[keyof typeof LineUserScalarFieldEnum]


  export const LineUserArticleScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    authorId: 'authorId'
  };

  export type LineUserArticleScalarFieldEnum = (typeof LineUserArticleScalarFieldEnum)[keyof typeof LineUserArticleScalarFieldEnum]


  export const LineUserCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    authorId: 'authorId'
  };

  export type LineUserCategoryScalarFieldEnum = (typeof LineUserCategoryScalarFieldEnum)[keyof typeof LineUserCategoryScalarFieldEnum]


  export const NikeListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descs: 'descs',
    img: 'img',
    link: 'link',
    time: 'time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NikeListScalarFieldEnum = (typeof NikeListScalarFieldEnum)[keyof typeof NikeListScalarFieldEnum]


  export const HypeBeastListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descs: 'descs',
    img: 'img',
    link: 'link',
    time: 'time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HypeBeastListScalarFieldEnum = (typeof HypeBeastListScalarFieldEnum)[keyof typeof HypeBeastListScalarFieldEnum]


  export const IthomeListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descs: 'descs',
    img: 'img',
    link: 'link',
    time: 'time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IthomeListScalarFieldEnum = (typeof IthomeListScalarFieldEnum)[keyof typeof IthomeListScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    account?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    gender?: StringFilter<"User"> | string
    birthday?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    UserRole?: UserRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    account?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    UserRole?: UserRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    gender?: StringFilter<"User"> | string
    birthday?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    UserRole?: UserRoleListRelationFilter
  }, "id" | "account">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    account?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    account?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    status?: BoolWithAggregatesFilter<"User"> | boolean
    gender?: StringWithAggregatesFilter<"User"> | string
    birthday?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    creator?: StringFilter<"Role"> | string
    remark?: StringNullableFilter<"Role"> | string | null
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
    UserRole?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    RolePermission?: RolePermissionOrderByRelationAggregateInput
    UserRole?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    creator?: StringFilter<"Role"> | string
    remark?: StringNullableFilter<"Role"> | string | null
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
    UserRole?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    creator?: StringWithAggregatesFilter<"Role"> | string
    remark?: StringNullableWithAggregatesFilter<"Role"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    creator?: StringFilter<"Permission"> | string
    remark?: StringNullableFilter<"Permission"> | string | null
    created_at?: DateTimeFilter<"Permission"> | Date | string
    updated_at?: DateTimeFilter<"Permission"> | Date | string
    Role?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Role?: RolePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    creator?: StringFilter<"Permission"> | string
    remark?: StringNullableFilter<"Permission"> | string | null
    created_at?: DateTimeFilter<"Permission"> | Date | string
    updated_at?: DateTimeFilter<"Permission"> | Date | string
    Role?: RolePermissionListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    name?: StringWithAggregatesFilter<"Permission"> | string
    creator?: StringWithAggregatesFilter<"Permission"> | string
    remark?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    created_at?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    created_at?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "id">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
    created_at?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    created_at?: DateTimeFilter<"RolePermission"> | Date | string
    updated_at?: DateTimeFilter<"RolePermission"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    created_at?: DateTimeFilter<"RolePermission"> | Date | string
    updated_at?: DateTimeFilter<"RolePermission"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
  }, "id">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolePermission"> | number
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
    created_at?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
  }

  export type LineUserWhereInput = {
    AND?: LineUserWhereInput | LineUserWhereInput[]
    OR?: LineUserWhereInput[]
    NOT?: LineUserWhereInput | LineUserWhereInput[]
    id?: StringFilter<"LineUser"> | string
    displayName?: StringNullableFilter<"LineUser"> | string | null
    pictureUrl?: StringNullableFilter<"LineUser"> | string | null
    status?: BoolNullableFilter<"LineUser"> | boolean | null
    callback?: StringNullableFilter<"LineUser"> | string | null
    url?: StringNullableFilter<"LineUser"> | string | null
    type?: StringNullableFilter<"LineUser"> | string | null
    nike_broadcast?: BoolNullableFilter<"LineUser"> | boolean | null
    hypebeast_broadcast?: BoolNullableFilter<"LineUser"> | boolean | null
    ithome_broadcast?: BoolNullableFilter<"LineUser"> | boolean | null
    created_at?: DateTimeFilter<"LineUser"> | Date | string
    updated_at?: DateTimeFilter<"LineUser"> | Date | string
    category?: LineUserCategoryListRelationFilter
    Article?: LineUserArticleListRelationFilter
  }

  export type LineUserOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrderInput | SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    callback?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    nike_broadcast?: SortOrderInput | SortOrder
    hypebeast_broadcast?: SortOrderInput | SortOrder
    ithome_broadcast?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: LineUserCategoryOrderByRelationAggregateInput
    Article?: LineUserArticleOrderByRelationAggregateInput
  }

  export type LineUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LineUserWhereInput | LineUserWhereInput[]
    OR?: LineUserWhereInput[]
    NOT?: LineUserWhereInput | LineUserWhereInput[]
    displayName?: StringNullableFilter<"LineUser"> | string | null
    pictureUrl?: StringNullableFilter<"LineUser"> | string | null
    status?: BoolNullableFilter<"LineUser"> | boolean | null
    callback?: StringNullableFilter<"LineUser"> | string | null
    url?: StringNullableFilter<"LineUser"> | string | null
    type?: StringNullableFilter<"LineUser"> | string | null
    nike_broadcast?: BoolNullableFilter<"LineUser"> | boolean | null
    hypebeast_broadcast?: BoolNullableFilter<"LineUser"> | boolean | null
    ithome_broadcast?: BoolNullableFilter<"LineUser"> | boolean | null
    created_at?: DateTimeFilter<"LineUser"> | Date | string
    updated_at?: DateTimeFilter<"LineUser"> | Date | string
    category?: LineUserCategoryListRelationFilter
    Article?: LineUserArticleListRelationFilter
  }, "id">

  export type LineUserOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrderInput | SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    callback?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    nike_broadcast?: SortOrderInput | SortOrder
    hypebeast_broadcast?: SortOrderInput | SortOrder
    ithome_broadcast?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LineUserCountOrderByAggregateInput
    _max?: LineUserMaxOrderByAggregateInput
    _min?: LineUserMinOrderByAggregateInput
  }

  export type LineUserScalarWhereWithAggregatesInput = {
    AND?: LineUserScalarWhereWithAggregatesInput | LineUserScalarWhereWithAggregatesInput[]
    OR?: LineUserScalarWhereWithAggregatesInput[]
    NOT?: LineUserScalarWhereWithAggregatesInput | LineUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LineUser"> | string
    displayName?: StringNullableWithAggregatesFilter<"LineUser"> | string | null
    pictureUrl?: StringNullableWithAggregatesFilter<"LineUser"> | string | null
    status?: BoolNullableWithAggregatesFilter<"LineUser"> | boolean | null
    callback?: StringNullableWithAggregatesFilter<"LineUser"> | string | null
    url?: StringNullableWithAggregatesFilter<"LineUser"> | string | null
    type?: StringNullableWithAggregatesFilter<"LineUser"> | string | null
    nike_broadcast?: BoolNullableWithAggregatesFilter<"LineUser"> | boolean | null
    hypebeast_broadcast?: BoolNullableWithAggregatesFilter<"LineUser"> | boolean | null
    ithome_broadcast?: BoolNullableWithAggregatesFilter<"LineUser"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"LineUser"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"LineUser"> | Date | string
  }

  export type LineUserArticleWhereInput = {
    AND?: LineUserArticleWhereInput | LineUserArticleWhereInput[]
    OR?: LineUserArticleWhereInput[]
    NOT?: LineUserArticleWhereInput | LineUserArticleWhereInput[]
    id?: IntFilter<"LineUserArticle"> | number
    url?: StringFilter<"LineUserArticle"> | string
    type?: StringFilter<"LineUserArticle"> | string
    created_at?: DateTimeFilter<"LineUserArticle"> | Date | string
    updated_at?: DateTimeFilter<"LineUserArticle"> | Date | string
    authorId?: StringFilter<"LineUserArticle"> | string
    author?: XOR<LineUserRelationFilter, LineUserWhereInput>
  }

  export type LineUserArticleOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
    author?: LineUserOrderByWithRelationInput
  }

  export type LineUserArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LineUserArticleWhereInput | LineUserArticleWhereInput[]
    OR?: LineUserArticleWhereInput[]
    NOT?: LineUserArticleWhereInput | LineUserArticleWhereInput[]
    url?: StringFilter<"LineUserArticle"> | string
    type?: StringFilter<"LineUserArticle"> | string
    created_at?: DateTimeFilter<"LineUserArticle"> | Date | string
    updated_at?: DateTimeFilter<"LineUserArticle"> | Date | string
    authorId?: StringFilter<"LineUserArticle"> | string
    author?: XOR<LineUserRelationFilter, LineUserWhereInput>
  }, "id">

  export type LineUserArticleOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
    _count?: LineUserArticleCountOrderByAggregateInput
    _avg?: LineUserArticleAvgOrderByAggregateInput
    _max?: LineUserArticleMaxOrderByAggregateInput
    _min?: LineUserArticleMinOrderByAggregateInput
    _sum?: LineUserArticleSumOrderByAggregateInput
  }

  export type LineUserArticleScalarWhereWithAggregatesInput = {
    AND?: LineUserArticleScalarWhereWithAggregatesInput | LineUserArticleScalarWhereWithAggregatesInput[]
    OR?: LineUserArticleScalarWhereWithAggregatesInput[]
    NOT?: LineUserArticleScalarWhereWithAggregatesInput | LineUserArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LineUserArticle"> | number
    url?: StringWithAggregatesFilter<"LineUserArticle"> | string
    type?: StringWithAggregatesFilter<"LineUserArticle"> | string
    created_at?: DateTimeWithAggregatesFilter<"LineUserArticle"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"LineUserArticle"> | Date | string
    authorId?: StringWithAggregatesFilter<"LineUserArticle"> | string
  }

  export type LineUserCategoryWhereInput = {
    AND?: LineUserCategoryWhereInput | LineUserCategoryWhereInput[]
    OR?: LineUserCategoryWhereInput[]
    NOT?: LineUserCategoryWhereInput | LineUserCategoryWhereInput[]
    id?: StringFilter<"LineUserCategory"> | string
    name?: StringFilter<"LineUserCategory"> | string
    created_at?: DateTimeFilter<"LineUserCategory"> | Date | string
    updated_at?: DateTimeFilter<"LineUserCategory"> | Date | string
    authorId?: StringFilter<"LineUserCategory"> | string
    author?: XOR<LineUserRelationFilter, LineUserWhereInput>
  }

  export type LineUserCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
    author?: LineUserOrderByWithRelationInput
  }

  export type LineUserCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LineUserCategoryWhereInput | LineUserCategoryWhereInput[]
    OR?: LineUserCategoryWhereInput[]
    NOT?: LineUserCategoryWhereInput | LineUserCategoryWhereInput[]
    name?: StringFilter<"LineUserCategory"> | string
    created_at?: DateTimeFilter<"LineUserCategory"> | Date | string
    updated_at?: DateTimeFilter<"LineUserCategory"> | Date | string
    authorId?: StringFilter<"LineUserCategory"> | string
    author?: XOR<LineUserRelationFilter, LineUserWhereInput>
  }, "id">

  export type LineUserCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
    _count?: LineUserCategoryCountOrderByAggregateInput
    _max?: LineUserCategoryMaxOrderByAggregateInput
    _min?: LineUserCategoryMinOrderByAggregateInput
  }

  export type LineUserCategoryScalarWhereWithAggregatesInput = {
    AND?: LineUserCategoryScalarWhereWithAggregatesInput | LineUserCategoryScalarWhereWithAggregatesInput[]
    OR?: LineUserCategoryScalarWhereWithAggregatesInput[]
    NOT?: LineUserCategoryScalarWhereWithAggregatesInput | LineUserCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LineUserCategory"> | string
    name?: StringWithAggregatesFilter<"LineUserCategory"> | string
    created_at?: DateTimeWithAggregatesFilter<"LineUserCategory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"LineUserCategory"> | Date | string
    authorId?: StringWithAggregatesFilter<"LineUserCategory"> | string
  }

  export type NikeListWhereInput = {
    AND?: NikeListWhereInput | NikeListWhereInput[]
    OR?: NikeListWhereInput[]
    NOT?: NikeListWhereInput | NikeListWhereInput[]
    id?: IntFilter<"NikeList"> | number
    title?: StringFilter<"NikeList"> | string
    descs?: StringNullableFilter<"NikeList"> | string | null
    img?: StringFilter<"NikeList"> | string
    link?: StringFilter<"NikeList"> | string
    time?: StringFilter<"NikeList"> | string
    created_at?: DateTimeFilter<"NikeList"> | Date | string
    updated_at?: DateTimeFilter<"NikeList"> | Date | string
  }

  export type NikeListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrderInput | SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NikeListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NikeListWhereInput | NikeListWhereInput[]
    OR?: NikeListWhereInput[]
    NOT?: NikeListWhereInput | NikeListWhereInput[]
    title?: StringFilter<"NikeList"> | string
    descs?: StringNullableFilter<"NikeList"> | string | null
    img?: StringFilter<"NikeList"> | string
    link?: StringFilter<"NikeList"> | string
    time?: StringFilter<"NikeList"> | string
    created_at?: DateTimeFilter<"NikeList"> | Date | string
    updated_at?: DateTimeFilter<"NikeList"> | Date | string
  }, "id">

  export type NikeListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrderInput | SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: NikeListCountOrderByAggregateInput
    _avg?: NikeListAvgOrderByAggregateInput
    _max?: NikeListMaxOrderByAggregateInput
    _min?: NikeListMinOrderByAggregateInput
    _sum?: NikeListSumOrderByAggregateInput
  }

  export type NikeListScalarWhereWithAggregatesInput = {
    AND?: NikeListScalarWhereWithAggregatesInput | NikeListScalarWhereWithAggregatesInput[]
    OR?: NikeListScalarWhereWithAggregatesInput[]
    NOT?: NikeListScalarWhereWithAggregatesInput | NikeListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NikeList"> | number
    title?: StringWithAggregatesFilter<"NikeList"> | string
    descs?: StringNullableWithAggregatesFilter<"NikeList"> | string | null
    img?: StringWithAggregatesFilter<"NikeList"> | string
    link?: StringWithAggregatesFilter<"NikeList"> | string
    time?: StringWithAggregatesFilter<"NikeList"> | string
    created_at?: DateTimeWithAggregatesFilter<"NikeList"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"NikeList"> | Date | string
  }

  export type HypeBeastListWhereInput = {
    AND?: HypeBeastListWhereInput | HypeBeastListWhereInput[]
    OR?: HypeBeastListWhereInput[]
    NOT?: HypeBeastListWhereInput | HypeBeastListWhereInput[]
    id?: IntFilter<"HypeBeastList"> | number
    title?: StringFilter<"HypeBeastList"> | string
    descs?: StringNullableFilter<"HypeBeastList"> | string | null
    img?: StringFilter<"HypeBeastList"> | string
    link?: StringFilter<"HypeBeastList"> | string
    time?: StringFilter<"HypeBeastList"> | string
    created_at?: DateTimeFilter<"HypeBeastList"> | Date | string
    updated_at?: DateTimeFilter<"HypeBeastList"> | Date | string
  }

  export type HypeBeastListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrderInput | SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HypeBeastListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HypeBeastListWhereInput | HypeBeastListWhereInput[]
    OR?: HypeBeastListWhereInput[]
    NOT?: HypeBeastListWhereInput | HypeBeastListWhereInput[]
    title?: StringFilter<"HypeBeastList"> | string
    descs?: StringNullableFilter<"HypeBeastList"> | string | null
    img?: StringFilter<"HypeBeastList"> | string
    link?: StringFilter<"HypeBeastList"> | string
    time?: StringFilter<"HypeBeastList"> | string
    created_at?: DateTimeFilter<"HypeBeastList"> | Date | string
    updated_at?: DateTimeFilter<"HypeBeastList"> | Date | string
  }, "id">

  export type HypeBeastListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrderInput | SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HypeBeastListCountOrderByAggregateInput
    _avg?: HypeBeastListAvgOrderByAggregateInput
    _max?: HypeBeastListMaxOrderByAggregateInput
    _min?: HypeBeastListMinOrderByAggregateInput
    _sum?: HypeBeastListSumOrderByAggregateInput
  }

  export type HypeBeastListScalarWhereWithAggregatesInput = {
    AND?: HypeBeastListScalarWhereWithAggregatesInput | HypeBeastListScalarWhereWithAggregatesInput[]
    OR?: HypeBeastListScalarWhereWithAggregatesInput[]
    NOT?: HypeBeastListScalarWhereWithAggregatesInput | HypeBeastListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HypeBeastList"> | number
    title?: StringWithAggregatesFilter<"HypeBeastList"> | string
    descs?: StringNullableWithAggregatesFilter<"HypeBeastList"> | string | null
    img?: StringWithAggregatesFilter<"HypeBeastList"> | string
    link?: StringWithAggregatesFilter<"HypeBeastList"> | string
    time?: StringWithAggregatesFilter<"HypeBeastList"> | string
    created_at?: DateTimeWithAggregatesFilter<"HypeBeastList"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HypeBeastList"> | Date | string
  }

  export type IthomeListWhereInput = {
    AND?: IthomeListWhereInput | IthomeListWhereInput[]
    OR?: IthomeListWhereInput[]
    NOT?: IthomeListWhereInput | IthomeListWhereInput[]
    id?: IntFilter<"IthomeList"> | number
    title?: StringFilter<"IthomeList"> | string
    descs?: StringNullableFilter<"IthomeList"> | string | null
    img?: StringFilter<"IthomeList"> | string
    link?: StringFilter<"IthomeList"> | string
    time?: StringFilter<"IthomeList"> | string
    created_at?: DateTimeFilter<"IthomeList"> | Date | string
    updated_at?: DateTimeFilter<"IthomeList"> | Date | string
  }

  export type IthomeListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrderInput | SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IthomeListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IthomeListWhereInput | IthomeListWhereInput[]
    OR?: IthomeListWhereInput[]
    NOT?: IthomeListWhereInput | IthomeListWhereInput[]
    title?: StringFilter<"IthomeList"> | string
    descs?: StringNullableFilter<"IthomeList"> | string | null
    img?: StringFilter<"IthomeList"> | string
    link?: StringFilter<"IthomeList"> | string
    time?: StringFilter<"IthomeList"> | string
    created_at?: DateTimeFilter<"IthomeList"> | Date | string
    updated_at?: DateTimeFilter<"IthomeList"> | Date | string
  }, "id">

  export type IthomeListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrderInput | SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: IthomeListCountOrderByAggregateInput
    _avg?: IthomeListAvgOrderByAggregateInput
    _max?: IthomeListMaxOrderByAggregateInput
    _min?: IthomeListMinOrderByAggregateInput
    _sum?: IthomeListSumOrderByAggregateInput
  }

  export type IthomeListScalarWhereWithAggregatesInput = {
    AND?: IthomeListScalarWhereWithAggregatesInput | IthomeListScalarWhereWithAggregatesInput[]
    OR?: IthomeListScalarWhereWithAggregatesInput[]
    NOT?: IthomeListScalarWhereWithAggregatesInput | IthomeListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IthomeList"> | number
    title?: StringWithAggregatesFilter<"IthomeList"> | string
    descs?: StringNullableWithAggregatesFilter<"IthomeList"> | string | null
    img?: StringWithAggregatesFilter<"IthomeList"> | string
    link?: StringWithAggregatesFilter<"IthomeList"> | string
    time?: StringWithAggregatesFilter<"IthomeList"> | string
    created_at?: DateTimeWithAggregatesFilter<"IthomeList"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"IthomeList"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    account: string
    password: string
    avatar: string
    status: boolean
    gender: string
    birthday: string
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    account: string
    password: string
    avatar: string
    status: boolean
    gender: string
    birthday: string
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    gender?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    gender?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    account: string
    password: string
    avatar: string
    status: boolean
    gender: string
    birthday: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    gender?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    gender?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRoleInput
    UserRole?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRoleNestedInput
    UserRole?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Role?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Role?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutUserRoleInput
    role: RoleCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    userId: number
    roleId: number
    created_at?: Date | string
  }

  export type UserRoleUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyInput = {
    id?: number
    userId: number
    roleId: number
    created_at?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutRolePermissionInput
    permission: PermissionCreateNestedOneWithoutRoleInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: number
    roleId: number
    permissionId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolePermissionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRoleNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyInput = {
    id?: number
    roleId: number
    permissionId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolePermissionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCreateInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: LineUserCategoryCreateNestedManyWithoutAuthorInput
    Article?: LineUserArticleCreateNestedManyWithoutAuthorInput
  }

  export type LineUserUncheckedCreateInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: LineUserCategoryUncheckedCreateNestedManyWithoutAuthorInput
    Article?: LineUserArticleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type LineUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: LineUserCategoryUpdateManyWithoutAuthorNestedInput
    Article?: LineUserArticleUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: LineUserCategoryUncheckedUpdateManyWithoutAuthorNestedInput
    Article?: LineUserArticleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserCreateManyInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleCreateInput = {
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    author: LineUserCreateNestedOneWithoutArticleInput
  }

  export type LineUserArticleUncheckedCreateInput = {
    id?: number
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    authorId: string
  }

  export type LineUserArticleUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: LineUserUpdateOneRequiredWithoutArticleNestedInput
  }

  export type LineUserArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type LineUserArticleCreateManyInput = {
    id?: number
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    authorId: string
  }

  export type LineUserArticleUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type LineUserCategoryCreateInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    author: LineUserCreateNestedOneWithoutCategoryInput
  }

  export type LineUserCategoryUncheckedCreateInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    authorId: string
  }

  export type LineUserCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: LineUserUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type LineUserCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type LineUserCategoryCreateManyInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    authorId: string
  }

  export type LineUserCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type NikeListCreateInput = {
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NikeListUncheckedCreateInput = {
    id?: number
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NikeListUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NikeListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NikeListCreateManyInput = {
    id?: number
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NikeListUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NikeListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HypeBeastListCreateInput = {
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HypeBeastListUncheckedCreateInput = {
    id?: number
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HypeBeastListUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HypeBeastListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HypeBeastListCreateManyInput = {
    id?: number
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HypeBeastListUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HypeBeastListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IthomeListCreateInput = {
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IthomeListUncheckedCreateInput = {
    id?: number
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IthomeListUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IthomeListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IthomeListCreateManyInput = {
    id?: number
    title: string
    descs?: string | null
    img: string
    link: string
    time: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IthomeListUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IthomeListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descs?: NullableStringFieldUpdateOperationsInput | string | null
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    account?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    account?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    account?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type PermissionRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type LineUserCategoryListRelationFilter = {
    every?: LineUserCategoryWhereInput
    some?: LineUserCategoryWhereInput
    none?: LineUserCategoryWhereInput
  }

  export type LineUserArticleListRelationFilter = {
    every?: LineUserArticleWhereInput
    some?: LineUserArticleWhereInput
    none?: LineUserArticleWhereInput
  }

  export type LineUserCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LineUserArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LineUserCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    status?: SortOrder
    callback?: SortOrder
    url?: SortOrder
    type?: SortOrder
    nike_broadcast?: SortOrder
    hypebeast_broadcast?: SortOrder
    ithome_broadcast?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LineUserMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    status?: SortOrder
    callback?: SortOrder
    url?: SortOrder
    type?: SortOrder
    nike_broadcast?: SortOrder
    hypebeast_broadcast?: SortOrder
    ithome_broadcast?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LineUserMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    status?: SortOrder
    callback?: SortOrder
    url?: SortOrder
    type?: SortOrder
    nike_broadcast?: SortOrder
    hypebeast_broadcast?: SortOrder
    ithome_broadcast?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LineUserRelationFilter = {
    is?: LineUserWhereInput
    isNot?: LineUserWhereInput
  }

  export type LineUserArticleCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserArticleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LineUserArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserArticleMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserArticleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LineUserCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type NikeListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NikeListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NikeListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NikeListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NikeListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HypeBeastListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HypeBeastListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HypeBeastListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HypeBeastListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HypeBeastListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IthomeListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IthomeListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IthomeListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IthomeListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descs?: SortOrder
    img?: SortOrder
    link?: SortOrder
    time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IthomeListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRoleInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    upsert?: UserUpsertWithoutUserRoleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRoleInput, UserUpdateWithoutUserRoleInput>, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRoleInput
    upsert?: RoleUpsertWithoutUserRoleInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRoleInput, RoleUpdateWithoutUserRoleInput>, RoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRoleInput = {
    create?: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionInput
    upsert?: RoleUpsertWithoutRolePermissionInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionInput, RoleUpdateWithoutRolePermissionInput>, RoleUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput
    upsert?: PermissionUpsertWithoutRoleInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRoleInput, PermissionUpdateWithoutRoleInput>, PermissionUncheckedUpdateWithoutRoleInput>
  }

  export type LineUserCategoryCreateNestedManyWithoutAuthorInput = {
    create?: XOR<LineUserCategoryCreateWithoutAuthorInput, LineUserCategoryUncheckedCreateWithoutAuthorInput> | LineUserCategoryCreateWithoutAuthorInput[] | LineUserCategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserCategoryCreateOrConnectWithoutAuthorInput | LineUserCategoryCreateOrConnectWithoutAuthorInput[]
    createMany?: LineUserCategoryCreateManyAuthorInputEnvelope
    connect?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
  }

  export type LineUserArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput> | LineUserArticleCreateWithoutAuthorInput[] | LineUserArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserArticleCreateOrConnectWithoutAuthorInput | LineUserArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    connect?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
  }

  export type LineUserCategoryUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<LineUserCategoryCreateWithoutAuthorInput, LineUserCategoryUncheckedCreateWithoutAuthorInput> | LineUserCategoryCreateWithoutAuthorInput[] | LineUserCategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserCategoryCreateOrConnectWithoutAuthorInput | LineUserCategoryCreateOrConnectWithoutAuthorInput[]
    createMany?: LineUserCategoryCreateManyAuthorInputEnvelope
    connect?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
  }

  export type LineUserArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput> | LineUserArticleCreateWithoutAuthorInput[] | LineUserArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserArticleCreateOrConnectWithoutAuthorInput | LineUserArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    connect?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type LineUserCategoryUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<LineUserCategoryCreateWithoutAuthorInput, LineUserCategoryUncheckedCreateWithoutAuthorInput> | LineUserCategoryCreateWithoutAuthorInput[] | LineUserCategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserCategoryCreateOrConnectWithoutAuthorInput | LineUserCategoryCreateOrConnectWithoutAuthorInput[]
    upsert?: LineUserCategoryUpsertWithWhereUniqueWithoutAuthorInput | LineUserCategoryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: LineUserCategoryCreateManyAuthorInputEnvelope
    set?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    disconnect?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    delete?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    connect?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    update?: LineUserCategoryUpdateWithWhereUniqueWithoutAuthorInput | LineUserCategoryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: LineUserCategoryUpdateManyWithWhereWithoutAuthorInput | LineUserCategoryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: LineUserCategoryScalarWhereInput | LineUserCategoryScalarWhereInput[]
  }

  export type LineUserArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput> | LineUserArticleCreateWithoutAuthorInput[] | LineUserArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserArticleCreateOrConnectWithoutAuthorInput | LineUserArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput | LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    set?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    disconnect?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    delete?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    connect?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    update?: LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput | LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: LineUserArticleUpdateManyWithWhereWithoutAuthorInput | LineUserArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: LineUserArticleScalarWhereInput | LineUserArticleScalarWhereInput[]
  }

  export type LineUserCategoryUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<LineUserCategoryCreateWithoutAuthorInput, LineUserCategoryUncheckedCreateWithoutAuthorInput> | LineUserCategoryCreateWithoutAuthorInput[] | LineUserCategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserCategoryCreateOrConnectWithoutAuthorInput | LineUserCategoryCreateOrConnectWithoutAuthorInput[]
    upsert?: LineUserCategoryUpsertWithWhereUniqueWithoutAuthorInput | LineUserCategoryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: LineUserCategoryCreateManyAuthorInputEnvelope
    set?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    disconnect?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    delete?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    connect?: LineUserCategoryWhereUniqueInput | LineUserCategoryWhereUniqueInput[]
    update?: LineUserCategoryUpdateWithWhereUniqueWithoutAuthorInput | LineUserCategoryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: LineUserCategoryUpdateManyWithWhereWithoutAuthorInput | LineUserCategoryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: LineUserCategoryScalarWhereInput | LineUserCategoryScalarWhereInput[]
  }

  export type LineUserArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput> | LineUserArticleCreateWithoutAuthorInput[] | LineUserArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: LineUserArticleCreateOrConnectWithoutAuthorInput | LineUserArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput | LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    set?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    disconnect?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    delete?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    connect?: LineUserArticleWhereUniqueInput | LineUserArticleWhereUniqueInput[]
    update?: LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput | LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: LineUserArticleUpdateManyWithWhereWithoutAuthorInput | LineUserArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: LineUserArticleScalarWhereInput | LineUserArticleScalarWhereInput[]
  }

  export type LineUserCreateNestedOneWithoutArticleInput = {
    create?: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: LineUserCreateOrConnectWithoutArticleInput
    connect?: LineUserWhereUniqueInput
  }

  export type LineUserUpdateOneRequiredWithoutArticleNestedInput = {
    create?: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: LineUserCreateOrConnectWithoutArticleInput
    upsert?: LineUserUpsertWithoutArticleInput
    connect?: LineUserWhereUniqueInput
    update?: XOR<XOR<LineUserUpdateToOneWithWhereWithoutArticleInput, LineUserUpdateWithoutArticleInput>, LineUserUncheckedUpdateWithoutArticleInput>
  }

  export type LineUserCreateNestedOneWithoutCategoryInput = {
    create?: XOR<LineUserCreateWithoutCategoryInput, LineUserUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: LineUserCreateOrConnectWithoutCategoryInput
    connect?: LineUserWhereUniqueInput
  }

  export type LineUserUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<LineUserCreateWithoutCategoryInput, LineUserUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: LineUserCreateOrConnectWithoutCategoryInput
    upsert?: LineUserUpsertWithoutCategoryInput
    connect?: LineUserWhereUniqueInput
    update?: XOR<XOR<LineUserUpdateToOneWithWhereWithoutCategoryInput, LineUserUpdateWithoutCategoryInput>, LineUserUncheckedUpdateWithoutCategoryInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    created_at?: Date | string
    role: RoleCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleId: number
    created_at?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    created_at?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type RolePermissionCreateWithoutRoleInput = {
    created_at?: Date | string
    updated_at?: Date | string
    permission: PermissionCreateNestedOneWithoutRoleInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    id?: number
    permissionId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleCreateWithoutRoleInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    userId: number
    created_at?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    created_at?: DateTimeFilter<"RolePermission"> | Date | string
    updated_at?: DateTimeFilter<"RolePermission"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    id?: number
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type UserCreateWithoutUserRoleInput = {
    name: string
    account: string
    password: string
    avatar: string
    status: boolean
    gender: string
    birthday: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    id?: number
    name: string
    account: string
    password: string
    avatar: string
    status: boolean
    gender: string
    birthday: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type RoleCreateWithoutUserRoleInput = {
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUserRoleInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUserRoleInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpsertWithoutUserRoleInput = {
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateWithoutUserRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    gender?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    gender?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutUserRoleInput = {
    update: XOR<RoleUpdateWithoutUserRoleInput, RoleUncheckedUpdateWithoutUserRoleInput>
    create: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRoleInput, RoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleUpdateWithoutUserRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateWithoutRolePermissionInput = {
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionCreateWithoutRoleInput = {
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    creator: string
    remark?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRoleInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput>
  }

  export type RoleUpsertWithoutRolePermissionInput = {
    update: XOR<RoleUpdateWithoutRolePermissionInput, RoleUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionInput, RoleUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RoleUpdateWithoutRolePermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRoleInput = {
    update: XOR<PermissionUpdateWithoutRoleInput, PermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRoleInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRoleInput, PermissionUncheckedUpdateWithoutRoleInput>
  }

  export type PermissionUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCategoryCreateWithoutAuthorInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserCategoryUncheckedCreateWithoutAuthorInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserCategoryCreateOrConnectWithoutAuthorInput = {
    where: LineUserCategoryWhereUniqueInput
    create: XOR<LineUserCategoryCreateWithoutAuthorInput, LineUserCategoryUncheckedCreateWithoutAuthorInput>
  }

  export type LineUserCategoryCreateManyAuthorInputEnvelope = {
    data: LineUserCategoryCreateManyAuthorInput | LineUserCategoryCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LineUserArticleCreateWithoutAuthorInput = {
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserArticleUncheckedCreateWithoutAuthorInput = {
    id?: number
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserArticleCreateOrConnectWithoutAuthorInput = {
    where: LineUserArticleWhereUniqueInput
    create: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput>
  }

  export type LineUserArticleCreateManyAuthorInputEnvelope = {
    data: LineUserArticleCreateManyAuthorInput | LineUserArticleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LineUserCategoryUpsertWithWhereUniqueWithoutAuthorInput = {
    where: LineUserCategoryWhereUniqueInput
    update: XOR<LineUserCategoryUpdateWithoutAuthorInput, LineUserCategoryUncheckedUpdateWithoutAuthorInput>
    create: XOR<LineUserCategoryCreateWithoutAuthorInput, LineUserCategoryUncheckedCreateWithoutAuthorInput>
  }

  export type LineUserCategoryUpdateWithWhereUniqueWithoutAuthorInput = {
    where: LineUserCategoryWhereUniqueInput
    data: XOR<LineUserCategoryUpdateWithoutAuthorInput, LineUserCategoryUncheckedUpdateWithoutAuthorInput>
  }

  export type LineUserCategoryUpdateManyWithWhereWithoutAuthorInput = {
    where: LineUserCategoryScalarWhereInput
    data: XOR<LineUserCategoryUpdateManyMutationInput, LineUserCategoryUncheckedUpdateManyWithoutAuthorInput>
  }

  export type LineUserCategoryScalarWhereInput = {
    AND?: LineUserCategoryScalarWhereInput | LineUserCategoryScalarWhereInput[]
    OR?: LineUserCategoryScalarWhereInput[]
    NOT?: LineUserCategoryScalarWhereInput | LineUserCategoryScalarWhereInput[]
    id?: StringFilter<"LineUserCategory"> | string
    name?: StringFilter<"LineUserCategory"> | string
    created_at?: DateTimeFilter<"LineUserCategory"> | Date | string
    updated_at?: DateTimeFilter<"LineUserCategory"> | Date | string
    authorId?: StringFilter<"LineUserCategory"> | string
  }

  export type LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: LineUserArticleWhereUniqueInput
    update: XOR<LineUserArticleUpdateWithoutAuthorInput, LineUserArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput>
  }

  export type LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: LineUserArticleWhereUniqueInput
    data: XOR<LineUserArticleUpdateWithoutAuthorInput, LineUserArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type LineUserArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: LineUserArticleScalarWhereInput
    data: XOR<LineUserArticleUpdateManyMutationInput, LineUserArticleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type LineUserArticleScalarWhereInput = {
    AND?: LineUserArticleScalarWhereInput | LineUserArticleScalarWhereInput[]
    OR?: LineUserArticleScalarWhereInput[]
    NOT?: LineUserArticleScalarWhereInput | LineUserArticleScalarWhereInput[]
    id?: IntFilter<"LineUserArticle"> | number
    url?: StringFilter<"LineUserArticle"> | string
    type?: StringFilter<"LineUserArticle"> | string
    created_at?: DateTimeFilter<"LineUserArticle"> | Date | string
    updated_at?: DateTimeFilter<"LineUserArticle"> | Date | string
    authorId?: StringFilter<"LineUserArticle"> | string
  }

  export type LineUserCreateWithoutArticleInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: LineUserCategoryCreateNestedManyWithoutAuthorInput
  }

  export type LineUserUncheckedCreateWithoutArticleInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: LineUserCategoryUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type LineUserCreateOrConnectWithoutArticleInput = {
    where: LineUserWhereUniqueInput
    create: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
  }

  export type LineUserUpsertWithoutArticleInput = {
    update: XOR<LineUserUpdateWithoutArticleInput, LineUserUncheckedUpdateWithoutArticleInput>
    create: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
    where?: LineUserWhereInput
  }

  export type LineUserUpdateToOneWithWhereWithoutArticleInput = {
    where?: LineUserWhereInput
    data: XOR<LineUserUpdateWithoutArticleInput, LineUserUncheckedUpdateWithoutArticleInput>
  }

  export type LineUserUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: LineUserCategoryUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: LineUserCategoryUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserCreateWithoutCategoryInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    Article?: LineUserArticleCreateNestedManyWithoutAuthorInput
  }

  export type LineUserUncheckedCreateWithoutCategoryInput = {
    id: string
    displayName?: string | null
    pictureUrl?: string | null
    status?: boolean | null
    callback?: string | null
    url?: string | null
    type?: string | null
    nike_broadcast?: boolean | null
    hypebeast_broadcast?: boolean | null
    ithome_broadcast?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    Article?: LineUserArticleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type LineUserCreateOrConnectWithoutCategoryInput = {
    where: LineUserWhereUniqueInput
    create: XOR<LineUserCreateWithoutCategoryInput, LineUserUncheckedCreateWithoutCategoryInput>
  }

  export type LineUserUpsertWithoutCategoryInput = {
    update: XOR<LineUserUpdateWithoutCategoryInput, LineUserUncheckedUpdateWithoutCategoryInput>
    create: XOR<LineUserCreateWithoutCategoryInput, LineUserUncheckedCreateWithoutCategoryInput>
    where?: LineUserWhereInput
  }

  export type LineUserUpdateToOneWithWhereWithoutCategoryInput = {
    where?: LineUserWhereInput
    data: XOR<LineUserUpdateWithoutCategoryInput, LineUserUncheckedUpdateWithoutCategoryInput>
  }

  export type LineUserUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Article?: LineUserArticleUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callback?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nike_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hypebeast_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ithome_broadcast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Article?: LineUserArticleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    id?: number
    roleId: number
    created_at?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyRoleInput = {
    id?: number
    permissionId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    id?: number
    userId: number
    created_at?: Date | string
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutRoleNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyPermissionInput = {
    id?: number
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCategoryCreateManyAuthorInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserArticleCreateManyAuthorInput = {
    id?: number
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LineUserCategoryUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCategoryUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCategoryUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUpdateWithoutAuthorInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionCountOutputTypeDefaultArgs instead
     */
    export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LineUserCountOutputTypeDefaultArgs instead
     */
    export type LineUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LineUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolePermissionDefaultArgs instead
     */
    export type RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolePermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LineUserDefaultArgs instead
     */
    export type LineUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LineUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LineUserArticleDefaultArgs instead
     */
    export type LineUserArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LineUserArticleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LineUserCategoryDefaultArgs instead
     */
    export type LineUserCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LineUserCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NikeListDefaultArgs instead
     */
    export type NikeListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NikeListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HypeBeastListDefaultArgs instead
     */
    export type HypeBeastListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HypeBeastListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IthomeListDefaultArgs instead
     */
    export type IthomeListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IthomeListDefaultArgs<ExtArgs>

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