import React from 'react'
import { Col, Divider, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@components/CodeHighLight'
import Example1 from './Example1'
import { codeString1, codeString2, codeString3 } from './code'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'

const { Title, Paragraph, Text } = Typography
const ReactUseReducer = () => {
  const items = [
    { children: 'useReducer的作用' },
    { children: 'useReducer具体实例' },
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
              <Title>useReducer的作用</Title>
              <Paragraph>
                <Text code>useReducer</Text>
                通常被用于替代<Text code>useState</Text>
                来统一管理状态，避免过多的state带来的开发不便
              </Paragraph>
              <Paragraph>
                <Text code>useState</Text>能做到的事，它都能做到，甚至做得更好。
                <Text code>useReducer</Text>
                某种程度上解耦了操作逻辑(action)和后续的行为(一般是 UI
                的更新)，虽然代码量变多了，但是看起来更加整洁。
              </Paragraph>
              <Paragraph>
                <Text code>useReducer</Text>让我们将表现和业务(what和how)分离
              </Paragraph>
              <Paragraph>
                <Text code>useReducer</Text>类似于数组的<Text code>reduce</Text>
                方法，它接收两个参数: reducer函数和初始状态init
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>useReducer具体实例</Title>
              <Row>
                <Col span={24}>
                  <Title level={5}>Example 1:</Title>
                  <Title level={5}>1.点击按钮，count为累计输入框相加的值</Title>
                  <CodeHighLight codeString={codeString1} />
                  <Divider />
                  <Example1 />
                  <Divider />
                </Col>
                <Col span={24}>
                  <Title level={5}>Example 2:</Title>
                  <Title level={5}>1.表单新增项，添加到表格中</Title>
                  <Text type='warning'>
                    PS : antd部分代码较多，就只放核心代码了
                  </Text>
                  <CodeHighLight codeString={codeString2} />
                  <Divider />
                  <Example2 />
                  <Divider />
                  <Title level={5}>
                    2.如果要实现表格项delete功能，需要调整action数据结构
                  </Title>
                  <Text type='warning'>
                    PS : antd部分代码较多，就只放核心代码了
                  </Text>
                  <CodeHighLight codeString={codeString3} />
                  <Divider />
                  <Example3 />
                  <Divider />
                </Col>
                <Col span={24}>
                  <Title level={5}>Example 3:</Title>
                  <Title level={5}>1.模拟一个简单登录框实例</Title>
                  {/* <CodeHighLight codeString={codeString3} /> */}
                  <Divider />
                  <Example4 />
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

export default ReactUseReducer
