import React, { useContext, useState } from 'react'
import { Button, Divider, Typography } from 'antd'

type TContext = {
  sonValue: string
  grandsonValue: string
}

const myContext = React.createContext<TContext>({
  sonValue: '',
  grandsonValue: '',
})

const Example1 = () => {
  const [provideValue, setProvideValue] = useState({
    sonValue: 'this is son component value',
    grandsonValue: 'this is grandson component value',
  })
  return (
    <>
      <Button
        onClick={() =>
          setProvideValue({
            sonValue: `sonValue is changed! ~ ${Math.random() * 100}`,
            grandsonValue: `grandsonValue is changed! ~ ${Math.random() * 100}`,
          })
        }
      >
        改变provide
      </Button>
      <br />

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
}

export default Example1
