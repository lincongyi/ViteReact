import React from 'react'
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

const basicRoutes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <NotFound />,
    inherent: true,
  },
  {
    path: 'notFound',
    element: <NotFound />,
    inherent: true,
  },
  {
    path: 'login',
    element: <Login />,
    inherent: true,
  },
  {
    path: 'configuration',
    element: <Configuration />,
    inherent: true,
  },
  {
    path: 'playground',
    element: <Playground />,
    inherent: true,
  },
  {
    path: 'html2pdf',
    element: <Html2PDF />,
    inherent: true,
  },
]

const javascriptRoutes = [
  {
    path: 'debounce',
    elementPath: 'Summary/JavaScript/Debounce',
    meta: { title: '防抖' },
  },
  {
    path: 'throttle',
    elementPath: 'Summary/JavaScript/Throttle',
    meta: { title: '节流' },
  },
]

const dynamicRoutes = [
  {
    path: '/', // 首页
    element: <Layout></Layout>,
    // elementPath: 'Layout',
    children: [
      {
        path: '',
        element: <Home />,
        // elementPath: 'Home',
        meta: {
          title: '数据概览',
          icon: <AppstoreOutlined />,
        },
      },
      {
        path: 'member',
        elementPath: 'Member',
        meta: {
          title: '用户管理',
          icon: <UserOutlined />,
        },
      },
      {
        path: 'articleType',
        elementPath: 'ArticleType',
        meta: {
          title: '文章类型',
          icon: <SnippetsOutlined />,
        },
      },
      {
        path: 'article',
        elementPath: 'Article',
        meta: {
          title: '内容管理',
          icon: <ProfileOutlined />,
        },
      },
      {
        path: 'publish',
        elementPath: 'Publish',
        meta: {
          title: '发布文章',
          icon: <FileTextOutlined />,
        },
      },
      {
        path: 'summary',
        elementPath: 'Summary',
        children: [
          {
            path: 'scss',
            elementPath: 'Summary/SCSS',
            meta: { title: 'SCSS' },
          },
          {
            path: 'javaScript',
            elementPath: 'Summary/JavaScript',
            meta: { title: 'JavaScript' },
            children: [...javascriptRoutes],
          },
          {
            path: 'gitCommitizen',
            elementPath: 'Summary/GitCommitizen',
            meta: { title: 'Commitizen' },
          },
          {
            path: 'arrayApi',
            elementPath: 'Summary/ArrayApi',
            meta: { title: '数组遍历的Api' },
          },
          {
            path: 'reactUseState',
            elementPath: 'Summary/ReactUseState',
            meta: { title: 'useState' },
          },
          {
            path: 'reactUseEffect',
            elementPath: 'Summary/ReactUseEffect',
            meta: { title: 'useEffect' },
          },
          {
            path: 'reactUseReducer',
            elementPath: 'Summary/ReactUseReducer',
            meta: { title: 'useReducer' },
          },
          {
            path: 'reactMemo',
            elementPath: 'Summary/ReactMemo',
            meta: { title: 'React.memo' },
          },
          {
            path: 'reactUseContext',
            elementPath: 'Summary/ReactUseContext',
            meta: { title: 'createContext' },
          },
          {
            path: 'reactMobxUseContext',
            elementPath: 'Summary/ReactMobxUseContext',
            meta: { title: 'Mobx && useContext' },
          },
          {
            path: 'reactDynamicRoute',
            elementPath: 'Summary/ReactDynamicRoute',
            meta: { title: '动态路由' },
          },
          {
            path: 'reactForwardRef',
            elementPath: 'Summary/ReactForwardRef',
            meta: { title: 'forwardRef' },
          },
          {
            path: 'reactUseImperativeHandle',
            elementPath: 'Summary/ReactUseImperativeHandle',
            meta: { title: 'useImperativeHandle' },
          },
          {
            path: 'axiosCancelToken',
            elementPath: 'Summary/AxiosCancelToken',
            meta: { title: 'axios终止请求' },
          },
          {
            path: 'vercel',
            elementPath: 'Summary/Vercel',
            meta: { title: 'Vercel' },
          },
          {
            path: 'githubPages',
            elementPath: 'Summary/GithubPages',
            meta: { title: 'Github Pages' },
          },
          {
            path: 'compressImage',
            elementPath: 'Summary/CompressImage',
            meta: { title: 'Compress Image' },
          },
          {
            path: 'forOf',
            elementPath: 'Summary/ForOf',
            meta: { title: 'ForOf' },
          },
          {
            path: 'CSSInJS',
            elementPath: 'Summary/CSSInJS',
            meta: { title: 'CSSInJS' },
          },
          {
            path: 'miniProgramI18n',
            elementPath: 'Summary/MiniProgramI18n',
            meta: { title: 'MiniProgram I18n' },
          },
        ],
        meta: {
          title: '记录&总结',
          icon: <ExceptionOutlined />,
        },
      },
    ],
  },
]

/**
 * 生成预渲染路由格式
 */
const generateRoute = (routes: TRoutes[]): TRoutes[] => {
  return routes.map((item: TRoutes) => {
    if (item.children) {
      const routeItem: TRoutes = {
        path: item.path,
        element: item.element || lazyLoad(item.elementPath!),
        children: generateRoute(item.children),
        meta: item.meta,
      }
      return routeItem
    } else {
      const { inherent, ...rest } = item
      if (inherent) {
        // 是否为默认路由
        return rest
      } else {
        const routeItem = {
          ...item,
          element: item.element || lazyLoad(item.elementPath!),
        }
        return routeItem
      }
    }
  })
}

const routes = generateRoute([...basicRoutes, ...dynamicRoutes])

export { javascriptRoutes, dynamicRoutes, routes }
