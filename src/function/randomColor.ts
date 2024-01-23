import { random } from './random'
/**
 * @func randomColor
 * @param {type} type - 0: rgb, 1: rgba, 2: hsl, 3: hsla, 4: hex
 * @returns {string} - random color
 * @desc 📝生成一个随机的颜色值
 */

export const randomColor = (type = 0): string => {
  if (type === 0) {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  } else if (type === 1) {
    return `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${(random(0, 255) / 255.0).toFixed(
      2,
    )})`
  } else if (type === 2) {
    return `hsl(${random(0, 360)}, ${random(0, 100)}%, ${random(0, 100)}%)`
  } else if (type === 3) {
    return `hsla(${random(0, 360)}, ${random(0, 100)}%, ${random(0, 100)}%, ${(
      random(0, 100) / 255.0
    ).toFixed(1)})`
  } else {
    return `#${random(0, 255).toString(16)}${random(0, 255).toString(16)}${random(0, 255).toString(16)}`
  }
}
