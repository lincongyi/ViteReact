/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example3 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.filter(item => {
    return item % 2 === 0
  })

  Array.prototype.myFilter = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
      const isAllowed = Boolean(callback(this[i], i, this))
      isAllowed && result.push(this[i])
    }
    return result
  }

  const result2 = arr.myFilter((item: number) => item % 2 !== 0)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生filter</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myFilter
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example3
