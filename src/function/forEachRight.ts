/**
 * 数组从右侧开始遍历
 * @param arr
 * @param fn
 */

export const forEachRight = (arr: any[], fn: (item: any, index: number) => void) => {
  const length = arr.length
  if (length) {
    for (let i = length - 1; i >= 0; i--) {
      const item = arr[i]
      fn && fn(item, i)
    }
  }
}

export const findRight = (arr: any[], fn: (item: any, index: number) => boolean) => {
  const length = arr.length
  if (length) {
    for (let i = length - 1; i >= 0; i--) {
      const item = arr[i]
      const execution = fn(item, i)
      if (execution) {
        return item
      }
    }
  }
}
