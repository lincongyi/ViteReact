import React from 'react'
import { List, Typography, Card } from 'antd'
import './index.scss'

const { Title, Text } = Typography

const Configuration = () => {
  const techniqueList = [
    '脚手架：Vite',
    'react hook',
    '状态管理：mobx',
    'UI组件库：antd v4',
    'ajax请求库：axios',
    '路由管理：react-router-dom',
    'css预编译：scss',
    'typescript',
  ]
  const fileList = [
    { file: '/api', description: '接口文件' },
    { file: '/assets', description: '项目资源文件' },
    { file: '/components', description: '通用组件' },
    { file: '/pages', description: '项目页面' },
    { file: '/store', description: 'mobx状态管理' },
    { file: '/utils', description: '工具函数' },
    { file: 'App.tsx', description: '根组件' },
    { file: 'App.scss', description: '全局样式' },
    { file: 'main.tsx', description: '项目入口' },
  ]
  return (
    <>
      <Title level={2}>项目所用技术：</Title>
      <List
        bordered
        dataSource={techniqueList}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Title level={2}>项目搭建流程：</Title>
      <Card title="1.Vite创建项目">
        <p>
          <Text code>npm create vite@latest</Text>
        </p>
        <p>根据配置选择项目所需的库</p>
      </Card>
      <Card title="2.调整项目目录">
        <div>
          <Text strong>/src</Text>
        </div>
        {fileList.map((item, index) => (
          <div className="project-file-item" key={index}>
            <Text strong>{item.file}</Text>
            <Text mark>{item.description}</Text>
          </div>
        ))}
      </Card>
      <Card title="3.配置sass">
        <p>
          <Text code>npm i sass -D</Text>
        </p>
        <p>React 中内置了处理 SASS 的配置，安装sass后可直接使用</p>
      </Card>
      <Card title="4.安装ant Design组件库">
        <p>
          （1）<Text code>npm i antd</Text>
        </p>
        <p>
          （2）<Text>在App.tsx中导入基础样式文件</Text>
          <Text code>import &apos;antd/dist/antd.css&apos;</Text>
        </p>
      </Card>
      <Card title="5.配置项目文件夹目录别名">
        <p>
          （1）<Text>在vite.config.ts中配置alias属性</Text>
          <Text code>
            resolve: {'\u007b'}
            alias: {'\u007b'}
            &quot;@&quot;: path.resolve(__dirname, &quot;./src&quot;),
            &quot;@images&quot;: path.resolve(__dirname,
            &quot;./src/assets/images&quot;), ......
            {'\u007d'},{'\u007d'}
          </Text>
        </p>
        <p>
          （2）<Text>在tsconfig.json中配置compilerOptions.paths属性</Text>
          <Text code>
            &quot;paths&quot;: {'\u007b'}
            &quot;@images/*&quot;:[&quot;./src/assets/images/*&quot;],......
            {'\u007d'}
          </Text>
        </p>
      </Card>
      <Card title="6.安装react-router">
        <p>
          <Text code>npm i react-router-dom@6 -S</Text>
        </p>
      </Card>
      <Card title="7.安装axios">
        <p>
          <Text code>npm i axios</Text>
        </p>
        <p>/utils/request.js文件封装axios请求拦截、相应</p>
      </Card>
      <Card title="8.安装mobx">
        <p>
          <Text code>npm i mobx mobx-react-lite</Text>
        </p>
        <p>/stores/index.js文件负责汇总所有存储模块</p>
      </Card>
      <Card title="9.配置host">
        <p>
          vite.config.ts文件里添加
          <Text code>
            server: {'\u007b'}host: &quot;0.0.0.0&quot;{'\u007d'}
          </Text>
        </p>
      </Card>
      <Card title="10.配置eslint">
        <p>
          <Text code>npx eslint --init</Text>
        </p>
        <p>根据引导流程选择eslint的配置</p>
      </Card>
    </>
  )
}

export default Configuration
