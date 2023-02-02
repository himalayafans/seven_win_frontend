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