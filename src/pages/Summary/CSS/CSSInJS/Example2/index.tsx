import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const fontStyle = css`
  color: skyblue;
  font-size: 30px;
`

console.log('fontStyle', fontStyle)

const Example2 = () => {
  return <div css={fontStyle}>@emotion/react</div>
}

export default Example2
