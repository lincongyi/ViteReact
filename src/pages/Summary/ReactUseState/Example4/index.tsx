import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import { Button, Space } from 'antd'

/**
 * 重新渲染组件
 */
let root: Root
const render = () => {
  const id = document.getElementById('Example4')
  if (!id) return
  root = root || createRoot(id)
  root.render(<Child />)
}

const state: any[] = [] // 存储state
let stateIndex = 0 // 下标用于记录状态值的对应关系

const myUseState = (initial: any) => {
  state[stateIndex] = state[stateIndex] || initial
  const setState = (newValue: any) => {
    state[stateIndex] = newValue
    render()
  }
  stateIndex++
  return [state[stateIndex - 1], setState]
}

const Child = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = myUseState(100)
  const [count3, setCount3] = myUseState('count3')

  return (
    <Space direction='vertical'>
      <Space>
        count1:{count1}
        <Button type='primary' onClick={() => setCount1(count1 + 1)}>
          默认useState setCount
        </Button>
      </Space>
      <Space>
        count2:{count2}
        <Button type='primary' onClick={() => setCount2(count2 + 1)}>
          myUseState setCount
        </Button>
      </Space>
      <Space>
        count3:{count3}
        <Button type='primary' onClick={() => setCount3('update count3')}>
          myUseState setCount
        </Button>
      </Space>
    </Space>
  )
}

const Example4 = () => {
  return (
    <div id='Example4'>
      <Child />
    </div>
  )
}

export default Example4
