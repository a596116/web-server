export interface IResponse {
    code?: number// 200:成功 , 300~500:失敗
    message?: any
    data?: any
}
export interface IResponseData {
    code: number// 200:成功 , 300~500:失敗
    message?: any
    data: any
    current_page: number
    last_page: number
    per_page: number
    total: number
}