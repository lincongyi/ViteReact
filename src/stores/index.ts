// 所有模块集中做统一处理
// 同时返回一个useStore方法，通过该方法可访问存储数据
import React from 'react'
import LoginStore from './login.store'

class RootStore {
  loginStore
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
