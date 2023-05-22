import React, { useReducer } from 'react'
import 'reset-css'
import './App.scss'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './router'
import { context } from './context'

const App = () => {
  const [currentRoute, dispatchRoute] = useReducer(
    (state: TRoutes[], action: TRoutes[]) => [...state, ...action],
    routes
  )

  const GetRoutes = () => useRoutes(currentRoute)

  return (
    // 动态路由配置
    <context.Provider value={{ currentRoute, dispatchRoute }}>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </context.Provider>
  )
}

export default App
