import { useQuery } from "react-query"
import { getAccounts } from "../../api/data.api"
import IAccountDto from "../../interfaces/IAccountDto"


/** 获取账户列表 */
const useGetAccounts = () => {
    return useQuery<IAccountDto[], Error>("get_accounts", () => getAccounts(), {
        enabled: false,
        refetchOnWindowFocus: false
    })
}
export default useGetAccounts