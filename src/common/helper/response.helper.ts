import { IQuery } from '../interface/query.interface'
import { IResponse, IResponseData } from '../interface/response.interface'

/**
 * @description: 成功回傳
 */
export const success = ({ message, data, code }: IResponse): IResponse => {
  return {
    code: code ?? 200,
    message,
    data,
  }
}
/**
 * @description: 錯誤回傳
 */
export const error = ({ message, data, code }: IResponse): IResponse => {
  return {
    code: code || 400,
    message,
    data,
  }
}

/**
 * @description: 成功回傳分頁
 */
export const successPaginate = ({
  data,
  current_page,
  take,
  total,
  code,
  message,
}: IQuery): IResponseData => {
  return {
    code: code ?? 200,
    message,
    data,
    current_page,
    last_page: Math.ceil(total / take),
    per_page: take,
    total,
  }
}
