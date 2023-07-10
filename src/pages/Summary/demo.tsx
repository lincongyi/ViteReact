import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'

const { Title, Paragraph } = Typography

const demo = () => {
  const items = [
    { children: '标题导航-xxx的作用' },
    { children: '标题导航-xxx具体实例' },
  ]
  return (
    <Row>
      <Col span={6}>
        <div style={{ position: 'fixed' }}>
          <Timeline items={items} />
        </div>
      </Col>
      <Col span={18}>
        <Typography>
          <Row>
            <Col span={24}>
              <Title>标题</Title>
              <Paragraph>文字描述</Paragraph>
              <Paragraph>文字描述</Paragraph>
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default demo
