import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator'
import { IsNotExistsRule } from 'src/common/validate/is-not-exists.rule'

export class RegisterAuthDto {
  @IsString({ message: '名稱必須為字串' })
  @IsNotEmpty({ message: '名稱不能為空' })
  @ApiProperty({ required: true, description: 'name', default: 'admin' })
  public name: string

  @IsNotEmpty({ message: '帳號不能為空' })
  @IsNotExistsRule('user', { message: '帳號已經註冊' })
  @ApiProperty({ required: true, description: 'account', default: '0911111111' })
  public account: string

  @IsString({ message: '密碼必須為字串' })
  @IsNotEmpty({ message: '密碼不能為空' })
  @ApiProperty({ required: true, description: 'password', default: '123456' })
  public password: string

  @IsNotEmpty({ message: '頭像不能為空' })
  @ApiProperty({ required: true, description: 'avatar', default: '0' })
  public avatar: string

  @IsBoolean({ message: '用戶狀態必須為true or false' })
  @ApiProperty({ required: true, description: 'status', default: true })
  public status: boolean

  @IsString({ message: '性別必須填寫' })
  @ApiProperty({ required: true, description: 'gender', default: 'M' })
  public gender: string

  @IsString({ message: '生日必須填寫' })
  @ApiProperty({ required: true, description: 'birthday', default: '2000-01-01' })
  public birthday: string
}
