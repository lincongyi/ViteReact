import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'

const { Title, Paragraph } = Typography
const CSSInJs = () => {
  const items = [
    { children: 'CSS In Js 介绍' },
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
              <Title>CSS In Js 介绍</Title>
              <Paragraph>文字描述</Paragraph>
              <Paragraph>文字描述</Paragraph>
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default CSSInJs
