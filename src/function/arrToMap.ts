/**
 * 数组转为map
 * @param arr 需要转换的数组
 * @param key 需要转换的数组对象key
 * @returns
 */
export const arrToMap = (arr: object[], key: string) => {
  const obj: any = {}
  arr.forEach((o: any, index: number) => {
    obj[o[key] || index] = o
  })
  return obj
}
