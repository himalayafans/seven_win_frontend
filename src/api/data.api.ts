import IAccountDto from "../interfaces/IAccountDto";
import IApiResult from "../interfaces/IApiResult";
import { http } from "../utils/http";

export const getAccounts = async () => {
    const api = `/Data/GetAllAccounts`;
    let res = await http.get<any, IApiResult<IAccountDto[]>>(api)
    return res.data.data
}