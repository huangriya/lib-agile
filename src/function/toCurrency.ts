/**
 * 数字千分位
 * @param num 要处理的数字
 * @param digits 保留几位小数
 * @param isIntegerSet 整数是否处理小数逻辑
 * @returns
 */
export const toCurrency = (num: number, digits = 2, isIntegerSet?: boolean) => {
  let numStr = isIntegerSet || String(num).indexOf('.') > -1 ? num.toFixed(digits) : String(num)

  const isBurden = numStr[0] === '-'

  if (isBurden) {
    numStr = numStr.replace('-', '')
  }

  const numArr = numStr.split('.')

  return (
    (isBurden ? '-' : '') + numArr[0].replace(/(?!^)(?=(\d{3})+$)/g, ',') + (numArr[1] ? `.${numArr[1]}` : '')
  )
}
