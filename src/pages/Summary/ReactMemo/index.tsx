import React from 'react'
import CodeHighLight from '@components/CodeHighLight'
import { Col, Divider, Row, Timeline, Typography } from 'antd'
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
  codeString7,
} from './code'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
const { Title, Paragraph, Text } = Typography
const ReactMemo = () => {
  const items = [
    { children: 'React.memo的作用' },
    { children: 'React.memo具体实例' },
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
              <Title>React.memo的作用</Title>
              <Paragraph>
                <Text code>React.memo()</Text>
                是一个高阶组件，作用于函数组件，通过对前后props进行浅比较，如果前后props不一致，该组件将重新渲染，反之，不进行渲染，使用缓存中的组件。
              </Paragraph>
              <Paragraph>
                memo函数第二个参数接收一个函数，该函数比较前后props是否一致。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>React.memo具体实例</Title>
              <Row>
                <Col span={24}>
                  <Title level={5}>Example 1:</Title>
                  <Title level={5}>
                    1.一个普通的子组件，接收父组件传入的一个count值
                  </Title>
                  <CodeHighLight codeString={codeString1} />
                  <Title level={5}>
                    2.一个通过React.memo返回的子组件PureComponent，同样接收父组件传入的一个count值
                  </Title>
                  <CodeHighLight codeString={codeString2} />
                  <Title level={5}>3.父组件包含以上两个子组件</Title>
                  <CodeHighLight codeString={codeString3} />
                  <Divider />
                  <Example1 />
                  <Divider />
                  <Text type='success'>
                    点击所有按钮后，可以从控制台的输出中看到：
                    <br />
                    当数值改变时，ChildCommon组件每次都会重新渲染，而ChildMemo组件仅有当自身接收的值改变时，才会重新渲染；
                  </Text>
                  <Divider />
                </Col>
                <Col span={24}>
                  <Title level={5}>Example 2:</Title>
                  <Title level={5}>
                    1.尝试来改写一下ChildMemo组件，接收父组件各种类型的props传入
                  </Title>
                  <CodeHighLight codeString={codeString4} />
                  <Title level={5}>2.父组件对应添加变量赋值</Title>
                  <CodeHighLight codeString={codeString5} />
                  <Divider />
                  <Example2 />
                  <Divider />
                  <Text type='danger'>
                    现在能从控制台中看到，无论点击哪一个按钮，都会触发PureComponent组件的重新渲染
                    <br />
                    由于PureComponent组件接收了一个onclick函数（引用类型）传入，当Parent组件重新渲染，它也会被重新创建，使得React.memo()失效；
                    <br />
                    所以我们只能够用到React.memo()的第二个参数，传入一个比较函数（结构出引用类型，不做判断）。
                    <br />
                  </Text>
                  <Divider />
                  <Title level={5}>
                    3.改写一下React.memo()第二个参数中的逻辑判断
                  </Title>
                  <CodeHighLight codeString={codeString6} />
                  <Divider />
                  <Example3 />
                  <Divider />
                  <Text type='success'>
                    现在就能实现React.memo()的缓存功能了
                  </Text>
                  <Divider />
                  <Title level={5}>
                    4.在不改变React.memo()第二个参数的情况下，也可以使用useCallback来缓存函数，同理也可以使用useMemo来缓存数组或对象
                  </Title>
                  <CodeHighLight codeString={codeString7} />
                  <Divider />
                  <Example4 />
                  <Divider />
                  <Text strong>
                    在大部分情况下，应该把<Text code>useMemo</Text>
                    用在程序里渲染昂贵的组件上，而不是数值计算上，组件渲染才是性能的瓶颈。
                  </Text>
                  <Text strong>
                    <Text code>useMemo</Text>和<Text code>useCallback</Text>
                    是有成本的，它会增加整体程序初始化的耗时，并不适合全局全面使用，它更适合做局部的优化。
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactMemo
