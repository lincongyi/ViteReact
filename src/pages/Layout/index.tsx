import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider, Content } = Layout

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const items = [
    { label: '菜单项一', key: 'item-1', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
      label: '子菜单1',
      key: 'submenu-1',
      children: [{ label: '子菜单项1-1', key: 'submenu-item-1-1' }],
    },
    {
      label: '子菜单2',
      key: 'submenu-2',
      children: [{ label: '子菜单项2-1', key: 'submenu-item-2-1' }],
    },
  ]
  const [current, setCurrent] = useState('item-2')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e)
    setCurrent(e.key)
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
        </Header>
        <Content className="content">Content</Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
