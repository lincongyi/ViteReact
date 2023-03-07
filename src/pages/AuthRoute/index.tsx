import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const AuthRoute = () => {
  const navigate = useNavigate()

  return (
    <>
      权限路由
      <Button type='primary' onClick={() => navigate(-1)}>
        Back
      </Button>
    </>
  )
}

export default AuthRoute
