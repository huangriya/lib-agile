import * as echarts from 'echarts'

export const echartsMap: any = {}

export const removeEchart = () => {
  Object.keys(echartsMap).forEach((key: any) => {
    if (echartsMap[key]._disposed) {
      delete echartsMap[key]
    }
  })
}

export const resize = () => {
  removeEchart()
  Object.keys(echartsMap).forEach((key: any) => {
    echartsMap[key].resize()
  })
}

export const echartInit = (el: HTMLElement, options?: echarts.EChartsOption, opts?: { [key: string]: any }) => {
  let echartInstance = echarts.getInstanceByDom(el)

  if (!echartInstance) {
    echartInstance = echarts.init(el, 'default', opts)
  }

  if (options) {
    echartInstance.setOption(options, {
      notMerge: true,
    })
  }

  if (!echartsMap[echartInstance.id]) {
    echartsMap[echartInstance.id] = echartInstance
  }

  return echartInstance
}
