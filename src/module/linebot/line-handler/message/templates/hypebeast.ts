import { PrismaService } from 'src/module/prisma/prisma.service'
import { Logger } from '@nestjs/common'

const prisma = new PrismaService()
const logger = new Logger('LineBot')

export const findHypebeast = async (id: string) => {
  const template: any = {
    type: 'flex',
    altText: 'HypeBeast 球鞋資訊',
    contents: {
      type: 'carousel',
      contents: [],
    },
  }
  try {
    const data = await prisma.hypeBeastList.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
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
              size: 'lg',
              margin: 'none',
              color: '#7C81AD',
              text: post.title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
            },
            {
              type: 'text',
              text: post.time,
              style: 'italic',
              decoration: 'underline',
              color: '#E5C3A6',
              size: 'xs',
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: post.descs,
                  wrap: true,
                  weight: 'bold',
                  size: 'xs',
                  color: '#2E4374',
                },
              ],
              margin: 'none',
              spacing: 'none',
              offsetTop: 'lg',
              offsetStart: 'xs',
              borderWidth: 'none',
              cornerRadius: 'none',
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
    logger.log(`查詢 HypeBeast 成功：${id}`)
  } catch (e) {
    logger.error(`查詢 HypeBeast 失敗: ${id}`)
    logger.error(e)
  }
  return [
    {
      type: 'text',
      text: 'HypeBeast球鞋資訊',
    },
    template,
  ]
}

export const broadcastHypebeast = async () => {
  const template: any = {
    type: 'flex',
    altText: 'Hypebeast 球鞋資訊',
    contents: {
      type: 'carousel',
      contents: [],
    },
  }
  let broadcastUsers = []
  try {
    const data = await prisma.hypeBeastList.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        createdAt: {
          gt: new Date(new Date().getTime() - 60 * 60 * 1000),
        },
      },
    })
    broadcastUsers = await prisma.lineUser.findMany({
      where: {
        hypebeast_broadcast: true,
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
              size: 'lg',
              margin: 'none',
              color: '#7C81AD',
              text: post.title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
            },
            {
              type: 'text',
              text: post.time,
              style: 'italic',
              decoration: 'underline',
              color: '#E5C3A6',
              size: 'xs',
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: post.descs,
                  wrap: true,
                  weight: 'bold',
                  size: 'xs',
                  color: '#2E4374',
                },
              ],
              margin: 'none',
              spacing: 'none',
              offsetTop: 'lg',
              offsetStart: 'xs',
              borderWidth: 'none',
              cornerRadius: 'none',
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
        text: 'HypeBeast球鞋資訊',
      },
      template,
    ],
  }
}
