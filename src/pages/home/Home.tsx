import React from 'react'
import { Button, Space } from 'antd';
import { useNavigate } from "react-router-dom";

type Props = {}

const Home = (props: Props) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <Space>
            <Button type='primary' onClick={handleLogin}>登录</Button>
            <Button type='primary'>注册</Button>
        </Space>
    )
}

export default Home