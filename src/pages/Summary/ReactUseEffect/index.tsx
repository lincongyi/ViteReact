import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import Example1 from './Example1'

const { Title, Paragraph } = Typography

const ReactUseEffect = () => {
  const items = [
    { children: 'useEffect-基础用法' },
    { children: 'useEffect-推断内部实现方式' },
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
              <Title>基础用法</Title>
              <Paragraph>文字描述</Paragraph>
              <Paragraph>文字描述</Paragraph>
            </Col>
            <Col span={24}>
              <Title>实现方式</Title>
              <Paragraph>文字描述</Paragraph>
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactUseEffect
