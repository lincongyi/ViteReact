export const codeString1 = `<Row gutter={[0, 20]}>
  <Col span={24}>
    <IncreaseBtnGroup />
  </Col>
  <Col span={24}>
    <Calculation />
  </Col>
</Row>`

export const codeString2 = `<Space>
  <Button>increase +1</Button>
  <Button>increase +2</Button>
  <Button>increase once</Button>
  <Button>increase off</Button>
</Space>`

export const codeString3 = '<>Calculation：{count}</>'

export const codeString4 = `class EventBus {
  // eventTypes里面的值为什么是Set类型？
  // 这是因为如果同一个事件，监听两次的话，用数组来存储callback，在emit的时候会执行2次，
  // 如果用new Set()来存储的话，会自动去重，避免没必要的回调执行。
  eventTypes: Record<string, Set<(...args: any[]) => void>> = {}
  on(type: string, callback: (...args: any[]) => void) {
    if (!this.eventTypes[type]) this.eventTypes[type] = new Set()
    this.eventTypes[type].add(callback)
  }

  emit(type: string, ...args: any[]) {
    // eslint-disable-next-line n/no-callback-literal
    this.eventTypes[type]?.forEach(callback => callback(...args))
  }

  off(type: string, callback: (...args: any[]) => void) {
    this.eventTypes[type]?.delete(callback)
  }

  once(type: string, callback: (...args: any[]) => void) {
    const handler = (...args: any[]) => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
      this.off(type, handler)
    }
    this.on(type, handler)
  }
}

export const bus = new EventBus()
`

export const codeString5 = `import { bus } from '../../eventBus'

const IncreaseBtnGroup = () => {
  const onIncrease = (value = 1) => {
    bus.emit('increase', value)
  }

  return (
    <Space>
      <Button onClick={() => onIncrease()}>increase +1</Button>
      <Button onClick={() => onIncrease(2)}>increase +2</Button>
      <Button>increase once</Button>
      <Button>increase off</Button>
    </Space>
  )
}`

export const codeString6 = `import { bus } from '../../eventBus'

const Calculation = () => {
  const [count, setCount] = useState(0)

  bus.on('increase', (value: number) => setCount(count + value))

  return <>Calculation：{count}</>
}`
