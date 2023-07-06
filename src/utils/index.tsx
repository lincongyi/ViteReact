import React, { ComponentType, Suspense, lazy } from 'react'
import { Spin } from 'antd'

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

export { generateId, lazyLoad }
