import { Button, Input, Space } from 'antd'
import type { InputRef } from 'antd'
import React, { useReducer, useRef } from 'react'

const Example1 = () => {
  const [count, countDispatch] = useReducer(
    (state: number, action: number) => state + action,
    0
  )

  const ref = useRef<InputRef>(null)
  return (
    <Space>
      useReducer count: {count}
      <br />
      <Input placeholder='useReducer count Input' ref={ref} />
      <Button
        type='primary'
        onClick={() => countDispatch(Number(ref.current?.input?.value))}
      >
        set count
      </Button>
    </Space>
  )
}

export default Example1
