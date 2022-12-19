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
} from 'antd'
import './index.scss'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/dist/locale/zh-cn'
import moment from 'moment'
import type { ColumnsType } from 'antd/es/table'
import { getArticleType, getArticleList } from '@api/article'

type statusType = '0' | '1' | '2' | '3'
const { RangePicker } = DatePicker

// 表格栏目标题
interface IcolumnsType {
  id: string
  cover: string
  title: string
  status: string
  publishDate: string
  readTimes: number
  commentTimes: number
}

const columns: ColumnsType<IcolumnsType> = [
  {
    title: '封面',
    dataIndex: 'cover',
    render: (cover: string) =>
      cover ? <Image width={200} src={cover} /> : <Empty />,
    align: 'center',
  },
  { title: '标题', dataIndex: 'title' },
  { title: '发布状态', dataIndex: 'status' },
  { title: '发布日期', dataIndex: 'publishDate' },
  { title: '阅读数', dataIndex: 'readTimes' },
  { title: '评论数', dataIndex: 'commentTimes' },
]

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

  const [status, setStatus] = useState<statusType>('2') // 发布状态
  const [variety, setVariety] = useState<statusType>('0') // 文章类型

  const onValuesChange = ({
    status,
    variety,
  }: {
    status: statusType
    variety: statusType
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
            <Form.Item label="文章标题" name="title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="文章标题" name="title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="文章标题" name="title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="DatePicker" name="datePicker">
              <DatePicker locale={locale} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="发布状态" name="status">
              <Radio.Group>
                <Radio.Button value="0">未发布</Radio.Button>
                <Radio.Button value="1">已发布</Radio.Button>
                <Radio.Button value="2">待审核</Radio.Button>
                <Radio.Button value="3">已删除</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="文章类型" name="variety">
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
            <Form.Item label="发布区间" name="rangeDate">
              <RangePicker locale={locale} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col span={6} className="tr">
            <Button type="primary" danger htmlType="submit">
              查询
            </Button>
          </Col>
        </Row>
      </Form>
      <Table rowKey="id" columns={columns} dataSource={articleList} />
    </>
  )
}

export default Article
