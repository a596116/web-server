
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


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
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phone: 'phone',
  password: 'password',
  avatar: 'avatar',
  status: 'status',
  gender: 'gender',
  birthday: 'birthday',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  creator: 'creator',
  remark: 'remark',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  creator: 'creator',
  remark: 'remark',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserRoleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roleId: 'roleId',
  created_at: 'created_at'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  permissionId: 'permissionId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LineUserScalarFieldEnum = {
  id: 'id',
  displayName: 'displayName',
  pictureUrl: 'pictureUrl',
  callback: 'callback',
  url: 'url',
  type: 'type',
  nike_broadcast: 'nike_broadcast',
  hypebeast_broadcast: 'hypebeast_broadcast',
  ithome_broadcast: 'ithome_broadcast',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LineUserArticleScalarFieldEnum = {
  id: 'id',
  url: 'url',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  authorId: 'authorId'
};

exports.Prisma.LineUserCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  authorId: 'authorId'
};

exports.Prisma.NikeListScalarFieldEnum = {
  id: 'id',
  title: 'title',
  descs: 'descs',
  img: 'img',
  link: 'link',
  time: 'time',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HypeBeastListScalarFieldEnum = {
  id: 'id',
  title: 'title',
  descs: 'descs',
  img: 'img',
  link: 'link',
  time: 'time',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.IthomeListScalarFieldEnum = {
  id: 'id',
  title: 'title',
  descs: 'descs',
  img: 'img',
  link: 'link',
  time: 'time',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
