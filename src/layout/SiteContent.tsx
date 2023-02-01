import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuestProtectedRoute from '../common/GuestProtectedRoute'
import UserProtectedRoute from '../common/UserProtectedRoute'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/register/Register'

type Props = {}

const SiteContent = (props: Props) => {
    return (
        <Routes>
            <Route path='/' element={<UserProtectedRoute><Home /></UserProtectedRoute>} />
            <Route path='/login' element={<GuestProtectedRoute><Login></Login></GuestProtectedRoute>}></Route>
            <Route path='/register' element={<GuestProtectedRoute><Register></Register></GuestProtectedRoute>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    )
}

export default SiteContent