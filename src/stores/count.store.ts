import { computed, makeAutoObservable } from 'mobx'

class CountStore {
  constructor () {
    makeAutoObservable(this)
  }

  count = 4

  increment = () => {
    return ++this.count
  }

  decrement = () => {
    if (!this.count) return 0
    return --this.count
  }

  getDoubleCount = () => {
    return this.count * 2
  }

  getTrebleCount = computed(() => {
    return this.count * 3
  })
}

export default CountStore
