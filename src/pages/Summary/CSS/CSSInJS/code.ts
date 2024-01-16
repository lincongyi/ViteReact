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
import { css } from '@emotion/react'
import { Space } from 'antd'

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

export const codeString8 = `import React from 'react'
import { css } from '@emotion/react'
import { Space } from 'antd'

const commonStyle = css\`
  padding: 20px;
\`

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

export default Example4`

export const codeString9 = `import React from 'react'
import styled from '@emotion/styled'
import { Space } from 'antd'

const StyledButton1 = styled.button\`
  color: #fff;
  background-color: #3a7ca5;
  padding: 20px;
\`

const StyledButton2 = styled.button({
  color: '#fff',
  backgroundColor: '#F7A072',
  padding: 20,
})

const Example5 = () => {
  return (
    <Space>
      <StyledButton1>StyledButton1</StyledButton1>
      <StyledButton2>StyledButton2</StyledButton2>
    </Space>
  )
}

export default Example5`

export const codeString10 = `import React from 'react'
import styled from '@emotion/styled'
import { Space } from 'antd'

const StyledDiv1 = styled.div\`
  background-color: ${(props: { bgColor?: string }) =>
    props.bgColor || '#8fc9ae'};
  padding: 20px;
\`

const StyledDiv2 = styled.div(({ color }) => ({
  backgroundColor: '#385b66',
  color: color || '#fff',
  padding: 20,
}))

const Example6 = () => {
  return (
    <Space direction='vertical'>
      <Space>
        <StyledDiv1>StyledDiv1</StyledDiv1>
        <StyledDiv1 bgColor='#f6eb9a'>StyledDiv1</StyledDiv1>
      </Space>
      <Space>
        <StyledDiv2>StyledDiv2</StyledDiv2>
        <StyledDiv2 color='#a61f69'>StyledDiv2</StyledDiv2>
      </Space>
    </Space>
  )
}

export default Example6`

export const codeString11 = `import styled from '@emotion/styled'
import React from 'react'

const Demo = ({
  className,
  description,
}: {
  className?: string
  description?: string
}) => {
  return <h4 className={className}>{description || 'default Demo'}</h4>
}

const WrapDemo1 = styled(Demo)\`
  background-color: #1eafed;
\`

const WrapDemo2 = styled(Demo)({
  backgroundColor: '#95cd41',
})

const Example7 = () => {
  return (
    <>
      <Demo />
      <WrapDemo1 description='WrapDemo1 string styled' />
      <WrapDemo2 description='WrapDemo2 object styled' />
    </>
  )
}

export default Example7`

export const codeString12 = `import React from 'react'
import styled from '@emotion/styled'
import { Space } from 'antd'

const Child = styled.div\`
  padding: 20px;
  background-color: #f6ffa4;
\`

const Parent1 = styled.div\`
  $\{Child\} {
    background-color: #31aa75;
  }
\`

const Parent2 = styled.div({
  [Child]: {
    backgroundColor: '#53c7f0',
  },
})

const Example8 = () => {
  return (
    <Space>
      <Child>Child</Child>
      <Parent1>
        <Child>Parent1 Child</Child>
      </Parent1>
      <Parent2>
        <Child>Parent2 Child</Child>
      </Parent2>
    </Space>
  )
}

export default Example8`

export const codeString13 = `import React from 'react'
import { css, Global } from '@emotion/react'
import { Space } from 'antd'

const globalStyles1 = css\`
  .my-color {
    color: skyblue;
  }
\`

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
`
export const codeString14 = `/* eslint-disable react/prop-types */
import React from 'react'
import {
  css,
  Interpolation,
  Theme,
  ThemeProvider,
  useTheme,
} from '@emotion/react'

type TTheme = {
  colors: {
    primary: string
    secondary: string
    final: string
  }
}

const theme: TTheme = {
  colors: {
    primary: '#2daf94',
    secondary: '#8A2BE2',
    final: 'tomato',
  },
}

const Child1 = () => {
  const themePrimary = (props: TTheme) => css\`
    color: \${props.colors.primary};
  \`
  return (
    <div css={themePrimary as Interpolation<Theme>}>theme primary - Child1</div>
  )
}

const Child2 = () => {
  const themeSecondary = (props: TTheme) =>
    css({
      color: \`\${props.colors.secondary}\`,
    })
  return (
    <div css={themeSecondary as Interpolation<Theme>}>
      theme secondary - Child2
    </div>
  )
}

const Child3 = () => {
  const theme = useTheme()

  return (
    <div
      css={css({
        color: (theme as TTheme).colors.final,
      })}
    >
      theme hooks - Child3
    </div>
  )
}

const Example11 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Child1 />
      <Child2 />
      <Child3 />
    </ThemeProvider>
  )
}

export default Example11`
