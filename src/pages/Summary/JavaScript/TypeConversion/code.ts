export const codeString1 = `const name = 'Ackerman'
const age = 30`

export const codeString2 = `const person1 = { name: '张三' }
const person2 = { name: '李四' }
const person3 = { name: '王五' }`

export const codeString3 = `const a = 100
const b = a + '' // 隐式转换
const c = String(a) // 显式转换`

export const codeString4 = `console.log('Boolean()', Boolean()) // false
console.log('Boolean(1)', Boolean(1)) // true
console.log('Boolean(0)', Boolean(0)) // false
console.log('Boolean(-1)', Boolean(-1)) // true
console.log('Boolean(undefined)', Boolean(undefined)) // false
console.log('Boolean(null)', Boolean(null)) // false
console.log('Boolean(NaN)', Boolean(NaN)) // false
console.log("Boolean('')", Boolean('')) // false
console.log("Boolean('123')", Boolean('123')) // true`

export const codeString5 = `console.log('Number()', Number()) // 0
console.log("Number('123')", Number('123')) // 123
console.log("Number('abc')", Number('abc')) // NaN
console.log('Number(true)', Number(true)) // 1
console.log('Number(false)', Number(false)) // 0
console.log('Number(undefined)', Number(undefined)) // NaN
console.log('Number(null)', Number(null)) // 0`

export const codeString6 = `console.log('String(+0)', String(+0)) // 0
console.log('String(-0)', String(-0)) // 0
console.log('String(NaN)', String(NaN)) // NaN
console.log('String(undefined)', String(undefined)) // undefined
console.log('String(null)', String(null)) // null`

export const codeString7 = `console.log('Object(true)', Object(true)) // [Boolean: true]
console.log('Object(123)', Object(123)) // [Number: true]
console.log("Object('123')", Object('123')) // [String: true]
console.log('Object(undefined)', Object(undefined)) // {}
console.log('Object(null)', Object(null)) // {}`

export const codeString8 = `console.log(+'-100')  // -100
console.log(+true) // 1
console.log(+false) // 0
console.log(+'abc') // NaN`

export const codeString9 = `// 先给出结论
const obj = { a: 1, b: 2 }
console.log(+obj) // NaN

// 具体流程
console.log(obj.valueOf()) // { a: 1, b: 2 } 还是Object类型
console.log(obj.toString()) // [Object, Object] String类型符合基本类型
console.log(+'[Object, Object]') // NaN`
