import React, { useReducer } from 'react'
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
