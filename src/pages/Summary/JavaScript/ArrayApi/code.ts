export const codeString1 = `Array.prototype.myForEach = function <T> (
  callback: (element: T, index: number, array: T[]) => void,
  thisArg?: any
): undefined {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}`

export const codeString2 = `Array.prototype.myMap = function <T, U> (
  callback: (element: T, index: number, array: T[]) => U
): U[] {
  const result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}`

export const codeString3 = `Array.prototype.myFilter = function (callback) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    const isAllowed = Boolean(callback(this[i], i, this))
    isAllowed && result.push(this[i])
  }
  return result
}`

export const codeString4 = `Array.prototype.myReduce = function <T> (
  callback: (
    previousValue: T,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => T,
  initValue?: any
): T[] {
  let prev = initValue || this[0]
  const start = initValue ? 0 : 1
  for (let i = start; i < this.length; i++) {
    prev = callback(prev, this[i], i, this)
  }
  return prev
}`

export const codeString5 = `Array.prototype.myFill = function (value: any, start?: number, end?: number) {
  start = start || 0
  end = end || this.length
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}`

export const codeString6 = `Array.prototype.myIncludes = function (
  searchElement: any,
  fromIndex: number
) {
  fromIndex = fromIndex || 0
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) return true
  }
  return false
}`

export const codeString7 = `Array.prototype.myJoin = function (separator: string) {
  let result = ''
  for (let i = 0; i < this.length; i++) {
    result += \`\${this[i]}\${i !== this.length - 1 ? separator : ''}\`
  }
  return result
}`

export const codeString8 = `Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return this[i]
  }
  return undefined
}`

export const codeString9 = `Array.prototype.myFindIndex = function <T> (
  callback: (element: T, index: number, array: T[]) => unknown,
  thisArg?: any
): number {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return i
  }
  return -1
}`

export const codeString10 = `Array.prototype.mySome = function <T> (
  callback: (element: T, index: number, array: T[]) => unknown,
  thisArg?: any
) {
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this)
    if (result) return true
  }
  return false
}`

export const codeString11 = `Array.prototype.myEvery = function <T> (
  callback: (element: T, index: number, array: T[]) => unknown,
  thisArg?: any
) {
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this)
    if (!result) return false
  }
  return true
}`
