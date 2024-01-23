/**
 * 根据索引获取数组项,支持负数,负数从后往前，从-1开始
 * @param arr
 * @param index
 * @returns
 */

export const arrEq = (arr: any[], index: number) => {
  if (index < 0) {
    const a = arr.slice(index)
    if (a.length) {
      return a[0]
    }
  }
  return arr[index]
}
