import { join } from 'path'
const Jimp = require("jimp")

export const base64Save = (base64: string, name: string, path: string) => {
    // 移除 base64 编码前缀
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')
    Jimp.read(buffer, (err: any, res) => {
        if (err) throw new Error(err)
        res.quality(5).write(`${join(__dirname, `../../upload/${path}`)}/${name}.png`)
    })
}