import { useState } from 'react'
import 'reset-css'
import './App.scss'
import 'antd/dist/antd.css'
import 'normalize.css/normalize.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@pages/Login'
import Layout from '@pages/Layout'
import Configuration from '@pages/Configuration'

function App() {
  const [count, setCount] = useState(0)

  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和路由对应的关系 */}
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/configuration" element={<Configuration />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
