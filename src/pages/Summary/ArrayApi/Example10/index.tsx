/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example10 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.some(item => item > 4)

  Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i, this)
      if (result) return true
    }
    return false
  }

  const result2 = arr.mySome(item => item > 5)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生some</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          mySome
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example10
