import { Button, Card, Checkbox, Form, Input } from 'antd'
import React from 'react'
import useLogin from '../../query/account/useLogin'
import { css } from "@emotion/css";
import { UserOutlined, LockOutlined, BarcodeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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

const linkStyle = css({
  float: "right"
})

type Props = {}

const Login = (props: Props) => {
  const aciton = useLogin()
  const handleClick = async () => {
    let response = await aciton.mutateAsync({ Name: "abc", Password: "123" })
    console.log(response)
  }
  return (
    <div className={boxStyle}>
      <div className={formStyle}>
        <div className={titleStyle}>竞猜游戏</div>
        <Form autoComplete="off">
          <Form.Item name="username" rules={[{ required: true, message: "请输入登录账号" }]}>
            <Input prefix={<UserOutlined />} placeholder="登录账号"></Input>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入登录密码" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder='登录密码' type='password'></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block={true} loading={aciton.isLoading} onClick={handleClick}>登录</Button>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
            <Link to="/register" className={linkStyle}>注册新账号</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login