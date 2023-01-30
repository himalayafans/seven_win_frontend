import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/register/Register'

type Props = {}

const SiteContent = (props: Props) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    )
}

export default SiteContent