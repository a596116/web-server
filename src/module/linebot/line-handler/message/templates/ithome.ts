import { PrismaService } from 'src/module/prisma/prisma.service';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Logger } from '@nestjs/common';

const prisma = new PrismaService();
const logger = new Logger('LineBot');

export const findIthome = async (userid: string) => {
  const user = await prisma.lineUser.findFirst({
    where: { id: userid },
    include: { category: true },
  });
  const tem: any = {
    type: 'flex',
    altText: 'IThome 新聞',
    contents: {
      type: 'carousel',
      contents: [],
    },
  };
  try {
    const url = 'https://www.ithome.com.tw';
    const body = await axios.get(`${url}/latest/feed/hitepo6y3vif.jsp`);
    const $ = cheerio.load(body.data, { xmlMode: true });
    const item = $('.channel-item .field-content');
    let i = 0;
    for (const el of item) {
      if (i > 10) break;
      const link = url + $(el).find('.title a').attr('href');
      const img = $(el).find('.photo img').attr('src');
      const title = $(el).find('.title a').text();
      const descs = $(el).find('.summary').text();
      const time = $(el).find('.post-at').text();
      tem.contents.contents.push({
        type: 'bubble',
        size: 'kilo',
        hero: {
          type: 'image',
          url: img,
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '10:7',
          margin: 'none',
          action: {
            type: 'uri',
            label: 'action',
            uri: link,
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
              text: title,
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
              text: descs,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
              align: 'start',
              offsetTop: 'sm',
            },
            {
              type: 'text',
              text: time,
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
            uri: link,
          },
        },
      });
      i++;
    }
    logger.log(`查詢 Ithome: ${user.id}`);
  } catch (e) {
    logger.error(`查詢 Ithome 失敗: ${user.id}`, e);
  }
  return tem;
};
