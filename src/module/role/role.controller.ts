import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common'
import { RoleService } from './role.service'
import { createPermissionDto, createRoleDto, editRoleDto } from './dto/create-role.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IQuery } from 'src/common/interface/query.interface'

@Controller('user')
@ApiTags('權限')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  /**
   * @description: 獲取角色
   */
  @Get('role')
  @ApiOperation({ summary: '獲取所有角色', description: '獲取所有角色' })
  findAllRole(@Query() query: IQuery) {
    return this.roleService.findAllRole(query)
  }
  @Get('role/:id')
  @ApiOperation({ summary: '獲取角色id', description: '獲取角色id' })
  findOneRole(@Param('id') id: number) {
    return this.roleService.findOneRole(+id)
  }

  /**
   * @description: 新增角色
   */
  @Post('role')
  @ApiOperation({ summary: '新增角色', description: '新增用戶角色' })
  createRoles(@Body() role: createRoleDto) {
    return this.roleService.createRoles(role)
  }

  /**
   * @description: 更新角色
   */
  @Put('role/:id')
  @ApiOperation({ summary: '編輯用戶角色', description: '編輯用戶角色' })
  editUserRole(@Body() role: editRoleDto, @Param('id') id: number) {
    return this.roleService.editRole(id, role)
  }

  /**
   * @description: 刪除角色
   */
  @Delete('role/:id')
  removeUserRole(@Param('id') id: string) {
    return this.roleService.deleteRole(+id)
  }

  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------

  /**
   * @description: 獲取權限
   */
  @Get('permission')
  @ApiOperation({ summary: '獲取所有權限', description: '獲取所有權限' })
  findAllPermission(@Query() query: IQuery) {
    return this.roleService.findAllPermission(query)
  }
  @Get('permission/:id')
  @ApiOperation({ summary: '獲取權限id', description: '獲取權限id' })
  findOnePermission(@Param('id') id: number) {
    return this.roleService.findOnePermission(+id)
  }

  /**
   * @description: 新增權限
   */
  @Post('permission')
  @ApiOperation({ summary: '新增權限', description: '新增角色權限' })
  createPermissions(@Body() role: createPermissionDto) {
    return this.roleService.createPermissions(role)
  }

  /**
   * @description: 更新權限
   */
  @Put('permission/:id')
  @ApiOperation({ summary: '編輯權限', description: '編輯權限' })
  editPermissions(@Body() permissions: any, @Param('id') id: number) {
    return this.roleService.editPermissions(id, permissions)
  }

  /**
   * @description: 刪除權限
   */
  @Delete('permission/:id')
  removePermissions(@Param('id') id: string) {
    return this.roleService.deletePermissions(+id)
  }
}
