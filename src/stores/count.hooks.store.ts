import { makeAutoObservable } from 'mobx'

const CountStore = () => {
  return makeAutoObservable({
    count: 10,
    increment () {
      return ++this.count
    },

    decrement () {
      if (!this.count) return 0
      return --this.count
    },

    getDoubleCount () {
      return this.count * 2
    },

    get getTrebleCount () {
      return this.count * 3
    },
  })
}

export default CountStore
