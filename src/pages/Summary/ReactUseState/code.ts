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

export const codeString2 = `let state: any // 调整state作用域
const myUseState = (initial: any) => {
  state = state || initial // 判断如果state有值，就不会重置，否则赋予初始默认值
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

export const codeString5 = `/**
 * 重新渲染组件
 */
let root: Root
const render = () => {
  const id = document.getElementById('Example5')
  if (!id) return
  root = root || createRoot(id)
  stateIndex = 0 // 重新渲染的时候需要把下表归0，不然stateIndex会一直累计下去
  root.render(<Child />)
}

const state: any[] = [] // 存储state
const setState: any[] = [] // 更新state的函数
let stateIndex = 0 // 下标用于记录状态值的对应关系

/**
 * 重写useState方法
 */
const myUseState = (initial: any) => {
  state[stateIndex] = state[stateIndex] || initial
  setState[stateIndex] = setState[stateIndex] || onSet(stateIndex)

  const index = stateIndex++
  return [state[index], setState[index]]
}

/**
 * 更新值的函数。采用闭包的方式，把各自状态值的下标（stateIndex）都保存起来。
 * 这里利用了闭包【 函数内部有权访问上层函数作用域中的变量，同时变量会缓存在内存当中。 】的特性
 */
const onSet = (index: number) => {
  return (value: any) => {
    if (state[index] === value) return
    state[index] = value
    render()
  }
}`
