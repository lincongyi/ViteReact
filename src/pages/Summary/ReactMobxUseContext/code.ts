export const codeString1 = `import { computed, makeAutoObservable } from 'mobx'

class CountStore {
  constructor () {
    makeAutoObservable(this)
  }

  count = 4

  increment = () => {
    return ++this.count
  }

  decrement = () => {
    if (!this.count) return 0
    return --this.count
  }

  getDoubleCount = () => {
    return this.count * 2
  }

  getTrebleCount = computed(() => {
    return this.count * 3
  })
}

export default CountStore`

export const codeString2 = `import React from 'react'
import CountStore from './count.store'

class RootStore {
  countStore
  constructor () {
    this.countStore = new CountStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }`

export const codeString3 = `import React from 'react'
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
`

export const codeString4 = `import { makeAutoObservable } from 'mobx'

const CountStore = () => {
  return makeAutoObservable({
    count: 10,
    increment () {
      return ++this.count
    },

    decrement () {
      if (!this.count) return 0
      return --this.count
    },

    getDoubleCount () {
      return this.count * 2
    },

    get getTrebleCount () {
      return this.count * 3
    },
  })
}

export default CountStore
`

export const codeString5 = `import React from 'react'
import CountStoreHooks from './count.hooks.store'

const RootStore = React.createContext({
  countStoreHooks: CountStoreHooks()
})

const useStoreHooks = () => React.useContext(RootStore)

export { useStoreHooks }`

export const codeString6 = `import React from 'react'
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
`
