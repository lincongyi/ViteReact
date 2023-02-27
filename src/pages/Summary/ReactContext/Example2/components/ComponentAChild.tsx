import React, { useContext } from 'react'
import { Space, Typography } from 'antd'
import { context } from './Provider'
import ButtonGroup from './ButtonGroup'

const { Text } = Typography

const ComponentAChild = () => {
  const ctx = useContext(context)
  const { id } = ctx!
  return (
    <Space direction='vertical'>
      <>
        Component A child id : <Text type='danger'>{id.componentAchild}</Text>
      </>
      <>
        <ButtonGroup />
      </>
    </Space>
  )
}

export default ComponentAChild
