/* eslint-disable no-unused-vars */
declare type TRoutes = {
  path: string
  element?: JSX.Element
  children?: TRoutes[]
  meta?: {
    title?: string
    icon?: React.ReactNode
  }
}

declare type TResponse = {
  code: string
  msg: string
  status: number
  data: Record<string, any>
}
