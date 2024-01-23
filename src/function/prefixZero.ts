/**
 * 少于x位的正数前面补零
 * @param num 需要补零的数字
 * @param n 位数
 * @returns
 */

import { isNumber } from './type'

export const prefixZero = function (num: number, n = 2) {
  return num ? (Array(n).join('0') + num).slice(-n) : ''
}
