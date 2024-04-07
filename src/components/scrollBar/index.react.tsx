import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import { getMultiple, getScrollBarSize } from './_module/utils'

const ScrollBar = forwardRef(function ScrollBar(props, ref) {
  const {
    children,
    offsetTop = 0,
    offsetBottom = 10,
    offsetLeft = 0,
    offsetRight = 10,
    minBarSize = 50,
    type = 'hover',
  } = props

  const scrollBox = useRef(null)
  const scroll = useRef(null)

  // 滚动容器大小信息
  const [scrollSize, setScrollSize] = useState({
    scrollWidth: 0,
    scrollHeight: 0,
    scrollContentWidth: 0,
    scrollContentHeight: 0,
  })

  // 滚动相对于真实滚动的比例，比如scrollBar滚动10px，真实滚动需要滚动多少?
  const multipleX = useRef(0)
  const multipleY = useRef(0)

  const isScroll = useRef(false)

  const [scrollBarY, setScrollBarY] = useState({
    height: 0,
  })

  const [scrollBarX, setScrollBarX] = useState({
    width: 0,
  })

  const [clientX, setClientX] = useState(null)
  const [clientY, setClientY] = useState(null)

  // 初始化容器信息
  const initContainer = () => {
    setScrollSize({
      scrollWidth: scroll.current.offsetWidth,
      scrollHeight: scroll.current.offsetHeight,
      scrollContentWidth: scroll.current.scrollWidth,
      scrollContentHeight: scroll.current.scrollHeight,
    })
  }

  // 初始化scrollBar
  const initScrollBar = () => {
    const { scrollWidth, scrollHeight, scrollContentWidth, scrollContentHeight } = scrollSize

    if (scrollContentWidth > scrollWidth) {
      const xWidth = getScrollBarSize(scrollWidth, scrollContentWidth, offsetLeft, offsetRight, minBarSize)
      setScrollBarX({
        width: xWidth,
      })

      multipleX.current = getMultiple(scrollContentWidth, scrollWidth, xWidth, offsetLeft, offsetRight)
    }
    if (scrollContentHeight > scrollHeight) {
      const yHeight = getScrollBarSize(scrollHeight, scrollContentHeight, offsetTop, offsetBottom, minBarSize)
      setScrollBarY({
        height: yHeight,
      })

      multipleY.current = getMultiple(scrollContentHeight, scrollHeight, yHeight, offsetTop, offsetBottom)
    }
  }

  // 设置x轴滚动条距离
  let requestAnimationXId: any = null
  function setScrollBarLeft(isRequestAnimationFrame = true) {
    const scrollLeft = scroll.current.scrollLeft
    const left = offsetLeft + scrollLeft / multipleX.current
    const scrollBar = scrollBox.current.querySelector('.agile-scroll-bar-x')
    if (scrollBar) {
      scrollBar.style.transform = `translateX(${left}px)`
    }
    if (isRequestAnimationFrame) {
      requestAnimationXId = requestAnimationFrame(() => {
        setScrollBarLeft()
      })
    }
  }

  // 设置Y轴滚动条距离
  let requestAnimationYId = null
  function setScrollBarTop(isRequestAnimationFrame = true) {
    const scrollTop = scroll.current.scrollTop
    const top = offsetTop + scrollTop / multipleY.current
    const scrollBar = scrollBox.current.querySelector('.agile-scroll-bar-y')
    if (scrollBar) {
      scrollBar.style.transform = `translateY(${top}px)`
    }
    if (isRequestAnimationFrame) {
      requestAnimationYId = requestAnimationFrame(() => {
        setScrollBarTop()
      })
    }
  }

  let timer = null
  const onScroll = () => {
    if (type !== 'hide') {
      if (!isScroll.current) {
        setScrollBarLeft()
        setScrollBarTop()
        isScroll.current = true
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        cancelAnimationFrame(requestAnimationXId)
        cancelAnimationFrame(requestAnimationYId)
        isScroll.current = false
      }, 500)
    }

    props.scroll &&
      props.scroll({
        scrollTop: scroll.current.scrollTop,
        scrollLeft: scroll.current.scrollLeft,
        scrollWidth: scrollSize.scrollWidth,
        scrollHeight: scrollSize.scrollHeight,
        scrollContentWidth: scrollSize.scrollContentWidth,
        scrollContentHeight: scrollSize.scrollContentHeight,
      })
  }

  // 按下滚动条
  const drag = {
    scrollLeft: 0,
    scrollTop: 0,
    clientX: null,
    clientY: null,
  }
  const scrollBarDown = (e, key) => {
    if (key === 'scrollBarX') {
      setClientX(e.clientX)
      drag.scrollLeft = scroll.current.scrollLeft
      drag.clientX = e.clientX
    }
    if (key === 'scrollBarY') {
      setClientY(e.clientY)
      drag.scrollTop = scroll.current.scrollTop
      drag.clientY = e.clientY
    }
    window.addEventListener('mousemove', scrollBarDrag)
    window.addEventListener('mouseup', scrollBarUp)
  }

  // 拖拽滚动条
  function scrollBarDrag(e) {
    if (drag.clientX) {
      const dragX = e.clientX - drag.clientX
      scroll.current.scrollLeft = drag.scrollLeft + dragX * multipleX.current
    }
    if (drag.clientY) {
      const dragY = e.clientY - drag.clientY
      scroll.current.scrollTop = drag.scrollTop + dragY * multipleY.current
    }
  }

  function scrollBarUp() {
    setClientX(null)
    setClientY(null)
    drag.clientX = null
    drag.clientY = null
    window.removeEventListener('mousemove', scrollBarDrag)
    window.removeEventListener('mouseup', scrollBarUp)
  }

  useEffect(() => {
    initContainer()
  }, [children])

  useEffect(() => {
    initScrollBar()
    setScrollBarLeft(false)
    setScrollBarTop(false)
  }, [scrollSize, offsetTop, offsetBottom, offsetLeft, offsetRight])

  // 设置滚动条左边距离
  function setScrollLeft(num: number) {
    if (num >= 0) {
      scroll.current.scrollLeft = num
    }
  }

  // 设置滚动条上边距离
  function setScrollTop(num: number) {
    if (num >= 0) {
      scroll.current.scrollTop = num
    }
  }

  useImperativeHandle(ref, () => {
    return {
      updated: initContainer,
      setScrollLeft,
      setScrollTop,
    }
  })

  return (
    <div
      ref={scrollBox}
      className={[
        'agile-scrollbar',
        clientX || clientY ? 'not-user-select' : '',
        type === 'hover' ? 'scrollbar-hover' : '',
        type === 'hide' ? 'scrollbar-hide' : '',
      ].join(' ')}
      style={props.style}>
      <div
        className={[
          'agile-scroll',
          scrollSize.scrollContentWidth > scrollSize.scrollWidth ? 'scroll-x' : '',
          scrollSize.scrollContentHeight > scrollSize.scrollHeight ? 'scroll-y' : '',
        ].join(' ')}
        ref={scroll}
        onScroll={onScroll}>
        {children}
      </div>
      {scrollSize.scrollContentWidth > scrollSize.scrollWidth && (
        <div
          className={['agile-scroll-bar-x', clientX ? 'act' : ''].join(' ')}
          style={{ width: scrollBarX.width + 'px' }}
          onMouseDown={(e) => scrollBarDown(e, 'scrollBarX')}></div>
      )}
      {scrollSize.scrollContentHeight > scrollSize.scrollHeight && (
        <div
          className={['agile-scroll-bar-y', clientY ? 'act' : ''].join(' ')}
          style={{ height: scrollBarY.height + 'px' }}
          onMouseDown={(e) => scrollBarDown(e, 'scrollBarY')}></div>
      )}
    </div>
  )
})
export default ScrollBar
