import React from 'react'
import { Button, Layout, Menu, Space, theme } from 'antd';

type Props = {
    children?: React.ReactNode
}

const LayoutHeader = (props: Props) => {
    const { token } = theme.useToken()
    return (
        <Layout.Header style={{ padding: 0, background: token.colorBgContainer }}>
            {props.children}
        </Layout.Header>
    )
}

export default LayoutHeader