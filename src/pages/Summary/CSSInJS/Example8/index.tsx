import React from 'react'
import styled from '@emotion/styled'
import { Space } from 'antd'

const Child = styled.div`
  padding: 20px;
  background-color: #f6ffa4;
`

const Parent1 = styled.div`
  ${Child} {
    background-color: #31aa75;
  }
`

const Parent2 = styled.div({
  [Child]: {
    backgroundColor: '#53c7f0',
  },
})

const Example8 = () => {
  return (
    <Space>
      <Child>Child</Child>
      <Parent1>
        <Child>Parent1 Child</Child>
      </Parent1>
      <Parent2>
        <Child>Parent2 Child</Child>
      </Parent2>
    </Space>
  )
}

export default Example8
