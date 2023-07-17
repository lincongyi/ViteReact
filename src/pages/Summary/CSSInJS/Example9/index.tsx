import React from 'react'
import { css, Global } from '@emotion/react'
import { Space } from 'antd'

const globalStyles1 = css`
  .my-color {
    color: skyblue;
  }
`

const globalStyles2 = css({
  '.my-size': {
    fontSize: 24,
  },
})

const Example9 = () => {
  return (
    <Space>
      <Global
        styles={[
          globalStyles1,
          globalStyles2,
          css({
            '.my-bold': {
              fontWeight: 'bold',
            },
          }),
        ]}
      />
      <p className='my-color my-size my-bold'>全局样式</p>
    </Space>
  )
}

export default Example9
