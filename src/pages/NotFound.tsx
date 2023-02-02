import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";


type Props = {}

const NotFound = (props: Props) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("/")
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={<Button type="primary" onClick={onClick}>返回首页</Button>}
    />
  )
}

export default NotFound