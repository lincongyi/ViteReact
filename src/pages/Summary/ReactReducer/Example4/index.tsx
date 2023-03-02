import React, { useReducer } from 'react'
import { Button, Form, Input, Space, Spin } from 'antd'

const Example4 = () => {
  const [form] = Form.useForm()

  type TState = {
    username: string
    password: string
    type?: string
    isLoading: boolean
    isLogin: boolean
    isError: boolean
  }

  const [state, dispatch] = useReducer(
    (state: TState, action: { type: string }) => {
      const { type, ...rest } = action
      switch (type) {
        case 'before':
          return {
            ...state,
            isLoading: true,
          }
        case 'after':
          return {
            ...state,
            isLoading: false,
          }
        case 'toLogin':
          return {
            ...state,
            ...rest,
          }
        case 'toReset':
          return {
            ...state,
            username: '',
            password: '',
          }
        default:
          return state
      }
    },
    {
      username: '',
      password: '',
      isLogin: false,
      isLoading: false,
      isError: false,
    }
  )

  const onFinish = (values: any) => {
    console.log('Success:', values)
    dispatch({ ...state, type: 'before' })
    setTimeout(() => {
      dispatch({ ...state, type: 'toLogin', ...values })
      dispatch({ ...state, type: 'after' })
    }, 2000)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Form
        name='basic'
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='input password' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space direction='vertical'>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Space>
              <Button
                type='primary'
                onClick={() => dispatch({ type: 'before' })}
              >
                onLoading
              </Button>
              <Button
                type='primary'
                onClick={() => dispatch({ type: 'after' })}
              >
                offLoading
              </Button>
              <Button type='primary' disabled>
                onLogin
              </Button>
              <Button
                type='primary'
                onClick={() => {
                  form.resetFields()
                  dispatch({ type: 'toReset' })
                }}
              >
                onReset
              </Button>
            </Space>
            <Button type='primary' onClick={() => console.log(state)}>
              get data
            </Button>
          </Space>
        </Form.Item>
        {state.isLoading && <Spin tip='Loading' size='large'></Spin>}
      </Form>
    </>
  )
}

export default Example4
