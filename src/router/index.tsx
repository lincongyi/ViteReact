import React from 'react'
import { Auth } from '@components/auth'
import Home from '@pages/Home'
import Layout from '@pages/Layout'
import Login from '@pages/Login'
import Configuration from '@pages/Configuration'
import Playground from '@pages/Playground'
import Html2PDF from '@pages/Html2PDF'
import NotFound from '@pages/NotFound'
import { lazyLoad } from '@/utils'
import {
  AppstoreOutlined,
  UserOutlined,
  SnippetsOutlined,
  ProfileOutlined,
  FileTextOutlined,
  ExceptionOutlined,
} from '@ant-design/icons'

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
        meta: {
          title: '数据概览',
          icon: <AppstoreOutlined />,
        },
      },
      {
        path: 'member',
        element: lazyLoad('Member'),
        meta: {
          title: '用户管理',
          icon: <UserOutlined />,
        },
      },
      {
        path: 'articleType',
        element: lazyLoad('ArticleType'),
        meta: {
          title: '文章类型',
          icon: <SnippetsOutlined />,
        },
      },
      {
        path: 'article',
        element: lazyLoad('Article'),
        meta: {
          title: '内容管理',
          icon: <ProfileOutlined />,
        },
      },
      {
        path: 'publish',
        element: lazyLoad('Publish'),
        meta: {
          title: '发布文章',
          icon: <FileTextOutlined />,
        },
      },
      {
        path: 'summary',
        element: lazyLoad('Summary'),
        children: [
          {
            path: 'gitCommitizen',
            element: lazyLoad('Summary/GitCommitizen'),
            meta: { title: 'Commitizen' },
          },
          {
            path: 'reactMemo',
            element: lazyLoad('Summary/ReactMemo'),
            meta: { title: 'React.memo' },
          },
          {
            path: 'reactReducer',
            element: lazyLoad('Summary/ReactReducer'),
            meta: { title: 'useReducer' },
          },
          {
            path: 'reactContext',
            element: lazyLoad('Summary/ReactContext'),
            meta: { title: 'createContext' },
          },
          {
            path: 'reactMobxUseContext',
            element: lazyLoad('Summary/ReactMobxUseContext'),
            meta: { title: 'Mobx && useContext' },
          },
          {
            path: 'reactDynamicRoute',
            element: lazyLoad('Summary/ReactDynamicRoute'),
            meta: { title: '动态路由' },
          },
          {
            path: 'reactForwardRef',
            element: lazyLoad('Summary/ReactForwardRef'),
            meta: { title: 'forwardRef' },
          },
          {
            path: 'reactUseImperativeHandle',
            element: lazyLoad('Summary/ReactUseImperativeHandle'),
            meta: { title: 'useImperativeHandle' },
          },
          {
            path: 'axiosCancelToken',
            element: lazyLoad('Summary/AxiosCancelToken'),
            meta: { title: 'axios终止请求' },
          },
          {
            path: 'vercel',
            element: lazyLoad('Summary/Vercel'),
            meta: { title: 'Vercel' },
          },
          {
            path: 'githubPages',
            element: lazyLoad('Summary/GithubPages'),
            meta: { title: 'Github Pages' },
          },
        ],
        meta: {
          title: '记录&总结',
          icon: <ExceptionOutlined />,
        },
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
  {
    path: 'html2pdf',
    element: <Html2PDF />,
  },
]

export { routes }
