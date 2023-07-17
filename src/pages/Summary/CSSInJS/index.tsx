import React from 'react'
import { Col, Divider, Row, Timeline, Typography } from 'antd'
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
  codeString10,
  codeString11,
} from './code'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import Example7 from './Example7'
import Example8 from './Example8'

const { Title, Paragraph, Text } = Typography
const CSSInJs = () => {
  const items = [
    { children: 'CSS In Js 介绍' },
    { children: '为什么会有CSS IN JS' },
    { children: 'Emotion 库' },
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
              <Title>CSS In Js 介绍</Title>
              <Paragraph>
                CSS-in-JS是一种将CSS代码嵌入到JavaScript代码中的技术。使用CSS-in-JS，可以通过JavaScript来动态生成CSS，从而实现更加灵活和动态的样式。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>为什么会有CSS IN JS</Title>
              <Title level={5}>
                1.CSS IN JS是WEB项目中将CSS代码捆绑在Javascript代码中的解决方案
              </Title>
              <Paragraph>
                当前开发项目的过程中，都是以组件为单位的。既然是以组件为单位，就希望css代码单独作用于目标组件（不会于其他组件的css代码产生冲突）。
                <br />
                但是实现这样的功能，需要css本身具有作用域的概念。所以只能通过js来模拟css的作用域，这样css代码就能单独作用于组件内部了。
              </Paragraph>

              <Title level={5}>2.增加组件的独立性和可移植性</Title>
              <Paragraph>
                如果把组件的css代码写在不同的css文件中，当我们想移动组件时，可能会遗漏复制某段css代码。
                <br />
                把css代码写在js文件中，这样组件就是一个单独文件，移动它无需关心其css代码的依赖。
              </Paragraph>

              <Title level={5}>3.css本身缺乏动态功能</Title>
              <Paragraph>
                css无法根据条件来给某个元素动态添加样式。
                <br />
                CSS IN JS，可以利用js的动态功能，为元素动态添加样式。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>Emotion 库</Title>
              {/* <Button1>@emotion/styled</Button1>
              <div css={style}>@emotion/react css</div> */}
              <Paragraph>
                为解决传统 CSS
                在现代前端应用开发中遇到的痛点，经过了一段时间的探索与实践，FreeWheel
                最终确定使用 <Text code>Emotion</Text> 作为目前的 CIJ
                方案，将其应用于部分前端项目。
              </Paragraph>
              <Paragraph>
                安装依赖
                <Text code>npm i @emotion/styled @emotion/react</Text>
              </Paragraph>
              <Paragraph>
                <Text>Browsers:</Text>
                <br />
                <Text type='secondary'>Chrome: 114.0.5735.199</Text>
                <br />
                <Text>npm package:</Text>
                <br />
                <Text type='secondary'>@vitejs/plugin-react: 2.1.0</Text>
                <br />
                <Text type='secondary'>vite: 3.1.0</Text>
              </Paragraph>
              <Title level={5}>1.@emotion/styled的基础使用（样式化组件）</Title>
              <Paragraph>
                (1)
                <Text code>import styled from &apos;@emotion/styled&apos;</Text>
              </Paragraph>
              <Paragraph>
                (2)styled.后面跟一个html标签，例如
                <Text code>div、h1、main、button</Text>
                等元素标签。调用后会返回一个React组件，直接在jsx中插入该组件即可。
                <br />
              </Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Example1 />
              <Title level={5}>2.@emotion/react(css prop)</Title>
              <Paragraph>
                有2种方式可以实现css属性支持：
                <br />
                <Text strong>(1)JSX Pragma（不推荐）</Text>
                <br />
                <Text strong>(2)Babel Preset</Text>
              </Paragraph>
              <Paragraph>JSX Pragma</Paragraph>
              <Paragraph>
                (1)导入运行时
                <Text code>{'/** @jsxImportSource @emotion/react */'}</Text>
              </Paragraph>
              <Paragraph>
                (2)导入 css 函数
                <Text code>
                  import {'\u007b'} css {'\u007d'} from
                  &apos;@emotion/react&apos;
                </Text>
              </Paragraph>
              <Paragraph>(3)声明css变量，并在组件中引用即可。</Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Example2 />
              <Text type='warning'>
                缺点：每个文件都要引入运行时（编辑器会有一堆警告提示）。
              </Text>
              <Paragraph>Babel Preset</Paragraph>
              <Paragraph>
                (1)安装依赖
                <Text code>npm i -D @emotion/babel-plugin</Text>
              </Paragraph>
              <Paragraph>
                (2)修改<Text code>vite.config.ts</Text>配置
              </Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Paragraph>(3)添加eslint规则</Paragraph>
              <CodeHighLight codeString={codeString4} />
              <Paragraph>
                (4)导入 css 函数
                <Text code>
                  import {'\u007b'} css {'\u007d'} from
                  &apos;@emotion/react&apos;
                </Text>
              </Paragraph>
              <Divider orientation='left'>
                以下规则好像添加或不添加都不影响
              </Divider>
              <Paragraph>
                (5)修改<Text code>tsconfig.json</Text>配置
              </Paragraph>
              <CodeHighLight codeString={codeString5} />
              <Paragraph>
                (6)修改<Text code>vite-env.d.ts</Text>配置
              </Paragraph>
              <CodeHighLight codeString={codeString6} />
              <Text type='success'>更推荐使用该方式，一步到位。</Text>
              <Title level={5}>3.css方法的使用方式</Title>
              <Paragraph>
                (1)string style : <Text mark>字符串模板类型</Text>
              </Paragraph>
              <Paragraph>
                (2)object style : <Text mark>对象类型</Text>
              </Paragraph>
              <CodeHighLight codeString={codeString7} />
              <Example3 />
              <Title level={5}>4.css属性优先级</Title>
              <Paragraph>
                props中的css属性优先级高于组件内部的css属性（父组件透传样式覆盖子组件默认样式）
              </Paragraph>
              <CodeHighLight codeString={codeString8} />
              <Example4 />
              <Title level={5}>5.styled component 样式化组件</Title>
              <Paragraph>定制化html标签样式</Paragraph>
              <CodeHighLight codeString={codeString9} />
              <Example5 />
              <Title level={5}>6.props样式覆盖</Title>
              <Paragraph>动态声明样式</Paragraph>
              <CodeHighLight codeString={codeString10} />
              <Example6 />
              <Title level={5}>7.定制化组件样式</Title>
              <Paragraph>类似于样式化的HOC</Paragraph>
              <CodeHighLight codeString={codeString11} />
              <Example7 />
              <Title level={5}>8.父组件决定子组件样式</Title>
              <Example8 />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default CSSInJs
