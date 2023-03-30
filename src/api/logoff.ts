import { request } from '@utils/request'

/**
 * 退出登录
 */
const logoff = (): Promise<TResponse> => {
  return request.post('/logoff')
}

export { logoff }
