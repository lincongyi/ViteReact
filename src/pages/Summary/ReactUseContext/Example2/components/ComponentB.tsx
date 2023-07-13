import React, { useContext } from 'react'
import { Button, Space, Typography } from 'antd'
import { context } from './Provider'
import ButtonGroup from './ButtonGroup'
import { generateId } from '@utils/index'

const { Text } = Typography

const ComponentB = () => {
  const ctx = useContext(context)
  const { id, dispatchId } = ctx!
  return (
    <Space direction='vertical'>
      <>
        Component B id : <Text type='danger'>{id.componentB}</Text>
      </>
      <>
        <ButtonGroup>
          <Button
            type='primary'
            onClick={() =>
              dispatchId({
                componentA: `has changed id: ~ ${generateId()}`,
                componentAchild: `has changed id: ~ ${generateId()}`,
                componentB: `has changed id: ~ ${generateId()}`,
              })
            }
          >
            改变当前所有组件的id
          </Button>
        </ButtonGroup>
      </>
    </Space>
  )
}

export default ComponentB
