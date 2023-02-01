import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/hooks'

type Props = {
    children: JSX.Element
}

const GuestProtectedRoute = (props: Props) => {
    const { state } = useAuth()
    if (state.isLogin) {
        return <Navigate to="/"></Navigate>
    } else {
        return props.children
    }
}

export default GuestProtectedRoute