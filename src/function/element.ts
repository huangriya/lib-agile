import { isElement, isObject, isSvg, isString } from './type'

/**
 * 从当前节点往上遍历dom结构，直到根
 * @param el
 * @param fn
 * @param root 指定根节点
 */
export const elementForEach = (el: HTMLElement, fn: (el: HTMLElement) => void, root?: HTMLElement) => {
  if (isElement(el) || isSvg(el)) {
    while (el.parentNode) {
      fn && fn(el)
      el = el.parentNode
      if (root && el === root) {
        fn && fn(el)
        break
      }
    }
  }
}

/**
 *  从当前节点往上遍历dom结构，返回满足条件的第一个dom
 * @param el
 * @param fn
 * @param option.root 指定根节点
 * @returns
 */
export const elementFind = (
  el: HTMLElement,
  fn: (el: HTMLElement, index?: number) => boolean | undefined,
  option?: {
    root?: HTMLElement | undefined | null
  },
) => {
  const opt = Object.assign({}, option)
  let index = 0
  if (isElement(el) || isSvg(el)) {
    while (el.parentNode) {
      if (fn(el, index)) {
        return el
      }
      index++
      el = el.parentNode as HTMLElement
      if (opt.root && el === opt.root) {
        fn && fn(el, index)
        break
      }
    }
  }
}

/**
 * 设置元素样式或者获取元素样式
 * @param el
 * @param style
 */
export const elementStyle = (el: HTMLElement, style: object) => {
  if (isObject(style)) {
    Object.keys(style).forEach((key: string) => {
      el.style[key] = style[key]
    })
  }
}

/**
 * 获取元素属性
 * @param el
 * @param attrName
 * @returns
 */
export const getElementAttr = (el: HTMLElement, attrName: string) => {
  return el && el.getAttribute ? el.getAttribute(attrName) : null
}

/**
 * 获取dom节点的xpath
 * @param el 节点
 * @param option.full 从根节点html开始
 * @param option.mode 生成模式 默认宽松模式
 */
export const getElementXpath = (
  el: HTMLElement,
  option?: {
    full: boolean
    mode: 'loose' | 'ordinary' | 'strict'
  },
) => {
  const opt = Object.assign({ full: false, mode: 'loose' }, option)
  let path: any = ''
  elementFind(el, (o) => {
    const id = o.id
    const tagName = o.tagName.toLowerCase()
    let str = ''
    if (isElement(o)) {
      if (id && !opt.full) {
        str = `//${tagName}[@id="${id}"]`
      } else {
        const nodes = o.parentNode
          ? Array.from(o.parentNode.children).filter((v) => {
              const isTag = v.tagName === o.tagName
              const className = v.className

              if (className && isString(className)) {
                if (opt.mode === 'ordinary') return isTag && className.indexOf(o.classList[0]) > -1
                if (opt.mode === 'strict') return isTag && className === o.className
              }

              return isTag
            })
          : []
        const index = nodes.length > 1 ? `[${nodes.indexOf(o) + 1}]` : ''

        let className = ''

        // 半严格模式
        if (opt.mode === 'ordinary') {
          if (o.classList[0]) {
            className = `[contains(@class,"${o.classList[0]}")]`
          }
        }

        // 严格模式
        if (opt.mode === 'strict') {
          if (o.className) {
            className = `[@class="${o.className}"]`
          }
        }

        str = `/${tagName}${className}${index}`
      }
      path = str + path
    }
    if (!opt.full && id) return true
  })
  return path
}

/**
 * 解析html Xpath为dom对象
 * @param xpath
 * @returns
 */
export const useElementXpath = (xpath: string) => {
  try {
    const headings = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null)
    const nodeList = []
    let node = headings.iterateNext()
    while (node) {
      nodeList.push(node)
      node = headings.iterateNext()
    }
    return nodeList
  } catch (e) {
    console.log(e)
  }
  return []
}
