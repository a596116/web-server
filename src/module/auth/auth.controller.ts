import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Put } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterAuthDto } from './dto/registerAuth.dto'
import { UpdateAuthDto, UpdateInfoDto } from './dto/update-auth.dto'
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { LoginAuthDto } from './dto/loginAuth.dto'
import { AuthGuard } from '@nestjs/passport'
import { Auth } from './decorator/auth.decorator'
import { IQuery } from 'src/common/interface/query.interface'

@Controller('auth')
@ApiTags('用戶')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: '用戶登入',
  })
  async loginUser(@Body() LoginAuthDto: LoginAuthDto) {
    return await this.authService.login(LoginAuthDto)
  }

  @Post('register')
  @ApiOperation({ summary: '創建用戶', description: '創建用戶' })
  register(@Body() RegisterAuthDto: RegisterAuthDto) {
    return this.authService.register(RegisterAuthDto)
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '獲取所有用戶', description: '獲取所有用戶' })
  findAll(@Query() query: IQuery) {
    return this.authService.findAll(query)
  }

  @Get(':id')
  @ApiOperation({ summary: '查詢用戶id', description: '使用id查詢用戶' })
  @Auth()
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: number) {
    return this.authService.findOne(+id)
  }

  /**
   * @description: 用戶Info更新
   */
  @Put('info/:id')
  @Auth()
  updateInfo(@Param('id') id: string, @Body() UpdateInfoDto: UpdateInfoDto) {
    return this.authService.updateInfo(+id, UpdateInfoDto)
  }

  /**
   * @description: 用戶列表更新
   */
  @Put(':id')
  @Auth()
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id)
  }

  @Get('captcha/:id')
  @ApiOperation({
    summary: '獲取註冊驗證碼',
  })
  async getCaptcha(@Param('id') id: string) {
    return await this.authService.createCaptcha(id)
  }

  @Post('captcha')
  @ApiOperation({
    summary: '驗證註冊驗證碼',
  })
  async verify(@Body() captcha: { captcha: string; id: string }) {
    return await this.authService.verification(captcha.captcha, captcha.id)
  }
}
