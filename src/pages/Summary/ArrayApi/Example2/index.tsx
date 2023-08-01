/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example2 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.map(item => {
    return item * 2
  })

  Array.prototype.myMap = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this))
    }
    return result
  }

  const result2 = arr.myMap((item: number) => (item *= 4))

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生map</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myMap
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example2
