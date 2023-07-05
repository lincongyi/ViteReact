import React, { ComponentType, Suspense, lazy } from 'react'
import { Spin } from 'antd'
import { ItemType, MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import { routes } from '@/router'

/**
 * 生成随机id
 * @returns {string} 随机id
 */
const generateId = () => Math.random().toString(16).slice(2)

// 从文件系统导入多个模块
const modules = import.meta.glob(['../pages/*/*.tsx', '../pages/*/*/*.tsx'])

/**
 * 路由懒加载
 * @param {string} module 模块名称
 * @returns {JSX.Element} 懒加载组件
 */
const lazyLoad = (module: string) => {
  const Component = lazy(
    modules[`../pages/${module}/index.tsx`] as () => Promise<{
      default: ComponentType
    }>
  )
  return (
    <Suspense fallback={<Spin tip='Loading' size='large'></Spin>}>
      <Component />
    </Suspense>
  )
}

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

export { generateId, lazyLoad, getMenuItems }
