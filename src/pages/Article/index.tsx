import React, { useState } from 'react'
import { Col, Row, Form, Input, Radio, Select, DatePicker, Switch } from 'antd'
import './index.scss'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/dist/locale/zh-cn'

type statusType = '0' | '1' | '2' | '3'
const { RangePicker } = DatePicker

const Article: React.FC = () => {
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
  }
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        initialValues={{ status, variety }}
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
            <Form.Item label="DatePicker">
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
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">时事类</Select.Option>
                <Select.Option value="2">科普类</Select.Option>
                <Select.Option value="3">技术类</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="发布区间">
              <RangePicker locale={locale} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        {/* <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item> */}
      </Form>
    </>
  )
}

export default Article
