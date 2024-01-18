import React from 'react'
import { Col, List, Row, Typography, Image, Space, Anchor } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import screenshot01 from '@images/Github Pages/screenshot-01.png'
import screenshot02 from '@images/Github Pages/screenshot-02.png'
import screenshot03 from '@images/Github Pages/screenshot-03.png'
import screenshot04 from '@images/Github Pages/screenshot-04.png'
import screenshot05 from '@images/Github Pages/screenshot-05.png'
import screenshot06 from '@images/Github Pages/screenshot-06.png'
import screenshot07 from '@images/Github Pages/screenshot-07.png'
import screenshot08 from '@images/Github Pages/screenshot-08.png'
import screenshot09 from '@images/Github Pages/screenshot-09.png'
import CodeHighLight from '@/components/CodeHighLight'
import { codeString1 } from './code'

const { Title, Paragraph, Link, Text } = Typography

const GithubPages = () => {
  const items = [
    { key: 'introduction', href: '#introduction', title: 'Github Pages 介绍' },
    { key: 'rule', href: '#rule', title: 'Github Pages 使用限制' },
    { key: 'start', href: '#start', title: '创建 Github Pages 站点' },
    { key: 'deploy', href: '#deploy', title: 'Github Pages 自动化部署' },
  ]
  const data = [
    'GitHub Pages 源存储库的建议限制为 1 GB。',
    '发布的 GitHub Pages 站点不得超过 1 GB。',
    '如果花费的时间超过 10 分钟，GitHub Pages 部署将超时。',
    'GitHub Pages 站点的软带宽限制为每月 100 GB。',
    'GitHub Pages 站点的软限制为每小时 10 次生成。 如果使用自定义 GitHub Actions 工作流生成和发布站点，则此限制不适用。',
    '为了为所有 GitHub Pages 站点提供一致的服务质量，可能会实施速率限制。 这些速率限制无意干扰 GitHub Pages 的合法使用。 如果你的请求触发了速率限制，你将收到相应响应，其中包含 HTTP 状态代码 429 以及信息性 HTML 正文。',
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='introduction'>
              <Title>Github Pages介绍</Title>
              <Paragraph>
                GitHub Pages 是一项静态站点托管服务，它直接从 GitHub
                上的仓库获取 HTML、CSS 和 JavaScript
                文件，（可选）通过构建过程运行文件，然后发布网站。 可以在 GitHub
                Pages 示例集合中看到
                <Link
                  href='https://github.com/collections/github-pages-examples'
                  target='_blank'
                >
                  GitHub Pages
                </Link>
                站点的示例。
              </Paragraph>
              <Paragraph>
                你可以在 GitHub 的<Text code>github.io</Text>
                域或自己的自定义域上托管站点。
              </Paragraph>
            </Col>
            <Col span={24} id='rule'>
              <Title>Github Pages 使用限制</Title>
              <List
                header={
                  <Text strong>GitHub Pages 站点受到以下使用限制的约束：</Text>
                }
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col span={24} id='start'>
              <Title>创建 GitHub Pages 站点</Title>
              <Title level={5}>
                1:在任何页面的右上角下拉菜单选择<Text code>New repository</Text>
                。
              </Title>
              <Image src={screenshot01} />
              <Title level={5}>
                2:输入仓库的名称和说明（可选）。
                <br />
                选择仓库可见性。
                <br />
                选择“使用 README 初始化此存储库”。
                <br />
                单击“创建存储库”。
              </Title>
              <Image width={400} src={screenshot02} />
              <br />
              <Text type='warning'>
                备注：
                <br />
                若要发布用户站点，必须创建名为{' '}
                <Text code>[username].github.io</Text>
                的个人帐户拥有的存储库。
                <br />
                若要发布组织站点，必须创建名为
                <Text code>[organization].github.io</Text>
                的组织帐户拥有的存储库。
              </Text>
              <Title level={5}>3:创建成功后，可在主页看到项目详情。</Title>
              <Space>
                <Image width={400} src={screenshot03} />
                <Image width={400} src={screenshot04} />
              </Space>
              <Text type='success'>
                可以通过<Text code>Add File</Text>
                添加一个简单的html文件进行展示。
                <br />
                可以通过<Text code>About</Text>旁边的
                <SettingOutlined />
                编辑项目配置（描述、域名等）。
                <br />
                通过<Text code>Settings</Text>里面的<Text code>Pages</Text>
                可查看<Text code>Github Pages</Text>详细配置。
              </Text>
            </Col>
            <Col span={24} id='deploy'>
              <Title>GitHub Pages自动化部署</Title>
              <Title level={5}>
                1:克隆项目到本地。由于构建项目是在main分支，所以需要新建一个dev分支来存放代码。
              </Title>
              <Space direction='vertical'>
                <Text code>git switch -c dev</Text>
                <Text code>npm create vite@latest</Text>
                <Text code>npm i</Text>
                <Text code>npm run dev</Text>
              </Space>
              <Title level={5}>
                2:可以看到项目能在本地（开发环境）正常运行
              </Title>
              <Title level={5}>3:手动新建.github目录，如图</Title>
              <Image src={screenshot05} />
              <Title level={5}>4:ci.yml文件内容如下</Title>
              <CodeHighLight codeString={codeString1} />
              <Title level={5}>
                5:代码推送到远端dev分支（首次推送需要关联远端dev分支）
                <Text code>git push --set-upstream origin dev</Text>
              </Title>
              <Title level={5}>
                6:在<Text code>actions</Text>可以看到打包进程
                <Space>
                  <Image width={400} src={screenshot06} />
                  <Image width={400} src={screenshot07} />
                </Space>
              </Title>
              <Title level={5}>
                7:部署失败，需要到settings下设置actions的读写权限，点击
                <Text code>save</Text>保存
              </Title>
              <Image width={400} src={screenshot08} />
              <Title level={5}>8:随便修改一下代码，重新推送，部署成功！</Title>
              <Image width={400} src={screenshot09} />
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

export default GithubPages
