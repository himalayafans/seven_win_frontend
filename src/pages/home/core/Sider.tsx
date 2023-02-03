import React from 'react'
import { Layout } from 'antd'
import { css } from "@emotion/css"

const style = css({
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
})

type Props = {
    children: React.ReactNode,
    collapsed: boolean
}

const Sider = (props: Props) => {
    return (
        <Layout.Sider className={style} collapsed={props.collapsed}>
            {props.children}
        </Layout.Sider>
    )
}

export default Sider