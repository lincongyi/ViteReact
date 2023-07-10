import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import Example1 from './Example1'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'

const { Title, Paragraph, Text } = Typography

const CompressImage = () => {
  const items = [
    { children: '图片压缩' },
    { children: 'canvas.toDataURL' },
    { children: '图片压缩具体实例' },
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
              <Title>图片压缩</Title>
              <Paragraph>
                前端图片压缩的主要思路就是将图片绘制到<Text code>canvas</Text>
                中，然后通过<Text code>canvas</Text>的
                <Text code>toDataURL</Text>方法来控制图片的质量，对图片进行压缩
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>canvas.toDataURL</Title>
              <Paragraph>
                <Text code>canvas.toDataURL(type, encoderOptions)</Text>
                ，返回一个包含图片展示的 data URL 。可以使用 type
                参数其类型，默认为 PNG 格式。
              </Paragraph>
              <Paragraph>
                <Text code>type</Text>（可选）
                <br />
                图片格式，默认为 image/png
                <br />
                压缩图片<Text code>type</Text>
                只能是image/jpeg或者image/webp的格式来处理，不然压缩是无效的。
              </Paragraph>
              <Paragraph>
                <Text code>encoderOptions</Text>（可选）
                <br />
                在指定图片格式为 image/jpeg 或 image/webp 的情况下，可以从 0 到
                1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值
                0.92。其他参数会被忽略。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>图片压缩具体实例</Title>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default CompressImage
