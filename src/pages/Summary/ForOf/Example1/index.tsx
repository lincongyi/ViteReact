import { Button, Col, Row, Space } from 'antd'
import React, { useState } from 'react'

const Example1 = () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const objectIterator = function () {
    let index = 0
    const keys = Object.keys(this)
    const length = keys.length
    return {
      next: () => {
        const key = keys[index]
        const value = this[key]
        index++
        return index <= length
          ? { value, done: false }
          : { value: undefined, done: true }
      },
    }
  }
  // const objectIterator = function () {
  //   const keys = Object.keys(this)
  //   let index = 0
  //   return {
  //     next: () => {
  //       const done = index >= keys.length
  //       const value = done ? undefined : this[keys[index]]
  //       index++
  //       return {
  //         done,
  //         value,
  //       }
  //     },
  //   }
  // }

  const [iteratorValues, setIteratorValues] = useState<number[] | undefined>()

  /**
   * 绑定迭代器Function
   */
  const onBind = () => {
    Object.prototype[Symbol.iterator] = objectIterator
    const result: number[] = []
    for (const key of obj) {
      console.log(key)
      result.push(key)
    }
    setIteratorValues(result)
  }

  /**
   * 解绑迭代器Function
   */
  const onUnBind = () => {
    Object.prototype[Symbol.iterator] = () => {}
    try {
      for (const key of obj) {
        console.log(key)
      }
    } catch (error) {
      setIteratorValues(undefined)
      console.log(error)
    }
  }

  return (
    <Row>
      <Col span={12}>
        <Space>
          <Button type='primary' onClick={onBind}>
            绑定迭代器Function
          </Button>
          <Button onClick={onUnBind}>解绑迭代器Function</Button>
        </Space>
      </Col>
      <Col span={24}>
        迭代结果：{iteratorValues ? iteratorValues.join(' - ') : 'Error'}
      </Col>
    </Row>
  )
}

export default Example1
