import React from 'react'
import { Col, Divider, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@components/CodeHighLight'
import Example1 from './Example1'
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
} from './code'
import Example2 from './Example2'

const { Title, Paragraph, Text } = Typography
const ReactMobxUseContext = () => {
  const items = [
    { children: 'Mobx的作用' },
    { children: 'Mobx配合useContext具体实例' },
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
              <Title>Mobx的作用</Title>
              <Paragraph>
                Mobx用于监控和管理项目的应用的数据（即状态）。
              </Paragraph>
              <Paragraph>
                MobX 提供了几个核心 API
                来帮助定义状态（observable）、响应状态（autorun,
                computed）和修改状态（action），通过这些 API
                可以让程序立即具备响应式能力。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>Mobx配合useContext具体实例</Title>
              <Row>
                <Col span={24}>
                  <Title level={5}>Example 1:</Title>
                  <Title level={5}>1.实现一个简单的数值加减实例</Title>
                  <Text mark>stores/count.stores.ts</Text>
                  <CodeHighLight codeString={codeString1} />
                  <Text mark>stores/index.ts</Text>
                  <CodeHighLight codeString={codeString2} />
                  <Text mark>index.tsx</Text>
                  <CodeHighLight codeString={codeString3} />
                  <Divider />
                  <Example1 />
                  <Divider />
                </Col>
                <Col span={24}>
                  <Title level={5}>Example 2:</Title>
                  <Title level={5}>1.用hooks改写以上版本</Title>
                  <Text mark>stores/count.hooks.stores.ts</Text>
                  <CodeHighLight codeString={codeString4} />
                  <Text mark>stores/index.hooks.ts</Text>
                  <CodeHighLight codeString={codeString5} />
                  <Text mark>index.tsx</Text>
                  <CodeHighLight codeString={codeString6} />
                  <Divider />
                  <Example2 />
                  <Divider />
                </Col>
              </Row>
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactMobxUseContext
