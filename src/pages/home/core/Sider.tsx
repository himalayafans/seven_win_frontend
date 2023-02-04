import React from 'react'
import { Layout } from 'antd'
import { css } from "@emotion/css"

const style = css({
    position: "sticky",
    top: 0
})

type Props = {
    children: React.ReactNode,
    collapsed: boolean
}

const Sider = (props: Props) => {
    return (
        <Layout.Sider collapsed={props.collapsed}>
            <div style={{ position: "sticky", top: 0 }}>
                {props.children}
            </div>
        </Layout.Sider>
    )
}

export default Sider