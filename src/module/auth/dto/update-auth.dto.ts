import { PartialType } from '@nestjs/mapped-types'
import { RegisterAuthDto } from './registerAuth.dto'
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateAuthDto {
    @IsNumber({}, { message: '角色ID必須為數字' })
    @ApiProperty({ required: true, description: '角色ID', default: 1 })
    public roleId: number

    @IsBoolean({ message: '用戶狀態必須為true or false' })
    @ApiProperty({ required: true, description: 'status', default: true })
    public status: boolean
}
export class UpdateInfoDto {
    @IsNotEmpty({ message: '姓名不能為空' })
    @ApiProperty({ required: true, description: '姓名', default: 'haodai' })
    public name: string

    @IsNotEmpty({ message: '生日不能為空' })
    @ApiProperty({ required: true, description: '生日', default: '2000-01-01' })
    public birthday: string

    @IsNotEmpty({ message: '性別不能為空' })
    @ApiProperty({ required: true, description: '性別', default: 'other' })
    public gender: string

    @IsString({ message: '頭像必須為字串' })
    @ApiProperty({ description: '頭像' })
    public avatar: string

}
