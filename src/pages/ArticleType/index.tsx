import React, { useState } from 'react'
import './index.scss'
import { Button, Col, Divider, Row, Space } from 'antd'

const ChildCommon = ({ count }: { count: number }) => {
  console.log('ChildCommon component render')
  return (
    <>
      <p>child component</p>
      <p>parent prop count: {count}</p>
      <Divider />
    </>
  )
}

const ChildMemo = ({
  count,
  id,
  info,
  onPureEvent,
}: {
  count: number
  id: number
  info: object
  onPureEvent?: Function
}) => {
  console.log('ChildMemo component render')
  return (
    <>
      <p>child memo</p>
      <p>parent prop count: {count}</p>
      <Button type='primary' onClick={() => onPureEvent && onPureEvent()}>
        trigger memo component event
      </Button>
      <Divider />
    </>
  )
}

const PureComponent = React.memo(ChildMemo, (prev, next) => {
  const { onPureEvent: prevEvent, ...prevRest } = prev
  const { onPureEvent: nextEvent, ...nextRest } = next
  return JSON.stringify(prevRest) === JSON.stringify(nextRest)
})

const ArticleType = () => {
  console.log('parent component render')
  const [status, setStatus] = useState(0)
  const [commonCount, setCommonCount] = useState(0)
  const [memoCount, setMemoCount] = useState(0)
  const [id] = useState(100)
  const [info] = useState({
    createDate: '2023-02-10',
    isPure: true,
  })

  const onPlus = () => {
    setStatus(status + 1)
  }
  return (
    <>
      <Row>
        <Col span={24}>ArticleType {status}</Col>
        <Divider />
        <Col span={24}>
          <ChildCommon count={commonCount} />
        </Col>
        <Col span={24}>
          <PureComponent
            count={memoCount}
            id={id}
            info={info}
            onPureEvent={() => console.log('event change')}
          />
        </Col>
        <Col>
          <Space>
            <Button type='primary' onClick={() => onPlus()}>
              status + 1
            </Button>
            <Button
              type='primary'
              onClick={() => setCommonCount(commonCount + 1)}
            >
              commonCount plus
            </Button>
            <Button type='primary' onClick={() => setMemoCount(memoCount + 1)}>
              memoCount plus
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default ArticleType
