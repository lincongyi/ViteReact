import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1, codeString2, codeString3 } from './code'
import Example1 from './Example1'

const { Title, Paragraph, Text } = Typography

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
              <Title level={5}>1.执行时机</Title>
              <Paragraph>
                可以把useEffect看做<Text code>componentDidMount</Text>,
                <Text code>componentDidUpdate</Text>,
                <Text code>componentWillUnmount</Text>这三个函数的组合。
                <CodeHighLight codeString={codeString1} />
              </Paragraph>
              <Title level={5}>2.useEffect的第二个参数</Title>
              <Paragraph>只有指定数据发生变化的时候才触发effect</Paragraph>
              <Text code>
                useEffect(() =&gt; {'\u007b'}document.title = title
                {'\u007d'},[title])
              </Text>
              <Title level={5}>3.useEffect结合异步函数</Title>
              <Paragraph>
                在useEffect中不能直接使用async和await，需要使用立即执行函数来包裹
              </Paragraph>
              <CodeHighLight codeString={codeString2} />
            </Col>
            <Col span={24}>
              <Title>实现方式</Title>
              <Paragraph>
                <Text mark>ps : 需要用到上一篇实现myUseState函数</Text>
              </Paragraph>
              <Paragraph>逻辑不太复杂，直接上代码+注释</Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactUseEffect
