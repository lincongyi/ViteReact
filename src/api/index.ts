import { request } from '@utils/request'

const getMusic = (params:object) => {
  return request.post('/getMusic', params)
}

export { getMusic }
