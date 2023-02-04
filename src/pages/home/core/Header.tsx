import { Layout, theme } from 'antd'
import React from 'react'
import { css } from "@emotion/css";

type Props = {
    children?: React.ReactNode
}

const Header = (props: Props) => {
    const { token } = theme.useToken()

    const style = css({
        display: "flex !important",
        padding: "0px 20px 0px 0px !important",
        background: `${token.colorBgContainer} !important`,
        borderBottom: `1px solid ${token.colorBorder}`,
        position: "sticky",
        top: 0
    })
    return (
        <Layout.Header className={style}>
            {props.children}
        </Layout.Header>
    )
}

export default Header