import IAccountDto from "../interfaces/IAccountDto";
import IApiResult from "../interfaces/IApiResult";
import ILoginRequest from "../interfaces/ILoginRequest"
import ILoginResponse from "../interfaces/ILoginResponse";
import IRegisterRequest from "../interfaces/IRegisterRequest";
import { http } from "../utils/http";

/** 登录 */
export const login = async (request: ILoginRequest): Promise<ILoginResponse> => {
    const api = `/account/login`;
    let res = await http.post<any, IApiResult<ILoginResponse>>(api, request)
    return res.data.data
}

/** 注册 */
export const register = async (request: IRegisterRequest) => {
    const api = `/account/register`;
    await http.post<any, IApiResult<any>>(api, request)
}

/** 搜索账号 */
export const searchAccounts = async (name?: string): Promise<IAccountDto[]> => {
    const api = `/account/search`;
    let res = await http.get<any, IApiResult<IAccountDto[]>>(api, { name })
    return res.data.data;
}

/** 激活账号 */
export const activeAccount = async (id: string) => {
    const api = `/account/active`;
    let res = await http.post<any, IApiResult<IAccountDto>>(api, { id })
    return res.data.data
}
