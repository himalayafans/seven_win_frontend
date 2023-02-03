import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'

const items: ItemType[] = [
    {
        key: "a",
        label: "首页",
        icon: <HomeOutlined />
    }
]

type Props = {}

const SiderNav = (props: Props) => {
    return (
        <Menu theme="dark" mode="vertical" items={items}></Menu>
      )
}

export default SiderNav