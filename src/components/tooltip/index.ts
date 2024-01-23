import { addElement, elementStyle, elementFind, getElementAttr } from '../../index'

let isEllipsisTooltip = false

import '../../style/components/tooltip.less'
export default (option?: { mouseEnterDelay: number }) => {
  if (isEllipsisTooltip) return

  const opt = Object.assign(
    {},
    {
      mouseEnterDelay: 100,
      bubblingLevel: 3,
    },
    option,
  )

  addElement('<div id="lib-ellipsis-tooltip"></div>')

  let tooltipType = 0
  let time: any = null
  let timeShow = false

  document.addEventListener('mousemove', (e) => {
    const target = elementFind(e.target as HTMLElement, (e: HTMLElement, i: number) => {
      const ellipsisTooltipAttr = getElementAttr(e, 'lib-ellipsis-tooltip')
      const tooltipAttr = getElementAttr(e, 'lib-tooltip')

      const tooltipBubbling: any = getElementAttr(e, 'lib-tooltip-bubbling') || 3

      tooltipType = 0

      if (ellipsisTooltipAttr !== null && ellipsisTooltipAttr !== 'false') {
        tooltipType = 1
        return true
      }

      if (tooltipAttr !== null && tooltipAttr !== 'false') {
        tooltipType = 2
        return true
      }

      return i >= tooltipBubbling || i >= opt.bubblingLevel
    })

    const ellipsisTooltip = document.getElementById('lib-ellipsis-tooltip') as HTMLElement

    // 关闭tooltip
    const closeTooltip = () => {
      if (time) {
        clearTimeout(time)
        time = null
        timeShow = false
      }
      elementStyle(ellipsisTooltip, {
        visibility: 'hidden',
      })
    }

    if (!tooltipType || !target) {
      closeTooltip()
      return
    }

    const showTooltip = (content: string) => {
      ellipsisTooltip.innerText = content

      const clientWidth = document.body.clientWidth
      const clientHeight = document.body.clientHeight
      const tipsWidth = ellipsisTooltip.offsetWidth
      const tipsHeight = ellipsisTooltip.offsetHeight

      const x = e.clientX + 10
      const y = e.clientY + 15

      const left = tipsWidth + x > clientWidth ? x - tipsWidth - 25 : x
      const top = tipsHeight + y > clientHeight ? y - tipsHeight - 25 : y

      elementStyle(ellipsisTooltip, {
        visibility: 'visible',
        left: left + 'px',
        top: top + 'px',
      })
    }

    const tooltipContent = getElementAttr(target, 'lib-tooltip-content')

    if (
      (tooltipType === 1 &&
        (target.offsetWidth < target.scrollWidth || target.offsetHeight < target.scrollHeight)) ||
      tooltipContent
    ) {
      if (!timeShow) {
        clearTimeout(time)
        time = setTimeout(() => {
          timeShow = true
          showTooltip(tooltipContent || target.innerText)
        }, opt.mouseEnterDelay)
      } else {
        showTooltip(tooltipContent || target.innerText)
      }
    } else {
      closeTooltip()
    }
  })

  isEllipsisTooltip = true
}
