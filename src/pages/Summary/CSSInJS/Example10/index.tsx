import React from 'react'
import { css, keyframes } from '@emotion/react'

const moveKeyframes = keyframes`
  0% {background: skyblue; left: 0; top: 0;}
  100% {background: tomato; left: 400px; top: 0;}
`

const move = css({
  width: 100,
  height: 100,
  lineHeight: '100px',
  textAlign: 'center',
  position: 'relative',
  animation: `${moveKeyframes} 3s ease-out infinite alternate`,
})

const Example10 = () => {
  return <div css={move}>Example10</div>
}

export default Example10
