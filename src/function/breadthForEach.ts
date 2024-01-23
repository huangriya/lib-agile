/**
 * 树形结构数据广度遍历
 * @param arr
 * @param fn
 */

import Queue from './queue'
import { isArray } from './type'

export const breadthForEach = (
  tree: any[] | { [key: string]: any },
  fn: Function,
  option?: {
    isFind?: boolean
  },
) => {
  const queue = new Queue()
  const parentMap = new WeakMap()

  function forEach(): any {
    if (queue.size()) {
      const item = queue.remove()
      const parent = parentMap.get(item)
      const fnExecute = fn(item, parent.parent, parent.level)
      if (option && option.isFind && fnExecute) return item
      if (item.children && item.children.length) {
        item.children.forEach((o: any) => {
          parentMap.set(o, {
            level: parent.level + 1,
            parent: item,
          })
          queue.add(o)
        })
      }
      const find = forEach()
      if (option && option.isFind && find) return find
    }
  }

  const queueAdd = (item) => {
    parentMap.set(item, {
      level: 0,
      parent: null,
    })
    queue.add(item)
  }

  isArray(tree) ? tree.forEach((o: any) => queueAdd(o)) : queueAdd(tree)

  return forEach()
}

/**
 * 树形结构数据广度遍历查找数据，返回第一个满足条件的项，可以找到最短路径
 * @param arr
 * @param fn
 */
export const breadthFind = (arr: any[], fn: (item: any, parentItem: any) => boolean) => {
  return breadthForEach(arr, fn, {
    isFind: true,
  })
}

/**
 * 获取树结构最大的广度数是多少
 */
export const getMaxBreadthNum = (tree: { [key: string]: any }, fn?: Function) => {
  let num = 0
  breadthForEach(tree, (item) => {
    if (!item.children || !item.children.length) {
      num++
    }
  })
  return num
}

/**
 * 获取树结构最深有多少层
 * @param tree
 */
export const getDepthLevel = (tree: any[] | { [key: string]: any }) => {
  let num = 0
  breadthForEach(tree, (item: any, parentItem: any, level: number) => {
    num = level
  })
  return tree ? num + 1 : num
}
