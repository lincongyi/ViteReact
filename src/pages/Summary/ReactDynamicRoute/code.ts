export const codeString1 = `declare type TRoutes = {
  path: string
  element?: JSX.Element
  children?: TRoutes[]
}`

export const codeString2 = `const routes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <NotFound />,
  },
  {
    path: 'notFound',
    element: <NotFound />,
  },
  ......
]`

export const codeString3 = `import React, { useReducer } from 'react'
import 'reset-css'
import './App.scss'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './router'

export const context = React.createContext<
  | {
      dispatchAuthRoute: React.Dispatch<TRoutes[]>
    }
  | undefined
>(undefined)

const App = () => {
  const [authRoute, dispatchAuthRoute] = useReducer(
    (state: TRoutes[], action: TRoutes[]) => [...state, ...action],
    routes
  )

  const GetRoutes = () => useRoutes(authRoute)

  return (
    // 动态路由配置
    <context.Provider value={{ dispatchAuthRoute }}>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </context.Provider>
  )
}

export default App
`

export const codeString4 = `import React, { useContext } from 'react'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { context } from '@/App'
import { lazyLoad } from '@/router'

const Example1 = () => {
  const navigate = useNavigate()

  const { dispatchAuthRoute } = useContext(context)!

  return <Space direction='vertical'>
  <Button type='primary' onClick={() => navigate('/authRoute')}>
    路由跳转
  </Button>
  <Button
    onClick={() =>
      dispatchAuthRoute([
        {
          path: 'authRoute',
          element: lazyLoad('authRoute'),
        },
      ])
    }
  >
    添加路由权限
  </Button>
</Space>
}

export default Example1
`
