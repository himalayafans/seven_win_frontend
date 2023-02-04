import React from 'react'
import { css } from "@emotion/css";
import { Card } from 'antd';

const parentStyle = css({
    paddingTop: "20px"

})

type Props = {
    children?: React.ReactNode
}

const ContentBox = (props: Props) => {
    return (
        <div className={parentStyle}>
            <Card>
                {props.children}
            </Card>
        </div>
    )
}

export default ContentBox