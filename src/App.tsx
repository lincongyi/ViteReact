import React from 'react'
import 'reset-css'
import './App.scss'
import 'antd/dist/antd.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from '@components/auth'
import Login from '@pages/Login'
import Layout from '@pages/Layout'
import Configuration from '@pages/Configuration'

function App () {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和路由对应的关系 */}
          <Route
            path="/"
            element={
              <Auth>
                <Layout></Layout>
              </Auth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/configuration" element={<Configuration />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
