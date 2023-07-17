import React from 'react'
import styled from '@emotion/styled'
import { Space } from 'antd'

const StyledButton1 = styled.button`
  color: #fff;
  background-color: #3a7ca5;
  padding: 20px;
`

const StyledButton2 = styled.button({
  color: '#fff',
  backgroundColor: '#F7A072',
  padding: 20,
})

const Example5 = () => {
  return (
    <Space>
      <StyledButton1>StyledButton1</StyledButton1>
      <StyledButton2>StyledButton2</StyledButton2>
    </Space>
  )
}

export default Example5
