import { request } from '@utils/request'

type Response = {
  code: string
  msg: string
  status: number
  data: Record<string, any>
}

/**
 * 获取用户列表页面
 */
const getMember = (): Promise<Response> => {
  return request.post('/member')
}

export { getMember }
