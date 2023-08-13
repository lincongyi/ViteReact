import React, { useReducer, useState } from 'react'
import { Button, Space } from 'antd'

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      if (state > 0) return state - 1
      else return state
    case 'reset':
      return 0
    default:
      return state
  }
}

const myUseReducer = (callback: Function, initialValue: any) => {
  const [state, setState] = useState(initialValue)
  const dispatch = (action: { type: string }) => {
    const result = callback(state, action)
    setState(result)
  }
  return [state, dispatch]
}

const Example5 = () => {
  const [count, countDispatch] = useReducer(reducer, 0)

  const [myCount, myCountDispatch] = myUseReducer(reducer, 0)

  return (
    <Space direction='vertical'>
      <Space>
        default useReducer count: {count}
        <Button onClick={() => countDispatch({ type: 'increment' })}>
          count++
        </Button>
        <Button onClick={() => countDispatch({ type: 'decrement' })}>
          count--
        </Button>
        <Button onClick={() => countDispatch({ type: 'reset' })}>
          count reset
        </Button>
      </Space>
      <Space>
        myUseReducer count: {myCount}
        <Button
          type='primary'
          onClick={() => myCountDispatch({ type: 'increment' })}
        >
          count++
        </Button>
        <Button
          type='primary'
          onClick={() => myCountDispatch({ type: 'decrement' })}
        >
          count--
        </Button>
        <Button
          type='primary'
          onClick={() => myCountDispatch({ type: 'reset' })}
        >
          count reset
        </Button>
      </Space>
    </Space>
  )
}

export default Example5
