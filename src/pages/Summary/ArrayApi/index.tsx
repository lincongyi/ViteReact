import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import {
  codeString1,
  codeString10,
  codeString11,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
  codeString7,
  codeString8,
  codeString9,
} from './code'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import Example7 from './Example7'
import Example8 from './Example8'
import Example9 from './Example9'
import Example10 from './Example10'
import Example11 from './Example11'

const { Title, Paragraph } = Typography

const ArrayApi = () => {
  const items = [
    { children: '数组遍历的Api' },
    { children: '1.forEach' },
    { children: '2.map' },
    { children: '3.filter' },
    { children: '4.reduce' },
    { children: '5.fill' },
    { children: '6.includes' },
    { children: '7.join' },
    { children: '8.find' },
    { children: '9.findIndex' },
    { children: '10.some' },
    { children: '11.every' },
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
              <Title>1.forEach</Title>
              <Paragraph>对数组的每个元素执行一次给定的函数。</Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
            </Col>
            <Col span={24}>
              <Title>2.map</Title>
              <Paragraph>
                创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
              </Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Example2 />
            </Col>
            <Col span={24}>
              <Title>3.filter</Title>
              <Paragraph>
                创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。
              </Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Example3 />
            </Col>
            <Col span={24}>
              <Title>4.reduce</Title>
              <Paragraph>
                对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行
                reducer
                会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
              </Paragraph>
              <CodeHighLight codeString={codeString4} />
              <Example4 />
            </Col>
            <Col span={24}>
              <Title>5.fill</Title>
              <Paragraph>
                用一个固定值填充一个数组中从起始索引（默认为
                0）到终止索引（默认为
                array.length）内的全部元素。它返回修改后的数组。
              </Paragraph>
              <CodeHighLight codeString={codeString5} />
              <Example5 />
            </Col>
            <Col span={24}>
              <Title>6.includes</Title>
              <Paragraph>
                用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回
                true，否则返回 false。
              </Paragraph>
              <CodeHighLight codeString={codeString6} />
              <Example6 />
            </Col>
            <Col span={24}>
              <Title>7.join</Title>
              <Paragraph>
                将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
              </Paragraph>
              <CodeHighLight codeString={codeString7} />
              <Example7 />
            </Col>
            <Col span={24}>
              <Title>8.find</Title>
              <Paragraph>
                回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
              </Paragraph>
              <CodeHighLight codeString={codeString8} />
              <Example8 />
            </Col>
            <Col span={24}>
              <Title>9.findIndex</Title>
              <Paragraph>
                返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回
                -1。
              </Paragraph>
              <CodeHighLight codeString={codeString9} />
              <Example9 />
            </Col>
            <Col span={24}>
              <Title>10.some</Title>
              <Paragraph>
                返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回
                -1。
              </Paragraph>
              <CodeHighLight codeString={codeString10} />
              <Example10 />
            </Col>
            <Col span={24}>
              <Title>11.every</Title>
              <Paragraph>
                测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。
              </Paragraph>
              <CodeHighLight codeString={codeString11} />
              <Example11 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ArrayApi
