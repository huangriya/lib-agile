/**
 * 判断一个数是否是奇数
 * @param n 传入的数字
 * @returns { Boolean }
 */
export const isOdd = (n: number): boolean => {
  return n % 2 === 1 || n % 2 === -1
}
