import IAccountDto from "../interfaces/IAccountDto";
import IApiResult from "../interfaces/IApiResult";
import { http } from "../utils/http";

export const getAccounts = async () => {
    const api = `/Data/GetAllAccounts`;
    let res = await http.get<any, IApiResult<IAccountDto[]>>(api)
    return res.data.data
}
export const activeAccount = async (id: string) => {
    const api = `/Data/Active`;
    let res = await http.post<any, IApiResult<IAccountDto>>(api, { id })
    return res.data.data
}