/**
 * 指定区间的随机数生成
 * @param min 开始区间数
 * @param max 结束区间数
 * @param digits 小数位数
 * @returns
 */

declare type Random = (min: number, max: number, digits?: number) => number

export const random: Random = (min = 0, max, digits = 0) => {
  if (min !== undefined && max === undefined) {
    max = min
    min = 0
  }

  if (digits > 0) {
    const num = min + Math.random() * (max - min)
    return Number(num.toFixed(digits))
  }

  return min + Math.floor(Math.random() * (max - min + 1))
}
