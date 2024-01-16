import React from 'react'
import { css } from '@emotion/react'
import { Space } from 'antd'

const commonStyle = css`
  padding: 20px;
`

const defaultStyle = css({
  backgroundColor: '#fdd0a2',
})

const coverStyle = css({
  backgroundColor: '#8dc6ff',
})

const ChildComponent = (props: { className?: string }) => {
  return (
    <div css={[commonStyle, defaultStyle]} {...props}>
      ChildComponent
    </div>
  )
}

const Example4 = () => {
  return (
    <Space>
      <ChildComponent />
      <ChildComponent css={coverStyle} />
    </Space>
  )
}

export default Example4
