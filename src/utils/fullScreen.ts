/**
 * 进入全屏事件名
 */
const enterEventNames = [
  'requestFullscreen',
  'webkitRequestFullscreen',
  'mozRequestFullScreen',
  'msRequestFullscreen',
] as const

/**
 * 退出全屏事件名
 */
const exitEventNames = [
  'exitFullscreen',
  'webkitExitFullscreen',
  'mozCancelFullScreen',
  'msExitFullscreen',
] as const

/**
 * 全屏模式元素属性
 */
const fullscreenElements = [
  'fullscreenElement',
  'webkitFullscreenElement',
  'mozFullScreenElement',
  'msFullscreenElement',
] as const

/**
 * 监听全屏切换事件名
 */
const fullscreenChangeNames = [
  'onfullscreenchange',
  'onwebkitfullscreenchange',
  'onmozfullscreenchange',
  'onMSFullscreenChange',
] as const

type TNameList =
  | typeof enterEventNames
  | typeof exitEventNames
  | typeof fullscreenElements
  | typeof fullscreenChangeNames

/**
 * 获取当前浏览器上事件对应的名称or元素对应的属性
 * @param {TNameList} nameList 事件List or Dom Element
 * @param {Document | HTMLElement = document} 元素
 * @returns {TNameList[number]}
 */
const getName = <T extends TNameList>(
  nameList: T,
  element: Document | HTMLElement = document
): T[number] | undefined => nameList.find(item => item in element)

/**
 * 进入全屏
 */
const enterFullscreen = (element: any = document.documentElement) => {
  const eventName = getName(enterEventNames, element)
  eventName && element[eventName]()
}

/**
 * 退出全屏
 */
const exitFullscreen = () => {
  if (!getFullscreenElement()) return
  const eventName = getName(exitEventNames)
  eventName && (document as any)[eventName]()
}

/**
 * 获取当前处于全屏的dom
 */
const getFullscreenElement = () => {
  const element = getName(fullscreenElements)!
  return (document as any)[element] || null
}

/**
 * 切换全屏模式
 */
const toggleFullscreen = () =>
  !getFullscreenElement() ? enterFullscreen() : exitFullscreen()

export {
  enterFullscreen,
  exitFullscreen,
  getFullscreenElement,
  toggleFullscreen,
}
