import { Alert, Button, Checkbox, Form, Input, message, Space } from 'antd'
import React from 'react'
import useLogin from '../../query/account/useLogin'
import { css } from "@emotion/css";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/hooks';

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

interface IFields {
  name: string,
  password: string,
  remember: boolean
}

const initValues: IFields = {
  name: "",
  password: "",
  remember: true
}

type Props = {}

const Login = (props: Props) => {
  const aciton = useLogin()
  const auth = useAuth()
  const onFinish = async (values: IFields) => {
    let response = await aciton.mutateAsync({ name: values.name, password: values.password })
    auth.dispatch({ type: "login", payload: { remember: values.remember, token: response.token, username: response.name } })
    message.success("登录成功")
  }
  return (
    <div className={boxStyle}>
      <div className={formStyle}>
        <div className={titleStyle}>竞猜游戏</div>
        <Form autoComplete="off" onFinish={onFinish} initialValues={initValues}>
          <Form.Item name="name" rules={[{ required: true, message: "请输入用户名" }]}>
            <Input prefix={<UserOutlined />} placeholder="用户名"></Input>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入登录密码" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder='登录密码' type='password'></Input.Password>
          </Form.Item>
          <Form.Item>
            <Space direction="vertical" style={{ width: "100%" }}>
              {aciton.isError && <Alert message={aciton.error.message} type="error" />}
              <Button type="primary" block={true} loading={aciton.isLoading} htmlType="submit">登录</Button>
            </Space>
          </Form.Item>
          <Form.Item >
            <Form.Item name="remember" valuePropName="checked" style={{ display: "inline-block" }}>
              <Checkbox style={{ userSelect: 'none' }}>记住我</Checkbox>
            </Form.Item>
            <Link to="/register" className={linkStyle}>注册新账号</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login