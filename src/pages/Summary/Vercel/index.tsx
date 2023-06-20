import React from 'react'
import { Col, Row, Timeline, Typography, Image, Space } from 'antd'
import screenshot01 from '@images/Vercel/screenshot-01.png'
import screenshot02 from '@images/Vercel/screenshot-02.png'
import screenshot03 from '@images/Vercel/screenshot-03.png'
import screenshot04 from '@images/Vercel/screenshot-04.png'
import screenshot05 from '@images/Vercel/screenshot-05.png'
import screenshot06 from '@images/Vercel/screenshot-06.png'
import screenshot07 from '@images/Vercel/screenshot-07.png'
import screenshot08 from '@images/Vercel/screenshot-08.png'
import screenshot09 from '@images/Vercel/screenshot-09.png'

const { Title, Paragraph } = Typography

const Vercel = () => {
  const items = [{ children: 'Vercel介绍' }, { children: 'Vercel使用步骤' }]
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
              <Title>Vercel介绍</Title>
              <Paragraph>
                Vercel，可以理解为一个部署工具，支持部署静态网页和Node服务，部署后你还可以访问它自带生成的域名https。
              </Paragraph>
              <Image width={400} src={screenshot01} />
            </Col>
            <Col span={24}>
              <Title>Vercel使用方法（操作流程）</Title>
              <Title level={5}>添加构建项目</Title>
              <Title level={5}>1:关联github账户</Title>
              <Space>
                <Image width={200} src={screenshot02} />
                <Image width={200} src={screenshot03} />
              </Space>
              <Title level={5}>2:点击用户头像，选择DashBoard</Title>
              <Image width={400} src={screenshot04} />
              <Title level={5}>3:选择Add New ...(Project)</Title>
              <Image width={400} src={screenshot05} />
              <Title level={5}>
                4:通过关联的git账户选择需要部署的git仓库，点击Import
              </Title>
              <Image width={400} src={screenshot06} />
              <Title level={5}>
                5:Configure Project自动识别出项目的配置信息，点击Deploy进行构建
              </Title>
              <Image width={400} src={screenshot07} />
              <Title level={5}>6:等待构建完毕后，会发布正式环境地址</Title>
              <Title level={5}>
                7:当再次push代码，Vercel监听了构建分支，会重新打包构建
              </Title>
              <Title level={5}>删除构建项目</Title>
              <Title level={5}>1:在DashBoard里选择需要删除构建的项目</Title>
              <Title level={5}>2:点击Settings</Title>
              <Image width={400} src={screenshot08} />
              <Title level={5}>
                3:滚动到最下方Delete Project，根据提示输入二次确认信息即可删除
              </Title>
              <Image width={400} src={screenshot09} />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default Vercel
