export const codeString1 = `import React from 'react'
import axios from 'axios'
import { Button, Divider, Space } from 'antd'

const Example1 = () => {
  const CancelToken = axios.CancelToken
  let cancel: Function // 终止请求回调函数

  /**
   * 发起请求
   */
  const onRequest = () => {
    axios.post(
      'http://127.0.0.1:3000/article/type',
      {},
      {
        cancelToken: new CancelToken(c => {
          cancel = c
        }),
      }
    )
  }

  /**
   * 终止请求
   */
  const onCancelRequest = () => {
    cancel && cancel()
  }

  return (
    <>
      <Divider orientation='left'>针对单个请求，进行处理</Divider>

      <Space>
        <Button type='primary' onClick={() => onRequest()}>
          发起请求
        </Button>
        <Button onClick={() => onCancelRequest()}>终止请求</Button>
      </Space>
    </>
  )
}

export default Example1
`

export const codeString2 = `/**
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
)`
