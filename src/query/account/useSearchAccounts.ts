import { useQuery } from "react-query"
import { searchAccounts } from "../../api/account.api"
import IAccountDto from "../../interfaces/IAccountDto"

export const useSearchAccounts = (name?: string) => {
    return useQuery<IAccountDto[], Error>(
        ["search_accounts", name],
        () => searchAccounts(name),
        {
            // enabled: false
        })
}