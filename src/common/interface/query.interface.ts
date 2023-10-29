export interface IQuery {
  data: any
  start_date?: string
  end_date?: string
  q?: any
  take: number
  sort: string
  code: number
  message: string
  modifydate: string
  current_page?: number
  last_page?: number
  total?: number
  per_page?: number
}
