import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { FiUsers } from "react-icons/fi";
import { MenuInfo } from 'rc-menu/lib/interface'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Nav = (props: Props) => {
    const navigate = useNavigate()
    const handleClick = (info: MenuInfo) => {
        if (info.key === "a") {
            navigate("/")
        } else if (info.key === "b") {
            navigate("/accounts")
        }
    }
    const items: ItemType[] = [
        {
            key: "a",
            label: "首页",
            icon: <HomeOutlined />,
            onClick: handleClick
        }, {
            key: "b",
            label: "账号列表",
            icon: <FiUsers></FiUsers>,
            onClick: handleClick
        }
    ]
    return (
        <Menu theme="dark" mode="vertical" items={items}></Menu>
    )
}

export default Nav