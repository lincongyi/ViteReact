import React from 'react'
import { css } from '@emotion/react'
import { Space } from 'antd'

const commonStyle = css`
  color: #fff;
  padding: 20px;
`

const stringStyle = css`
  background-color: #0d98ba;
`

const objectStyle = css({
  backgroundColor: '#0476D0',
})

const Example3 = () => {
  return (
    <Space>
      <div css={[commonStyle, stringStyle]}>string style</div>
      <div css={[commonStyle, objectStyle]}>object style</div>
    </Space>
  )
}

export default Example3
