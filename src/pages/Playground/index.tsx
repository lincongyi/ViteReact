import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import './index.scss'
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Upload,
} from 'antd'
import type { InputRef } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { generateId, lazyLoad } from '@utils/index'
import { useStore } from '@stores/index'
import { useStoreHooks } from '@stores/index.hooks'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { context } from '@/context'
import { getMusic, getImages, upload } from '@/api'
import type { UploadProps } from 'antd/lib/upload/interface'
import type { UploadFile } from 'antd/es/upload/interface'
import { PlusOutlined } from '@ant-design/icons'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

type TContext = {
  sonValue: string
  grandsonValue: string
}

const myContext = React.createContext<TContext>({
  sonValue: '',
  grandsonValue: '',
})

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

  const navigate = useNavigate()

  const { dispatchRoute } = useContext(context)!

  const handleFetch = async () => {
    const res = await getMusic()
    console.log(res)
  }

  /**
   * 照片墙图片列表
   */
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  /**
   * 初始化照片墙
   */
  const initFileList = async () => {
    const { data } = await getImages()
    setFileList(data)
  }

  /**
   * 上传文件改变时的回调（文件状态改变的回调），感觉有自定义的上传方法可以忽略onChange
   */
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    console.log(newFileList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  /**
   * 图片上传
   */
  const customRequest = async (options: UploadRequestOption) => {
    const { file } = options
    const formData = new FormData()
    formData.append('file', file)
    const { data } = await upload(formData)
    const { uid, type: name, url } = data
    setFileList([...fileList, { uid, name, url, status: 'done' }])
  }

  const barRef = useRef<InputRef | null>(null)

  const Bar = React.forwardRef<InputRef, { value?: string }>((props, ref) => {
    const onClick = () => {
      if (ref) {
        console.log(
          (ref as React.MutableRefObject<InputRef>).current?.input?.value
        )
      }
    }
    return (
      <div id='bar'>
        bar 组件
        <Space direction='vertical'>
          <Input
            ref={ref}
            placeholder='Basic usage'
            defaultValue={props.value || 'input ref'}
          />
          <Button type='primary' onClick={onClick}>
            Primary Button
          </Button>
        </Space>
      </div>
    )
  })
  Bar.displayName = 'Bar'

  const Baz = React.forwardRef<InputRef, { value?: string; type?: string }>(
    ({ value, type }, ref) => {
      const onClick = () => {
        console.log(`inputValue: ${inputValue}`)
      }
      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
      }
      const [inputValue, setInputValue] = useState('Bazzzzz')
      useEffect(() => {
        if (value) setInputValue(value)
      }, [value])
      return (
        <>
          baz 组件({type || 'common'})
          <Space direction='vertical'>
            <Input
              ref={ref}
              placeholder='Bazzzzz component'
              value={inputValue}
              onChange={onChange}
            />
            <Button type='primary' onClick={onClick}>
              Primary Button
            </Button>
          </Space>
        </>
      )
    }
  )

  Baz.displayName = 'Baz'

  /**
   * 高阶组件
   */
  const wrapComponent = (
    Component: React.ForwardRefExoticComponent<
      {
        value?: string | undefined
        type?: string | undefined
      } & React.RefAttributes<InputRef>
    >
  ) => {
    const WithHOC = (props: {}, ref: Ref<InputRef> | undefined) => {
      const [value, setValue] = useState<string>()
      useEffect(() => {
        setValue('return HOC function')
      }, [])
      const type = 'high order component'
      return <Component value={value} type={type} ref={ref} />
    }
    return React.forwardRef(WithHOC)
  }

  const HOCRef = useRef<InputRef | null>(null)

  const HOCBaz = wrapComponent(Baz)

  return (
    <>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: '<i style="color:red;">dangerouslySetInnerHTML</i>',
          }}
        />
        <Button type='primary' onClick={() => setState(state + 1)}>
          plus 1
        </Button>
        <Button type='primary' onClick={() => setState(value => value + 2)}>
          plus 2
        </Button>
        {state}
        <br />
        {array.join('-')}
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
          style={{ padding: '0 4px' }}
        >
          <Row gutter={8}>
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
      <br />

      <myContext.Provider value={provideValue}>
        <SonComponent />
        <Divider />
      </myContext.Provider>

      <Divider />

      <div style={{ padding: '0 4px' }}>
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
      </div>

      <Divider />

      <Typography.Title>hooks 版</Typography.Title>

      <div style={{ padding: '0 4px' }}>
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
      </div>

      <Divider />

      <Space direction='vertical'>
        <Button type='primary' onClick={() => navigate('/authRoute')}>
          路由跳转
        </Button>
        <Button
          onClick={() =>
            dispatchRoute([
              {
                path: 'authRoute',
                element: lazyLoad('AuthRoute'),
              },
            ])
          }
        >
          添加路由权限
        </Button>
      </Space>

      <Divider />

      <Typography.Title level={3}>单文件上传</Typography.Title>

      <Space>
        <Button type='primary' onClick={handleFetch}>
          请求接口
        </Button>
        <Button type='primary' onClick={initFileList}>
          初始化照片墙
        </Button>
      </Space>

      <Divider />

      <Card>
        <Upload
          listType='picture-card'
          fileList={fileList}
          onChange={onChange}
          customRequest={customRequest}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
      </Card>

      <Divider />

      <Bar ref={barRef} />

      <Divider />

      <Baz />

      <Divider />

      <Typography.Title level={3}>高阶组件forwardRef</Typography.Title>

      <HOCBaz ref={HOCRef} />

      <Button
        type='primary'
        onClick={() => console.log(HOCRef.current?.input?.value)}
      >
        获取current
      </Button>
    </>
  )
}

export default observer(Playground)
