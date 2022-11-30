// 所有模块集中做统一处理
// 同时返回一个useStore方法，通过该方法可访问存储数据
import React from 'react'
import LoginStore from './login.store'
import UserStore from './user.store'

class RootStore {
  loginStore
  userStore
  constructor () {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
