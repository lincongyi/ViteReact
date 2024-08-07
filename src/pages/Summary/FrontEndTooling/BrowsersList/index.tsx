import CodeHighLight from '@/components/CodeHighLight'
import { Anchor, Col, Row, Typography } from 'antd'
import {
  codeString1,
  codeString10,
  codeString11,
  codeString12,
  codeString13,
  codeString14,
  codeString15,
  codeString16,
  codeString17,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
  codeString6,
  codeString7,
  codeString8,
  codeString9,
} from './code'

const { Title, Paragraph, Text, Link } = Typography

const BrowsersList = () => {
  const items = [
    { key: 'preface', href: '#preface', title: '前言' },
    { key: 'update', href: '#update', title: '更新browserslist' },
    { key: 'syntax', href: '#syntax', title: '常见查询语法' },
    { key: 'combinationQuery', href: '#combinationQuery', title: '组合查询' },
    { key: 'config', href: '#config', title: '配置文件' },
    { key: 'envConfig', href: '#envConfig', title: '环境的差异化配置' },
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id="preface">
              <Title>前言</Title>
              <Paragraph>
                <Text code>browserslist</Text>
                主要是用作查找当前目标浏览器的普及范围，使得开发者不用再频繁的手动更新浏览器版本。
              </Paragraph>
              <Paragraph>
                <Text code>browserslist</Text> 使用{' '}
                <Link href="https://caniuse.com/" target="_blank">
                  Can I Use
                </Link>{' '}
                网站的数据来查询浏览器版本范围。
              </Paragraph>
              <Paragraph>
                以下是在线的查询条件示例网站，
                <Link href="https://browsersl.ist/" target="_blank">
                  点击前往
                </Link>
                。
              </Paragraph>
            </Col>
            <Col span={24} id="update">
              <Title>更新browserslist</Title>
              <Paragraph>
                由于<Text code>browserslist</Text>
                使用时会将数据克隆至本地，所以可能会存在本地数据不是最新的情况。
              </Paragraph>
              <Paragraph>
                <Text code>browserslist</Text>
                提供了更新本地库的命令，可定期运行以获取最新数据：
              </Paragraph>
              <Paragraph>
                <Text code>npx browserslist@latest --update-db</Text>
              </Paragraph>
            </Col>
            <Col span={24} id="syntax">
              <Title>常见查询语法</Title>
              <Title level={3}>defaults</Title>
              <Text mark>
                # 默认配置，相当于 &gt; &quot;0.5%, last 2 versions, Firefox
                ESR, not dead&quot;{' '}
              </Text>
              <CodeHighLight codeString={codeString1} />
              <Title level={3}>按市场占有率</Title>
              <Text mark># 全球市场占有率大于 5% 的浏览器</Text>
              <CodeHighLight codeString={codeString2} />
              <Text mark># 查找亚洲地区市场占有率大于 5% 的浏览器</Text>
              <CodeHighLight codeString={codeString3} />
              <Title level={3}>按最新版本（大小写不敏感）</Title>
              <Text mark># 查找所有浏览器最新的 2 个版本</Text>
              <CodeHighLight codeString={codeString4} />
              <Text mark># 查找 Chrome 浏览器的最后 2 个版本</Text>
              <CodeHighLight codeString={codeString5} />
              <Title level={3}>dead</Title>
              <Text mark>
                # 查找超过 24 个月没被官方维护的浏览器，比如 IE10、IE11 等
              </Text>
              <CodeHighLight codeString={codeString6} />
              <Title level={3}>按浏览器版本</Title>
              <Text mark># 查找 ios 7 系统使用的 safiri 的浏览器版本</Text>
              <CodeHighLight codeString={codeString7} />
              <Text mark># 查找 Chrome 版本大于100的浏览器</Text>
              <CodeHighLight codeString={codeString8} />
              <Title level={3}>supports es6-module</Title>
              <Text mark># 查找支持 es6 模块的浏览器</Text>
              <CodeHighLight codeString={codeString9} />
            </Col>
            <Col span={24} id="combinationQuery">
              <Title>组合查询</Title>
              <Paragraph>可通过 and、or、not 关键字进行组合查询</Paragraph>
              <Title level={3}>and（交集）</Title>
              <Paragraph>每个条件相交的结果</Paragraph>
              <Text mark>
                # 查找 Chrome 58 到 65 并且支持 es6-module 的版本，可以看到
                Chrome 在 61 版本才开始支持 es6-module
              </Text>
              <CodeHighLight codeString={codeString10} />
              <Title level={3}>or（并集）</Title>
              <Paragraph>每个条件合并的结果，也可以用逗号代替 or。</Paragraph>
              <Text mark># 查找 Chrome 与 Edge 大于 100 的版本</Text>
              <CodeHighLight codeString={codeString11} />
              <Title level={3}>not（取反）</Title>
              <Text mark>
                # 查找 Chrome 58 到 65 并且不支持 es6-module 的版本，可以看到
                Chrome 在 60 版本以下都不支持 es6-module
              </Text>
              <CodeHighLight codeString={codeString12} />
            </Col>
            <Col span={24} id="config">
              <Title>配置文件</Title>
              <Paragraph>
                在根目录下创建如下配置文件，然后在配置文件中添加查询条件即可生效。
              </Paragraph>
              <Title level={3}>browserslist.js（少用）</Title>
              <CodeHighLight codeString={codeString13} />
              <Title level={3}>.browserslistrc</Title>
              <CodeHighLight codeString={codeString14} />
              <Text mark>配置文件中的换行表示 or。</Text>
              <Title level={3}>package.json（推荐）</Title>
              <CodeHighLight codeString={codeString15} />
            </Col>
            <Col span={24} id="envConfig">
              <Title>环境的差异化配置</Title>
              <Paragraph>
                你可以为不同的环境配置不同的浏览器查询条件。 Browserslist 将根据
                <Text code>BROWSERSLIST_ENV</Text> 或者{' '}
                <Text code>NODE_ENV</Text>查询浏览器版本范围。
                如果两个环境变量都没有配置正确的查询条件，那么优先从{' '}
                <Text code>production</Text>
                对应的配置项加载查询条件，如果再找不到就应用
                <Link
                  onClick={() =>
                    document.getElementById('syntax')?.scrollIntoView()
                  }
                >
                  默认配置
                </Link>
                。
              </Paragraph>
              <Title level={3}>.browserslistrc</Title>
              <CodeHighLight codeString={codeString16} />
              <Title level={3}>package.json</Title>
              <CodeHighLight codeString={codeString17} />
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

export default BrowsersList
