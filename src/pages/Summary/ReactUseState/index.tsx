import React from 'react'
import { Col, Row, Timeline, Typography, Divider } from 'antd'
import CodeHighLight from '@components/CodeHighLight'
import { codeString1, codeString2, codeString3, codeString4 } from './code'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'

const { Title, Paragraph, Text } = Typography

const ReactUseState = () => {
  const items = [
    { children: 'useState-基础用法' },
    { children: 'useState-推断内部实现方式' },
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
              <Title level={5}>1.初始值与初始函数</Title>
              <Paragraph>
                <Text code>useState</Text>接受一个默认值，并返回2个值
              </Paragraph>
              <Paragraph>1.当前状态</Paragraph>
              <Paragraph>2.一个用于更新值的函数</Paragraph>
              <Paragraph>
                <Text code>const [state, setState] = useState(1)</Text>
              </Paragraph>
              <Paragraph>
                <Text code>const [state, setState] = useState(() =&gt; 2)</Text>
              </Paragraph>
              <Paragraph>
                <Text mark>
                  ps : 默认值也可以是一个函数，一般是通过复杂的计算来得到的。
                </Text>
              </Paragraph>
              <Title level={5}>2.函数式更新</Title>
              <Paragraph>更新state的方式有2种</Paragraph>
              <Paragraph>1.传入一个值</Paragraph>
              <Paragraph>2.传入一个函数</Paragraph>
              <Paragraph>
                <Text code>setState(1)</Text>
              </Paragraph>
              <Paragraph>
                <Text code>setState(() =&gt; 2)</Text>
              </Paragraph>
              <Title level={5}>3.获取更新后的值</Title>
              <Paragraph>
                一般是使用<Text code>useEffect</Text>来监听值的变化
              </Paragraph>
              <Paragraph>
                <Text code>
                  useEffect(() =&gt; {'\u007b'}
                  ...
                  {'\u007d'}, [state])
                </Text>
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>实现方式</Title>
              <Title level={5}>1.基本结构</Title>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
              <Divider orientation='left' plain>
                分析
              </Divider>
              <Paragraph>
                点击myUseState按钮，会发现count2并没有发生变化；
                <br />
                并不是更新函数没有触发，而是当执行完<Text code>setCount2</Text>
                后，需要重新渲染组件。然后调用<Text code>myUseState(100)</Text>
                后，又把count2(state)重置成100.
                <br />
              </Paragraph>
              <Title level={5}>2.调整变量作用域</Title>
              <CodeHighLight codeString={codeString2} />
              <Example2 />
              <Divider orientation='left' plain>
                分析
              </Divider>
              <Paragraph>
                调用myUseState方法时，需要判断state是否已经存在值。
              </Paragraph>
              <Title level={5}>3.多次调用myUseState声明多个state</Title>
              <CodeHighLight codeString={codeString3} />
              <Example3 />
              <Divider orientation='left' plain>
                分析
              </Divider>
              <Paragraph>
                点击myUseState按钮，会发现count2、count3会同时发生变化；
              </Paragraph>
              <Paragraph>
                这是因为始终只有一个state来存储状态值。所以需要把state声明成一个数组来存储多个状态值。同时使用下标来标记状态值的对应关系。
              </Paragraph>
              <Title level={5}>3.存储多个状态值</Title>
              <CodeHighLight codeString={codeString4} />
              <Example4 />
              <Divider orientation='left' plain>
                分析
              </Divider>
              <Paragraph>
                反复点击myUseState按钮，会发现count2、count3没有像预期；
              </Paragraph>
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default ReactUseState
