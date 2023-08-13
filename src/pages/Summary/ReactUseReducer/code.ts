export const codeString1 = `const Example1 = () => {
  const [count, countDispatch] = useReducer(
    (state: number, action: number) => state + action,
    0
  )

  const ref = useRef<InputRef>(null)

  return (
    <Space>
      useReducer count: {count}
      <br />
      <Input placeholder='useReducer count Input' ref={ref} />
      <Button
        type='primary'
        onClick={() => countDispatch(Number(ref.current?.input?.value))}
      >
        set count
      </Button>
    </Space>
  )
}`

export const codeString2 = `const [data, dataDispatch] = useReducer((state: TData[], action: TData) => {
  return [...state, action]
}, [])

const onFinish = (values: any) => {
  console.log('Success:', values)
  const param = {
    ...values,
    id: generateId(),
  }
  dataDispatch(param)
  form.resetFields()
}`

export const codeString3 = `const [data, dataDispatch] = useReducer(
  (state: TData[], action: TData & { type: string }) => {
    const { type, ...rest } = action
    switch (type) {
      case 'add':
        return [...state, rest]
      case 'delete': {
        return state.filter(item => item.id !== action.id)
      }
      default:
        return state
    }
  },
  []
)

const onDelete = (id: string) => {
  const param = {
    type: 'delete',
    id,
  }
  dataDispatch(param)
}

const onFinish = (values: any) => {
  console.log('Success:', values)
  const param = {
    ...values,
    type: 'add',
    id: generateId(),
  }
  dataDispatch(param)
  form.resetFields()
}`

export const codeString4 = `const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      if (state > 0) return state - 1
      else return state
    case 'reset':
      return 0
    default:
      return state
  }
}

const myUseReducer = (callback: Function, initialValue: any) => {
  const [state, setState] = useState(initialValue)
  const dispatch = (action: { type: string }) => {
    const result = callback(state, action)
    setState(result)
  }
  return [state, dispatch]
}`
