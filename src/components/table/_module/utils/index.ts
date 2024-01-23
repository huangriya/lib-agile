import { isElement } from '@/function/type'

export const boundaryObserve = (elArr: HTMLElement[], fn: (...args: any) => void) => {
  let io = new IntersectionObserver(fn, {
    threshold: [0.01],
  })
  elArr.forEach((o) => {
    isElement(o) && io.observe(o)
  })
  return io
}
