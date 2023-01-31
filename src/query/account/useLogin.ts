import { useMutation } from "react-query"
import { login } from "../../api/account.api"
import ILoginRequest from "../../interfaces/ILoginRequest"
import ILoginResponse from "../../interfaces/ILoginResponse"

/** 账号登录 */
const useLogin = () => {
    return useMutation<ILoginResponse, Error, ILoginRequest>(login)
}
export default useLogin