export interface IQuery {
    start_date?: string
    end_date?: string
    q?: any
    page: number
    take: number
    sort: string
}