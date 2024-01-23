/**
 * 同步任务转异步任务调度
 * 大循环拆分成多个异步任务，交给浏览器去调度，防止代码执行时间过长导致浏览器渲染丢帧，卡顿
 * @param { Array } arr 执行的数组
 * @param { Array } number 每个任务执行的size长度
 * @param { Function } fn 每次循环执行的回调函数
 */

import { chunk } from './chunk'
import { isFunction } from './type'

export default class Scheduling {
  private time: any = []
  doneFn: any = null
  constructor(arr: any[], number = 10, fn: (item: any, index: number) => any) {
    this.time = []
    const len = arr.length
    const self = this

    if (len <= number) {
      arr.forEach((o, i) => {
        fn && fn(o, i)
      })
    } else {
      const newArr = chunk(arr, number)
      let index = 0

      function forEach(arr: any[]) {
        arr.forEach((o: any) => {
          fn && fn(o, index)
          if (index === len - 1) {
            self.doneFn()
          }
          index++
        })
      }

      newArr.forEach((a: any[], i: number) => {
        if (i === 0) {
          forEach(a)
        } else {
          this.time[i] = setTimeout(() => {
            forEach(a)
          })
        }
      })
    }
  }

  // 所有任务执行完毕
  done(fn: () => void) {
    if (isFunction(fn)) {
      this.doneFn = fn
    }
  }

  // 清除任务
  clear() {
    if (this.time.length) {
      this.time.forEach((o: any) => {
        clearTimeout(o)
      })
      this.time = []
    }
  }
}
