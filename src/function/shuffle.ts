import { random } from './random'

export const shuffle = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = random(0, i - 1)
    const item = arr[i],
      randomItem = arr[randomIndex]
    arr[i] = randomItem
    arr[randomIndex] = item
  }
  return arr
}
