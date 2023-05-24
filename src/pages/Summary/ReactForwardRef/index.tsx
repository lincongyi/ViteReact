import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1, codeString2 } from './code'
import Example1 from './Example1'
import Example2 from './Example2'

const { Title, Paragraph, Text } = Typography

const ReactForwardRef = () => {
  const items = [
    { children: 'React.forwardRef的作用' },
    { children: 'React.forwardRef具体实例' },
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
              <Title>React.forwardRef的作用</Title>
              <Paragraph>
                在函数式组件直接写<Text code>ref</Text>属性时，会报个警告：
              </Paragraph>
              <Paragraph>
                <Text type='danger'>
                  Warning: Function components cannot be given refs. Attempts to
                  access this ref will fail. Did you mean to use
                  React.forwardRef()?
                </Text>
              </Paragraph>
              <Paragraph>
                从这段警示我们就可以看出，函数式组件要使用ref属性，就要用forwardRef。
              </Paragraph>
              <Paragraph>
                forwardRef 会创建一个React组件，这个组件能够将其接收的 ref
                属性转发到其组件树下的另一个组件中。其目的就是希望可以在封装组件时，外层组件可以通过
                ref 直接控制内层组件或元素的行为。
              </Paragraph>
              <Paragraph>
                forwardRef 接受<Text code>props</Text>和<Text code>ref</Text>
                作为传入参数
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>React.forwardRef具体实例</Title>
              <Title level={5}>Example 1:</Title>
              <Title level={5}>1.转发（透传）Ref</Title>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
              <Title level={5}>2.forwardRef配合高阶组件（HOC）的应用</Title>
              <Paragraph>
                高阶组件是一个函数，它接收一个组件作为参数，并返回一个新的组件。forwardRef
                可以帮助我们确保 <Text code>ref</Text>
                被正确地传递到被包装的组件中。
              </Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Example2 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactForwardRef
