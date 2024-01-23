/**
 * scrollBar滚动相对于真实滚动的比例，比如scrollBar滚动10px，真实滚动需要滚动多少?
 * @param scrollContentSize
 * @param scrollSize
 * @param scrollBarSize
 * @param offsetStart
 * @param offsetEnd
 * @returns
 */

export const getMultiple = (
  scrollContentSize: number,
  scrollSize: number,
  scrollBarSize: number,
  offsetStart: number,
  offsetEnd: number,
) => {
  return (scrollContentSize - scrollSize) / (scrollSize - scrollBarSize - offsetStart - offsetEnd)
}

export const getScrollBarSize = (
  scrollSize: number,
  scrollContentSize: number,
  offsetStart: number,
  offsetEnd: number,
  minBarSize: number,
) => {
  const width = scrollSize - (scrollContentSize - scrollSize) - offsetStart - offsetEnd
  return width < minBarSize ? minBarSize : width
}
