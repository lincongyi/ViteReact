import React, { useEffect, useState } from 'react'
import {
  Col,
  Row,
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Button,
  Table,
  Image,
  Empty,
  Space,
  Modal,
} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import './index.scss'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/dist/locale/zh-cn'
import moment from 'moment'
import type { ColumnsType } from 'antd/es/table'
import { getArticleType, getArticleList } from '@api/article'

type statusType = 0 | 1 | 2 | 3
type varietyType = '0' | '1' | '2' | '3'
const { RangePicker } = DatePicker
const { confirm } = Modal

// 表格栏目标题
interface IcolumnsType {
  id: string
  cover: string
  title: string
  status: string
  type: string
  publishDate: string
  readTimes: number
  commentTimes: number
}

const statusList = ['全部', '未发布', '已发布', '待审核', '已删除']

const columns: ColumnsType<IcolumnsType> = [
  {
    title: '封面',
    dataIndex: 'cover',
    render: (cover: string) =>
      cover ? (
        <Image width={200} src={cover} />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ),
    align: 'center',
  },
  { title: '标题', dataIndex: 'title' },
  {
    title: '发布状态',
    dataIndex: 'status',
    render: status => statusList[Number(status)],
  },
  { title: '发布日期', dataIndex: 'publishDate' },
  { title: '阅读数', dataIndex: 'readTimes' },
  { title: '评论数', dataIndex: 'commentTimes' },
  {
    title: '操作',
    render: props => {
      return (
        <Space>
          <Button type='primary' onClick={() => onDetail(props)}>
            详情
          </Button>
          <Button type='text' danger onClick={() => onDelete(props.id)}>
            删除
          </Button>
        </Space>
      )
    },
  },
]

// 表格单项详情
const onDetail = (item: Record<string, any>) => {
  console.log(item)
}

// 表格单项删除
const onDelete = (id: string) => {
  confirm({
    title: '确认删除',
    icon: <ExclamationCircleOutlined />,
    content: '是否确认删除该项？',
    okText: '确认',
    cancelText: '取消',
    onOk () {
      console.log('确认')
    },
    onCancel () {
      console.log('取消')
    },
  })
}

const Article: React.FC = () => {
  const [articleType, setArticleType] = useState([]) // 文章类型
  // 获取文章类型
  useEffect(() => {
    ;(async () => {
      const result = await getArticleType()
      const { typeList } = result.data
      setArticleType(typeList)
    })()
  }, [])

  const [articleList, setArticleList] = useState([]) // 文章列表
  // 获取文章列表
  useEffect(() => {
    ;(async () => {
      const result = await getArticleList()
      const { list } = result.data
      setArticleList(list)
    })()
  }, [])

  const [status, setStatus] = useState<statusType>(0) // 发布状态
  const [variety, setVariety] = useState<varietyType>('0') // 文章类型

  const onValuesChange = ({
    status,
    variety,
  }: {
    status: statusType
    variety: varietyType
  }) => {
    setStatus(status)
    setVariety(variety)
  }

  const onFinish = (values: any) => {
    console.log(values)
    // const { rangeDate } = values
    // const [startDate, endDate] = rangeDate
    // console.log(startDate.format('yyyy-MM-DD'))
    // console.log(endDate.format('yyyy-MM-DD'))
  }

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        initialValues={{
          status,
          variety,
          datePicker: moment('2011/11/11', 'YYYY/MM/DD'),
        }}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label='文章标题' name='title'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='文章标题' name='title'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='文章标题' name='title'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='DatePicker' name='datePicker'>
              <DatePicker locale={locale} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='发布状态' name='status'>
              <Radio.Group>
                {statusList.map((item, index) => (
                  <Radio.Button value={index} key={index}>
                    {item}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='文章类型' name='variety'>
              <Select>
                {articleType.map((item: { value: string; label: string }) => (
                  <Select.Option value={item.value} key={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='发布区间' name='rangeDate'>
              <RangePicker locale={locale} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify='end'>
          <Col span={6} className='tr'>
            <Button type='primary' htmlType='submit'>
              查询
            </Button>
          </Col>
        </Row>
      </Form>
      <Table rowKey='id' columns={columns} dataSource={articleList} />
    </>
  )
}

export default Article
