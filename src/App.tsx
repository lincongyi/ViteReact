import React from 'react'
import 'reset-css'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from '@components/auth'
import Configuration from '@pages/Configuration'
import Playground from '@pages/Playground'
import Login from '@pages/Login'
import Layout from '@pages/Layout'
import Home from '@pages/Home'
import Member from '@pages/Member'
import ArticleType from '@pages/ArticleType'
import Article from '@pages/Article'
import Publish from '@pages/Publish'
import Summary from '@pages/Summary'
import ReactMemo from '@pages/Summary/ReactMemo'
import ReactReducer from '@pages/Summary/ReactReducer'

const App = () => {
  return (
    // 路由配置
    <BrowserRouter>
      <Routes>
        {/* 创建路由path和路由对应的关系 */}
        <Route
          path='/'
          element={
            <Auth>
              <Layout></Layout>
            </Auth>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path='member' element={<Member />}></Route>
          <Route path='articleType' element={<ArticleType />}></Route>
          <Route path='article' element={<Article />}></Route>
          <Route path='publish' element={<Publish />}></Route>
          <Route path='summary' element={<Summary />}>
            <Route index element={<ReactMemo />}></Route>
            <Route path='/summary/reactMemo' element={<ReactMemo />}></Route>
            <Route
              path='/summary/reactReducer'
              element={<ReactReducer />}
            ></Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/configuration' element={<Configuration />}></Route>
        <Route path='/playground' element={<Playground />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
