import { request } from '@utils/request'

const getMusic = (params?:object) => {
  return request.post('/music', params)
}

const upload = (params:object) => {
  return request.post('/upload', params)
}

export { getMusic, upload }
