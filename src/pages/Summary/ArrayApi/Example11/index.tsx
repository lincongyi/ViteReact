/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example11 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.every(item => item > 4)

  Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i, this)
      if (!result) return false
    }
    return true
  }

  const result2 = arr.myEvery(item => item >= 1)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生every</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myEvery
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example11
