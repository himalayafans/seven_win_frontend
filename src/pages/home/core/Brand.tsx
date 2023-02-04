import React from 'react'
import { css } from "@emotion/css";
import classNames from 'classnames';
import logo from '../../..//logo.svg';

const boxStyle = css({
    height: "32px",
    width: "180px",
    padding: "32px 8px",
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    overflow: "hidden",
    "img": {
        height: "45px"
    },
    "&>p": {
        color: "white",
        fontSize: "24px",
        lineHeight: "24px",
        margin: 0
    }
})
const boxCollapsedStyle = css({
    width: "90px",
    "&>p": {
        display: "none"
    }
})

type Props = {
    collapsed: boolean
}

const Brand = (props: Props) => {
    var divClass = classNames({
        [boxStyle]: true,
        [boxCollapsedStyle]: props.collapsed
    });
    return (
        <div className={divClass}>
            <img src={logo}></img>
            <p>后台管理</p>
        </div>
    )
}

export default Brand