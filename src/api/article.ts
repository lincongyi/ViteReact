import { request } from '@utils/request'

type Response = {
  code: string
  msg: string
  status: number
  data: Record<string, any>
}

// 获取文章类型
const getArticleType = (): Promise<Response> => {
  return request.post('/article/type')
}

// 获取文章列表
const getArticleList = (): Promise<Response> => {
  return request.post('/article/list')
}

export { getArticleType, getArticleList }
