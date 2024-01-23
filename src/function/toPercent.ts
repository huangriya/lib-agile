import { isNumber } from './type'

/**
 * 数字百分比
 * @param num 要处理的数字
 * @param option.digits 保留几位小数
 * @param option.isIntegerSet 整数是否处理小数逻辑
 * @param option.isRide100 是否乘以100
 * @returns
 */
export const toPercent = (
  num: number,
  option?: {
    digits?: number
    isIntegerSet?: boolean
    isRide100?: boolean
    emptyText?: string
  },
) => {
  const opt = Object.assign({}, { digits: 2, isIntegerSet: false, isRide100: true, emptyText: '-' }, option)

  if (!isNumber(num)) {
    return num || opt.emptyText
  }

  const newNum = opt.isRide100 ? num * 100 : num

  const numStr = opt.isIntegerSet || String(newNum).indexOf('.') > -1 ? newNum.toFixed(opt.digits) : newNum

  return numStr + '%'
}

/**
 * 获取两个数字比率
 * @param num 数字本身
 * @param comparNum 要对比的数字
 * @param option.errorText 对比异常是显示的文本 -
 * @returns
 */
export const toRatio = (num: number, comparNum: number, option?: { errorText: string }) => {
  const opt = Object.assign({}, { errorText: '-', isPercent: true }, option)
  if (isNumber(num) && isNumber(comparNum) && comparNum !== 0) {
    return (num - comparNum) / comparNum
  }
  return opt.errorText
}
