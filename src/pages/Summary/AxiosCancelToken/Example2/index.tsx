import React from 'react'
import { Alert, Button, Divider } from 'antd'
import { getMember } from '@/api/member'

const Example2 = () => {
  /**
   * 发起请求
   */
  const onRequest = async () => {
    const { data } = await getMember()
    console.log(data)
  }

  return (
    <>
      <Divider orientation='left'>在拦截器上统一封装，防止重复请求</Divider>

      <Alert
        message='浏览器network调成slow 3G，再进行测试'
        type='info'
        showIcon
      />

      <br />

      <Button type='primary' onClick={() => onRequest()}>
        发起请求
      </Button>
    </>
  )
}

export default Example2
