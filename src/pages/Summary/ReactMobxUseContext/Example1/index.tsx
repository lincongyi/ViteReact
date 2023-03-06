import React from 'react'
import { Button, Col, Input, Row, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '@stores/index'

const Example1 = () => {
  const { countStore } = useStore()

  return (
    <>
      <Row gutter={8}>
        <Col span={6}>
          <Input placeholder='Basic usage' value={countStore.count} />
        </Col>
        <Col span={18}>
          <Space>
            <Button onClick={() => countStore.increment()}>+</Button>
            <Button type='dashed' onClick={() => countStore.decrement()}>
              -
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStore.getDoubleCount())}
            >
              double
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStore.getTrebleCount.get())}
            >
              trible
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default observer(Example1)
