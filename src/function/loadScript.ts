/**
 * 动态加载script文件
 * @param url 文件路径
 * @param fn 加载成功后回调
 * @param errFn 加载失败后回调
 */
export const loadScript = (url: string, fn, errFn) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'

  // 兼容ie11之前
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null
        fn()
      }
    }
  } else {
    script.onload = function () {
      fn()
    }
  }
  script.onerror = function () {
    errFn()
  }
  script.src = url
  document.body.appendChild(script)
}
