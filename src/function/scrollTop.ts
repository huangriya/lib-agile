/**
 * 设置y轴滚动条平滑滚动到对应位置
 */
export const scrollTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollTop)
    window.scrollTo(0, c - c / 8)
  }
}
