import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator"

/**
 * @description: 新增角色
 */
export class createRoleDto {
    @IsString({ message: '角色名稱必須為字符串' })
    @IsNotEmpty({ message: '角色名稱不能為空' })
    @ApiProperty({ required: true, description: '角色名稱', default: '超級用戶' })
    public name: string

    @IsString({ message: '創建者必須為字符串' })
    @ApiProperty({ description: '創建者', default: 'haodai' })
    public creator: string

    @ApiProperty({ description: '備註', default: '備註' })
    public remark?: string

    @IsArray({ message: '角色權限ID必須為數組' })
    @IsNotEmpty({ message: '角色權限ID不能為空' })
    @ApiProperty({ required: true, description: '角色權限ID', default: [1, 2, 3] })
    public role: number[]
}

/**
 * @description: 新增權限
 */
export class createPermissionDto {
    @IsArray({ message: '權限必須為數組' })
    @IsNotEmpty({ message: '權限不能為空' })
    @ApiProperty({ required: true, description: '權限', default: [{ name: 'create', creator: 'haodai', remark: null }, { name: 'edit', creator: 'haodai', remark: null }, { name: 'delete', creator: 'haodai', remark: null }] })
    public permissions: { name: string, creator: string, remark: string }[]
}




export class editRoleDto {
    @IsNumber({}, { message: 'Id必須為數字' })
    @IsNotEmpty({ message: 'Id不能為空' })
    @ApiProperty({ required: true, description: 'Id', default: 1 })
    public id: number

    @IsString({ message: '權限必須為字符串' })
    @IsNotEmpty({ message: '權限不能為空' })
    @ApiProperty({ required: true, description: '權限', default: '超級用戶' })
    public name: string

    @IsArray({ message: '權限必須為數組' })
    @IsNotEmpty({ message: '權限不能為空' })
    @ApiProperty({ required: true, description: '權限', default: [1] })
    public role: number[]
}
