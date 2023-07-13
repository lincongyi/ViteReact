import React, { useContext } from 'react'
import { Space, Typography } from 'antd'
import { context } from './Provider'
import ComponentAChild from './ComponentAChild'
import ButtonGroup from './ButtonGroup'

const { Text } = Typography

const ComponentA = () => {
  const ctx = useContext(context)
  const { id } = ctx!
  return (
    <Space direction='vertical'>
      <>
        Component A id : <Text type='danger'>{id.componentA}</Text>
      </>
      <>
        <ButtonGroup />
      </>
      <>
        <ComponentAChild />
      </>
    </Space>
  )
}

export default ComponentA
