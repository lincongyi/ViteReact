import React, { useContext } from 'react'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { context } from '@/App'
import { lazyLoad } from '@/router'

const Example1 = () => {
  const navigate = useNavigate()

  const { dispatchAuthRoute } = useContext(context)!

  return <Space direction='vertical'>
  <Button type='primary' onClick={() => navigate('/authRoute')}>
    路由跳转
  </Button>
  <Button
    onClick={() =>
      dispatchAuthRoute([
        {
          path: 'authRoute',
          element: lazyLoad('authRoute'),
        },
      ])
    }
  >
    添加路由权限
  </Button>
</Space>
}

export default Example1
