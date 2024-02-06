import React from 'react'
import { Anchor, Col, Row, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import {
  codeString1,
  codeString10,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
  codeString7,
  codeString8,
  codeString9,
} from './code'

const { Title, Paragraph, Text } = Typography

const Basic = () => {
  const items = [
    { key: 'initial', href: '#initial', title: '安装、编译、运行' },
    { key: 'section1', href: '#section1', title: '1.基础类型' },
    { key: 'section2', href: '#section2', title: '2.枚举' },
    { key: 'section3', href: '#section3', title: '3.断言' },
    { key: 'section4', href: '#section4', title: '4.联合类型' },
    { key: 'section5', href: '#section5', title: '5.交叉类型' },
    { key: 'section6', href: '#section6', title: '6.类' },
    { key: 'section7', href: '#section7', title: '7.类的单例模式' },
    { key: 'section8', href: '#section8', title: '8.类访问器' },
    { key: 'section9', href: '#section9', title: '9.映射类型' },
    { key: 'section10', href: '#section10', title: '10.type和interface' },
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='initial'>
              <Title>安装、编译、运行</Title>
              <Paragraph>
                1.全局安装typescript
                <br />
                <Text code>npm install -g typescript</Text>
                <br />
                <Text code>tsc -v</Text>查看当前typescript版本
              </Paragraph>
              <Paragraph>
                2.编译，生成对应的js文件
                <br />
                <Text code>tsc xxxxx.ts</Text>
                <br />
                <Text code>node xxxxx.js</Text>
              </Paragraph>
              <Paragraph>
                3.运行（需要配合ts-node模块），先安装ts-node
                <br />
                <Text code>npm install -g ts-node</Text>
                <br />
                <Text code>ts-node xxxxx.ts</Text>
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>基本语法</Title>
              <Title level={5} id='section1'>
                1.基础类型
              </Title>
              <CodeHighLight codeString={codeString1} />
              <Title level={5} id='section2'>
                2.枚举
              </Title>
              <CodeHighLight codeString={codeString2} />
              <Title level={5} id='section3'>
                3.断言
              </Title>
              <CodeHighLight codeString={codeString3} />
              <Title level={5} id='section4'>
                4.联合类型
              </Title>
              <CodeHighLight codeString={codeString4} />
              <Title level={5} id='section5'>
                5.交叉类型
              </Title>
              <CodeHighLight codeString={codeString5} />
              <Title level={5} id='section6'>
                6.类
              </Title>
              <CodeHighLight codeString={codeString6} />
              <Title level={5} id='section7'>
                7.类的单例模式
              </Title>
              <CodeHighLight codeString={codeString7} />
              <Title level={5} id='section8'>
                8.类访问器
              </Title>
              <CodeHighLight codeString={codeString8} />
              <Title level={5} id='section9'>
                9.映射类型
              </Title>
              <CodeHighLight codeString={codeString9} />
              <Title level={5} id='section10'>
                10.type和interface
              </Title>
              <CodeHighLight codeString={codeString10} />
            </Col>
          </Row>
        </Typography>
      </Col>
      <Col xs={6} xl={4}>
        <Anchor
          offsetTop={86}
          items={items}
          onClick={e => e.preventDefault()}
        />
      </Col>
    </Row>
  )
}

export default Basic
