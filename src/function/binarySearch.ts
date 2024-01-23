import { isObject } from './type'

/**
 *
 * @param arr 有序数组列表
 * @param target 要查找的目标值
 * @param option.key 当数组的像项为对象时对应的数字类型的唯一键名
 * @returns
 */
export const binarySearch = (
  arr: any[],
  target: number,
  option?: {
    key?: string
  },
) => {
  if (arr.length) {
    const opt = Object.assign({ key: 'id' }, option)
    let i = 0,
      j = arr.length - 1
    while (i <= j) {
      // 计算中点索引 m ，使用 parseInt() 向下取整
      const m = Math.floor(i + (j - i) / 2)

      const item = isObject(arr[m]) ? arr[m][opt.key] : arr[m]

      if (item < target) {
        // 此情况说明 target 在区间 [m+1, j] 中
        i = m + 1
      } else if (item > target) {
        // 此情况说明 target 在区间 [i, m-1] 中
        j = m - 1
      } else {
        // 找到目标元素，返回其索引
        return {
          item,
          index: m,
        }
      }
    }
  }

  // 未找到目标元素，返回 -1
  return {
    item: undefined,
    index: -1,
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 6))
