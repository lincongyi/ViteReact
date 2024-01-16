import React, { ComponentType, Suspense, lazy } from 'react'
import { Spin } from 'antd'
import { TModuleRoutes } from '@/router'
import { useLocation, useNavigate } from 'react-router-dom'
import style from './index.module.scss'

/**
 * 生成随机id
 * @returns {string} 随机id
 */
const generateId = () => Math.random().toString(16).slice(2)

// 从文件系统导入多个模块
const modules = import.meta.glob([
  '../pages/*/*.tsx',
  '../pages/*/*/*.tsx',
  '../pages/*/*/*/*.tsx',
])

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
 * 获取对应模块侧边导航
 */
const getSideNavigation = (routes: TModuleRoutes[]) => {
  const { pathname } = useLocation()

  const navigate = useNavigate()

  return routes.map(item => {
    const isCurrentPath =
      pathname.toLocaleLowerCase() ===
      `/${item.elementPath.toLocaleLowerCase()}`
    return {
      color: isCurrentPath ? 'blue' : 'gray',
      children: (
        <div
          className={`${style.item} ${isCurrentPath && style.active}`}
          onClick={() => navigate(`/${item.elementPath.toLowerCase()}`)}
        >
          {item.meta.title}
        </div>
      ),
    }
  })
}

export { generateId, lazyLoad, getSideNavigation }
