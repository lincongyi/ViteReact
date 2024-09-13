import { Col, List, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import Example1 from './Example1'
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
} from './code'

const { Title, Paragraph, Text } = Typography

const EventBus = () => {
  const items = [
    { children: '场景介绍' },
    { children: '事件总线的优缺点' },
    { children: '实现方式' },
  ]

  /**
   * 优点
   */
  const advantages = [
    {
      label: '跨组件通信：',
      value:
        '可以方便地实现非父子组件之间的通信，不需要在组件之间建立直接的关联。',
    },
    {
      label: '全局通信：',
      value:
        '事件总线通常是全局性的，能够在整个应用中的任何地方进行通信，适用于全局状态的传递和应用的整体控制。',
    },
    {
      label: '解耦组件：',
      value:
        ' 能够实现组件之间的解耦，使得组件之间不需要直接引用或依赖彼此，提高了代码的灵活性和可维护性。',
    },
    {
      label: '简化通信：',
      value:
        '对一些简单的通信需求，事件总线提供了一种相对简单的方式，避免了通过 props 和回调函数传递数据时的繁琐操作。',
    },
  ]

  /**
   * 缺点
   */
  const disadvantages = [
    {
      label: '全局状态管理：',
      value:
        '使用事件总线可能引入全局状态，导致应用状态变得难以追踪和理解，特别是在大型应用中。',
    },
    {
      label: '难以调试：',
      value:
        '全局性的事件监听和触发可能使得追踪代码执行流程和调试变得更加困难，尤其是在复杂的应用场景下。',
    },
    {
      label: '不明确的数据流向：',
      value:
        '使用事件总线时，数据的流向相对不明确，可能增加代码的复杂性，使得应用程序的数据流变得更加难以理解。',
    },
    {
      label: '潜在的性能问题：',
      value:
        '大量的全局事件监听和触发可能导致性能问题，尤其是在频繁触发事件的情况下。',
    },
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
              <Title>场景介绍</Title>
              <Paragraph>
                在开发过程中，兄弟组件之间的通信是十分常见的。如果不通过第三方状态管理库（redux、vuex...）来处理组件之间的数据通信，可以尝试使用
                <Text mark>Event Bus</Text>（事件总线）。
              </Paragraph>
              <Paragraph>
                <Text mark>Event Bus</Text>
                就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，所以组件都可以上下平行地通知其他组件。
              </Paragraph>
              <Paragraph>
                本文档最终会实现一个<Text mark>（Event Bus）</Text>
                基于发布-订阅模式的全局的单例对象
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>事件总线的优缺点</Title>
              <List
                header={<Title level={3}>优点</Title>}
                dataSource={advantages}
                renderItem={item => (
                  <List.Item>
                    <Text strong>{item.label}</Text> {item.value}
                  </List.Item>
                )}
              />
              <List
                header={<Title level={3}>缺点</Title>}
                dataSource={disadvantages}
                renderItem={item => (
                  <List.Item>
                    <Text strong>{item.label}</Text> {item.value}
                  </List.Item>
                )}
              />
            </Col>
            <Col span={24}>
              <Title>实现方式</Title>
              <Title level={3}>
                1.页面布局很简单，就是一个父组件包含两个子组件。
              </Title>
              <Paragraph>父组件</Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Paragraph>IncreaseBtnGroup子组件</Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Paragraph>Calculation子组件</Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Title level={3}>2.通过Event Bus关联两个子组件</Title>
              <CodeHighLight codeString={codeString4} />
              <Paragraph>IncreaseBtnGroup子组件</Paragraph>
              <CodeHighLight codeString={codeString5} />
              <Paragraph>Calculation子组件</Paragraph>
              <CodeHighLight codeString={codeString6} />
              <Title level={3}>3.接入off & once方法</Title>

              <Example1 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default EventBus
