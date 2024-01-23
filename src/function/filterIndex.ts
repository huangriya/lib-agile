export const filterIndex = (arr: any[], fn: (item: any, index: number) => any) => {
  const indexMap: any = {}

  arr.forEach((o, i) => {
    if (fn && fn(o, i)) {
      indexMap[i] = o
    }
  })

  return indexMap
}
