import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { IQuery } from 'src/common/interface/query.interface'
import { formatEndDate, formatStartDate } from 'src/common/helper/formatDate.helper'
import { success, successPaginate } from 'src/common/helper/response.helper'
import { ILineUser } from './interface/line.interface'

@Injectable()
export class LineService {
  constructor(private prisma: PrismaService) {}
  /**
   * @description: 獲取所有Line用戶
   */
  async fetchAll(query: IQuery) {
    const sort = {}
    sort[query.sort.split('-')[0]] = query.sort.split('-')[1]
    const data = await this.prisma.lineUser.findMany({
      skip: query.take * (query.current_page - 1),
      take: +query.take,
      orderBy: sort,
      where: {
        displayName: {
          contains: query.q,
        },
        created_at: {
          gte: formatStartDate(query.start_date),
          lte: formatEndDate(query.end_date),
        },
      },
    })
    const total = await this.prisma.lineUser.count()
    return successPaginate({ ...query, total, data })
  }

  /**
   * @description: 獲取Line用戶id
   */
  async fetchLineUser(id: string) {
    const data = await this.prisma.lineUser.findUnique({
      where: { id },
    })
    return success({ data })
  }

  /**
   * @description: 編輯Line用戶
   */
  async editLineUser(id: string, data: ILineUser) {
    try {
      await this.prisma.lineUser.update({
        where: { id },
        data,
      })
      return success({ message: '編輯Line用戶成功' })
    } catch (error) {
      console.log(error)
      return error('編輯Line用戶失敗，錯誤詳情：' + error)
    }
  }

  // -------------------------------------------------------------------

  /**
   * @description: 獲取nike列表
   */
  async fetchNikeAll(query: IQuery) {
    const sort = {}
    sort[query.sort.split('-')[0]] = query.sort.split('-')[1]
    const data = await this.prisma.nikeList.findMany({
      skip: query.take * (query.current_page - 1),
      take: +query.take,
      orderBy: sort,
      where: {
        title: {
          contains: query.q,
        },
        created_at: {
          gte: formatStartDate(query.start_date),
          lte: formatEndDate(query.end_date),
        },
      },
    })
    const total = await this.prisma.nikeList.count()
    return successPaginate({ ...query, total, data })
  }

  /**
   * @description: 獲取nike
   */
  async fetchNike(id: number) {
    const data = await this.prisma.nikeList.findUnique({
      where: { id },
    })
    return success({ data })
  }

  /**
   * @description: 編輯nike
   */
  async editNike(id: number, data: any) {
    try {
      await this.prisma.nikeList.update({
        where: { id },
        data,
      })
      return success({ message: '編輯nike成功' })
    } catch (error) {
      console.log(error)
      return error('編輯nike失敗，錯誤詳情：' + error)
    }
  }
}
