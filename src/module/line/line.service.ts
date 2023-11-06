import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { IQuery } from 'src/common/interface/query.interface'
import { formatEndDate, formatStartDate } from 'src/common/helper/formatDate.helper'
import { successPaginate } from 'src/common/helper/response.helper'

@Injectable()
export class LineService {
  constructor(private prisma: PrismaService) {}
  /**
   * @description: 獲取所有Line用戶
   */
  async findAll(query: IQuery) {
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
}
