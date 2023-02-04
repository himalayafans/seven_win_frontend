import { Layout, theme } from 'antd'
import React from 'react'

type Props = {
    children?: React.ReactNode
}

const Content = (props: Props) => {
    const { token } = theme.useToken()
    return (
        <Layout.Content style={{ padding: 24, minHeight: 280, background: token.colorBgLayout }}>
            {props.children}
        </Layout.Content>
    )
}

export default Content