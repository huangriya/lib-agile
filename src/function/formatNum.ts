/**
 * Convert a number to readable string using fixed-point notation.
 *  formatNum(1/3, 2, true) => 33.33%
 *  formatNum(1/3 * 1e5, 2) => 33,333.33
 */
export const formatNum = (value: number, digits = 0, isPercent = false) => {
  if (typeof value === 'string') {
    return value
  }

  value = +value
  if (isPercent) {
    value *= 100
  }

  const numStr = +value.toFixed(digits) + ''
  let leftNum,
    leftlen,
    rightNum,
    result = ''

  if (value == null) {
    return '--'
  }

  if (numStr.indexOf('.') >= 0) {
    leftNum = numStr.split('.')[0]
    rightNum = '.' + numStr.split('.')[1]
  } else {
    leftNum = numStr
    rightNum = ''
  }
  leftlen = leftNum.length
  if (leftlen <= 3) {
    result = leftNum
  } else {
    while (leftlen > 3) {
      result = ',' + leftNum.slice(-3) + result
      leftlen -= 3
      leftNum = leftNum.slice(0, leftlen)
    }
    if (leftNum) {
      result = leftNum + result
    }
  }

  return result + rightNum + (isPercent ? '%' : '')
}
