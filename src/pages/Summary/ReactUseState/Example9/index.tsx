import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import { Button, Space } from 'antd'

/**
 * 重新渲染组件
 */
let root: Root
const render = () => {
  const id = document.getElementById('Example9')
  if (!id) return
  root = root || createRoot(id)
  stateIndex = 0 // 重新渲染的时候需要把下表归0，不然stateIndex会一直累计下去
  root.render(<Child />)
}

const state: any[] = [] // 存储state
const setState: any[] = [] // 更新state的函数
let stateIndex = 0 // 下标用于记录状态值的对应关系
/**
 * 重写useState方法
 */
const myUseState = (initial: any) => {
  state[stateIndex] = state[stateIndex] || initial
  setState[stateIndex] = setState[stateIndex] || onSet(stateIndex)

  const index = stateIndex++
  return [state[index], setState[index]]
}

/**
 * 更新值的函数。采用闭包的方式，把各自状态值的下标（stateIndex）都保存起来。
 */
const onSet = (index: number) => {
  return (value: any) => {
    console.log('index', index)
    if (state[index] === value) return
    state[index] = value
    render()
  }
}

const Child = () => {
  console.log('Child component render')
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

const Example9 = () => {
  return (
    <div id='Example9'>
      <Child />
    </div>
  )
}

export default Example9
