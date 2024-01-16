/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example5 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = [...arr].fill(0)

  Array.prototype.myFill = function (value: any, start?: number, end?: number) {
    start = start || 0
    end = end || this.length
    for (let i = start; i < end; i++) {
      this[i] = value
    }
    return this
  }

  const result2 = [...arr].myFill(100)
  const result3 = [...arr].myFill(100, 1, 3)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生fill</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myFill
        </Button>
        <Button type='primary' onClick={() => setState(result3.toString())}>
          myFill(带索引)
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example5
