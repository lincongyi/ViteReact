import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1, codeString2 } from './code'
import Example1 from './Example1'
import Example2 from './Example2'

const { Title, Paragraph } = Typography

const AxiosCancelToken = () => {
  const items = [
    { children: 'AxiosCancelToken场景' },
    { children: 'AxiosCancelToken具体实例' },
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
              <Title>AxiosCancelToken场景</Title>
              <Paragraph>
                为了防止用户在网络不好或者其他情况下短时间内重复进行接口请求，从而导致前端向后端重复发送多次请求。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>AxiosCancelToken具体实例</Title>
              <Title level={5}>Example 1:</Title>
              <Title level={5}>1.针对单个请求进行终止操作</Title>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
              <Title level={5}>Example 2:</Title>
              <Title level={5}>
                1.针对请求拦截器和响应拦截器，终止重复请求的情况
              </Title>

              <CodeHighLight codeString={codeString2} />
              <Example2 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default AxiosCancelToken
