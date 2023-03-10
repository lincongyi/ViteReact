import { request } from '@utils/request'

// 获取文章类型
const getArticleType = (): Promise<TResponse> => {
  return request.post('/article/type')
}

// 获取文章列表
const getArticleList = (): Promise<TResponse> => {
  return request.post('/article/list')
}

export { getArticleType, getArticleList }
