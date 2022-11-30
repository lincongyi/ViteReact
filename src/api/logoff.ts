import { request } from '@utils/request'

type Response = {
  code: string
  msg: string
  status: number
  data: Record<string, any>
}

// 退出登录
const logoff = (): Promise<Response> => {
  return request.post('/logoff')
}

export { logoff }
