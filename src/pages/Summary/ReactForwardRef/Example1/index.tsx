import React, { useRef } from 'react'
import { Button, Input, Space, message } from 'antd'
import type { InputRef } from 'antd'

const Bar = React.forwardRef<InputRef, { value?: string }>((props, ref) => {
  const onClick = () => {
    if (ref) {
      message.info(
        (ref as React.MutableRefObject<InputRef>).current?.input?.value
      )
    }
  }
  return (
    <div id='bar'>
      bar 组件：
      <Space>
        <Input
          ref={ref}
          placeholder='Basic usage'
          defaultValue={props.value || 'input ref'}
        />
        <Button type='primary' onClick={onClick}>
          Primary Button
        </Button>
      </Space>
    </div>
  )
})

Bar.displayName = 'Bar'

const Example1 = () => {
  const barRef = useRef<InputRef | null>(null)

  return <Bar ref={barRef} />
}

export default Example1
