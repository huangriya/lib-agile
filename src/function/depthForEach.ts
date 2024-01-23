/**
 * 树形结构数据深度遍历
 * @param arr
 * @param fn
 */

export const depthForEach = (
  arr: any[],
  fn: (item: any, parentItem: any, level: number) => void | boolean,
  option?: {
    isFind?: boolean
  },
) => {
  let level = 0
  let parent: any[] | null = null
  function depth(arr: any[]): any {
    for (let i = 0; i < arr.length; i++) {
      const o = arr[i]
      const fnExecute = fn(o, parent, level)
      if (option && option.isFind && fnExecute) {
        return o
      }
      if (o.children && o.children.length) {
        level++
        parent = o
        const find = depth(o.children)
        if (option && option.isFind && find) {
          return find
        }
      } else {
        if (i === arr.length - 1) {
          level = 0
          parent = null
        }
      }
    }
  }
  return depth(arr)
}

/**
 * 树形结构数据深度遍历查找数据，返回第一个满足条件的项
 * @param arr
 * @param fn
 */
export const depthFind = (arr: any[], fn: (item: any, parentItem: any, level: number) => boolean) => {
  return depthForEach(arr, fn, {
    isFind: true,
  })
}

/**
 * 树形结构数据深度遍历查找数据，排除掉满足具体条件的项
 * @param arr
 * @param fn
 */
export const depthExclude = (arr: any[], fn: (item: any) => boolean) => {
  let level: number = 0
  let parent: any[] | null = null
  function depth(arr: any[]): any {
    for (let i = arr.length - 1; i >= 0; i--) {
      const o = arr[i]
      const fnExecute = fn(o)
      if (fnExecute) {
        arr.splice(i, 1)
      }
      if (o.children && o.children.length) {
        level++
        parent = o
        depth(o.children)
      } else {
        if (i === arr.length - 1) {
          level = 0
          parent = null
        }
      }
    }
  }
  depth(arr)
  return arr
}
