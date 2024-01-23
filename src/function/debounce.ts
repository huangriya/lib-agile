export const debounce = (func: Function, wait: number, immediate) => {
  let timer = null
  const handler = function (context, args) {
    func.apply(context, args)
  }
  return function () {
    if (immediate && !timer) {
      handler(this, arguments)
    }
    timer && clearTimeout(timer)
    timer = setTimeout(handler, wait, this, arguments)
  }
}
