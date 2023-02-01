import React from 'react'
import { AuthReducer, getInitAuthState } from '../auth_store'
import { AuthContextProvider } from '../contexts/AuthContext'
import { clearAuthInfo, readAuthInfo } from '../utils/storage'

type Props = {
    children: React.ReactNode
}

const Auth = (props: Props) => {
    const [state, dispatch] = React.useReducer(AuthReducer, getInitAuthState())
    const storageChange = (e: StorageEvent) => {
        let auth = readAuthInfo()
        if (auth == null) {
            dispatch({ type: "logout" })
        }
    }

    React.useEffect(() => {
        window.addEventListener('storage', storageChange)
        return () => {
            window.removeEventListener('storage', storageChange)
        }
    }, [])

    return (
        <AuthContextProvider value={{ state, dispatch }}>
            {props.children}
        </AuthContextProvider>
    )
}

export default Auth