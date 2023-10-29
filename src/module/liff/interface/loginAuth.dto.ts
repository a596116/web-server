import { IsNotEmpty, IsString } from 'class-validator'

export class LiffSettingDto {
  @IsString({ message: '密碼必須為字串' })
  @IsNotEmpty({ message: '密碼不能為空' })
  public a: string
}
