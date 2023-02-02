import React from 'react'
import { css } from "@emotion/css";

const boxStyle = css({
    position: "relative",
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: "#F8F8F8"
})

const formStyle = css({
    position: "absolute",
    top: "20%",
    left: "50%",
    padding: "36px",
    backgroundColor: "#F7F7F7",
    transform: "translateX(-50%)",
    boxShadow: "0 0 100px rgb(0 0 0 / 8%)",
    minWidth: "400px"
})

const titleStyle = css({
    fontSize: "30px",
    textAlign: "center",
    lineHeight: "30px",
    paddingBottom: "30px"
})


type Props = {
    title: string,
    children: React.ReactNode
}

const PageBox = (props: Props) => {
    return (
        <div className={boxStyle}>
            <div className={formStyle}>
                <div className={titleStyle}>{props.title}</div>
                {props.children}
            </div>
        </div>
    )
}

export default PageBox