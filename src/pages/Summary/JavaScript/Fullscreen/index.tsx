import React from 'react'
import CodeHighLight from '@/components/CodeHighLight'
import { Anchor, Col, Row, Typography } from 'antd'
import Example1 from './Example1'
import { codeString1, codeString2, codeString3 } from './code'

const { Title, Paragraph, Text } = Typography

const Fullscreen = () => {
  const items = [
    { key: 'definition', href: '#definition', title: '定义' },
    { key: 'common', href: '#common', title: '常用方法与属性' },
    { key: 'compatibility', href: '#compatibility', title: '兼容性处理' },
  ]
  return (
    <>
      <Row gutter={10}>
        <Col xs={18} xl={20}>
          <Typography>
            <Row>
              <Col span={24} id="definition">
                <Title>定义</Title>
                <Paragraph>
                  对于一个你想要以全屏模式展示的元素（例如
                  <Text code>&lt;video&gt;</Text>），你通过调用它的{' '}
                  <Text code>Element.requestFullscreen()</Text>{' '}
                  方法就能简单地激活它的全屏模式。
                </Paragraph>
              </Col>
              <Col span={24} id="common">
                <Title>常用方法与属性</Title>
                <Paragraph>
                  <Text mark>
                    全屏 API
                    没有它自己的接口实现。相反，它提供了一些其他接口以供实现全屏所需的方法、属性、事件处理函数。
                  </Text>
                </Paragraph>
                <Paragraph>
                  1.<Text code>Element.requestFullscreen()</Text>
                </Paragraph>
                <Paragraph>
                  将目标元素置为全屏模式，隐去屏幕上的浏览器所有 UI
                  元素，以及其他应用。返回一个 <Text code>Promise</Text>
                  ，并会在全屏模式被激活的时候变成 <Text code>
                    resolved
                  </Text>{' '}
                  状态。
                </Paragraph>
                <Paragraph>
                  2.<Text code>document.exitFullscreen()</Text>
                </Paragraph>
                <Paragraph>
                  从全屏模式切换回窗口模式。会返回一个 <Text code>Promise</Text>
                  ，会在全屏模式完全关闭的时候被置为 <Text code>
                    resolved
                  </Text>{' '}
                  状态。
                </Paragraph>
                <CodeHighLight codeString={codeString1} />
                <Example1 />
                <Paragraph>
                  3.<Text code>document.fullscreenEnabled</Text>
                </Paragraph>
                <Paragraph>
                  <Text code>fullscreenEnabled</Text>{' '}
                  属性提供了启用全屏模式的可能性。当它的值是 false
                  的时候，表示全屏模式不可用或不被支持。
                </Paragraph>
                <Paragraph>
                  4.<Text code>document.fullscreenElement</Text>
                </Paragraph>
                <Paragraph>
                  <Text code>fullscreenElement</Text> 属性提供了当前在 DOM（或者
                  shadow DOM）里被展示为全屏模式的 Element，如果这个值为
                  <Text mark>null</Text>，则文档不处于全屏模式。
                </Paragraph>
                <Paragraph>
                  5.<Text code>fullscreenchange</Text>
                </Paragraph>
                <Paragraph>
                  <Text code>fullscreenchange</Text>{' '}
                  事件会在浏览器进入或退出全屏模式后立即触发。
                  <br />
                  通过事件监听的执行进入或退出全屏的回调函数。
                  <CodeHighLight codeString={codeString2} />
                </Paragraph>
              </Col>
              <Col span={24} id="compatibility">
                <Title>兼容性处理</Title>
                <CodeHighLight codeString={codeString3} />
              </Col>
            </Row>
          </Typography>
        </Col>
        <Col xs={6} xl={4}>
          <Anchor
            offsetTop={86}
            items={items}
            onClick={(e) => e.preventDefault()}
          />
        </Col>
      </Row>
    </>
  )
}

export default Fullscreen
