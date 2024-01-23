import { random } from './random'

/**
 * @func randomIp
 * @param {number} type - 0: ipv4, 1: ipv6
 * @returns {string} - random ip address
 * @desc 生成一个随机的IP地址，可以是IPv4或者IPv6
 */

export const randomIp = (type?: number): string => {
  const ipv4 = random(0, 255) + '.' + random(0, 255) + '.' + random(0, 255) + '.' + random(0, 255)
  const ipv6 =
    random(0, 65535) +
    ':' +
    random(0, 65535) +
    ':' +
    random(0, 65535) +
    ':' +
    random(0, 65535) +
    ':' +
    random(0, 65535) +
    ':' +
    random(0, 65535) +
    ':' +
    random(0, 65535) +
    ':' +
    random(0, 65535)
  return type ? ipv6 : ipv4
}
