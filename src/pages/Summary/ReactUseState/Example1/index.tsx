import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import { Button, Space } from 'antd'

/**
 * 重新渲染组件
 */
let root: Root
const render = () => {
  const id = document.getElementById('Example1')
  if (!id) return
  root = root || createRoot(id)
  root.render(<Child />)
}

const myUseState = (initial: any) => {
  let state = initial
  const setState = (newValue: any) => {
    state = newValue
    render()
  }
  return [state, setState]
}

const Child = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = myUseState(100)

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
    </Space>
  )
}

const Example1 = () => {
  return (
    <div id='Example1'>
      <Child />
    </div>
  )
}

export default Example1
