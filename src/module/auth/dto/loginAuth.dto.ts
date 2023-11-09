import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginAuthDto {
  @IsNotEmpty({ message: '帳號不能為空' })
  @ApiProperty({ required: true, description: 'account', default: '0911111111' })
  public account: string

  @IsString({ message: '密碼必須為字串' })
  @IsNotEmpty({ message: '密碼不能為空' })
  @ApiProperty({ required: true, description: 'password', default: '123456' })
  public password: string
}
