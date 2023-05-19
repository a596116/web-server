import { DateTime } from "luxon"

export const formatStartDate = (startDate: string) => {
    return DateTime.fromJSDate(new Date(startDate)).toJSDate()
}

export const formatEndDate = (endDate: string) => {
    return DateTime.fromJSDate(new Date(endDate)).plus({ minutes: 24 * 60 }).toJSDate()
}