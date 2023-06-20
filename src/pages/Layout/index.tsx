import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Menu, Layout, Popconfirm, message } from 'antd'
import type { MenuProps } from 'antd'
import { useStore } from '@stores/index'
import { logoff } from '@api/logoff'
import { removeToken } from '@utils/token'
import {
  PoweroffOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  UserOutlined,
  SnippetsOutlined,
  ProfileOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  TagsOutlined,
  ExceptionOutlined,
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider, Content } = Layout

const text = '是否确认退出登录？'

const AppLayout: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { userStore } = useStore()

  useEffect(() => {
    userStore.getProfile() // 用户名字
  }, [])

  const [messageApi, contextHolder] = message.useMessage()

  // 退出登录
  const onConfirm = async () => {
    await logoff()
    removeToken()
    messageApi.open({
      type: 'success',
      content: '退出登录！',
      duration: 2,
      onClose: () => navigate('/login'),
    })
  }

  const [collapsed, setCollapsed] = useState(false)

  const items = [
    { label: '数据概览', key: '/', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
    { label: '用户管理', key: '/member', icon: <UserOutlined /> },
    { label: '文章类型', key: '/articleType', icon: <SnippetsOutlined /> },
    { label: '内容管理', key: '/article', icon: <ProfileOutlined /> },
    { label: '发布文章', key: '/publish', icon: <FileTextOutlined /> },
    {
      label: '记录&总结',
      key: '/summary',
      icon: <ExceptionOutlined />,
      children: [
        { label: 'Commitizen', key: '/summary/GitCommitizen' },
        { label: 'React.memo', key: '/summary/ReactMemo' },
        { label: 'useReducer', key: '/summary/ReactReducer' },
        { label: 'createContext', key: '/summary/ReactContext' },
        { label: 'Mobx & useContext', key: '/summary/ReactMobxUseContext' },
        { label: '动态路由', key: '/summary/ReactDynamicRoute' },
        { label: 'forwardRef', key: '/summary/ReactForwardRef' },
        {
          label: 'useImperativeHandle',
          key: '/summary/ReactUseImperativeHandle',
        },
        { label: 'axios终止请求', key: '/summary/AxiosCancelToken' },
        { label: 'Vercel', key: '/summary/Vercel' },
      ],
    },
    {
      label: '子菜单1',
      key: 'submenu-1',
      icon: <FileDoneOutlined />,
      children: [{ label: '子菜单项1-1', key: 'submenu-item-1-1' }],
    },
    {
      label: '子菜单2',
      key: 'submenu-2',
      icon: <TagsOutlined />,
      children: [{ label: '子菜单项2-1', key: 'submenu-item-2-1' }],
    },
  ]
  const [current, setCurrent] = useState(pathname)

  // 切换菜单
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
    navigate(e.key)
  }
  return (
    <>
      {contextHolder}
      <Layout className='layout-wrap'>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={200}
          style={{ position: 'fixed', height: '100vh' }}
        >
          <div className='logo'>
            <div className='bg'></div>
          </div>
          <Menu
            theme='dark'
            mode='inline'
            items={items}
            selectedKeys={[current]}
            onClick={onClick}
          />
        </Sider>
        <Layout style={{ marginLeft: !collapsed ? 200 : 80 }}>
          <Header
            className='header'
            style={{
              width: !collapsed ? 'calc(100% - 200px)' : 'calc(100% - 80px)',
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'collapsed',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className='user-tool'>
              {userStore.profile?.username}
              <Popconfirm
                placement='bottomRight'
                title={text}
                onConfirm={onConfirm}
                okText='确定'
                cancelText='取消'
              >
                <div className='logoff'>
                  <PoweroffOutlined />
                  退出登录
                </div>
              </Popconfirm>
            </div>
          </Header>
          <Content className='content'>
            {/* 二级路由出口 */}
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default observer(AppLayout)
