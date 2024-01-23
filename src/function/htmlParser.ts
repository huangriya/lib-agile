/**
 * 把html字符串解析成document对象
 * @param htmlStr
 * @returns
 */

export const htmlParser = (htmlStr: string) => {
  const parser = new DOMParser()
  return parser.parseFromString(htmlStr, 'text/html')
}
