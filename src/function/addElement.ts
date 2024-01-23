import { htmlParser } from './htmlParser'

/**
 *
 * @param html html字符串
 * @param containerEl 容器节点
 */

// 添加dom节点
export const addElement = (html: string, containerEl = document.querySelector('body')) => {
  const nodes = htmlParser(html).querySelector('body')?.childNodes

  if (nodes && nodes.length) {
    for (let i = 0; i < nodes.length; i++) {
      containerEl?.appendChild(nodes[i])
    }
  }
}
