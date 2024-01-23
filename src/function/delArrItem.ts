import { isObject, isArray } from './type'
import { filterIndex } from './filterIndex'
import { forEachRight } from './forEachRight'

/**
 * 删除数组指定值对应的项
 * @param arr
 * @param value
 */
export const delArrItem = (arr: any[], value: any): any => {
  function getIndex(arr: any[], value: any) {
    const map: any = {}

    function setObjIndex(value: any) {
      arr.forEach((item: any, i) => {
        let isDel = true
        Object.keys(value).forEach((key) => {
          if (item[key] !== value[key]) {
            isDel = false
          }
        })
        if (isDel) {
          map[i] = item
        }
      })
    }

    function setIndex(value: any) {
      Object.assign(
        map,
        filterIndex(arr, (v) => v === value),
      )
    }

    if (isArray(value)) {
      value.forEach((o: any) => {
        isObject(o) ? setObjIndex(o) : setIndex(o)
      })
    } else if (isObject(value)) {
      setObjIndex(value)
    } else {
      setIndex(value)
    }

    return map
  }

  const indexMap: any = getIndex(arr, value)

  forEachRight(arr, (item, i) => {
    if (indexMap[i]) {
      arr.splice(i, 1)
    }
  })

  return arr
}
