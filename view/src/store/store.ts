import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return {
        count: 0,
        name: 'test',
        show: false
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})

export const demoStore = defineStore('demoStore', {
    state: () => {
        return {
            name: 'drew'
        }
    },
    actions: {
        rename(value: string) {
            this.name = value
        }
    }
})
