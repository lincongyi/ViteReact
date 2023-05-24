import { Button, Input, Space } from 'antd'
import type { InputRef } from 'antd'
import React, { Ref, useEffect, useRef, useState } from 'react'

/**
 * 子组件
 */
const Baz = React.forwardRef<InputRef, { value?: string; type?: string }>(
  ({ value, type }, ref) => {
    const onClick = () => {
      console.log(`inputValue: ${inputValue}`)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    }
    const [inputValue, setInputValue] = useState('Bazzzzz')
    useEffect(() => {
      if (value) setInputValue(value)
    }, [value])
    return (
      <>
        baz 组件：({type || 'common'})
        <Space>
          <Input
            ref={ref}
            placeholder='Bazzzzz component'
            value={inputValue}
            onChange={onChange}
          />
          <Button type='primary' onClick={onClick}>
            Primary Button
          </Button>
        </Space>
      </>
    )
  }
)

Baz.displayName = 'Baz'

/**
 * 高阶组件
 */
const wrapComponent = (
  Component: React.ForwardRefExoticComponent<
    {
      value?: string | undefined
      type?: string | undefined
    } & React.RefAttributes<InputRef>
  >
) => {
  const WithHOC = (
    props: { value?: string },
    ref: Ref<InputRef> | undefined
  ) => {
    const [value, setValue] = useState<string>()
    useEffect(() => {
      setValue(props.value || 'return HOC function')
    }, [])
    const type = 'high order component'
    return <Component value={value} type={type} ref={ref} />
  }
  return React.forwardRef(WithHOC)
}

const Example2 = () => {
  const HOCRef = useRef<InputRef | null>(null)

  const HOCBaz = wrapComponent(Baz)
  return (
    <Space direction='vertical'>
      <HOCBaz ref={HOCRef} />
      <HOCBaz ref={HOCRef} value={'123123'} />
    </Space>
  )
}

export default Example2
