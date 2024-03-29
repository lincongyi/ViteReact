export const codeString1 = `name: Build and Deploy
on: # 监听 main 分支上的 push 事件
  push:
    branches:
      - dev
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # 构建环境使用 ubuntu
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1  
        with:
          persist-credentials: false

      - name: Install and Build # 下载依赖 打包项目
        run: |
          npm install
          npm run build

      - name: Deploy # 将打包内容发布到 github page
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:  # 自定义环境变量
          BRANCH: main # 这个是存放打包后文件的分支
          FOLDER: dist # 默认react项目打包输出目录是dist
          REPOSITORY_NAME: lincongyi/lincongyi.github.io # github page 仓库
          TARGET_FOLDER: / # 打包的文件将放到静态服务器 / 目录下
`
