/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example1 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1: number[] = []

  arr.forEach(item => {
    result1.push((item *= 2))
  })

  Array.prototype.myForEach = function (callback: Function) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }

  const result2: number[] = []

  arr.myForEach((item: number) => {
    result2.push((item *= 3))
  })

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>
          原生forEach
        </Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myForEach
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example1
