import React, { useEffect, useRef } from 'react'
import { Card, Button, Checkbox, Form, Input } from 'antd'
import './index.scss'
import type { FormInstance } from 'antd/es/form'
import { useNavigate } from 'react-router-dom'
import { login } from '@api/login'

const Login: React.FC = () => {
  let navigate = useNavigate()
  const onFinish = async (values: Record<string, any>) => {
    let { status } = await login(values)
    status === 400 && navigate('/')
  }

  const onFinishFailed = (errorInfo: Record<string, any>) => {
    console.log('Failed:', errorInfo)
  }

  const form = useRef<FormInstance>(null)
  useEffect(() => {
    form.current!.setFieldsValue({
      username: 'admin',
      password: 'admin',
    })
  }, [])

  return (
    <div className="wrapper">
      <div className="card-wrapper">
        <Card title="登录" bordered={false} style={{ width: 400 }}>
          <Form
            ref={form}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 6, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login
