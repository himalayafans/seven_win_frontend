import { LogoutOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, message, Space } from 'antd'
import React from 'react'
import type { MenuProps } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface'

interface IMenuProps {
    onClick: MenuClickEventHandler
}

const UserMenu = (props: IMenuProps) => {
    return (
        <Menu onClick={props.onClick}>
            <Menu.Item key="Recommend">修改密码</Menu.Item>
            <Menu.Item key="Newest">退出</Menu.Item>
        </Menu>
    )
}

type Props = {}

const Tools = (props: Props) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: "修改密码",
            onClick: () => {
                message.info("修改密码")
            }
        },
        {
            key: '2',
            label: "退出",
        }
    ];
    return (
        <div style={{ marginLeft: "auto", display: "inline-block" }}>
            <Space>
                <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <Button shape="circle" icon={<UserOutlined />}></Button>
                </Dropdown>
            </Space>
        </div>
    )
}

export default Tools