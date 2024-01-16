/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example8 = () => {
  type TItem = { name: string; age: number }

  const arr: TItem[] = [
    { name: 'Zoe', age: 18 },
    { name: 'Roy', age: 19 },
    { name: 'Ben', age: 20 },
    { name: 'Ali', age: 21 },
  ]

  const result1 = arr.find(item => item.age === 19)

  Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) return this[i]
    }
    return undefined
  }

  const result2 = arr.myFind((item: TItem) => item.age === 18)
  const result3 = arr.myFind((item: TItem) => item.age === 28)

  const [state, setState] = useState<string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button
          onClick={() =>
            setState(result1 ? JSON.stringify(result1, null, 2) : 'not found')
          }
        >
          原生find
        </Button>
        <Button
          type='primary'
          onClick={() =>
            setState(result2 ? JSON.stringify(result2, null, 2) : 'not found')
          }
        >
          myFind
        </Button>
        <Button
          type='primary'
          onClick={() =>
            setState(result3 ? JSON.stringify(result3, null, 2) : 'not found')
          }
        >
          myFind
        </Button>
      </Space>
      {`默认arr : ${JSON.stringify(arr, null, 2)}`}
      {state}
    </Space>
  )
}

export default Example8
