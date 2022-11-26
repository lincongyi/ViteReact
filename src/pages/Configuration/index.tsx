import { List, Typography, Card } from "antd";
import "./index.scss";

const { Title, Text } = Typography;

const Configuration = () => {
  const techniqueList = [
    "脚手架：Vite",
    "react hook",
    "状态管理：mobx",
    "UI组件库：antd v4",
    "ajax请求库：axios",
    "路由管理：react-router-dom",
    "css预编译：scss",
    "typescript",
  ];
  const fileList = [
    { file: "/assets", description: "项目资源文件" },
    { file: "/components", description: "通用组件" },
    { file: "/pages", description: "项目页面" },
    { file: "/store", description: "mobx状态管理" },
    { file: "/utils", description: "工具函数" },
    { file: "App.tsx", description: "根组件" },
    { file: "App.scss", description: "全局样式" },
    { file: "main.tsx", description: "项目入口" },
  ];
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
        {fileList.map((item) => (
          <div className="project-file-item">
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
          <Text code>import 'antd/dist/antd.css';</Text>
        </p>
      </Card>
      <Card title="5.配置项目文件夹目录别名">
        <p>
          （1）<Text>在vite.config.ts中配置alias属性</Text>
          <Text code>
            resolve: {"\u007b"}
            alias: {"\u007b"}
            "@": path.resolve(__dirname, "./src"), "@images":
            path.resolve(__dirname, "./src/assets/images"), ......
            {"\u007d"},{"\u007d"}
          </Text>
          （2）<Text>在tsconfig.json中配置compilerOptions.paths属性</Text>
          <Text code>
            "paths": {"\u007b"}
            "@images/*":["./src/assets/images/*"],......
            {"\u007d"}
          </Text>
        </p>
      </Card>
    </>
  );
};

export default Configuration;
