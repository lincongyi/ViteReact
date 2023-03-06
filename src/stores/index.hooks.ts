// 所有模块集中做统一处理
// 同时返回一个useStore方法，通过该方法可访问存储数据
import React from 'react'
import CountStoreHooks from './count.hooks.store'

const RootStore = React.createContext({
  countStoreHooks: CountStoreHooks()
})

const useStoreHooks = () => React.useContext(RootStore)

export { useStoreHooks }
