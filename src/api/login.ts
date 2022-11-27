import { request } from "@utils/request"

type Response = {
  code: string
  msg: string
  status: number
  data: Record<string, any>
}

// 登录
const login = (data: Record<string, any>): Promise<Response> => {
  return request.post("/login", data)
}

export { login }
