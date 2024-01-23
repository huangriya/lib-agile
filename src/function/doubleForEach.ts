/**
 * 首尾指针同时遍历
 * @param arr
 * @param fn
 */
export const doubleForEach = (arr: any[], fn: (item: any, index: number, type: 'left' | 'right') => void) => {
  let j = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    const beforeItem = arr[i],
      afterItem = arr[j]
    fn && fn(beforeItem, i, 'left')
    if (i < j) {
      fn && fn(afterItem, j, 'right')
    }
    j--
    if (j <= i) {
      break
    }
  }
}
