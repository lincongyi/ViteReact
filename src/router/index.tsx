import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import { Auth } from '@components/auth'
import Home from '@pages/Home'
import Layout from '@pages/Layout'
import Login from '@pages/Login'
import Configuration from '@pages/Configuration'
import Playground from '@pages/Playground'

/**
 * 路由懒加载
 * @param {string} module 模块名称
 * @returns {JSX.Element} 懒加载组件
 */
const lazyLoad = (module: string) => {
  const Component = lazy(() => import(`../pages/${module}`))
  return (
    <Suspense fallback={<Spin tip='Loading' size='large'></Spin>}>
      <Component />
    </Suspense>
  )
}

type TRoutes = {
  path: string
  element?: JSX.Element
  children?: TRoutes[]
}

const routes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <Navigate to='/login' />,
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
            path: 'reactMemo',
            element: lazyLoad('Summary/ReactMemo'),
          },
          {
            path: 'reactReducer',
            element: lazyLoad('Summary/ReactReducer'),
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

export { routes }
