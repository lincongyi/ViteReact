import React from 'react'
import { Alert, Anchor, Button, Col, Row, Space, Table, Typography } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
} from './code'
import { ColumnsType } from 'antd/es/table/interface'

const { Title, Paragraph, Text, Link } = Typography

const DotEnv = () => {
  const items = [
    { key: 'introduction', href: '#introduction', title: '介绍' },
    { key: 'changePath', href: '#changePath', title: '更改.env文件默认路径' },
    { key: 'multiConfig', href: '#multiConfig', title: '多工程配置' },
    { key: 'minimist', href: '#minimist', title: '配合minimist' },
  ]
  const dataSource = [
    {
      key: '1',
      env: (
        <>
          <div>VITE_BASE_URL = &quot;http://127.0.0.1:3000&quot;</div>
          <div>VITE_TITLE = &quot;.env&quot;</div>
          <div>VITE_DEFAULT = &quot;hello world&quot;</div>
        </>
      ),
      envDevelopment: (
        <>
          <div>
            NODE_ENV = &quot;development&quot; VITE_BASE_URL =
            &quot;http://127.0.0.1:3001&quot;{' '}
          </div>
          <div>VITE_TITLE = &quot;.env.development&quot;</div>{' '}
          <div>VITE_FLAG = &quot;development flag&quot;</div>
          <div> VITE_HELLO = &quot;Greeting&quot;</div>
        </>
      ),
      envProject1Development: (
        <>VITE_TITLE = &quot;.env.project1.development&quot;</>
      ),
      envProject2Development: (
        <>VITE_TITLE = &quot;.env.project2.development&quot;</>
      ),
    },
  ]

  type TColumn = {
    env: JSX.Element
    envDevelopment: JSX.Element
    envProject1Development: JSX.Element
    envProject2Development: JSX.Element
  }

  const columns: ColumnsType<TColumn> = [
    {
      title: '.env',
      align: 'center',
      dataIndex: 'env',
    },
    {
      title: '.env.development',
      align: 'center',
      dataIndex: 'envDevelopment',
    },
    {
      title: '.env.project1.development',
      align: 'center',
      dataIndex: 'envProject1Development',
    },
    {
      title: '.env.project2.development',
      align: 'center',
      dataIndex: 'envProject2Development',
    },
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='introduction'>
              <Title>介绍</Title>
              <Paragraph>
                <Text code>dotenv</Text>
                库通常来读取<Text code>.env</Text>
                文件中的配置信息，并在解析后将键值对添加到process.env对象，作为环境变量使用。
              </Paragraph>
              <Paragraph>
                <Text mark>Vite</Text> 也是使用 <Text code>dotenv</Text> 从你的
                环境目录 中的下列文件加载额外的环境变量
              </Paragraph>
              <Link
                href='https://vitejs.cn/vite3-cn/guide/env-and-mode.html#env-variables'
                target='_blank'
              >
                环境变量和模式
              </Link>
            </Col>
            <Col span={24} id='changePath'>
              <Title>更改.env文件默认路径</Title>
              <Paragraph>
                默认情况下<Text code>.env</Text>
                文件都是建立在根目录下，如果.env.xxx文件过多，会显得根目录十分杂乱。
              </Paragraph>
              <Paragraph>
                可以通过配置<Text code>envDir</Text>来改变.env文件的访问路径
              </Paragraph>
              <Paragraph>1.添加下面配置信息到 vite.config.ts 中</Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Paragraph>
                2.在根目录下创建env文件夹，并将所有.env.xxx文件都放进去即可。
              </Paragraph>
            </Col>
            <Col span={24} id='multiConfig'>
              <Title>多工程配置</Title>
              <Paragraph>假如当前有如下情景：</Paragraph>
              <Alert
                description={
                  <>
                    我们需要为项目1配置开发、测试和生产环境变量；同时需要为项目2配置开发、测试和生产环境变量......
                  </>
                }
                type='info'
              />
              <Paragraph>
                这时候<Text code>dotenv</Text>就可以派上用场了。
              </Paragraph>
              <Title level={5}>1.安装dotenv</Title>
              <Text code>npm i dotenv -D</Text>
              <Title level={5}>2.在package.json中配置启动参数</Title>
              <CodeHighLight codeString={codeString2} />
              <Title level={5}>3.配置dotenv</Title>
              <Paragraph>1.在env文件夹下创建config.ts</Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Space direction='vertical'>
                <Alert
                  description={<>dotenv 规则：先配置的优先级更高</>}
                  type='warning'
                  showIcon
                />
                <Alert
                  description={
                    <>
                      <div>
                        如果是.env.development或者.env.sit等等，无需额外手动配置，系统会默认遵循。
                      </div>
                      <div>
                        当前主要是提高.env.xxx.development这类配置文件的优先级
                      </div>
                    </>
                  }
                  type='info'
                  showIcon
                />
              </Space>
              <Paragraph>2.在vite.config.ts中引入刚才的config.ts</Paragraph>
              <CodeHighLight codeString={codeString4} />
              <Alert
                description={
                  <>
                    这里ts有可能会报引入文件错误，需要在tsconfig.node.json文件中，includes配置项加入
                    <Text code>env/*.ts</Text>
                  </>
                }
                type='warning'
                showIcon
              />
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
              <Space>
                <Button
                  type='primary'
                  onClick={() =>
                    console.log('VITE_DEFAULT ', import.meta.env.VITE_DEFAULT)
                  }
                >
                  打印VITE_DEFAULT
                </Button>
                <Button
                  type='primary'
                  onClick={() =>
                    console.log('VITE_FLAG ', import.meta.env.VITE_FLAG)
                  }
                >
                  打印VITE_FLAG
                </Button>

                <Button
                  type='primary'
                  onClick={() =>
                    console.log('VITE_TITLE', import.meta.env.VITE_TITLE)
                  }
                >
                  打印VITE_TITLE
                </Button>
              </Space>
            </Col>
            <Col span={24} id='minimist'>
              <Title>配合minimist</Title>
              <Paragraph>
                倘若启动项具有多个参数时，可以搭配<Text code>minimist</Text>
                库一起使用
              </Paragraph>
              <CodeHighLight codeString={codeString5} />
              <Title level={5}>1.安装minimist</Title>
              <Text code>npm i minimist -D</Text>
              <Title level={5}>2.修改env/config.js</Title>
              <CodeHighLight codeString={codeString6} />
              <Button
                type='primary'
                onClick={() =>
                  console.log('VITE_TITLE', import.meta.env.VITE_TITLE)
                }
              >
                打印VITE_TITLE
              </Button>
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

export default DotEnv
