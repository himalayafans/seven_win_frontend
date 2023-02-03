import React from 'react'
import { css } from '@emotion/css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const triggerStyle = css({
    padding: "0 24px",
    fontSize: "18px",
    lineHeight: "64px",
    cursor: "pointer",
    transition: "color .3s",
    "&:hover": {
        color: "#1890ff"
    }
})

type Props = {
    collapsed: boolean,
    onClick: () => void
}

const TriggerButton = (props: Props) => {
    if (props.collapsed) {
        return <MenuUnfoldOutlined onClick={props.onClick} className={triggerStyle} />
    } else {
        return <MenuFoldOutlined onClick={props.onClick} className={triggerStyle} />
    }
}

export default TriggerButton