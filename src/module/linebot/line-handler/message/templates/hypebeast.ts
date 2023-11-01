import { PrismaService } from 'src/module/prisma/prisma.service';
import { Builder, Browser, By, Key, until } from 'selenium-webdriver';
import { Logger } from '@nestjs/common';

const prisma = new PrismaService();
const logger = new Logger('LineBot');

export const findHypebeast = async (userid: string) => {
  const user = await prisma.lineUser.findFirst({
    where: { id: userid },
    include: { category: true },
  });
  const tem: any = {
    type: 'flex',
    altText: 'Hypebeast 球鞋資訊',
    contents: {
      type: 'carousel',
      contents: [],
    },
  };
  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .usingServer('http://1.34.174.42:4444/wd/hub')
    .build();
  try {
    await driver.get('https://hypebeast.com/tw/footwear');
    await driver.wait(until.titleIs('Footwear 球鞋 | Hypebeast'), 1000);
    await driver.executeScript(
      'window.scrollTo(0, document.body.scrollHeight)',
    );
    const posts = await driver.findElements(By.css('.post-box'));
    let i = 0;
    for (const post of posts) {
      if (i > 10) break;
      const link = await post.getAttribute('data-permalink');
      const img = await post.findElement(By.css('img')).getAttribute('src');
      const title = await post
        .findElement(
          By.css('.post-box-content-container .post-box-content-title h2 span'),
        )
        .getText();
      const descs = await post
        .findElement(By.css('.post-box-content-excerpt'))
        .getText();

      const time = await post
        .findElement(
          By.css(
            '.post-box-content-meta .post-box-meta-author-time .time time',
          ),
        )
        .getText();

      i++;
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
              size: 'lg',
              margin: 'none',
              color: '#7C81AD',
              text: title,
              flex: 0,
              offsetBottom: 'none',
              wrap: true,
            },
            {
              type: 'text',
              text: time,
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
                  text: descs,
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
            uri: link,
          },
        },
      });
    }
    logger.log(`查詢 HypeBeast`, user.id);
  } catch (e) {
    logger.error(`查詢 HypeBeast 失敗: ${user.id}`, e);
    await driver.quit();
  } finally {
    await driver.quit();
  }
  return tem;
};
