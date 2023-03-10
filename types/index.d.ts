declare type TRoutes = {
  path: string
  element?: JSX.Element
  children?: TRoutes[]
}

declare type TResponse = {
  code: string
  msg: string
  status: number
  data: Record<string, any>
}
