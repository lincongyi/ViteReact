import { Anchor, Col, Row, Typography, Image, Alert, Table } from 'antd'
import CodeHighLight from '@/components/CodeHighLight'
import screenshot01 from '@images/Standard/screenshot-01.png'
import { codeString1, codeString2, codeString3, codeString4 } from './code'

const { Title, Paragraph, Text, Link } = Typography

const Standard = () => {
  const items = [
    { key: 'preface', href: '#preface', title: '前言' },
    { key: 'init', href: '#init', title: '创建项目' },
    {
      key: 'codeStandard',
      href: '#codeStandard',
      title: '代码规范',
      children: [
        { key: 'eslint', href: '#eslint', title: 'Eslint' },
        { key: 'prettier', href: '#prettier', title: 'Prettier' },
        { key: 'mix', href: '#mix', title: 'Eslint + Prettier' },
        { key: 'husky', href: '#husky', title: 'Husky' },
        { key: 'lint-staged', href: '#lint-staged', title: 'lint-staged' },
        { key: 'commitlint', href: '#commitlint', title: 'commitlint' },
        { key: 'summary', href: '#summary', title: '总结' },
      ],
    },
  ]

  const columns = [
    {
      title: '类型',
      dataIndex: 'type',
      width: 140,
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
  ]

  const dataSource = [
    {
      type: 'fix',
      desc: '类型 为 fix 的提交表示在代码库中修复了一个 bug',
    },
    {
      type: 'feat',
      desc: '类型 为 feat 的提交表示在代码库中新增了一个功能',
    },
    {
      type: 'build',
      desc: '用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等',
    },
    {
      type: 'chore',
      desc: '用于对非业务性代码进行修改，例如修改构建流程或者工具配置等',
    },
    {
      type: 'ci',
      desc: '用于修改持续集成流程，例如修改 Travis、Jenkins 等工作流配置',
    },
    {
      type: 'docs',
      desc: '用于修改文档，例如修改 README 文件、API 文档等',
    },
    {
      type: 'style',
      desc: '用于修改代码的样式，例如调整缩进、空格、空行等',
    },
    {
      type: 'refactor',
      desc: '用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑',
    },
    {
      type: 'perf',
      desc: '用于优化性能，例如提升代码的性能、减少内存占用等',
    },
    {
      type: 'test',
      desc: '用于修改测试用例，例如添加、删除、修改代码的测试用例等',
    },
  ]

  return (
    <Row>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id="preface">
              <Title>前言</Title>
              <Paragraph>
                前端项目搭建过很多次了，每次总觉得在项目规范总会有缺漏的地方。现在就记录一下搭建前端开发规范工作流的前置过程。
              </Paragraph>
            </Col>
            <Col span={24} id="init">
              <Title>创建项目</Title>
              <Paragraph>
                <Title level={5}>使用 NPM:</Title>
                <Text code>npm create vite@latest</Text>
                <Title level={5}>使用 Yarn:</Title>
                <Text code>yarn create vite</Text>
                <Title level={5}>使用 PNPM:</Title>
                <Text code>pnpm create vite</Text>
              </Paragraph>
              <Paragraph>然后根据提示录入项目信息，即可创建成功</Paragraph>
              <Image width={400} src={screenshot01} />
              <Paragraph>
                cd进入项目文件夹，安装依赖后即可成功运行项目
              </Paragraph>
            </Col>
            <Col span={24} id="codeStandard">
              <Title>代码规范</Title>
              <Title level={3} id="eslint">
                Eslint
              </Title>
              <Paragraph>
                如果在项目初始化时，已经未选择eslint，需要手动运行
                <Text code>npm init @eslint/config</Text>
                ，根据提示选择配置内容，即可生成对应的eslint配置。
              </Paragraph>
              <Paragraph>默认的配置文件内容大致如下：</Paragraph>
              <CodeHighLight codeString={codeString1} />
              <Title level={3} id="prettier">
                Prettier
              </Title>
              <Paragraph>
                一般 ESLint 用于检测代码风格代码规范，Prettier
                用于对代码进行格式化。
              </Paragraph>
              <Paragraph>
                1.安装依赖<Text code>npm i prettier -D</Text>
              </Paragraph>
              <Paragraph>
                2.然后再根目录创建 <Text code>.prettierrc.cjs</Text>{' '}
                配置文件，录入自定义规则。
              </Paragraph>
              <Title level={3} id="mix">
                Eslint + Prettier
              </Title>
              <Paragraph>
                1.安装依赖
                <Text code>
                  npm i eslint-config-prettier eslint-plugin-prettier -D
                </Text>
              </Paragraph>
              <Paragraph>
                <Text code>eslint-config-prettier</Text>
                主要是为了禁用那些和Prettier配置有冲突的eslint规则。
              </Paragraph>
              <Paragraph>
                <Text code>eslint-plugin-prettier</Text>
                执行eslint --fix 时，采用Prettier的配置规则来格式化文件。
              </Paragraph>
              <Paragraph>
                <Text code>eslint-config-prettier</Text>
                主要是为了禁用那些和Prettier配置有冲突的eslint规则。
              </Paragraph>
              <Title level={3} id="husky">
                Husky
              </Title>
              <Paragraph>
                1.安装依赖<Text code>npm install husky -D</Text>
              </Paragraph>
              <Paragraph>2.配置</Paragraph>
              <Title level={5}>V9版本</Title>
              <Paragraph>
                <Text mark>1.执行配置脚本</Text>
              </Paragraph>
              <Paragraph>
                <Text code>npx husky init</Text>
              </Paragraph>
              <Paragraph>
                <Text mark>2.添加钩子</Text>
              </Paragraph>
              <Paragraph>
                <Text code>
                  echo &quot;npm run lint&quot; &gt; .husky/pre-commit
                </Text>
              </Paragraph>
              <Title level={5}>V9之前的版本</Title>
              <Paragraph>
                <Text mark>
                  1.package scripts脚本添加prepare钩子，执行husky install
                </Text>
              </Paragraph>
              <Paragraph>
                <Text code>
                  npm pkg set scripts.prepare=&quot;husky install&quot;
                </Text>
              </Paragraph>
              <Paragraph>
                <Text mark>
                  2.执行配置脚本，自动创建 .husky/_git钩子相关文件
                </Text>
              </Paragraph>
              <Paragraph>
                <Text code>npm run prepare</Text>
              </Paragraph>
              <Paragraph>
                <Text mark>3.添加pre-commit钩子</Text>
              </Paragraph>
              <Paragraph>
                <Text code>
                  npx husky add .husky/pre-commit &quot;npm run lint&quot;
                </Text>
              </Paragraph>
              <Title level={3} id="lint-staged">
                lint-staged
              </Title>
              <Paragraph>
                当前每次commit之前都会全量检测所有代码，并格式化处理。
                <br />
                但由于之前提交的代码或者已经格式化处理，再次全量检测的话，如果项目体量比较大，耗时就比较长。
                <br />
                lint-staged 可以针对暂存区的代码进行检验，避免全量检测。
              </Paragraph>
              <Paragraph>
                1.安装依赖<Text code>npm i lint-staged -D</Text>
              </Paragraph>
              <Paragraph>2.在 package.json 添加相关配置</Paragraph>
              <CodeHighLight codeString={codeString2} />
              <Title level={3} id="commitlint">
                commitlint
              </Title>
              <Paragraph>
                1.安装依赖
                <Text code>
                  npm i commitlint @commitlint/cli
                  @commitlint/config-conventional -D
                </Text>
              </Paragraph>
              <Paragraph>
                <Text code>@commitlint/cli</Text> 是 commitlint 工具的核心。
              </Paragraph>
              <Paragraph>
                <Text code>@commitlint/config-conventional</Text>是 commitlint
                规范的配置文件。
              </Paragraph>
              <Paragraph>
                2.新增<Text code>.commitlintrc.cjs</Text>
                配置文件，并插入以下代码
              </Paragraph>
              <CodeHighLight codeString={codeString3} />
              <Paragraph>
                3. 结合<Text mark>husky</Text>，实现<Text mark>git commit</Text>
                规范校验
              </Paragraph>
              <Paragraph>
                设置 <Text mark>commit-msg</Text> hook
              </Paragraph>
              <Paragraph>
                <Text code>
                  echo &quot;npx --no-install commitlint -e
                  $HUSKY_GIT_PARAMS&quot; &gt; .husky/commit-msg
                </Text>
              </Paragraph>
              <Alert
                message="备注"
                type="warning"
                description="在vscode中使用指令创建的pre-commit和commit-msg文件，编码格式有可能是UTF-16，从而导致commit时无法正常运行指令格式化处理代码。需要改成UTF-8才能正常运行。"
                showIcon
              />
              <Paragraph>
                现在提交信息不合法就会被拦截导致提交失败，commit
                message规范可以参考
                <Link
                  href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional"
                  target="_blank"
                >
                  @commitlint/config-conventional
                </Link>
                。
              </Paragraph>
              <Alert
                message="备注"
                type="warning"
                description="每个提交都必须使用类型字段前缀，它由一个名词构成，诸如 feat 或 fix ，以及必要的冒号（英文半角）和空格。"
                showIcon
              />
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
              <Title level={5}>BREAKING CHANGE</Title>
              <Paragraph>
                在脚注中包含 <Text code>BREAKING CHANGE:</Text>表示引入了破坏性
                API 变更。破坏性变更可以是任意 类型 提交的一部分。
              </Paragraph>
              <Title level={5}>示例</Title>
              <CodeHighLight codeString={codeString4} />

              <Title level={3} id="summary">
                总结
              </Title>
              <Paragraph>
                1.husky用来管理git hooks，以此来增强git功能。
              </Paragraph>
              <Paragraph>
                2.commitlint结合commit-msg钩子，实现提交规范的校验。
              </Paragraph>
              <Paragraph>
                3.lint-staged结合pre-commit钩子，实现对暂存区文件的校验。
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

export default Standard
