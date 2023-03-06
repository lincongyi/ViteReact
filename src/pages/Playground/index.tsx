import React, { useContext, useReducer, useRef, useState } from 'react'
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
  Typography,
} from 'antd'
import type { InputRef } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { generateId } from '@utils/index'
import { useStore } from '@stores/index'
import { useStoreHooks } from '@stores/index.hooks'
import { observer } from 'mobx-react-lite'

type TContext = {
  sonValue: string
  grandsonValue: string
}

const myContext = React.createContext<TContext>({
  sonValue: '',
  grandsonValue: '',
})

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

  const [provideValue, setProvideValue] = useState({
    sonValue: 'this is son component value',
    grandsonValue: 'this is grandson component value',
  })

  const { countStore } = useStore()
  const { countStoreHooks } = useStoreHooks()

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

      <Divider />

      <Button
        onClick={() =>
          setProvideValue({
            sonValue: `sonValue is changed! ~ ${Math.random() * 100}`,
            grandsonValue: `grandsonValue is changed! ~ ${Math.random() * 100}`,
          })
        }
      >
        改变provide
      </Button>

      <myContext.Provider value={provideValue}>
        <SonComponent />
        <Divider />
      </myContext.Provider>

      <Divider />

      <Row gutter={8}>
        <Col span={6}>
          <Input placeholder='Basic usage' value={countStore.count} />
        </Col>
        <Col span={18}>
          <Space>
            <Button onClick={() => countStore.increment()}>+</Button>
            <Button type='dashed' onClick={() => countStore.decrement()}>
              -
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStore.getDoubleCount())}
            >
              double
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStore.getTrebleCount.get())}
            >
              trible
            </Button>
          </Space>
        </Col>
      </Row>

      <Divider />

      <Typography.Title>hooks 版</Typography.Title>

      <Row gutter={8}>
        <Col span={6}>
          <Input placeholder='Basic usage' value={countStoreHooks.count} />
        </Col>
        <Col span={18}>
          <Space>
            <Button onClick={() => countStoreHooks.increment()}>+</Button>
            <Button type='dashed' onClick={() => countStoreHooks.decrement()}>
              -
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStoreHooks.getDoubleCount())}
            >
              double
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStoreHooks.getTrebleCount)}
            >
              trible
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}

const SonComponent = () => {
  const context = useContext(myContext)
  return (
    <>
      <Typography.Text type='success'>son component</Typography.Text>
      <br />
      <Typography.Text type='warning'>{context.sonValue}</Typography.Text>
      <br />
      <Divider />
      <GrandsonComponent />
    </>
  )
}

const GrandsonComponent = () => {
  const context = useContext(myContext)
  return (
    <>
      <Typography.Text type='secondary'>grandson component</Typography.Text>
      <br />
      <Typography.Text type='danger'>{context.grandsonValue}</Typography.Text>
    </>
  )
}

export default observer(Playground)
