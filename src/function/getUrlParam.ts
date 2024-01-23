/**
 * 获取url参数值
 * @param key
 * @returns
 */

export const getUrlParam = (key: string) => {
  const url = new URL(window.location.href)
  const value = url.searchParams.get(key)
  return value
}
