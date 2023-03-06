import React from 'react'
import { Button, Col, Input, Row, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStoreHooks } from '@stores/index.hooks'

const Example2 = () => {
  const { countStoreHooks } = useStoreHooks()

  return (
    <>
      <Row gutter={8}>
        <Col span={6}>
          <Input placeholder='Basic usage' value={countStoreHooks.count} />
        </Col>
        <Col span={18}>
          <Space>
            <Button onClick={() => countStoreHooks.increment()}>+</Button>
            <Button type='dashed' onClick={() => countStoreHooks.decrement()}>
              -
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStoreHooks.getDoubleCount())}
            >
              double
            </Button>
            <Button
              type='dashed'
              onClick={() => console.log(countStoreHooks.getTrebleCount)}
            >
              trible
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default observer(Example2)
