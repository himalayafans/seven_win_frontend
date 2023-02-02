import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


type UserProtectedRouteProps = {
    children: JSX.Element
}

const UserProtectedRoute = (props: UserProtectedRouteProps) => {
    const auth = useAuth()
    if (auth.state.isLogin) {
        return props.children
    } else {
        return <Navigate to={"/login"}></Navigate>
    }
}

export default UserProtectedRoute