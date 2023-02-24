import React, { useReducer, useRef, useState } from 'react'
import './index.scss'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
} from 'antd'
import type { InputRef } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { generateId } from '@utils/index'

const Playground = () => {
  const [state, setState] = useState(0)
  const array = [1, 2, 3, 4, 5]

  const [count, countDispatch] = useReducer(
    (state: number, action: number) => state + action,
    0
  )

  const ref = useRef<InputRef>(null)

  type TData = {
    id?: string
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
        case 'clear':
          return []
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
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <div>
        <p
          dangerouslySetInnerHTML={{ __html: '<i style="color:red;">123</i>' }}
        />
        <Button type='primary' onClick={() => setState(state + 1)}>
          plus 1
        </Button>
        <Button type='primary' onClick={() => setState(value => value + 2)}>
          plus 2
        </Button>
        {state}
        <br />
        {array}
        <Divider />
        useReducer count: {count}
        <br />
        <Input placeholder='useReducer count Input' ref={ref} />
        <Button
          type='primary'
          onClick={() => countDispatch(Number(ref.current?.input?.value))}
        >
          set count
        </Button>
      </div>

      <Divider />

      <div>
        <Form
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
                rules={[
                  { required: true, message: 'Please input your score!' },
                ]}
              >
                <Input placeholder='Score' />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item wrapperCol={{ offset: 2, span: 4 }}>
                <Space>
                  <Button type='primary' htmlType='submit'>
                    Submit
                  </Button>
                  <Button onClick={() => dataDispatch({ type: 'clear' })}>
                    Clear
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Table columns={columns} dataSource={data} rowKey='id' />
      </div>
    </>
  )
}

export default Playground
