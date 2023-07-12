import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import Example1 from './Example1'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'

const { Title, Paragraph, Text } = Typography

const ForOf = () => {
  const items = [
    { children: '前言' },
    { children: '迭代器' },
    { children: '原生的iteration接口' },
    { children: '自定义iteration接口' },
  ]
  const nextCode1 = '{ value: undefined, done: true }'
  const nextCode2 = '{ value: xxx, done: false }'
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
              <Title>前言</Title>
              <Paragraph>
                JavaScript提供了四种数据集合，分别是
                <Text code>array</Text>、<Text code>object</Text>、
                <Text code>map</Text>和<Text code>set</Text>
                。这四种数据集合的数据结构各不相同，但是都可以被循环遍历，这一切的背后都离不开
                <Text code>iteration</Text>(迭代器)的支撑。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>迭代器</Title>
              <Paragraph>
                在 JavaScript
                中，迭代器是一个对象，它定义一个序列，并在终止时可能返回一个返回值。
              </Paragraph>
              <Paragraph>
                迭代器可以通过重复调用 <Text code>next()</Text>
                方法实现元素的遍历。该方法返回具有两个属性的对象：
                <Text code>value</Text>（这是序列中的 <Text code>next</Text>{' '}
                值）和 <Text code>done</Text>
                ，如果已经迭代到序列中的最后一个值，则它为{' '}
                <Text code>true</Text>（<Text code>{nextCode1}</Text>） 。如果{' '}
                <Text code>value</Text> 和<Text code>done</Text>{' '}
                一起存在，则它是迭代器的返回值（<Text code>{nextCode2}</Text>）
                。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>原生的iteration接口</Title>
              <Paragraph>
                一种数据结构只要部署了 <Text code>Iterator</Text>
                接口，我们就称这种数据结构是“可遍历的”（iterable）。
              </Paragraph>
              <Paragraph>
                ES6 规定，默认的 <Text code>Iterator</Text>
                接口部署在数据结构的<Text code>Symbol.iterator</Text>属性，
                <Text code>Symbol.iterator</Text>
                属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。
                <br />
                <Text code>
                  const iterator = arr[Symbol.iterator]() //
                  调用原生Symbol.iterator方法，返回一个遍历器对象
                </Text>
              </Paragraph>
              <Paragraph>原生具备 Iterator 接口的数据结构如下：</Paragraph>
              <ul>
                <li>Array</li>
                <li>Map</li>
                <li>Set</li>
                <li>String</li>
                <li>函数的 arguments 对象</li>
                <li>NodeList 对象</li>
              </ul>
            </Col>
            <Col span={24}>
              <Title>自定义iteration接口</Title>
              <Paragraph>
                由于Object内部没有实现<Text code>Symbol.iterator()</Text>
                方法，所以不能使用<Text code>for...of</Text>遍历。
              </Paragraph>
              <Paragraph>
                我们为Object添加上<Text code>Symbol.iterator()</Text>
                方法，使其支持<Text code>for...of</Text>循环
              </Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ForOf
