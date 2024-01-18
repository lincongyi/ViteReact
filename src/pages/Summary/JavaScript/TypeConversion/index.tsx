import React from 'react'
import {
  Anchor,
  Col,
  Row,
  Typography,
  Descriptions,
  Alert,
  Space,
  Image,
  Table,
} from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
  codeString7,
  codeString8,
  codeString9,
} from './code'
import { ArrowRightOutlined } from '@ant-design/icons'
import typeConversion01 from '@images/TypeConversion/typeConversion-01.jpg'
import typeConversion02 from '@images/TypeConversion/typeConversion-02.jpg'
import typeConversion03 from '@images/TypeConversion/typeConversion-03.jpg'
import typeConversion04 from '@images/TypeConversion/typeConversion-04.jpg'
import { ColumnsType } from 'antd/es/table/interface'
import { dataSource } from './dataSource'

const { Title, Paragraph, Text } = Typography

const TypeConversion = () => {
  const items = [
    { key: 'type', href: '#type', title: 'JS 中的数据类型' },
    { key: 'feature', href: '#feature', title: '基本类型和引用类型的特点' },
    { key: 'typeConversion', href: '#typeConversion', title: '类型转换' },
    { key: 'explicit', href: '#explicit', title: '显式转换' },
    {
      key: 'primitiveToBoolean',
      href: '#primitiveToBoolean',
      title: '1. 原始类型转换成布尔值',
    },
    {
      key: 'primitiveToNumber',
      href: '#primitiveToNumber',
      title: '2. 原始类型转换成数字',
    },
    {
      key: 'primitiveToString',
      href: '#primitiveToString',
      title: '3. 原始类型转换成字符串',
    },
    {
      key: 'primitiveToObject',
      href: '#primitiveToObject',
      title: '4. 原始类型转对象',
    },
    { key: 'implicit', href: '#implicit', title: '隐式转换' },
    {
      key: 'unary',
      href: '#unary',
      title: '1.一元运算符 +',
    },
    {
      key: 'binary',
      href: '#binary',
      title: '2.二元运算符 +',
    },
  ]

  const descriptionsItems1 = [
    {
      key: 1,
      label: 'name',
      children: 'Ackerman',
    },
    {
      key: 2,
      label: 'age',
      children: '30',
    },
  ]

  const descriptionsItems2 = [
    {
      key: 1,
      label: 'person1',
      children: '堆内存地址1',
    },
    {
      key: 2,
      label: 'person2',
      children: '堆内存地址2',
    },
    {
      key: 3,
      label: 'person3',
      children: '堆内存地址3',
    },
  ]

  const descriptionsItems3 = [
    {
      key: 1,
      label: '堆内存地址1',
      children: '0x08000001',
    },
    {
      key: 2,
      label: '堆内存地址2',
      children: '0x08000002',
    },
    {
      key: 3,
      label: '堆内存地址3',
      children: '0x08000003',
    },
  ]

  const columns: ColumnsType<any> = [
    { title: '值', dataIndex: 'value', align: 'center' },
    { title: '字符串', dataIndex: 'string', align: 'center' },
    { title: '数字', dataIndex: 'number', align: 'center' },
    { title: '布尔值', dataIndex: 'boolean', align: 'center' },
    { title: '对象', dataIndex: 'object', align: 'center' },
  ]

  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='type'>
              <Title>JS 中的数据类型</Title>
              <Paragraph>8 种数据类型</Paragraph>
              <Paragraph>1.基本类型：</Paragraph>
              <Paragraph>
                null / undefined / number / string / boolean / symbol / bigInt
              </Paragraph>
              <Paragraph>2.引用类型：</Paragraph>
              <Paragraph>
                对象（包括object / array / function / RegExp / Date）
              </Paragraph>
            </Col>
            <Col span={24} id='feature'>
              <Title>基本类型和引用类型的特点</Title>
              <Paragraph>1.基本类型：</Paragraph>
              <Paragraph>
                基本数据类型存储在栈中（栈区指内存里的栈内存），占用的内存较小，可以直接操作它们的值，而且是按值传递的，即一个变量的值是直接存储在变量中的，它们的比较也是按值进行的。
              </Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Descriptions
                title='栈 区'
                bordered
                size='small'
                column={1}
                style={{ width: '50%' }}
                items={descriptionsItems1}
              />
              <Paragraph>2.引用类型：</Paragraph>
              <Paragraph>
                引用类型的对象存储于堆中，占用的内存较大，不能直接操作它们的值，而是需要通过引用来访问它们的属性和方法，它们的赋值和比较也是按引用进行的，即一个变量的值是一个指向实际对象的引用。
              </Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Row gutter={10}>
                <Col span={10}>
                  <Descriptions
                    title='栈 区'
                    bordered
                    size='small'
                    column={1}
                    items={descriptionsItems2}
                  />
                </Col>
                <Col
                  span={4}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ArrowRightOutlined />
                </Col>
                <Col span={10}>
                  <Descriptions
                    title='堆 区'
                    bordered
                    size='small'
                    column={1}
                    items={descriptionsItems3}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} id='typeConversion'>
              <Title>类型转换</Title>
              <Paragraph>
                类型转换主要分为两种：隐式类型转换和显式类型转换。
              </Paragraph>
              <Paragraph>
                1. 隐式类型转换：在隐式类型转换中，JS
                引擎自动地将一种数据类型转换为另一种类型，通常发生在运算或比较的过程中。这种转换是隐式的，开发者不需要明确地进行操作，而是由
                JS 引擎在必要的时候自动完成。
              </Paragraph>
              <Paragraph>
                2.
                显式类型转换：显式类型转换是由开发者明确指定的类型转换，通过调用相应的转换函数或使用一些特定的语法进行。这种转换是开发者有意识地进行的，用于确保数据在特定上下文中具有期望的类型。
              </Paragraph>
              <CodeHighLight codeString={codeString3} />
            </Col>
            <Col span={24} id='explicit'>
              <Title>显式转换</Title>
              <Title level={3}>原始类型转其他类型</Title>
              <Title level={5} id='primitiveToBoolean'>
                1. 原始类型转换成布尔值
              </Title>
              <CodeHighLight codeString={codeString4} />
              <Image width={400} src={typeConversion01} />
              <Alert
                message='总结：'
                description={
                  <Space direction='vertical'>
                    <div>
                      false、(+-)0、&apos;&apos;、null、undefined、NaN都转成
                      <Text type='danger'>false</Text>
                    </div>
                    <div>
                      其他所有值转换为<Text type='danger'>true</Text>
                    </div>
                  </Space>
                }
                type='info'
                showIcon
              />
              <Title level={5} id='primitiveToNumber'>
                2. 原始类型转换成数字
              </Title>
              <CodeHighLight codeString={codeString5} />
              <Image width={400} src={typeConversion02} />
              <Alert
                message='总结：'
                description={
                  <Space direction='vertical'>
                    <div>如果是数字字符串，则转换为对应的数字。</div>
                    <div>
                      如果是非数字字符串或无法解析为数字的字符串，则转换为
                      <Text type='danger'>NaN</Text>。
                    </div>
                    <div>
                      true转为1，false转为0；null转为
                      <Text type='danger'>0</Text>；undefined转为
                      <Text type='danger'>NaN</Text>。
                    </div>
                  </Space>
                }
                type='info'
                showIcon
              />
              <Title level={5} id='primitiveToString'>
                3. 原始类型转换成字符串
              </Title>
              <CodeHighLight codeString={codeString6} />
              <Image width={400} src={typeConversion03} />
              <Alert
                message='总结：'
                description={
                  <Space direction='vertical'>
                    <div>数字直接转字符串</div>
                    <div>
                      true、false、null、undefined都转为各自对应的字符串
                    </div>
                  </Space>
                }
                type='info'
                showIcon
              />
              <Title level={5} id='primitiveToObject'>
                4. 原始类型转对象
              </Title>
              <CodeHighLight codeString={codeString7} />
              <Image width={400} src={typeConversion04} />
              <Alert
                message='总结：'
                description={
                  <Space direction='vertical'>
                    <div>Number、String、Boolean类型转为各自对应的对象</div>
                    <div>
                      null、undefined转为
                      <Text type='danger'>
                        {'\u007b'}
                        {'\u007d'}
                      </Text>
                    </div>
                  </Space>
                }
                type='info'
                showIcon
              />
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
              />
              <Title level={3}>对象转原始类型</Title>
              <Title level={5}>1. 对象转数字</Title>
              <Paragraph>
                由图二可知，当传入一个<Text code>Object</Text>
                类型转数字，需要调用<Text code>ToPrimitive</Text>
                函数，它的返回值就是传入值的数字类型。
              </Paragraph>
              <Paragraph>
                <Text code>
                  ToPrimitive(object, [Number | String | ......]))
                </Text>
                <br />
                当你传入的是基本数据类型的时候，不会进行转换。当传入Object类型会调用[[DefaultValue]]的内部方法，进行处理。
              </Paragraph>
              <Paragraph>
                <Text code>ToPrimitive(object, Number)</Text>步骤：
                <br />
                <Text strong>
                  1.调用 <Text code>valueOf()</Text>：
                </Text>
                <br />
                如果 <Text code>valueOf</Text>{' '}
                方法存在并返回一个基本类型的值，那么就返回这个值。
                <br />
                如果 <Text code>valueOf</Text>{' '}
                方法不存在，或者返回值仍是Object类型，那么就需要调用{' '}
                <Text code>toString</Text> 方法；
                <br />
                <Text strong>
                  2.调用 <Text code>toString()</Text>：
                </Text>
                <br />
                如果 <Text code>toString</Text>{' '}
                方法存在并返回一个基本类型的值，那么就返回这个值。
                <br />
                如果 <Text code>toString</Text>{' '}
                方法不存在，或者返回值仍是Object类型，报错
              </Paragraph>
              <Title level={5}>2. 对象转字符串</Title>
              <Paragraph>
                与对象转数字类似，区别在于转字符串时
                <Text code>ToPrimitive</Text>方法是先调用
                <Text code>toString()</Text>， 后调用<Text code>valueOf()</Text>
                。
              </Paragraph>
              <Title level={5}>3. 对象转布尔值</Title>
              <Paragraph>
                对象转换为布尔值时，结果总是<Text type='danger'>true</Text>。
              </Paragraph>
            </Col>
            <Col span={24} id='implicit'>
              <Title>隐式转换</Title>
              <Title level={3} id='unary'>
                一元运算符 +
              </Title>
              <Paragraph>
                作为一元运算符时，<Text type='danger'> + </Text>
                号后无论接什么类型的数值，都需要强制转换成
                <Text code>Number</Text>类型。
              </Paragraph>
              <CodeHighLight codeString={codeString8} />
              <Paragraph>
                当一元运算符后接一个Object类型的数值，会调用
                <Text code>ToPrimitive</Text>方法，转成数字类型。
              </Paragraph>
              <CodeHighLight codeString={codeString9} />
              <Title level={3} id='binary'>
                二元运算符 +
              </Title>
              <Paragraph>
                二元运算符<Text type='danger'> + </Text>
                ，用于字符串的连接，或者数字运算。
              </Paragraph>
              <Paragraph>
                转换方式：
                <Text code>
                  prim1 + prim2 = ToPrimitive(prim1, Number) +
                  ToPrimitive(prim2, Number)
                </Text>
              </Paragraph>
              <Paragraph>
                <Text mark>
                  1.当其中一个返回值是String类型，则按字符串进行拼接；
                </Text>
                <br />
                <Text mark>2.否则，按Number类型进行运算</Text>
              </Paragraph>
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

export default TypeConversion
