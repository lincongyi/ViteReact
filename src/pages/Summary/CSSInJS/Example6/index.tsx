import React from 'react'
import styled from '@emotion/styled'
import { Space } from 'antd'

const StyledDiv1 = styled.div`
  background-color: ${(props: { bgColor?: string }) =>
    props.bgColor || '#8fc9ae'};
  padding: 20px;
`

const StyledDiv2 = styled.div(({ color }) => ({
  backgroundColor: '#385b66',
  color: color || '#fff',
  padding: 20,
}))

const Example6 = () => {
  return (
    <Space direction='vertical'>
      <Space>
        <StyledDiv1>StyledDiv1</StyledDiv1>
        <StyledDiv1 bgColor='#f6eb9a'>StyledDiv1</StyledDiv1>
      </Space>
      <Space>
        <StyledDiv2>StyledDiv2</StyledDiv2>
        <StyledDiv2 color='#a61f69'>StyledDiv2</StyledDiv2>
      </Space>
    </Space>
  )
}

export default Example6
