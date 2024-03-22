import type { App } from 'vue'
import ScrollBar from './scrollBar/index.vue'
import Column from './column/index.vue'
import AvGrid from './avGrid/index.vue'
import ColorPicker from './colorPicker/index.vue'
import Proportional from './proportional/index.vue'
import Tooltip from './tooltip'

import '../style/components/index.less'

export { ScrollBar, Column, AvGrid, ColorPicker }

type Install = { install: (app: App<any>) => any }

const _default: Install = {
  install(
    app,
    config: {
      tooltip?: {
        show: boolean

        // 鼠标移入后延时多少才显示 Tooltip，单位：毫秒 默认100
        mouseEnterDelay: number

        // 默认冒泡层级
        bubblingLevel: number
      }
    } = {},
  ) {
    app.component(ScrollBar.name, ScrollBar)
    app.component(Column.name, Column)
    app.component(AvGrid.name, AvGrid)
    app.component(ColorPicker.name, ColorPicker)
    app.component(Proportional.name, Proportional)
    if (config.tooltip?.show) {
      Tooltip(config.tooltip)
    }
  },
}

export default _default
