import { isUndefined, isObject } from './type'

/**
 * 合并源对象与目标对象的交集，并返回目标对象
 * @param source 源对象
 * @param target 目标对象
 * @returns
 */
export const mergeIntersect = (source: any, target: any) => {
  if (isObject(Object) && isObject(target)) {
    Object.keys(source).forEach((o) => {
      if (!isUndefined(target[o])) {
        source[o] = target[o]
      }
    })
  }
  return source
}
