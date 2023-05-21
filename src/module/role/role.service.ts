import { Injectable } from '@nestjs/common'
import { createPermissionDto, createRoleDto, editRoleDto } from './dto/create-role.dto'
import { PrismaService } from '../prisma/prisma.service'
import { success } from 'src/common/helper'
import { IQuery } from 'src/common/interface/query.interface'
import { successPaginate } from 'src/common/helper/response.helper'
import { Prisma } from 'prisma/client'
import { formatInclude } from 'src/utils/formatInclude'

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) { }

  async findAllRole(query: IQuery) {
    const sort = {}
    if (query.sort) {
      sort[query.sort.split('-')[0]] = query.sort.split('-')[1]
    }
    const data = await this.prisma.role.findMany({
      skip: query.take * (query.page - 1),
      take: +query.take,
      orderBy: sort,
      where: {
        name: {
          contains: query.q
        },
      },
      include: {
        RolePermission: {
          include: {
            permission: true
          }
        }
      }
    },
    )
    data.forEach((item: any) => {
      item.permissions = item.RolePermission.map(item => {
        return item.permission.name
      })
    })

    const total = await this.prisma.role.count()
    return successPaginate({ ...query, total, data })
  }

  async findOneRole(id: number) {
    const data = await this.prisma.role.findUnique({
      where: { id },
    })
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: { RolePermission: true }
    })
    const params = {
      ...data,
      role: formatInclude(role.RolePermission, 'permissionId')
    }
    return success({ data: params })
  }

  /**
   * @description: 新增角色
   */
  async createRoles(role: createRoleDto) {
    try {
      await this.prisma.role.create({
        data: {
          name: role.name,
          creator: role.creator || null,
          remark: role.remark || null,
          RolePermission: {
            createMany: {
              data: role.role.map((item) => ({ permissionId: item }))
            }
          }
        },
      })
      return success({ message: "新增角色成功" })
    } catch (error) {
      console.log(error)
      return error('新增角色失敗，錯誤詳情：' + error)
    }
  }

  /**
   * @description: 編輯角色
   */
  async editRole(id: number, role: editRoleDto) {
    try {
      await this.prisma.role.update({
        where: { id },
        data: {
          RolePermission: {
            deleteMany: { roleId: id },
            createMany: {
              data: role.role.map((item) => ({ permissionId: item }))
            },
          },
        },
      })
      return success({ message: "編輯角色成功" })
    } catch (error) {
      console.log(error)
      return error('編輯角色失敗，錯誤詳情：' + error)
    }
  }

  /**
   * @description: 刪除角色
   */
  async deleteRole(id: number) {
    try {
      await this.prisma.role.delete({
        where: { id },
        include: { RolePermission: true }
      })
      return success({ message: "刪除角色成功" })
    } catch (error) {
      console.log(error)
      return error('刪除角色失敗，錯誤詳情：' + error)
    }
  }


  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------


  async findAllPermission(query: IQuery) {
    const sort = {}
    if (query.sort) {
      sort[query.sort.split('-')[0]] = query.sort.split('-')[1]
    }
    const data = await this.prisma.permission.findMany({
      skip: query.take * (query.page - 1),
      take: +query.take,
      orderBy: sort,
      where: {
        name: {
          contains: query.q
        },
      },
    },
    )
    const total = await this.prisma.permission.count()
    return successPaginate({ ...query, total, data })
  }

  async findOnePermission(id: number) {
    const data = await this.prisma.permission.findUnique({
      where: { id },
      // include: { permissions: true }
    })
    return success({ data })
  }


  /**
   * @description: 新增權限
   */
  async createPermissions(role: createPermissionDto) {
    try {
      await this.prisma.permission.createMany({
        data: role.permissions.map((item) => (item)),
      })
      return success({ message: "新增權限成功" })
    } catch (error) {
      console.log(error)
      return error('新增權限失敗，錯誤詳情：' + error)
    }
  }

  /**
     * @description: 編輯權限
     */
  async editPermissions(id: number, role: any) {
    try {
      await this.prisma.permission.update({
        where: { id },
        data: {
          remark: role.remark || null,
        },
      })
      return success({ message: "編輯權限成功" })
    } catch (error) {
      console.log(error)
      return error('編輯權限失敗，錯誤詳情：' + error)
    }
  }

  /**
   * @description: 刪除權限
   */
  async deletePermissions(id: number) {
    try {
      await this.prisma.permission.delete({
        where: { id },
        include: { Role: true }
      })
      return success({ message: "刪除權限成功" })
    } catch (error) {
      console.log(error)
      return error('刪除權限失敗，錯誤詳情：' + error)
    }
  }


}

