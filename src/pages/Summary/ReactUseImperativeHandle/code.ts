export const codeString1 = `import React, { LegacyRef, useImperativeHandle, useRef, useState } from 'react'
import { Button, Input, Space, message } from 'antd'

const Child = React.forwardRef<{
  inputValue: string
}>((props, ref) => {
  const defaultValue = 'child component'
  const [inputValue, setInputValue] = useState(defaultValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const getValue = () => {
    message.info(inputValue)
    return inputValue
  }
  useImperativeHandle(ref, () => {
    return {
      inputValue,
      getValue,
    }
  })

  return (
    <Space>
      {defaultValue}:
      <div ref={ref as LegacyRef<HTMLDivElement> | undefined}>div</div>
      <Input
        placeholder='Basic usage'
        value={inputValue}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <Button type='primary' onClick={getValue}>
        Primary Button
      </Button>
    </Space>
  )
})

Child.displayName = 'child'

const Example1 = () => {
  const childRef = useRef<{ inputValue: string; getValue: Function }>(null)
  return (
    <Space direction='vertical'>
      <Space>
        father component:
        <Button
          type='primary'
          onClick={() => message.warning(childRef.current!.inputValue)}
        >
          调用子组件暴露出来的值
        </Button>
        <Button type='primary' onClick={() => childRef.current!.getValue()}>
          调用子组件暴露出来的方法
        </Button>
      </Space>
      <Child ref={childRef}></Child>
    </Space>
  )
}

export default Example1
`
