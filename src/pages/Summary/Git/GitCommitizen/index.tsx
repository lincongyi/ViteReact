import React from 'react'
import { Anchor, Col, Row, Typography } from 'antd'
import CodeHighLight from '@components/CodeHighLight'
import { codeString1, codeString2, codeString3, codeString4 } from './code'

const { Title, Paragraph, Text } = Typography
const GitCommitizen = () => {
  const items = [
    { key: 'introduction', href: '#introduction', title: 'Commitizen的作用' },
    { key: 'usage', href: '#usage', title: 'Commitizen的安装使用' },
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='introduction'>
              <Title>Commitizen的作用</Title>
              <Paragraph>
                当你在使用 <Text code>git commit</Text>
                提交时，Commitizen提供了一个 <Text code>git cz</Text>
                的指令用于代替<Text code>git commit</Text>
                。从而对 Git 提交进行规范化处理
              </Paragraph>
            </Col>
            <Col span={24} id='usage'>
              <Typography>
                <Row>
                  <Col span={24}>
                    <Title>Commitizen的安装使用</Title>
                    <Title level={5}>Step 1:</Title>
                    <Paragraph>
                      可以使用
                      <Text code>npm view commitizen version</Text>
                      查看当前最新的版本号
                    </Paragraph>
                    <Paragraph>
                      局部安装
                      <Text code>npm i commitizen --save-dev</Text>or
                      <Text code>npm i commitizen --D</Text>
                      在devDependencies里面添加依赖
                    </Paragraph>

                    <Paragraph>
                      <Text type='danger'>
                        PS : 经常要使用到 Commitizen 来规范提交代码，建议
                      </Text>
                      全局安装<Text code>npm i commitizen -g</Text>
                    </Paragraph>
                    <Paragraph>
                      全局安装后可以直接使用
                      <Text code>git cz</Text>来代替
                      <Text code>git commit</Text>
                    </Paragraph>

                    <Title level={5}>Step 2:</Title>
                    <Paragraph>
                      <Text code>npm i cz-customizable --save-dev</Text>or
                      <Text code>npm i cz-customizable -D</Text>
                      在devDependencies里面添加依赖
                    </Paragraph>

                    <Title level={5}>Step 3:</Title>
                    <Paragraph>添加下面配置信息到 package.json 中</Paragraph>
                    <CodeHighLight codeString={codeString1} />
                    <Paragraph>
                      如果commitizen是局部安装，需要额外添加配置
                    </Paragraph>
                    <CodeHighLight codeString={codeString2} />

                    <Title level={5}>Step 4:</Title>
                    <Paragraph>
                      4、在项目根目录下创建 .cz-config.js 自定义提示文件
                    </Paragraph>
                    <CodeHighLight codeString={codeString3} />
                    <Paragraph>
                      如果 package.json 是ES Module导入的，提示文件应该命名为
                      .cz-config.cjs
                    </Paragraph>
                    <Paragraph>同时修改 package.json 中的config</Paragraph>
                    <CodeHighLight codeString={codeString4} />

                    <Title level={5}>Step 5:</Title>
                    <Paragraph>
                      我们提交代码时使用 <Text code>git cz</Text>(全局安装) or{' '}
                      <Text code>npm run commit</Text>(局部安装)
                      ，就可以看到提示信息了。
                    </Paragraph>
                  </Col>
                </Row>
              </Typography>
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

export default GitCommitizen
