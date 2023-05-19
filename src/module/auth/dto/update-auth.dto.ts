import { PartialType } from '@nestjs/mapped-types'
import { RegisterAuthDto } from './registerAuth.dto'

export class UpdateAuthDto extends PartialType(RegisterAuthDto) { }
