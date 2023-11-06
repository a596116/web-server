import { ImageMapMessage } from '@line/bot-sdk'

export const otherTemplate: ImageMapMessage = {
  type: 'imagemap',
  baseUrl: 'https://i.imgur.com/kFzv5DA.png?',
  altText: '功能選單',
  baseSize: { width: 2500, height: 1686 },
  actions: [
    { area: { x: 0, y: 0, width: 833, height: 843 }, type: 'message', text: 'none' },
    { area: { x: 833, y: 0, width: 833, height: 843 }, type: 'message', text: 'none' },
    {
      area: { x: 1666, y: 0, width: 833, height: 843 },
      type: 'uri',
      linkUri: 'https://liff.line.me/1657518005-n0BMBGqY',
    },
    { area: { x: 0, y: 843, width: 833, height: 843 }, type: 'message', text: 'nike' },
    { area: { x: 833, y: 843, width: 833, height: 843 }, type: 'message', text: 'hypebeast' },
    { area: { x: 1666, y: 843, width: 833, height: 843 }, type: 'message', text: 'ithome' },
  ],
}
