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
  stateIndex = 0 // 重新渲染的时候需要把下标归0，不然每次调用myUseState，stateIndex会一直累计下去
  effectIndex = 0 // 重新渲染的时候需要把下标归0，不然每次调用myUseEffect，effectIndex会一直累计下去
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

// 缓存依赖项deps，prevDeps是个二维数组，这是由于deps也是一个数组，避免多次调用useEffect后，deps赋值给prevDeps会导致相互覆盖。
const prevDeps: any[][] = []
let effectIndex = 0 // 下标用于记录useEffect每次执行后，在的prevDeps中的位置

/**
 * @param {Function} callback 回调函数
 * @param {any[] | undefined} deps 依赖项
 */
const myUseEffect = (callback: Function, deps?: any[] | undefined) => {
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('callback is not a Function')
  }
  // 如果不存在依赖项，那么直接执行callback。相当于componentDidUpdate
  if (deps === undefined) {
    callback()
  } else {
    if (!Array.isArray(deps)) {
      throw new Error('deps is not an Array')
    }
    const prevItem = prevDeps[effectIndex] // 先获取prevDeps[effectIndex]，看是否存在。如果不存在执行prevItem[index]会报错
    const noChang = prevItem
      ? deps.every((item, index) => item === prevItem[index])
      : false
    if (!noChang) {
      // 判断依赖项是否有发生变化，如果有就执行回调
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
