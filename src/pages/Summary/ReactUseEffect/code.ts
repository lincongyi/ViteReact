export const codeString1 = `useEffect(()=>{})               =>  componentDidMount,componentDidUpdate
useEffect(()=>{},[])            =>  componentDidMount
useEffect(()=>{return ()=>{}})  =>  componentWillUnmount`

export const codeString2 = `const getData = () => {
  return new Promise(resolve => resolve('hello world'))
}

useEffect(() => {
  ;(async () => {
    const data = await getData()
    console.log(data)
  })()
}, [])`

export const codeString3 = `/**
* 重新渲染组件
*/
let root: Root
const render = () => {
 ...
 effectIndex = 0 // 重新渲染的时候需要把下标归0，不然每次调用myUseEffect，effectIndex会一直累计下去
 ...
}


// 缓存依赖项deps，prevDeps是个二维数组，这是由于deps也是一个数组，避免多次调用useEffect后，deps赋值给prevDeps会导致相互覆盖。
const prevDeps: any[][] = []
let effectIndex = 0 // 下标用于记录useEffect每次执行后，在的prevDeps中的位置

/**
 * @param {Function} callback 回调函数
 * @param {any[] | undefined} deps 依赖项
 */
const myUseEffect = (callback: Function, deps?: any[] | undefined) => {
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('callback is not a Function')
  }
  // 如果不存在依赖项，那么直接执行callback。相当于componentDidUpdate
  if (deps === undefined) {
    callback()
  } else {
    if (!Array.isArray(deps)) {
      throw new Error('deps is not an Array')
    }
    const prevItem = prevDeps[effectIndex] // 先获取prevDeps[effectIndex]，看是否存在。如果不存在执行prevItem[index]会报错
    const noChang = prevItem
      ? deps.every((item, index) => item === prevItem[index])
      : false
    if (!noChang) {
      // 判断依赖项是否有发生变化，如果有就执行回调
      callback()
    }
    prevDeps[effectIndex] = deps
    effectIndex++
    // console.log('prevDeps', prevDeps)
    // console.log('deps', deps)
  }
}`
