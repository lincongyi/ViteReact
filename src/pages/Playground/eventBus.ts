class EventBus {
  // eventTypes里面的值为什么是Set类型？
  // 这是因为如果同一个事件，监听两次的话，用数组来存储callback，在emit的时候会执行2次，
  // 如果用new Set()来存储的话，会自动去重，避免没必要的回调执行。
  eventTypes: Record<string, Set<(...args: any[]) => void>> = {}
  on(type: string, callback: (...args: any[]) => void) {
    if (!this.eventTypes[type]) this.eventTypes[type] = new Set()
    this.eventTypes[type].add(callback)
  }

  emit(type: string, ...args: any[]) {
    // eslint-disable-next-line n/no-callback-literal
    this.eventTypes[type]?.forEach(callback => callback(...args))
  }

  off(type: string, callback: (...args: any[]) => void) {
    this.eventTypes[type]?.delete(callback)
  }

  once(type: string, callback: (...args: any[]) => void) {
    const handler = (...args: any[]) => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
      this.off(type, handler)
    }
    this.on(type, handler)
  }
}

export const bus = new EventBus()
