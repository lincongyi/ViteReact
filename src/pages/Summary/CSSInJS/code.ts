export const codeString1 = `import React from 'react'
import styled from '@emotion/styled'

const Button1 = styled.button\`
  color: hotpink;
  font-size: 30px;
\`

const Example1 = () => {
  return <Button1>@emotion/styled</Button1>
}

export default Example1`

export const codeString2 = `import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const fontStyle = css\`
  color: skyblue;
  font-size: 30px;
\`

const Example2 = () => {
  return <div css={fontStyle}>@emotion/react</div>
}

export default Example2`

export const codeString3 = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
})`

export const codeString4 = `rules: {
  ...
  'react/no-unknown-property': ['error', { ignore: ['css'] }],
},`

export const codeString5 = `"compilerOptions": {
  ...
  "jsxImportSource": "@emotion/react"
},`

export const codeString6 =
  '/// <reference types="@emotion/react/types/css-prop" />'

export const codeString7 = `import React from 'react'
import { Space } from 'antd'
import { css } from '@emotion/react'

const commonStyle = css\`
  color: #fff;
  padding: 20px;
\`

const stringStyle = css\`
  background-color: #0d98ba;
\`

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

export default Example3`
