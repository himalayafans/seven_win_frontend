import IAuthUser from "./interfaces/IAuthUser"
import { clearAuthInfo, readAuthInfo, writeAuthInfo } from "./utils/storage"

export interface IAuthState {
    username?: string,
    token?: string,
    isLogin: boolean,

}
export const getInitAuthState = (): IAuthState => {
    const authInfo = readAuthInfo()
    return {
        username: authInfo?.username,
        isLogin: authInfo !== null,
        token: authInfo?.token
    }
}

interface ILoginPayload extends IAuthUser {
    remember: boolean
}

type AuthAction =
    | { type: 'login', payload: ILoginPayload }
    | { type: 'logout' }

export type AuthDispatch = (action: AuthAction) => void
export const AuthReducer = (state: IAuthState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case "login":
            let auth = action.payload
            if (auth.remember) {
                writeAuthInfo({ username: auth.username, token: auth.token })
            }
            return {
                username: auth.username,
                token: auth.token,
                isLogin: true
            }
        case "logout":
            clearAuthInfo()
            return getInitAuthState()
        default:
            throw new Error('Unhandled action type');
    }
}