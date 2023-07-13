import React from 'react'
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

export default Example2
