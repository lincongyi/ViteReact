// 登录模块
import {makeAutoObservable} from 'mobx'

class LoginStore{
  token = ''
  constructor(){
    makeAutoObservable(this)
  }
  // setToken = 
}