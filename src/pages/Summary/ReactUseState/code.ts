export const codeString1 = `const myUseState = (initial: any) => {
  let state = initial
  const setState = (newValue: any) => {
    state = newValue
    render()
  }
  return [state, setState]
}

const Child = () => {
  ...
  const [count2, setCount2] = myUseState(100)

  return (
    <Space direction='vertical'>
      ...
      <Space>
        count2:{count2}
        <Button type='primary' onClick={() => setCount2(count2 + 1)}>
          myUseState setCount
        </Button>
      </Space>
    </Space>
  )
}

...

export default Example1`

export const codeString2 = `let state: any
const myUseState = (initial: any) => {
  state = state || initial
  const setState = (newValue: any) => {
    state = newValue
    render()
  }
  return [state, setState]
}`

export const codeString3 = `const Child = () => {
  ...
  const [count2, setCount2] = myUseState(100)
  const [count3, setCount3] = myUseState('count3')

  return (
    <Space direction='vertical'>
      ...
      <Space>
        count2:{count2}
        <Button type='primary' onClick={() => setCount2(count2 + 1)}>
          myUseState setCount
        </Button>
      </Space>
      <Space>
        count3:{count3}
        <Button type='primary' onClick={() => setCount3('update count3')}>
          myUseState setCount
        </Button>
      </Space>
    </Space>
  )
}`

export const codeString4 = `/**
* 重新渲染组件
*/
let root: Root
const render = () => {
 const id = document.getElementById('Example4')
 if (!id) return
 root = root || createRoot(id)
 root.render(<Child />)
}

const state: any[] = [] // 存储state
let stateIndex = 0 // 下标用于记录状态值的对应关系

const myUseState = (initial: any) => {
 state[stateIndex] = state[stateIndex] || initial
 const setState = (newValue: any) => {
   state[stateIndex] = newValue
   render()
 }
 stateIndex++
 return [state[stateIndex - 1], setState]
}`
