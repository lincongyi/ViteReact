import React, { useContext } from 'react'
import { Button, Space } from 'antd'
import { generateId } from '@utils/index'
import { context } from './Provider'

const ButtonGroup = ({ children }: { children?: JSX.Element }) => {
  const ctx = useContext(context)
  const { dispatchId } = ctx!
  return (
    <>
      <Space>
        <Button
          type='primary'
          onClick={() =>
            dispatchId({
              componentA: `has changed id: ~ ${generateId()}`,
            })
          }
        >
          改变Component A
        </Button>
        <Button
          type='primary'
          onClick={() =>
            dispatchId({
              componentAchild: `has changed id: ~ ${generateId()}`,
            })
          }
        >
          改变Component A child
        </Button>
        <Button
          type='primary'
          onClick={() =>
            dispatchId({
              componentB: `has changed id: ~ ${generateId()}`,
            })
          }
        >
          改变Component B
        </Button>
        {children}
      </Space>
    </>
  )
}

export default ButtonGroup
