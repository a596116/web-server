import { Injectable } from '@nestjs/common'
import { RegisterAuthDto } from './dto/registerAuth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { hash, verify } from 'argon2'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { LoginAuthDto } from './dto/loginAuth.dto'
import { error, success } from 'src/common/helper'
import { encript } from 'src/utils/Encription'
import { IResponse } from 'src/common/interface/response.interface'
import { IQuery } from 'src/common/interface/query.interface'
import { successPaginate } from 'src/common/helper/response.helper'
import { formatEndDate, formatStartDate } from 'src/common/helper/formatDate.helper'

const svgCaptcha = require('svg-captcha')
@Injectable()
export class AuthService {
  private pointer: number = 0
  private captchas = {}
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) { }

  async login(user: LoginAuthDto) {
    return await this.validateUser(user)
      .then(async (res: IResponse) => {
        if (res.code !== 200) {
          throw res
        }
        const token = await this.token(user)
        return success({
          data: {
            ...token,
            userId: res.data.userId,
          }
        })
      })
      .catch(err => {
        console.log(err)
        return err
      })
  }

  /**
   * @description: 用戶註冊
   */
  async register(createAuthDto: RegisterAuthDto) {
    const user = await this.prisma.user.create({
      data: createAuthDto,
    })
    await this.prisma.userRole.create({
      data: {
        user: { connect: { id: user.id } },
        role: { connect: { id: user.id == 1 ? 1 : 2 } },
      },
    })
    return success({ message: "註冊成功" })
  }

  async findAll(query: IQuery) {
    const sort = {}
    sort[query.sort.split('-')[0]] = query.sort.split('-')[1]
    const data = await this.prisma.user.findMany({
      skip: query.take * (query.page - 1),
      take: +query.take,
      orderBy: sort,
      where: {
        name: {
          contains: query.q
        },
        created_at: {
          gte: formatStartDate(query.start_date),
          lte: formatEndDate(query.end_date),
        }
      },
      include: {
        UserRole: {
          include: {
            role: {
              include: { RolePermission: { include: { permission: true } } }
            }
          }
        }
      },
    })
    const total = await this.prisma.user.count()
    return successPaginate({ ...query, total, data })
  }

  /**
   * @description: 查詢用戶
   */
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        UserRole: {
          include: {
            role: {
              include: {
                RolePermission: {
                  include: {
                    permission: true
                  }
                }
              }
            }
          }
        }
      },
    })
    return success({ data: user })
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`
  }

  remove(id: number) {
    return `This action removes a #${id} auth`
  }

  /**
  * 用戶登入驗證
  */
  private async validateUser(user: LoginAuthDto) {
    const phone: string = user.phone
    const password: string = user.password
    return await this.findOneByPhone(phone)
      .then(res => {
        if (res == null) {
          throw error('用戶尚未註冊')
        }
        return res
      })
      .then((dbUser: any) => {
        const pass = encript(password, dbUser.name)
        if (pass === dbUser.password) {
          return success({ data: { userid: dbUser.id, userId: dbUser.id } })
        } else {
          throw error('用戶密碼錯誤')
        }
      })
      .catch(err => {
        return err
      })
  }

  /**
     * 根據手機獲取用戶
     */
  async findOneByPhone(phone: string) {
    return await this.prisma.user.findUnique({ where: { phone: phone } })
  }

  async token({ phone }) {
    return {
      token: await this.jwt.signAsync({
        phone,
      }),
    }
  }


  /**
     * 產生驗證碼
     */
  public async createCaptcha(id?: string): Promise<IResponse> {
    if (id !== '-1') delete this.captchas[id]
    const c = svgCaptcha.create()
    this.captchas[this.pointer] = (c.text as string).toLowerCase()
    return success({
      data: {
        id: this.pointer++,
        img: c.data
      }
    })
  }

  /**
   * 驗證碼確認
   */
  public async verification(captcha: string, id: string): Promise<IResponse> {
    return this.captchas[id] === captcha.toLowerCase() ? success({}) : error('驗證碼錯誤')
  }
}
