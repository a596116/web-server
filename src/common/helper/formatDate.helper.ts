import { DateTime } from 'luxon'

// 獲取明天日期
export const getTomorrowDate = () => {
  return DateTime.local().plus({ days: 1 }).toFormat('yyyy-MM-dd')
}

export const formatStartDate = (startDate: string = '2000-01-01') => {
  return DateTime.fromJSDate(new Date(startDate)).toJSDate()
}

export const formatEndDate = (endDate: string = '2099-01-01') => {
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

// 給'11月8日'這種格式的時間，轉成'2020-11-08'這種格式，要補0
export const formatStringTime = (time: string) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = time.split('月')[0]
  const day = time.split('月')[1].split('日')[0]
  return `${year}-${month.length === 1 ? '0' + month : month}-${day.length === 1 ? '0' + day : day}`
}
