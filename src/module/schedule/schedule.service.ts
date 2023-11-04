import { Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { PrismaService } from '../prisma/prisma.service'
import { Builder, Browser, By, until } from 'selenium-webdriver'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios from 'axios'
import * as cheerio from 'cheerio'

@Injectable()
export class ScheduleService {
  private readonly logger: Logger = new Logger('LineBot')
  constructor(private prisma: PrismaService, private readonly config: ConfigService) { }

  @Cron('0 * * * *')
  async handleFetchNike() {
    let driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .usingServer(this.config.get('GOOGLE_DRIVER'))
      .build()
    const url = 'https://www.nike.com/tw'
    try {
      await driver.get(`${url}/launch?s=upcoming`)
      await driver.wait(until.titleIs('即將發售的產品。Nike SNKRS TW'), 1000)
      await driver.executeScript(
        'window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })',
      )
      await driver.sleep(1000)
      const posts = (await driver.findElements(By.css('.upcoming-section .product-card'))).splice(0, 10).reverse()
      await driver.wait(until.elementsLocated(By.css('.l-footer')), 1000)
      let i = 0

      for (const post of posts) {
        if (i > 10) break
        const link = (await post.findElement(By.css('a')).getAttribute('href')) || url
        const img =
          (await post.findElement(By.css('.card-link .image-component')).getAttribute('src')) ||
          'https://i.imgur.com/1zlVant.png'
        const title =
          (await post.findElement(By.css('.figcaption-content h2')).getText()) || '無標題'
        const time =
          (await post.findElement(By.css('.launch-caption p:nth-child(1)')).getText()) +
          '/' +
          (await post.findElement(By.css('.launch-caption p:nth-child(2)')).getText()) || '無時間'
        i++
        const isExist = await this.prisma.nikeList.findFirst({
          where: { title },
        })
        if (!isExist) {
          await this.prisma.nikeList.create({
            data: {
              title,
              link,
              img,
              time,
            },
          })
        }
      }
      this.logger.log(`爬取 Nike 發售預告 成功`)
    } catch (e) {
      this.logger.error(`爬取 Nike 發售預告 失敗`)
      this.logger.error(e)
      await driver.quit()
    } finally {
      await driver.quit()
    }
  }

  @Cron('0 * * * *')
  async handleFetchHypebeast() {
    let driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .usingServer(this.config.get('GOOGLE_DRIVER'))
      .build()
    try {
      await driver.get('https://hypebeast.com/tw/footwear')
      await driver.wait(until.titleIs('Footwear 球鞋 | Hypebeast'), 1000)
      await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)')
      const posts = (await driver.findElements(By.css('.post-box'))).splice(0, 10).reverse()
      let i = 0
      for (const post of posts) {
        if (i > 10) break
        const link = (await post.getAttribute('data-permalink')) || 'https://www.twhaodai.com/'
        const img =
          (await post.findElement(By.css('img')).getAttribute('src')) ||
          'https://i.imgur.com/1zlVant.png'
        const title =
          (await post
            .findElement(By.css('.post-box-content-container .post-box-content-title h2 span'))
            .getText()) || '無標題'
        const descs =
          (await post.findElement(By.css('.post-box-content-excerpt')).getText()) || '無描述'
        const time =
          (await post
            .findElement(By.css('.post-box-content-meta .post-box-meta-author-time .time time'))
            .getText()) || '無時間'
        i++
        const isExist = await this.prisma.hypeBeastList.findFirst({
          where: { title },
        })
        if (!isExist) {
          await this.prisma.hypeBeastList.create({
            data: {
              title,
              descs,
              link,
              img,
              time,
            },
          })
        }
      }
      this.logger.log(`爬取 HypeBeast 成功`)
    } catch (e) {
      this.logger.error(`爬取 HypeBeast 失敗`)
      this.logger.error(e)
      await driver.quit()
    } finally {
      await driver.quit()
    }
  }

  @Cron('0 * * * *')
  async handleFetchIthome() {
    try {
      const url = 'https://www.ithome.com.tw'
      const body = await axios.get(`${url}/latest/feed/hitepo6y3vif.jsp`)
      const $ = cheerio.load(body.data, { xmlMode: true })
      const item = ($('.channel-item .field-content')).toArray().splice(0, 10).reverse()
      let i = 0
      for (const el of item) {
        if (i > 10) break
        const link = url + $(el).find('.title a').attr('href') || 'https://www.twhaodai.com/'
        const img = $(el).find('.photo img').attr('src') || 'https://i.imgur.com/1zlVant.png'
        const title = $(el).find('.title a').text() || '無標題'
        const descs = $(el).find('.summary').text() || '無描述'
        const time = $(el).find('.post-at').text() || '無時間'
        i++
        const isExist = await this.prisma.ithomeList.findFirst({
          where: { title },
        })
        if (!isExist) {
          await this.prisma.ithomeList.create({
            data: {
              title,
              descs,
              link,
              img,
              time,
            },
          })
        }
      }
      this.logger.log(`爬取 Ithome 成功`)
    } catch (e) {
      this.logger.error(`爬取 Ithome 失敗`)
      this.logger.error(e)
    }
  }
}
