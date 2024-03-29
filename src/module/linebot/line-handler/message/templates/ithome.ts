import { PrismaService } from 'src/module/prisma/prisma.service'
import { Logger } from '@nestjs/common'

const prisma = new PrismaService()
const logger = new Logger('LineBot')

export const findIthome = async (id: string) => {
  const template: any = {
    type: 'flex',
    altText: 'IThome 新聞',
    contents: {
      type: 'carousel',
      contents: [],
    },
  }
  try {
    const data = await prisma.ithomeList.findMany({
      take: 10,
      orderBy: {
        created_at: 'desc',
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
          aspectRatio: '10:7',
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
              color: '#706233',
              text: post.title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
            },
            {
              type: 'text',
              weight: 'bold',
              size: 'xs',
              margin: 'none',
              color: '#B0926A',
              text: post.descs,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
              align: 'start',
              offsetTop: 'sm',
            },
            {
              type: 'text',
              text: post.time,
              decoration: 'underline',
              color: '#E5C3A6',
              size: 'xs',
              align: 'end',
              offsetTop: 'sm',
            },
          ],
          spacing: 'sm',
          paddingAll: '13px',
          action: {
            type: 'uri',
            label: 'action',
            uri: post.link,
          },
        },
      })
    }
    logger.log(`查詢 Ithome 成功: ${id}`)
  } catch (e) {
    logger.error(`查詢 Ithome 失敗: ${id}`)
    logger.error(e)
  }
  return [
    {
      type: 'text',
      text: 'IThome 新聞',
    },
    template,
  ]
}

export const broadcastIthome = async () => {
  const template: any = {
    type: 'flex',
    altText: 'IThome 新聞',
    contents: {
      type: 'carousel',
      contents: [],
    },
  }
  let broadcastUsers = []

  try {
    const data = await prisma.ithomeList.findMany({
      take: 10,
      orderBy: {
        created_at: 'desc',
      },
      where: {
        created_at: {
          gt: new Date(new Date().getTime() - 180 * 60 * 1000),
        },
      },
    })

    broadcastUsers = await prisma.lineUser.findMany({
      where: {
        ithome_broadcast: true,
        status: true,
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
          aspectRatio: '10:7',
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
              color: '#706233',
              text: post.title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
            },
            {
              type: 'text',
              weight: 'bold',
              size: 'xs',
              margin: 'none',
              color: '#B0926A',
              text: post.descs,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
              align: 'start',
              offsetTop: 'sm',
            },
            {
              type: 'text',
              text: post.time,
              decoration: 'underline',
              color: '#E5C3A6',
              size: 'xs',
              align: 'end',
              offsetTop: 'sm',
            },
          ],
          spacing: 'sm',
          paddingAll: '13px',
          action: {
            type: 'uri',
            label: 'action',
            uri: post.link,
          },
        },
      })
    }
  } catch (e) {
    logger.error(e)
  }
  return {
    broadcastUsers,
    template: [
      {
        type: 'text',
        text: 'IThome 新聞',
      },
      template,
    ],
  }
}
