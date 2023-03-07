import { Button, Result, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Space>
          <Button type='primary' onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type='primary'>Back Home</Button>
        </Space>
      }
    />
  )
}

export default NotFound
