import React from 'react'
import { Anchor, Col, Row, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'
import Example1 from './Example1'

const { Title, Paragraph } = Typography

const Throttle = () => {
  const items = [
    { key: 'definition', href: '#definition', title: '定义' },
    { key: 'situation', href: '#situation', title: '应用场景' },
    { key: 'achieve', href: '#achieve', title: '实现' },
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='definition'>
              <Title>定义</Title>
              <Paragraph>
                1.如果这个事件会被频繁触发，那么节流函数会按照一定的频率来执行函数；
              </Paragraph>
              <Paragraph>
                2.不管在这个中间有多少次触发这个事件，执行函数的频率总是固定的；
              </Paragraph>
              <Paragraph>
                简而言之，节流类似于技能cd，不管你按了多少次，必须等到cd结束后才能释放技能。也就是说在如果在cd时间段，不管你触发了几次事件，只会执行一次。只有当下一次cd转换，才会再次执行。
              </Paragraph>
            </Col>
            <Col span={24} id='situation'>
              <Title>应用场景</Title>
              <Paragraph>鼠标移动事件。</Paragraph>
              <Paragraph>滚动加载加载更多。</Paragraph>
            </Col>
            <Col span={24} id='achieve'>
              <Title>实现</Title>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
      <Col xs={6} xl={4} style={{ paddingLeft: 10 }}>
        <Anchor
          offsetTop={86}
          items={items}
          onClick={e => e.preventDefault()}
        />
      </Col>
    </Row>
  )
}

export default Throttle
