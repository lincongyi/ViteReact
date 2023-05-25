import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'
import Example1 from './Example1'

const { Title, Paragraph, Text } = Typography

const ReactUseImperativeHandle = () => {
  const items = [
    { children: 'useImperativeHandle的作用' },
    { children: 'useImperativeHandle具体实例' },
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
              <Title>useImperativeHandle的作用</Title>
              <Paragraph>
                父组件调子组件<Text type='danger'>暴露</Text>
                的属性和方法的钩子函数
              </Paragraph>
              <Paragraph>
                减少暴露给父组件获取的DOM元素属性,
                只暴露给父组件需要用到的DOM方法
              </Paragraph>
              <Paragraph>
                <Text strong>
                  使用 useImperativeHandle 钩子函数并传入三个参数：
                </Text>
              </Paragraph>
              <Paragraph>第一个参数是父组件传过来的ref</Paragraph>
              <Paragraph>
                第二个参数是个处理函数，它的返回值就是我们要传给父组件的方法和属性
              </Paragraph>
              <Paragraph>
                第三个参数是依赖项，表示只有依赖项中的值发生改变，才会把最新的属性和方法传给父组件；如果没有依赖项，则表示只要子组件render都会把属性和方法传给父组件。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>useImperativeHandle具体实例</Title>
              <Title level={5}>Example 1:</Title>
              <Title level={5}>
                1.子组件通过useImperativeHandle暴露变量和方法给父组件，覆盖掉原来
                <Text code>ref</Text>暴露的div dom属性
              </Title>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactUseImperativeHandle
