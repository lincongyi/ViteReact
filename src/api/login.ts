import { request } from '@utils/request'

// 登录
const login = (data: Record<string, any>): Promise<TResponse> => {
  return request.post('/login', data)
}

// 获取用户信息
const getUerProfile = (): Promise<TResponse> => {
  return request.post('/profile')
}

export { login, getUerProfile }
