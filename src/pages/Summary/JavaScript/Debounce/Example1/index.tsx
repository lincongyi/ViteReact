import React, { useState, useRef } from 'react'
import { Row, Col, Space, Button } from 'antd'

const Example1 = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const debounce = (fn: Function, delay = 500) => {
    const timer = useRef<NodeJS.Timeout>()

    return () => {
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        fn()
      }, delay)
    }
  }

  const handleDebounce = debounce(() => setCount2(count2 + 1), 1000)

  return (
    <>
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <Space>
            <Button type='primary' onClick={() => setCount1(count1 + 1)}>
              default button
            </Button>
            {count1}
          </Space>
        </Col>
        <Col span={24}>
          <Space>
            <Button type='primary' onClick={() => handleDebounce()}>
              debounce button
            </Button>
            {count2}
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default Example1
