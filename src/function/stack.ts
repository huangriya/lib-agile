export default class Stack<T> {
  private count: number
  private items: any

  constructor() {
    this.count = 0
    this.items = {}
  }

  add(element: T) {
    this.items[this.count] = element
    this.count++
  }

  remove() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  list() {
    if (this.isEmpty()) {
      return []
    }
    const arr = []
    for (let i = 1; i < this.count; i++) {
      arr.push(this.items[i])
    }
    return arr
  }
}
