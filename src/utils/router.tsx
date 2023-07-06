import { ItemType, MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { routes } from '@/router'

/**
 * 获取导航菜单
 */
const getMenuItems = () => {
  const menuItem = routes.find(item => item.path === '/')
  if (!menuItem?.children) return []
  return generateMenuItems(menuItem.children)
}

/**
 * 生成导航菜单
 * @param {TRoutes[]} 路由
 * @returns {ItemType[]} 根据返回导航菜单
 */
const generateMenuItems = (routes: TRoutes[]) => {
  const target = routes.reduce((prev: ItemType[], next: TRoutes) => {
    const item: ItemType = {
      key: next.path || '/',
      label: next.meta?.title,
      icon: next.meta?.icon,
    }
    if (next.children) {
      ;(item as MenuItemGroupType).children = generateMenuItems(next.children)
    }
    return [...prev, item]
  }, [])
  return target
}

export { getMenuItems }
