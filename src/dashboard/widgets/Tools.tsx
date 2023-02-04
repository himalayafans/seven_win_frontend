import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Menu, message, Modal, Space } from 'antd'
import React from 'react'
import type { MenuProps } from 'antd';
import useAuth from '../../hooks/useAuth';

type Props = {}

const Tools = (props: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const auth = useAuth()

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
            onClick: () => {
                setIsOpen(true)
            }
        }
    ];
    const handleExit = () => {
        auth.dispatch({ type: "logout" })
    }
    const handleCancel = () => {
        setIsOpen(false)
    }
    return (
        <div style={{ marginLeft: "auto", display: "inline-block" }}>
            <Space>
                <Dropdown trigger={['click']} menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <Avatar style={{ backgroundColor: '#87d068', cursor: "pointer" }} icon={<UserOutlined />} />
                </Dropdown>
            </Space>
            <Modal title="提示" open={isOpen} onOk={handleExit} onCancel={handleCancel}>
                <p>是否确定要退出系统？</p>
            </Modal>
        </div>
    )
}

export default Tools