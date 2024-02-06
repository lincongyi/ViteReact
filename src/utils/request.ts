import axios, { AxiosRequestConfig } from 'axios'
import { getToken } from '@utils/token'
const { VITE_BASE_URL } = import.meta.env

const request = axios.create({
  baseURL: VITE_BASE_URL,
  timeout: 5000,
})

/**
 * 获取请求的key值
 */
const getRequestKey = (config: AxiosRequestConfig) => {
  const { method, url } = config
  return [method, url].join('')
}

const requestMap = new Map()

/**
 * 添加请求标记
 */
const addRequest = (config: AxiosRequestConfig) => {
  const requestKey = getRequestKey(config)
  if (requestMap.has(requestKey)) return

  const CancelToken = axios.CancelToken
  config.cancelToken =
    config.cancelToken ||
    new CancelToken(cancel => {
      requestMap.set(requestKey, cancel)
    })
}

/**
 * 移除请求标记
 */
const removeRequest = (config: AxiosRequestConfig) => {
  const requestKey = getRequestKey(config)
  if (!requestMap.has(requestKey)) return

  const cancel = requestMap.get(requestKey)
  cancel()
  requestMap.delete(requestKey)
}

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) config.headers!.Authorization = token // token持久化存储
    removeRequest(config)
    addRequest(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    removeRequest(response.config)
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  error => {
    removeRequest(error.config)
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { request }
