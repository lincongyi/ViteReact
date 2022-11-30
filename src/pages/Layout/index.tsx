import React, { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Layout, Popconfirm } from 'antd'
import type { MenuProps } from 'antd'
import {
  PoweroffOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  TagsOutlined,
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider, Content } = Layout

const text = '是否确认退出登录？'

const AppLayout: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // 退出登录
  const onConfirm = () => {}

  const [collapsed, setCollapsed] = useState(false)

  const items = [
    { label: '数据概览', key: '/', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
    { label: '内容管理', key: '/article', icon: <ProfileOutlined /> },
    { label: '发布文章', key: '/publish', icon: <FileTextOutlined /> },
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
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(e.key)
  }
  return (
    <Layout className="layout-wrap">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <div className="bg"></div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={[current]}
          onClick={onClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'collapsed',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="user-tool">
            user name
            <Popconfirm
              placement="bottomRight"
              title={text}
              onConfirm={onConfirm}
              okText="确定"
              cancelText="取消"
            >
              <div className="logoff">
                <PoweroffOutlined />
                退出登录
              </div>
            </Popconfirm>
          </div>
        </Header>
        <Content className="content">
          {/* 二级路由出口 */}
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
