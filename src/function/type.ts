const isType = (type: string) => (val: any) => Object.prototype.toString.call(val) === `[object ${type}]`

// 是否为对象
export const isObject = isType('Object')

// 判断是否为 {} 空对象
export const isEmptyObject = (val: any) => isObject(val) && JSON.stringify(val) == '{}'

// 判断是否为参数列
export const isArgs = isType('Arguments')

export const isNull = isType('Null')

export const isNumber = isType('Number')

export const isBoolean = isType('Boolean')

export const isString = isType('String')

export const isFunction = isType('Function')

export const isArray = (val: any) => Array.isArray(val)

export const isPromise = (value: any) => {
  const promise = isType('Promise')(value)
  if (promise) return true
  if (isObject(value) || isFunction(value)) {
    return isFunction(value.then)
  }
}

export const isDate = isType('Date')

export const isRegExp = isType('RegExp')

export const isMap = isType('Map')

export const isSet = isType('Set')

export const isSymbol = isType('Symbol')

export const isError = isType('Error')

export const isUndefined = (val: any) => val === undefined

// 判断是否为null || undefined || ''
export const isEmpty = (val: any) => isNull(val) || isUndefined(val) || val === ''

export const isElement = (val: any) => val instanceof HTMLElement

export const isHtmlCollection = (val: any) => val instanceof HTMLCollection

export const isSvg = (val: any) => val instanceof SVGElement
