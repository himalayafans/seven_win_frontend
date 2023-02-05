import { createContext, useContext } from "react"

export interface IDashboardState {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const DashboardContext = createContext<IDashboardState>({} as IDashboardState)
export const useDashboardContext = () => useContext(DashboardContext)