/* eslint-disable no-unused-vars */
declare type TRoutes = {
  path: string
  element?: JSX.Element
  elementPath?: string
  inherent?: boolean // 是否默认加载的路由
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

declare interface Array<T> {
  myForEach(
    callback: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void
  myMap(
    callback: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): T[]
  myFilter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[]
  myReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue?: T
  )
  myFill(value: T, start?: number, end?: number): this
  myIncludes(searchElement: T, fromIndex?: number): boolean
  myJoin(separator?: string): string
  myFind(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): T | undefined
  myFindIndex(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): number
  mySome(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean
  myEvery(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_TITLE: string
  readonly VITE_FLAG: string
}
