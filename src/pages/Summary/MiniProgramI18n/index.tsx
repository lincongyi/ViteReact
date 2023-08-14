import React from 'react'
import { Col, Row, Timeline, Typography, Image } from 'antd'
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
} from './code'
import screenshot01 from '@images/MiniProgramI18n/screenshot-01.png'
import screenshot02 from '@images/MiniProgramI18n/screenshot-02.png'
import screenshot03 from '@images/MiniProgramI18n/screenshot-03.png'
import screenshot04 from '@images/MiniProgramI18n/screenshot-04.png'
import screenshot05 from '@images/MiniProgramI18n/screenshot-05.png'
import screenshot06 from '@images/MiniProgramI18n/screenshot-06.png'

const { Title, Paragraph, Link, Text } = Typography

const MiniProgramI18n = () => {
  const items = [
    { children: '微信小程序国际化' },
    { children: 'miniprogram-i18n' },
    { children: 'miniprogram-i18n-plus' },
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
              <Title>微信小程序国际化</Title>
              <Paragraph>微信小程序国际化可以通过一下2种方式实现：</Paragraph>
              <Paragraph>
                1.miniprogram-i18n是官方提供的国际化方案。具体可参考
                <br />
                <Link
                  href='https://github.com/wechat-miniprogram/miniprogram-i18n'
                  target='_blank'
                >
                  https://github.com/wechat-miniprogram/miniprogram-i18n
                </Link>
              </Paragraph>
              <Paragraph>
                2.miniprogram-i18n-plus，这是大佬写的一个插件，比起官方提供的更加便捷。具体可参考
                <br />
                <Link
                  href='https://github.com/hefeng6500/miniprogram-i18n-plus'
                  target='_blank'
                >
                  https://github.com/hefeng6500/miniprogram-i18n-plus
                </Link>
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>miniprogram-i18n</Title>
              <Paragraph>
                官方提供的国际化方案，针对老项目的配置流程可直接跟着README文件走。以下介绍针对新项目的目录结构进行国际化的配置。
              </Paragraph>
              <Title level={5}>1.项目目录结构</Title>
              <Image width={200} src={screenshot01} />
              <Paragraph>
                如果原项目根目录下直接放置项目文件，可以新建文件夹miniprogram，并把项目文件移到这个目录中。
              </Paragraph>
              <Title level={5}>2.安装依赖</Title>
              <Paragraph>
                (1)在根目录安装依赖
                <br />
                <Text code>
                  npm i -D gulp @miniprogram-i18n/gulp-i18n-locales
                  @miniprogram-i18n/gulp-i18n-wxml
                </Text>
              </Paragraph>
              <Paragraph>
                (2)cd miniprogram目录中安装依赖
                <Text code>npm i -S @miniprogram-i18n/core</Text>
                <br />
              </Paragraph>
              <Paragraph>
                如果miniprogram里面没有package.json文件，可以先执行
                <Text code>npm init</Text>
                初始化package.json。（一直回车，初始化成功后，即可安装依赖）
              </Paragraph>
              <Title level={5}>3.构建npm</Title>
              <Image width={200} src={screenshot02} />
              <Paragraph>
                构建成功之后minprogram中会生成一个miniprogram_npm文件夹。
              </Paragraph>
              <Title level={5}>4.gulpfile.js</Title>
              <CodeHighLight codeString={codeString1} />
              <Paragraph>建立 gulp 所需的配置并引入 i18n 构建插件。</Paragraph>
              <Title level={5}>5.i18n api</Title>
              <Paragraph>
                在miniprogram中新建i18n文件夹，使用json文件存储变量。
              </Paragraph>
              <Paragraph>(1)定义</Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Paragraph>(2)使用</Paragraph>
              <Paragraph>注意Page要修改为I18nPage</Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Paragraph>js动态设置国际化文字</Paragraph>
              <CodeHighLight codeString={codeString4} />
              <Paragraph>更多api请自行体验</Paragraph>
              <Image width={200} src={screenshot03} />
              <Title level={5}>6.打包编译</Title>
              <Paragraph>(1)配置project.config.js</Paragraph>
              <Image width={200} src={screenshot04} />
              <Paragraph>(2)配置package.json</Paragraph>
              <Image width={200} src={screenshot05} />
              <Paragraph>
                (3)最后执行<Text code>npm run build</Text>
                编译，即可构建成国际化后的文件。
              </Paragraph>
            </Col>
            <Col span={24}>
              <Title>miniprogram-i18n-plus</Title>
              <Paragraph>更加方便快捷睇接入i18n</Paragraph>
              <Title level={5}>1.安装依赖</Title>
              <Paragraph>
                在miniprogram目录中安装依赖
                <Text code>npm install miniprogram-i18n-plus -S</Text>
              </Paragraph>
              <Title level={5}>2.构建npm</Title>
              <Paragraph>在开发工具的工具栏中点击 [构建npm]</Paragraph>
              <Title level={5}>3.配置app.ts</Title>
              <Paragraph>en-US/zh-CN...语言包可以是js文件</Paragraph>
              <CodeHighLight codeString={codeString5} />
              <Title level={5}>4.使用</Title>
              <Paragraph>在需要使用的页面中：</Paragraph>
              <CodeHighLight codeString={codeString6} />
              <Paragraph>(1)定义</Paragraph>
              <CodeHighLight codeString={codeString7} />
              <Paragraph>(2)切换语言</Paragraph>
              <CodeHighLight codeString={codeString8} />
              <Paragraph>更多api请自行体验</Paragraph>
              <Image width={200} src={screenshot06} />
            </Col>
          </Row>
        </Typography>
      </Col>
    </Row>
  )
}

export default MiniProgramI18n
