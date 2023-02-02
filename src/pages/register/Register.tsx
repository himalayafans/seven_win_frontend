import { Alert, Button, Form, Input, message, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import PageBox from '../../components/PageBox'
import { css } from "@emotion/css";
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useRegister } from '../../query/account/useRegister'
import { Rule } from 'antd/es/form';

const linkStyle = css({
  float: "right"
})

interface IFields {
  name: string,
  password: string,
  repeatPassword: string
}

const initValues: IFields = {
  name: "",
  password: "",
  repeatPassword: ""
}

const nameRules: Rule[] = [
  { required: true, message: "请输入用户名" },
  { pattern: /^[a-zA-Z0-9]{3,15}$/, message: "用户名长度为3-15,仅包含字母或数字" }
]

const passwordRules: Rule[] = [
  { required: true, message: "请输入密码" },
  { pattern: /^\w{5,20}$/, message: "密码长度为5-20,仅包含字母、数字、下划线" }
]

type Props = {}

const Register = (props: Props) => {
  const aciton = useRegister()
  const onFinish = async (values: IFields) => {
    await aciton.mutateAsync({ name: values.name, password: values.password })
    message.success("注册成功")
  }
  return (
    <PageBox title='竞猜游戏'>
      <Form autoComplete="off" initialValues={initValues} onFinish={onFinish}>
        <Form.Item name="name" rules={nameRules}>
          <Input prefix={<UserOutlined />} placeholder="用户名"></Input>
        </Form.Item>
        <Form.Item name="password" rules={passwordRules}>
          <Input.Password prefix={<LockOutlined />} placeholder='登录密码' type='password'></Input.Password>
        </Form.Item>
        <Form.Item name="repeatPassword" rules={[({ getFieldValue }) => {
          return {
            validator: (_, value) => {
              if (getFieldValue("password") === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error("两次输入密码不一致"))
            }
          }
        }]}>
          <Input.Password prefix={<LockOutlined />} placeholder='重复密码' type='password'></Input.Password>
        </Form.Item>
        <Form.Item>
          <Space direction="vertical" style={{ width: "100%" }}>
            {aciton.isError && <Alert message={aciton.error.message} type="error" />}
            <Button type="primary" block={true} loading={aciton.isLoading} htmlType="submit">注册</Button>
          </Space>
        </Form.Item>
        <Form.Item >
          <Link to="/login" className={linkStyle}>登录已有账号</Link>
        </Form.Item>
      </Form>
    </PageBox>
  )
}

export default Register