export default class Queue<T> {
  private count: number
  private lowestCount: number
  private items: any

  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // 队列末尾添加元素
  add(element: T) {
    this.items[this.count] = element
    this.count++
  }

  // 删除队列最前方元素
  remove() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // 查看队列第一个元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  size() {
    return this.count - this.lowestCount
  }

  list() {
    if (this.isEmpty()) {
      return []
    }
    const arr = []
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      arr.push(this.items[i])
    }
    return arr
  }
}
