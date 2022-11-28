import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useState } from 'react'

const Layout = () => {
  const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
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
    <>
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        selectedKeys={[current]}
        onClick={onClick}
      />
    </>
  )
}

export default Layout
