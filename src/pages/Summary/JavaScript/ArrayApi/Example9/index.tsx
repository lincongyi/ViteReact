/* eslint-disable no-extend-native */
import React, { useState } from 'react'
import { Space, Button } from 'antd'

const Example9 = () => {
  type TItem = { name: string; age: number }

  const arr: TItem[] = [
    { name: 'Zoe', age: 18 },
    { name: 'Roy', age: 19 },
    { name: 'Ben', age: 20 },
    { name: 'Ali', age: 21 },
  ]

  const result1 = arr.findIndex(item => item.age === 18)

  Array.prototype.myFindIndex = function <T> (
    callback: (element: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): number {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) return i
    }
    return -1
  }

  const result2 = arr.myFindIndex((item: TItem) => item.age === 20)

  const [state, setState] = useState<number | string>()

  return (
    <Space direction='vertical'>
      <Space>
        <Button
          onClick={() => setState(result1 !== -1 ? result1 : 'not found')}
        >
          原生findIndex
        </Button>
        <Button
          type='primary'
          onClick={() => setState(result2 !== -1 ? result2 : 'not found')}
        >
          myFindIndex
        </Button>
      </Space>
      {`默认arr : ${JSON.stringify(arr, null, 2)}`}
      {state}
    </Space>
  )
}

export default Example9
