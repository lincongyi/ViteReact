/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example6 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.includes(3)

  Array.prototype.myIncludes = function (
    searchElement: any,
    fromIndex: number
  ) {
    fromIndex = fromIndex || 0
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) return true
    }
    return false
  }

  const result2 = arr.myIncludes(2)
  const result3 = arr.myIncludes(1, 3)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>
          原生includes
        </Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myIncludes
        </Button>
        <Button type='primary' onClick={() => setState(result3.toString())}>
          myIncludes(带索引)
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example6
