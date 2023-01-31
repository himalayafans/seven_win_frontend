import IAuthUser from "../interfaces/IAuthUser"

export const setStorageValue = (key: string, value: string) => {
    try {
        localStorage.setItem(key, value)
    } catch (error) { }
}

export const getStorageValue = (key: string) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        return null
    }
}

const authKey = "auth"

export const writeAuthInfo = (obj: IAuthUser) => {
    setStorageValue(authKey, JSON.stringify(obj))
}

export const readAuthInfo = (): IAuthUser | null => {
    let result = getStorageValue(authKey)
    if (result) {
        return JSON.parse(result) as IAuthUser
    } else {
        return null
    }
}

export const clearAuthInfo = () => {
    try {
        localStorage.removeItem(authKey)
    } catch (error) { }
}

