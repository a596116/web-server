import { IQuery } from "../interface/query.interface"
import { IResponse, IResponseData } from "../interface/response.interface"

export const success = ({ message, data, code }: IResponse | any): IResponse => {
    return {
        code: code ?? 200,
        message,
        data
    }
}

export const successPaginate = ({ data, page, sort, take, total, end_date, q, start_date, code, message }: IQuery & { data: any, total: number, code?: number, message?: string }): IResponseData => {
    return {
        code: code ?? 200,
        message,
        data,
        current_page: page,
        last_page: Math.ceil(total / take),
        per_page: take,
        total
    }
}

export const error = (message: string, code?: number) => {
    return {
        code: code || 400,
        message
    }
}