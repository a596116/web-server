import { PartialType } from '@nestjs/mapped-types'
import { RegisterAuthDto } from './registerAuth.dto'
import { IsBoolean, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateAuthDto {
    @IsNumber({}, { message: '角色ID必須為數字' })
    @ApiProperty({ required: true, description: '角色ID', default: 1 })
    public roleId: number

    @IsBoolean({ message: '用戶狀態必須為true or false' })
    @ApiProperty({ required: true, description: 'status', default: true })
    public status: boolean
}
