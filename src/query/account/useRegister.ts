import { useMutation } from "react-query"
import { register } from "../../api/account.api"
import IApiResult from "../../interfaces/IApiResult"
import IRegisterRequest from "../../interfaces/IRegisterRequest"

export const useRegister = () => {
    return useMutation<any, Error, IRegisterRequest>(register)
}