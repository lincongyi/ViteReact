import React from 'react'
import { Col, Divider, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@components/CodeHighLight'
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
  codeString7,
} from './code'
import Example1 from './Example1'
import Example2 from './Example2'

const { Title, Paragraph, Text } = Typography
const ReactUseContext = () => {
  const items = [
    { children: 'createContext的作用' },
    { children: 'createContext具体实例' },
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
              <Title>createContext的作用</Title>
              <Paragraph>
                <Text code>createContext</Text>
                常用于组件深入传递数据或者组件之间共享状态的情况，无需手动往下层组件中传入props；
              </Paragraph>
              <Paragraph>
                类似于vue中的
                <Text code>provide/inject</Text>功能；
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>createContext具体实例</Title>
              <Row>
                <Col span={24}>
                  <Title level={5}>Example 1:</Title>
                  <Title level={5}>
                    1.先声明<Text code>Provider</Text>组件，通过
                    <Text code>value</Text>
                    属性进行值的传递，这里单纯展示数据传递的功能
                    <br />
                    在父组件添加按钮，点击可同时改变传递给后代组件的值，从而刷新视图
                  </Title>
                  <Text type='danger'>
                    PS : 子组件接收值有两种写法：
                    <br />
                    一种是
                    <Text code>Consumer</Text>
                    组件，其内部的函数参数就是context的内容
                    <br />
                    另外一种目前比较常用的是通过
                    <Text code>useContext</Text>来获取上下文数据
                  </Text>
                  <CodeHighLight codeString={codeString1} />
                  <Divider />
                  <Example1 />
                  <Divider />
                </Col>
                <Col span={24}>
                  <Title level={5}>Example 2:</Title>
                  <Title level={5}>
                    1.兄弟，父子组件间使用<Text code>useReducer</Text> +{' '}
                    <Text code>useContext</Text>相结合，实现一个小型的状态管理器
                  </Title>
                  <Text mark>Provider.tsx</Text>
                  <CodeHighLight codeString={codeString2} />
                  <Text mark>ComponentA.tsx</Text>
                  <CodeHighLight codeString={codeString3} />
                  <Text mark>ComponentAChild.tsx</Text>
                  <CodeHighLight codeString={codeString4} />
                  <Text mark>ComponentB.tsx</Text>
                  <CodeHighLight codeString={codeString5} />
                  <Text mark>ButtonGroup.tsx</Text>
                  <CodeHighLight codeString={codeString6} />
                  <Text mark>index.tsx</Text>
                  <CodeHighLight codeString={codeString7} />
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

export default ReactUseContext
