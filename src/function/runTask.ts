function _runTask(task: () => void, callback: () => void, timeRemaining: number) {
  requestIdleCallback((idle) => {
    console.log(idle.timeRemaining(), idle.didTimeout)
    if (idle.timeRemaining() > timeRemaining) {
      task()
      callback()
    } else {
      _runTask(task, callback, timeRemaining)
    }
  })
}

/**
 * 执行一个耗时任务，尽量让浏览器渲染不产生卡顿
 * @param task 需要执行的任务函数
 * @param timeRemaining 距离下次浏览器渲染还剩多少毫秒之前执行, 这个数字在0 - 10之内，该参数不兼容Safari
 * @returns Promise
 */

export const runTask = (task: () => void, timeRemaining?: number) => {
  return new Promise<void>((resolve) => {
    if (window.requestIdleCallback) {
      timeRemaining = timeRemaining || 0
      _runTask(task, resolve, timeRemaining)
    } else {
      setTimeout(() => {
        task()
        resolve()
      }, 0)
    }
  })
}
