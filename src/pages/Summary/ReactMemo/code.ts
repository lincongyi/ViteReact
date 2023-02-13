export const codeString1 = `const ChildCommon = ({ count }: { count: number }) => {
  console.log('ChildCommon component render')
  return (
    <>
      <p>child component</p>
      <p>parent prop count: {count}</p>
      <Divider />
    </>
  )
}`

export const codeString2 = `const ChildMemo = ({ count }: { count: number }) => {
  console.log('ChildMemo component render')
  return (
    <>
      <p>child memo component</p>
      <p>parent prop count: {count}</p>
      <Divider />
    </>
  )
}

const PureComponent = React.memo(ChildMemo)`

export const codeString3 = `const Parent = () => {
  console.log('parent component render')
  const [status, setStatus] = useState(0)
  const [commonCount, setCommonCount] = useState(0)
  const [memoCount, setMemoCount] = useState(0)

  const onPlus = () => {
    setStatus(status + 1)
  }
  return (
    <>
      <Row>
        <Col span={24}>parent component status: {status}</Col>
        <Divider />
        <Col span={24}>
          <ChildCommon count={commonCount} />
        </Col>
        <Col span={24}>
          <PureComponent count={memoCount} />
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

export default Parent`

export const codeString4 = `const ChildMemo = ({
  count,
  id,
  info,
  onPureEvent,
}: {
  count: number
  id: number
  info: { createDate: Date }
  onPureEvent?: Function
}) => {
  console.log('ChildMemo component render')
  return (
    <>
      <p>
        child memo component id: {id} , info: {info.createDate.getTime()}
      </p>
      <p>parent prop count: {count}</p>
      <Button type='primary' onClick={() => onPureEvent && onPureEvent()}>
        trigger memo component event
      </Button>
      <Divider />
    </>
  )
}

const PureComponent = React.memo(ChildMemo)`

export const codeString5 = `const Parent = () => {
  console.log('parent component render')
  const [status, setStatus] = useState(0)
  const [commonCount, setCommonCount] = useState(0)
  const [memoCount, setMemoCount] = useState(0)
  const [id] = useState(100)
  const [info] = useState({
    createDate: new Date(),
  })

  const onPlus = () => {
    setStatus(status + 1)
  }
  return (
    <>
      <Row>
        <Col span={24}>parent component status: {status}</Col>
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

export default Parent`

export const codeString6 = `const PureComponent = React.memo(ChildMemo, (prev, next) => {
  const { onPureEvent: prevEvent, ...prevRest } = prev
  const { onPureEvent: nextEvent, ...nextRest } = next
  return JSON.stringify(prevRest) === JSON.stringify(nextRest)
})`

export const codeString7 = `<PureComponent
  count={memoCount}
  id={id}
  info={info}
  onPureEvent={useCallback(() => console.log('event change'), [])}
  onPureArray={useMemo(() => [1, 2, 3], [])}
/>`
