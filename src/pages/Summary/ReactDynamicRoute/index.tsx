import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1, codeString2, codeString3, codeString4 } from './code'
import Example1 from './Example1'

const { Title, Paragraph, Text } = Typography
const ReactDynamicRoute = () => {
  const items = [
    { children: '动态路由场景' },
    { children: '动态路由具体实例' },
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
              <Title>动态路由场景</Title>
              <Paragraph>react router动态路由常用于用户登录后，获取用户路由表数据，映射成组件，返回新的路由表</Paragraph>
            </Col>
            <Col span={24}>
              <Title>动态路由具体实例</Title>
              <Title level={5}>Example 1:</Title>
              <Title level={5}>1.声明路由表类型</Title>
              <CodeHighLight codeString={codeString1} />
              <Title level={5}>2.先添加部分允许访问的路由表页面，例如登录，首页，404等模块</Title>
              <Text mark>router/index.tsx</Text>
              <CodeHighLight codeString={codeString2} />
              <Title level={5}>3.App.tsx页面通过<Text code>createContext</Text>实现值传递</Title>
              <Text mark>App.tsx</Text>
              <CodeHighLight codeString={codeString3} />
              <Title level={5}>4.模拟场景添加路由实现跳转</Title>
              <CodeHighLight codeString={codeString4} />
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactDynamicRoute
