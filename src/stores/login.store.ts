// 登录模块
import { makeAutoObservable } from 'mobx'

class LoginStore {
  constructor () {
    makeAutoObservable(this)
  }

  token = ''
  getToken = () => {
    return this.token
  }

  setToken = (token: string) => {
    this.token = token
    return this.token
  }
}

export default LoginStore
