/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example7 = () => {
  const arr = [1, 2, 3, 4, 5]

  const result1 = arr.join('-')

  Array.prototype.myJoin = function (separator: string) {
    let result = ''
    for (let i = 0; i < this.length; i++) {
      result += `${this[i]}${i !== this.length - 1 ? separator : ''}`
    }
    return result
  }

  const result2 = arr.myJoin('&')

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setState(result1.toString())}>原生join</Button>
        <Button type='primary' onClick={() => setState(result2.toString())}>
          myJoin
        </Button>
      </Space>
      {`默认arr : ${arr.toString()}`}
      {state}
    </Space>
  )
}

export default Example7
