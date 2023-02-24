import React, { useReducer } from 'react'
import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { generateId } from '@utils/index'

const Example2 = () => {
  const [form] = Form.useForm()

  type TData = {
    id: string
    name?: string
    age?: string
    sex?: number
    score?: string
  }

  const columns: ColumnsType<TData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      key: 'sex',
      render: values => ['男', '女'][values],
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Action',
      key: 'action',
      render: ({ id }) => {
        return (
          <Button type='text' danger onClick={() => onDelete(id)}>
            Delete
          </Button>
        )
      },
    },
  ]

  const [data, dataDispatch] = useReducer(
    (state: TData[], action: TData & { type: string }) => {
      const { type, ...rest } = action
      switch (type) {
        case 'add':
          return [...state, rest]
        case 'delete': {
          return state.filter(item => item.id !== action.id)
        }
        default:
          return state
      }
    },
    []
  )

  const onDelete = (id: string) => {
    const param = {
      type: 'delete',
      id,
    }
    dataDispatch(param)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
    const param = {
      ...values,
      type: 'add',
      id: generateId(),
    }
    dataDispatch(param)
    form.resetFields()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Form
        form={form}
        name='form'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Row gutter={10}>
          <Col span={6}>
            <Form.Item
              label='Username'
              name='name'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder='Usename' />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label='Age'
              name='age'
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input placeholder='Age' />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label='Sex'
              name='sex'
              rules={[{ required: true, message: 'Please select your sex!' }]}
            >
              <Select
                placeholder='Sex'
                options={[
                  { value: 0, label: '男' },
                  { value: 1, label: '女' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label='Score'
              name='score'
              rules={[{ required: true, message: 'Please input your score!' }]}
            >
              <Input placeholder='Score' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item wrapperCol={{ offset: 2, span: 4 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </>
  )
}

export default Example2
