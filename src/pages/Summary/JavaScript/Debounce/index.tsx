import React from 'react'
import { Anchor, Col, Row, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'
import Example1 from './Example1'

const { Title, Paragraph } = Typography

const Debounce = () => {
  const items = [
    { key: 'definition', href: '#definition', title: '定义' },
    { key: 'situation', href: '#situation', title: '应用场景' },
    { key: 'achieve', href: '#achieve', title: '实现' },
  ]
  return (
    <>
      <Row gutter={10}>
        <Col xs={18} xl={20}>
          <Typography>
            <Row>
              <Col span={24} id='definition'>
                <Title>定义</Title>
                <Paragraph>
                  1.当事件触发时，相应的函数并不会立即触发，而是会等待一定的时间；
                </Paragraph>
                <Paragraph>
                  2.当事件密集触发时，函数的触发会被频繁的推迟；
                </Paragraph>
                <Paragraph>
                  3.只有等待了一段时间也没有事件触发，才会真正的执行响应函数；
                </Paragraph>
                <Paragraph>
                  简而言之，防抖就是将函数的执行延迟一定时间，如果在该时间内重新触发事件，那么延迟的时间会重置，只有真正达到延迟时间后，才会执行回调函数。
                </Paragraph>
              </Col>
              <Col span={24} id='situation'>
                <Title>应用场景</Title>
                <Paragraph>输入框频繁输入内容，搜索或者提交信息。</Paragraph>
                <Paragraph>频繁点击按钮，触发点击事件。</Paragraph>
                <Paragraph>监听用户缩放浏览器resize事件。</Paragraph>
              </Col>
              <Col span={24} id='achieve'>
                <Title>实现</Title>
                <CodeHighLight codeString={codeString1} />
                <Example1 />
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
    </>
  )
}

export default Debounce
