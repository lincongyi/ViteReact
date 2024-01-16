import React from 'react'
import { Anchor, Col, Row, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography
const GitDirectives = () => {
  const items = [
    { key: 'directives', href: '#directives', title: 'git常用指令' },
    { key: 'rebase', href: '#rebase', title: 'git rebase' },
  ]

  const directivesList = [
    {
      code: 'git remote add origin[仓库名称] https://......',
      desc: '关联远端仓库',
    },
    {
      code: 'git remote set-url --add origin[仓库名称] https://......',
      desc: '额外关联多个远端仓库',
    },
    {
      code: 'git remote -v',
      desc: '查询当前分支所关联的远端仓库名称、地址',
    },
    {
      code: 'git remote rm origin[仓库名称]',
      desc: '取消关联远端仓库',
    },
    {
      code: 'git push origin[仓库名称] --delete [远程分支名]',
      desc: '删除远端分支（不写远程分支名的话，默认删除当前分支对应的远端分支）',
    },
    {
      code: 'git switch -c [分支名]',
      desc: '本地创建一个新的分支，并切换到该分支',
    },
    {
      code: 'git branch (-a)',
      desc: '列出当前所有分支（同时包含远端分支）',
    },
    {
      code: 'git branch -vv',
      desc: '查看分支关联情况',
    },
    {
      code: 'git branch --set-upstream-to=[仓库名称]/[分支名]',
      desc: ' 本地分支关联远端分支',
    },
    {
      code: 'git branch -d [分支名]',
      desc: '删除本地某个分支',
    },
    {
      code: 'git branch -D [分支名]',
      desc: '强制删除本地某个分支',
      mark: '-D 相当于 --delete --force',
    },
    {
      code: 'git log',
      desc: '查看提交记录',
      mark: '获取commit id',
    },
    {
      code: 'git reset HEAD^',
      desc: '回退到上一个版本',
      mark: '有多少个^，就回退多少个版本，也可以用HEAD~2或者HEAD^3来表示',
    },
    {
      code: 'git reset --hard HEAD^',
      desc: '撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交',
    },
    {
      code: 'git commit --amend',
      desc: '删除上一次的提交记录，同时重新提交（常用于覆盖重复提交）',
    },
    {
      code: 'git checkout --track [仓库名称]/[分支名]',
      desc: '本地新建一个跟远端同名的分支，并自动追踪',
    },
  ]
  return (
    <Row gutter={10}>
      <Col xs={18} xl={20}>
        <Typography>
          <Row>
            <Col span={24} id='directives'>
              <Title>git常用指令</Title>
              {directivesList.map((item, index) => (
                <Paragraph key={index}>
                  {index + 1}.<Text code>{item.code}</Text>：{item.desc}
                  {item.mark && <Text mark>{item.mark}</Text>}
                </Paragraph>
              ))}
            </Col>
            <Col span={24} id='rebase'>
              <Title>git rebase</Title>
              <Paragraph>
                <Text code>git rebase -i [commit id]</Text>
                ：合并（版本号的上一条记录开始算）提交记录
              </Paragraph>
              <Paragraph>
                <Text strong>
                  进入vim编辑器后，必须保留最早的（第一条）提交记录，需要合并的提交记录可更换command
                </Text>
              </Paragraph>
              <Paragraph>
                <Text strong>常用command:</Text>
                <br />
                (fixup) f :只保留合并到某个记录的log message
                <br />
                (squash) s :连带log message一起合并
                <br />
                (pick) p :默认pick，不合并该提交记录
              </Paragraph>
              <Paragraph>
                <Text mark>合并后如果出现冲突，修复完冲突后可执行：</Text>
                <br />
                <Text code>git add .</Text>
                <br />
                <Text code>git rebase --continue</Text>
                <br />
                <Text mark>如果想要放弃合并，则执行</Text>
                <br />
                <Text code>git rebase --abort</Text>
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

export default GitDirectives
