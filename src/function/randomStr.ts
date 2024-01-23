import { random } from './random'

/**
 * 返回指定位数随机字符
 *
 *
 */

export const randomStr = (length: number): string => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let str = ''
  for (let i = 0; i < length; ++i) {
    const rand = random(0, ALPHABET.length - 1)
    str += ALPHABET[rand]
  }
  return str
}
