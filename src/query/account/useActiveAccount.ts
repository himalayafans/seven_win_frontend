import { useMutation, useQueryClient } from "react-query"
import { activeAccount } from "../../api/account.api"
import IAccountDto from "../../interfaces/IAccountDto"

/** 激活账号 */
export const useActiveAccount = () => {
    const client = useQueryClient()
    return useMutation<IAccountDto, Error, string>(activeAccount, {
        onSuccess: () => {
            client.invalidateQueries(['search_accounts'])
        }
    })
}