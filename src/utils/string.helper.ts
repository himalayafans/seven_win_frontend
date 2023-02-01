import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export const isNullOrWhitespace = (input: string | null | undefined) => {
    return !input || !input.trim();
}

const SHORT_TIME_FORMAT = 'YYYY-MM-DD'

export const getDateString = (dt: string | number | Date) => {
    return dayjs(dt).format(SHORT_TIME_FORMAT)
}

export const getAllTimeString = (dt: string | number | Date) => {
    return dayjs(dt).format('YYYY-MM-DD HH:mm')
}

export const fromNow = (dt: string | number | Date) => {
    return dayjs(dt).fromNow()
}