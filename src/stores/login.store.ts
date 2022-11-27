// 登录模块
import { makeAutoObservable } from 'mobx'

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  setToken = (token: string) => {
    this.token = token
    return token
  }
}

export default LoginStore
