export const codeString1 = `type TContext = {
  sonValue: string
  grandsonValue: string
}

const myContext = React.createContext<TContext>({
  sonValue: '',
  grandsonValue: '',
})

const Example1 = () => {
  const [provideValue] = useState({
    sonValue: 'this is son component value',
    grandsonValue: 'this is grandson component value',
  })
  return (
    <>
      <myContext.Provider value={provideValue}>
        <SonComponent />
      </myContext.Provider>
    </>
  )
}

const SonComponent = () => {
  const context = useContext(myContext)
  return (
    <>
      <Typography.Text type='success'>son component</Typography.Text>
      <br />
      <Typography.Text type='warning'>{context.sonValue}</Typography.Text>
      <br />
      <Divider />
      <GrandsonComponent />
    </>
  )
}

const GrandsonComponent = () => {
  return (
    <myContext.Consumer>
      {context => (
        <>
          <Typography.Text type='secondary'>grandson component</Typography.Text>
          <br />
          <Typography.Text type='danger'>
            {context.grandsonValue}
          </Typography.Text>
        </>
      )}
    </myContext.Consumer>
  )
}`

export const codeString2 = `type TComponentIds = {
  componentA?: string
  componentB?: string
  componentAchild?: string
}

type TContext = {
  id: TComponentIds
  dispatchId: React.Dispatch<TComponentIds>
}

const context = React.createContext<TContext | undefined>(undefined)

const componentIds: TComponentIds = {
  componentA: generateId(),
  componentB: generateId(),
  componentAchild: generateId(),
}

const Provider = ({ children }: { children: JSX.Element }) => {
  const [id, dispatchId] = useReducer(
    (state: TComponentIds, action: TComponentIds) => ({ ...state, ...action }),
    componentIds
  )
  return (
    <>
      <context.Provider value={{ id, dispatchId }}>{children}</context.Provider>
    </>
  )
}`

export const codeString3 = `import React, { useContext } from 'react'
import { Space, Typography } from 'antd'
import { context } from './Provider'
import ComponentAChild from './ComponentAChild'
import ButtonGroup from './ButtonGroup'

const { Text } = Typography

const ComponentA = () => {
  const ctx = useContext(context)
  const { id } = ctx!
  return (
    <Space direction='vertical'>
      <>
        Component A id : <Text type='danger'>{id.componentA}</Text>
      </>
      <>
        <ButtonGroup />
      </>
      <>
        <ComponentAChild />
      </>
    </Space>
  )
}

export default ComponentA`

export const codeString4 = `import React, { useContext } from 'react'
import { Space, Typography } from 'antd'
import { context } from './Provider'
import ButtonGroup from './ButtonGroup'

const { Text } = Typography

const ComponentAChild = () => {
  const ctx = useContext(context)
  const { id } = ctx!
  return (
    <Space direction='vertical'>
      <>
        Component A child id : <Text type='danger'>{id.componentAchild}</Text>
      </>
      <>
        <ButtonGroup />
      </>
    </Space>
  )
}

export default ComponentAChild
`

export const codeString5 = `import React, { useContext } from 'react'
import { Button, Space, Typography } from 'antd'
import { context } from './Provider'
import ButtonGroup from './ButtonGroup'
import { generateId } from '@utils/index'

const { Text } = Typography

const ComponentB = () => {
  const ctx = useContext(context)
  const { id, dispatchId } = ctx!
  return (
    <Space direction='vertical'>
      <>
        Component B id : <Text type='danger'>{id.componentB}</Text>
      </>
      <>
        <ButtonGroup>
          <Button
            type='primary'
            onClick={() =>
              dispatchId({
                componentA: \`has changed id: ~ \${generateId()}\`,
                componentAchild: \`has changed id: ~ \${generateId()}\`,
                componentB: \`has changed id: ~ \${generateId()}\`,
              })
            }
          >
            改变当前所有组件的id
          </Button>
        </ButtonGroup>
      </>
    </Space>
  )
}

export default ComponentB
`

export const codeString6 = `import React, { useContext } from 'react'
import { Button, Space } from 'antd'
import { generateId } from '@utils/index'
import { context } from './Provider'

const ButtonGroup = ({ children }: { children?: JSX.Element }) => {
  const ctx = useContext(context)
  const { dispatchId } = ctx!
  return (
    <>
      <Space>
        <Button
          type='primary'
          onClick={() =>
            dispatchId({
              componentA: \`has changed id: ~ \${generateId()}\`,
            })
          }
        >
          改变Component A
        </Button>
        <Button
          type='primary'
          onClick={() =>
            dispatchId({
              componentAchild: \`has changed id: ~ \${generateId()}\`,
            })
          }
        >
          改变Component A child
        </Button>
        <Button
          type='primary'
          onClick={() =>
            dispatchId({
              componentB: \`has changed id: ~ \${generateId()}\`,
            })
          }
        >
          改变Component B
        </Button>
        {children}
      </Space>
    </>
  )
}

export default ButtonGroup
`

export const codeString7 = `import React from 'react'
import { Provider } from './components/Provider'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import { Divider } from 'antd'

const Example2 = () => {
  return (
    <>
      <Provider>
        <>
          <ComponentA></ComponentA>
          <Divider />
          <ComponentB></ComponentB>
        </>
      </Provider>
    </>
  )
}

export default Example2`
