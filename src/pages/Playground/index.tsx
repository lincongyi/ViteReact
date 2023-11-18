import React, {
  Ref,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
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
  Slider,
  Image,
} from 'antd'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'
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

import type { UploadRequestOption } from 'rc-upload/lib/interface'
import axios from 'axios'
import { getMember } from '@api/member'

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

  const CancelToken = axios.CancelToken
  let cancel: Function

  /**
   * 发起请求
   */
  const onRequest = async () => {
    axios.post(
      'http://127.0.0.1:3000/article/type',
      {},
      {
        cancelToken: new CancelToken(function execotor (c) {
          cancel = c
        }),
      }
    )
  }

  /**
   * 终止请求
   */
  const onCancelRequest = () => {
    cancel && cancel()
  }

  /**
   * 发起请求
   */
  const onRequest2 = async () => {
    const { data } = await getMember()
    console.log(data)
  }

  /**
   * 压缩质量
   */
  const [quality, setQuality] = useState(9)

  /**
   * 图片大小
   */
  const [imgLimit, setImgLimit] = useState(1024)

  const onChangeLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit = isNaN(Number(e.target.value)) ? 1024 : Number(e.target.value)
    setImgLimit(limit)
  }

  const onChangeQuality = (value: number) => {
    setQuality(value)
  }

  const imageList = [
    'https://i0.hippopx.com/photos/604/288/839/technology-digital-tablet-digital-tablet-preview.jpg',
    'https://i0.hippopx.com/photos/779/1006/559/coffee-hot-drink-espresso-preview.jpg',
    'https://i0.hippopx.com/photos/829/226/490/coffee-shop-american-flag-america-coffee-preview.jpg',
  ]

  /**
   * canvas转blob类型文件
   */
  const toBlob: (canvas: HTMLCanvasElement) => Promise<number> = (
    canvas: HTMLCanvasElement
  ) => {
    return new Promise(resolve => {
      canvas.toBlob(
        res => {
          resolve((res?.size as number) / 1024)
        },
        'image/jpeg',
        1
      )
    })
  }

  type TImageList = {
    url: string
    size: number
  }

  /**
   * 获取未压缩图片信息
   */
  const getUnCompressImage: (url: string) => Promise<TImageList> = (
    url: string
  ) => {
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')
    const context = canvas.getContext('2d')
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    return new Promise(resolve => {
      img.onload = async () => {
        canvas.width = img.width
        canvas.height = img.height
        context!.drawImage(img, 0, 0, img.width, img.height)
        const size = await toBlob(canvas)
        resolve({
          url,
          size,
        })
      }
    })
  }

  /**
   * 未压缩的图片
   */
  const [unCompressList, setUnCompressList] = useState<TImageList[]>()

  /**
   * 已压缩的图片
   */
  const [compressList, setCompressList] = useState<TImageList[]>()

  useEffect(() => {
    ;(async () => {
      const result: TImageList[] = []
      for (let i = 0; i < imageList.length; i++) {
        const item: TImageList = await getUnCompressImage(imageList[i])
        result.push(item)
      }
      setUnCompressList(result)
    })()
  }, [])

  /**
   * 获取base64大小
   */
  const getBase64ImageSize = (base64: string) => {
    const buffer = atob(base64.split(',')[1])
    const length = buffer.length
    return length / 1024
  }

  /**
   * 压缩图片
   * @param {string} url 图片路径
   * @param {number} quality 压缩质量0~10
   * @param {number} limit 图片大小限制 默认100kb
   * @returns {{url,size}} url base64 size 大小
   */
  const compressImage: (
    url: string,
    quality: number,
    limit?: number
  ) => Promise<TImageList> = (url, quality, limit = 1024) => {
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    return new Promise(resolve => {
      img.onload = async () => {
        canvas.width = img.width
        canvas.height = img.height
        context.clearRect(0, 0, img.width, img.height)
        context.drawImage(img, 0, 0, img.width, img.height)
        let base64 = canvas.toDataURL('image/jpeg', quality / 10)
        let size = getBase64ImageSize(base64)
        let count = 0
        while (size > limit) {
          count++
          base64 = canvas.toDataURL('image/jpeg', quality / 10 / 2 / count)
          size = getBase64ImageSize(base64)
        }
        resolve({
          url: base64,
          size,
        })
      }
    })
  }

  /**
   * 遍历图片数组，执行压缩方法
   */
  const onCompress = async () => {
    const result: TImageList[] = []
    for (let i = 0; i < imageList.length; i++) {
      const item: TImageList = await compressImage(
        imageList[i],
        quality,
        imgLimit
      )
      result.push(item)
    }
    setCompressList(result)
  }

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

      <Divider orientation='left'>针对单个请求，进行处理</Divider>

      <Space>
        <Button type='primary' onClick={() => onRequest()}>
          发起请求
        </Button>
        <Button onClick={() => onCancelRequest()}>终止请求</Button>
      </Space>

      <Divider orientation='left'>在拦截器上统一封装，防止重复请求</Divider>

      <Button type='primary' onClick={() => onRequest2()}>
        发起请求
      </Button>

      <Divider />

      <Row gutter={[0, 20]}>
        <Col span={4}>
          <Button
            type='primary'
            icon={<DownloadOutlined />}
            onClick={onCompress}
          >
            Compress
          </Button>
        </Col>
        <Col span={8}>
          <Row align='middle'>
            <Col span={16}>
              <Slider
                min={0}
                max={10}
                value={quality}
                onChange={onChangeQuality}
              />
            </Col>
            <Col span={8}>图片质量：{quality / 10}</Col>
            <Col span={24}>
              <Input
                addonBefore='图片大小限制（最大）'
                addonAfter='kb'
                defaultValue={imgLimit}
                onChange={onChangeLimit}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Typography.Paragraph>未压缩图片：</Typography.Paragraph>
          <Space>
            {unCompressList &&
              unCompressList.map((item, index) => (
                <Space direction='vertical' key={index}>
                  <Image key={index} width={200} src={item.url} />
                  <Typography.Text strong>
                    图片大小：{item.size.toFixed(2)}kb
                  </Typography.Text>
                </Space>
              ))}
          </Space>
        </Col>
        <Col span={24}>
          <Typography.Paragraph>已压缩图片：</Typography.Paragraph>
          <Space>
            {compressList &&
              compressList.map((item, index) => (
                <Space direction='vertical' key={index}>
                  <Image key={index} width={200} src={item.url} />
                  <Typography.Text strong>
                    图片大小：{item.size.toFixed(2)}kb
                  </Typography.Text>
                </Space>
              ))}
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default observer(Playground)
