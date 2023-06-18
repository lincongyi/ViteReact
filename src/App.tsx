import React, { useReducer } from 'react'
import 'reset-css'
import './App.scss'
import { HashRouter, useRoutes } from 'react-router-dom'
import { routes } from './router'
import { context } from './context'

const App = () => {
  const [currentRoute, dispatchRoute] = useReducer(
    (state: TRoutes[], action: TRoutes[]) => {
      const target: TRoutes[] = []
      action.forEach(item => {
        const result = state.some(__item => item.path === __item.path)
        if (!result) target.push(item)
      })
      return [...state, ...target]
    },
    routes
  )

  const GetRoutes = () => useRoutes(currentRoute)

  return (
    // 动态路由配置
    <context.Provider value={{ currentRoute, dispatchRoute }}>
      <HashRouter>
        <GetRoutes />
      </HashRouter>
    </context.Provider>
  )
}

export default App
