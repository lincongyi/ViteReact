import React from 'react'
import { Col, Row, Timeline, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'

const { Title, Paragraph, Text } = Typography

const Vercel = () => {
  const items = [
    { children: 'Vercel的作用' },
    { children: 'Vercel使用方法（操作流程）' },
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
              <Title>Vercel的作用</Title>
              <Paragraph>
                第三个参数是依赖项，表示只有依赖项中的值发生改变，才会把最新的属性和方法传给父组件；如果没有依赖项，则表示只要子组件render都会把属性和方法传给父组件。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>Vercel使用方法（操作流程）</Title>
              <Title level={5}>添加构建项目</Title>
              <Title level={5}>1:关联github账户</Title>
              <Title level={5}>2:点击用户头像，选择DashBoard</Title>
              <Title level={5}>3:选择Add New ...(Project)</Title>
              <Title level={5}>
                4:通过关联的git账户选择需要部署的git仓库，点击Import
              </Title>
              <Title level={5}>
                5:Configure Project自动识别出项目的配置信息，点击Deploy进行构建
              </Title>
              <Title level={5}>6:等待构建完毕后，会发布正式环境地址</Title>
              <Title level={5}>
                7:当再次push代码，Vercel监听了构建分支，会重新打包构建
              </Title>
              <Title level={5}>删除构建项目</Title>
              <Title level={5}>1:在DashBoard里选择需要删除构建的项目</Title>
              <Title level={5}>2:点击Settings</Title>
              <Title level={5}>
                3:滚动到最下方Delete Project，根据提示输入二次确认信息即可删除
              </Title>
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default Vercel
