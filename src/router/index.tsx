import React, { ComponentType, Suspense, lazy } from 'react'
import { Spin } from 'antd'
import { Auth } from '@components/auth'
import Home from '@pages/Home'
import Layout from '@pages/Layout'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Configuration from '@pages/Configuration'
import Playground from '@pages/Playground'

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
      default: ComponentType<any>
    }>
  )
  return (
    <Suspense fallback={<Spin tip='Loading' size='large'></Spin>}>
      <Component />
    </Suspense>
  )
}

const routes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <NotFound />,
  },
  {
    path: 'notFound',
    element: <NotFound />,
  },
  {
    path: '/', // 首页
    element: (
      <Auth>
        <Layout></Layout>
      </Auth>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'member',
        element: lazyLoad('Member'),
      },
      {
        path: 'articleType',
        element: lazyLoad('ArticleType'),
      },
      {
        path: 'article',
        element: lazyLoad('Article'),
      },
      {
        path: 'publish',
        element: lazyLoad('Publish'),
      },
      {
        path: 'publish',
        element: lazyLoad('Publish'),
      },
      {
        path: 'summary',
        element: lazyLoad('Summary'),
        children: [
          {
            path: 'gitCommitizen',
            element: lazyLoad('Summary/GitCommitizen'),
          },
          {
            path: 'reactMemo',
            element: lazyLoad('Summary/ReactMemo'),
          },
          {
            path: 'reactReducer',
            element: lazyLoad('Summary/ReactReducer'),
          },
          {
            path: 'reactContext',
            element: lazyLoad('Summary/ReactContext'),
          },
          {
            path: 'reactMobxUseContext',
            element: lazyLoad('Summary/ReactMobxUseContext'),
          },
          {
            path: 'reactDynamicRoute',
            element: lazyLoad('Summary/ReactDynamicRoute'),
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'configuration',
    element: <Configuration />,
  },
  {
    path: 'playground',
    element: <Playground />,
  },
]

export { routes, lazyLoad }
