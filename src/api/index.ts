import { request } from '@utils/request'
/**
 * 获取热门音乐
 */
const getMusic = (params?:object) => {
  return request.post('/music', params)
}

/**
 * 获取图片列表
 */
const getImages = () => {
  return request.post('/getImages')
}

/**
 * 上传单个图片
 */
const upload = (formData: FormData) => {
  return request.post('/upload', formData)
}

export { getMusic, getImages, upload }
