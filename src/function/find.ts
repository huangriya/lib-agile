/**
 * 通过双指针方式返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined
 * @param arr
 * @param fn
 */

export const find = (arr: any[], fn: (item: any, index: number, arr: any[]) => boolean) => {
  let j = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    const beforeItem = arr[i],
      afterItem = arr[j]
    if (fn(beforeItem, i, arr)) {
      return beforeItem
    }
    if (i < j) {
      if (fn(afterItem, j, arr)) {
        return afterItem
      }
    }
    j--
    if (j <= i) {
      break
    }
  }
}
