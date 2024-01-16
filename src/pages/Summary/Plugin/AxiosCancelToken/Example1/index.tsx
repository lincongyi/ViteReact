import React from 'react'
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
