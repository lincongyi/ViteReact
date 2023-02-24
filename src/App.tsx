import React from 'react'
import 'reset-css'
import './App.scss'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './router'

const App = () => {
  const GetRoutes = () => useRoutes(routes)

  return (
    // 路由配置
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  )
}

export default App
