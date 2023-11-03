import { PrismaService } from 'src/module/prisma/prisma.service'
import { Logger } from '@nestjs/common'

const prisma = new PrismaService()
const logger = new Logger('LineBot')

export const findNike = async (id: string) => {
  const template: any = {
    type: 'flex',
    altText: 'Nike 發售預告',
    contents: {
      type: 'carousel',
      contents: [],
    },
  }
  try {
    const data = await prisma.nikeList.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc'
      }
    })
    for (const post of data) {
      template.contents.contents.push({
        type: 'bubble',
        size: 'kilo',
        hero: {
          type: 'image',
          url: post.img,
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '9:10',
          margin: 'none',
          action: {
            type: 'uri',
            label: 'action',
            uri: post.link,
          },
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              weight: 'bold',
              size: 'md',
              margin: 'none',
              color: '#0C356A',
              text: post.title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
              action: {
                type: 'uri',
                label: 'action',
                uri: post.link,
              },
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '發售日期',
                  color: '#B2C8BA',
                },
                {
                  type: 'text',
                  text: post.time,
                  align: 'end',
                  color: '#B2C8BA',
                },
              ],
              offsetTop: 'xs',
            },
          ],
          spacing: 'sm',
          paddingAll: '13px',
        },
      })
    }
    logger.log(`查詢 Nike 發售預告 成功：${id}`)
  } catch (e) {
    logger.error(`查詢 Nike 發售預告 失敗: ${id}`)
    logger.error(e)
  }
  return template
}

export const broadcastNike = async () => {
  const template: any = {
    type: 'flex',
    altText: 'Nike 發售預告',
    contents: {
      type: 'carousel',
      contents: [],
    },
  }
  let broadcastUsers = []
  try {
    const data = await prisma.nikeList.findMany({
      take: 10,
      where: {
        createdAt: {
          gt: new Date(new Date().getTime() - 5 * 60 * 1000),
        },
      },
    })
    broadcastUsers = await prisma.lineUser.findMany({
      where: {
        nike_broadcast: true,
      },
      select: {
        id: true,
      },
    })

    for (const post of data) {
      template.contents.contents.push({
        type: 'bubble',
        size: 'kilo',
        hero: {
          type: 'image',
          url: post.img,
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '9:10',
          margin: 'none',
          action: {
            type: 'uri',
            label: 'action',
            uri: post.link,
          },
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              weight: 'bold',
              size: 'md',
              margin: 'none',
              color: '#0C356A',
              text: post.title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
              action: {
                type: 'uri',
                label: 'action',
                uri: post.link,
              },
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '發售日期',
                  color: '#B2C8BA',
                },
                {
                  type: 'text',
                  text: post.time,
                  align: 'end',
                  color: '#B2C8BA',
                },
              ],
              offsetTop: 'xs',
            },
          ],
          spacing: 'sm',
          paddingAll: '13px',
        },
      })
    }
  } catch (e) {
    logger.error(e)
  }
  return { broadcastUsers, template }
}
