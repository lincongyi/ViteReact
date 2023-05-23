import React, { useContext } from 'react'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { context } from '@/context'
import { lazyLoad } from '@/utils'

const Example1 = () => {
  const navigate = useNavigate()

  const { dispatchRoute } = useContext(context)!

  return (
    <Space direction='vertical'>
      <Button type='primary' onClick={() => navigate('/authRoute')}>
        路由跳转
      </Button>
      <Button
        onClick={() =>
          dispatchRoute([
            {
              path: 'authRoute',
              element: lazyLoad('AuthRoute'),
            },
          ])
        }
      >
        添加路由权限
      </Button>
    </Space>
  )
}

export default Example1
