import { DateTime } from 'luxon'

export const formatStartDate = (startDate: string) => {
  return DateTime.fromJSDate(new Date(startDate)).toJSDate()
}

export const formatEndDate = (endDate: string) => {
  return DateTime.fromJSDate(new Date(endDate))
    .plus({ minutes: 24 * 60 })
    .toJSDate()
}

export const formatTime = (time: string) => {
  // 如果time理包含'分鐘前' 去掉'分鐘前'，並且轉換成數字
  if (time.includes('分鐘前')) {
    return DateTime.local()
      .minus({ minutes: parseInt(time.replace('分鐘前', ''), 10) })
      .toFormat('yyyy-MM-dd HH:mm')
  }
  // 如果time理包含'小時前' 去掉'小時前'，並且轉換成數字
  if (time.includes('小時前')) {
    return DateTime.local()
      .minus({ hours: parseInt(time.replace('小時前', ''), 10) })
      .toFormat('yyyy-MM-dd HH:mm')
  }
}
