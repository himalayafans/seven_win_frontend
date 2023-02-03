import { Layout, theme } from 'antd'
import React from 'react'

type Props = {
    children?: React.ReactNode
}

const LayoutContent = (props: Props) => {
    const { token: { colorBgContainer } } = theme.useToken()
    return (
        <Layout.Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer }}>
            {props.children}
        </Layout.Content>
    )
}

export default LayoutContent