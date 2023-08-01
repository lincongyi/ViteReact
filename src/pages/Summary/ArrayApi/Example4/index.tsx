/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example4 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.reduce((prev, next) => {
    return prev + next
  })

  Array.prototype.myReduce = function (callback, initValue) {
    let prev = initValue || this[0]
    const start = initValue ? 0 : 1
    for (let i = start; i < this.length; i++) {
      prev = callback(prev, this[i], i, this)
    }
    return prev
  }

  const result2 = arr.myReduce((prev, next) => prev + next)
  const result3 = arr.myReduce((prev, next) => prev + next, 100)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生reduce</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myReduce
        </Button>
        <Button type='primary' onClick={() => setState(result3.toString())}>
          myReduce(默认值：100)
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example4
