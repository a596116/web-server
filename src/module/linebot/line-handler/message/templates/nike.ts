import { PrismaService } from 'src/module/prisma/prisma.service'
import { Builder, Browser, By, until } from 'selenium-webdriver'

const prisma = new PrismaService()

export const findNike = async (userid: string) => {
    const user = await prisma.lineUser.findFirst({
        where: { id: userid },
        include: { category: true }
    })
    const tem: any = {
        "type": "flex",
        "altText": "Nike 發售預告",
        "contents": {
            "type": "carousel",
            "contents": []
        }
    }
    let driver = await new Builder().forBrowser(Browser.CHROME).usingServer('http://selenium:4444/wd/hub').build()
    const url = 'https://www.nike.com/tw'
    try {
        await driver.get(`${url}/launch?s=upcoming`)
        await driver.wait(until.titleIs('即將發售的產品。Nike SNKRS TW'), 1000)
        await driver.executeScript(
            'window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })'
        )

        const posts = await driver.findElements(
            By.css('.upcoming-section .product-card')
        )
        await driver.wait(until.elementsLocated(By.css('.l-footer')), 1000)
        let i = 0
        for (const post of posts) {
            if (i > 10) break
            const link = await post.findElement(By.css('a')).getAttribute('href')
            const img = await post
                .findElement(By.css('.card-link .image-component'))
                .getAttribute('src')
            const title = await post
                .findElement(By.css('.figcaption-content h2'))
                .getText()

            const time =
                (await post
                    .findElement(By.css('.launch-caption p:nth-child(1)'))
                    .getText()) +
                '/' +
                (await post
                    .findElement(By.css('.launch-caption p:nth-child(2)'))
                    .getText())

            i++
            tem.contents.contents.push({
                "type": "bubble",
                "size": "kilo",
                "hero": {
                    "type": "image",
                    "url": img,
                    "size": "full",
                    "aspectMode": "cover",
                    "aspectRatio": "9:10",
                    "margin": "none",
                    "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": link
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "weight": "bold",
                            "size": "md",
                            "margin": "none",
                            "color": "#0C356A",
                            "text": title,
                            "flex": 0,
                            "offsetBottom": "none",
                            "wrap": true,
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": link
                            }
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "發售日期",
                                    "color": "#B2C8BA"
                                },
                                {
                                    "type": "text",
                                    "text": time,
                                    "align": "end",
                                    "color": "#B2C8BA"
                                }
                            ],
                            "offsetTop": "xs"
                        }
                    ],
                    "spacing": "sm",
                    "paddingAll": "13px"
                }
            })
        }
    } catch (e) {
        console.log(e)
        await driver.quit()
    } finally {
        await driver.quit()
    }
    return tem
}
