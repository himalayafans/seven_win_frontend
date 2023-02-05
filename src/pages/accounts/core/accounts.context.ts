import { createContext, useContext } from "react"
import { AccountsAction, IStore } from "./account.store"

export interface IAccountsState {
    state: IStore,
    dispatch: React.Dispatch<AccountsAction>
}

export const AccountsContext = createContext<IAccountsState>({} as IAccountsState)
export const useAccountsContext = () => useContext(AccountsContext)