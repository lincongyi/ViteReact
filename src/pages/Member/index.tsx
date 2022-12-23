import React, { useEffect, useState } from 'react'
import './index.scss'
import { Button, Col, DatePicker, Form, Input, Row, Table } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/dist/locale/zh-cn'
import moment from 'moment'
import { getMember } from '@api/member'

const { Column } = Table

const Member: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  const [memberList, setMemberList] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await getMember()
      const { list } = result.data
      setMemberList(list)
    })()
  }, [])

  // 编辑用户
  const onEdit = (props: Record<string, any>) => {
    console.log(props)
  }

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        initialValues={{
          datePicker: moment('2011/11/11', 'YYYY/MM/DD'),
        }}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label='用户名' name='name'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='用户等级' name='level'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='注册日期' name='datePicker'>
              <DatePicker locale={locale} />
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
      <Table rowKey='id' dataSource={memberList}>
        <Column title='用户名' dataIndex='name' key='name' />
        <Column title='用户等级' dataIndex='level' key='level' />
        <Column title='关注数' dataIndex='followers' key='followers' />
        <Column
          title='发布数量'
          dataIndex='articleAmount'
          key='articleAmount'
        />
        <Column title='注册日期' dataIndex='createDate' key='createDate' />
        <Column
          title='操作'
          render={props => (
            <>
              <Button type='primary' onClick={() => onEdit(props)}>
                编辑
              </Button>
            </>
          )}
        />
      </Table>
    </>
  )
}

export default Member
