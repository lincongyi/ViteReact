/* eslint-disable react/prop-types */
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
  const themePrimary = (props: TTheme) => css`
    color: ${props.colors.primary};
  `
  return (
    <div css={themePrimary as Interpolation<Theme>}>theme primary - Child1</div>
  )
}

const Child2 = () => {
  const themeSecondary = (props: TTheme) =>
    css({
      color: `${props.colors.secondary}`,
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

export default Example11
