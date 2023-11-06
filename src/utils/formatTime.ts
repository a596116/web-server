import * as dayjs from 'dayjs'

export const formatTime = (time: string) => {
  // 如果time理包含'分鐘前' 去掉'分鐘前'，並且轉換成數字
  if (time.includes('分鐘前')) {
    return dayjs()
      .subtract(parseInt(time.replace('分鐘前', ''), 10), 'minute')
      .format('YYYY-MM-DD HH:mm')
  }
  // 如果time理包含'小時前' 去掉'小時前'，並且轉換成數字
  if (time.includes('小時前')) {
    return dayjs()
      .subtract(parseInt(time.replace('小時前', ''), 10), 'hour')
      .format('YYYY-MM-DD HH:mm')
  }
}
