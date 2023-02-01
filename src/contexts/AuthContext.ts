
import React from 'react'
import { AuthDispatch, IAuthState } from '../auth_store'

export interface IAuthContext {
    state: IAuthState,
    dispatch: AuthDispatch
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)
AuthContext.displayName = "AuthContext"
export const AuthContextProvider = AuthContext.Provider
export default AuthContext