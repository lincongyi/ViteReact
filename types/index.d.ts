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

declare interface Array<T> {
  myForEach(callback: (value: T, index: number, array: T[]) => void): void
  myMap(callback: (value: T, index: number, array: T[]) => U): T[]
  myFilter(predicate: (value: T, index: number, array: T[]) => unknown): T[]
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
