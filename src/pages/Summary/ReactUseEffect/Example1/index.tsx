import React from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import { Space, Button } from 'antd'

/**
 * 重新渲染组件
 */
let root: Root
const render = () => {
  const id = document.getElementById('Example1')
  if (!id) return
  root = root || createRoot(id)
  stateIndex = 0 // 重新渲染的时候需要把下标归0，不然stateIndex会一直累计下去
  effectIndex = 0 // 重新渲染的时候需要把下标归0，不然effectIndex会一直累计下去
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
 * 这里利用了闭包【 函数内部有权访问上层函数作用域中的变量，同时变量会缓存在内存当中。 】的特性
 */
const onSet = (index: number) => {
  return (value: any) => {
    if (state[index] === value) return
    state[index] = value
    render()
  }
}

const prevDeps: any[][] = []
let effectIndex = 0

const myUseEffect = (callback: Function, deps?: any[] | undefined) => {
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('callback is not a Function')
  }
  if (deps === undefined) callback()
  else {
    if (!Array.isArray(deps)) {
      throw new Error('deps is not an Array')
    }
    const prevItem = prevDeps[effectIndex]
    const noChang = prevItem
      ? deps.every((item, index) => item === prevItem[index])
      : false
    if (!noChang) {
      callback()
    }
    prevDeps[effectIndex] = deps
    effectIndex++
    // console.log('prevDeps', prevDeps)
    // console.log('deps', deps)
  }
}

const Example1 = () => {
  return (
    <div id='Example1'>
      <Child />
    </div>
  )
}

const Child = () => {
  const [count1, setCount1] = myUseState(10)
  const [count2, setCount2] = myUseState(100)
  myUseEffect(() => {
    console.log('myUseEffect init')
  }, [])
  myUseEffect(() => {
    console.log('myUseEffect count1')
  }, [count1])
  myUseEffect(() => {
    console.log('myUseEffect count2')
  }, [count2])
  return (
    <Space direction='vertical'>
      <Space>
        count1:{count1}
        <Button type='primary' onClick={() => setCount1(count1 + 1)}>
          setCount1
        </Button>
      </Space>
      <Space>
        count2:{count2}
        <Button type='primary' onClick={() => setCount2(count2 + 1)}>
          setCount2
        </Button>
      </Space>
    </Space>
  )
}

export default Example1
