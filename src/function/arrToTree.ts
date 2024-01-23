import { isEmpty } from './type'

/**
 * 一维数组转树结构
 * @param arr
 * @returns
 */

export const arrToTree = (
  arr: any[],
  opt: {
    id?: number | string
    parentId?: number | string
    children?: number | string
  } = {},
) => {
  const keyId = opt.id || 'id'
  const parentKeyId = opt.parentId || 'parentId'
  const children = opt.children || 'children'
  const map: any = {},
    newArr: any = []
  arr.forEach((o) => {
    map[o[keyId]] = o
    if (isEmpty(o[parentKeyId])) {
      newArr.push(o)
    }
  })

  arr.forEach((o: any) => {
    const parentItem = map[o[parentKeyId]]
    if (parentItem) {
      parentItem[children] ? parentItem[children].push(o) : (parentItem[children] = [o])
    }
  })

  return newArr
}
