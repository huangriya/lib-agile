import { reactive, ref, shallowRef } from 'vue'
import { breadthForEach, getMaxBreadthNum, depthForEach, findRight } from '@/index'
import { column } from './props'

export default (props: any) => {
  // 总列数
  const columns = ref<any[]>([])

  // 复合列
  const headColumns = shallowRef([])
  const rows = shallowRef([])

  // 固定的列
  const leftFixedColumns = ref([])
  const centreFixedColumns = ref([])
  const rightFixedColumns = ref([])

  // 设置列
  const setColumns = () => {
    // 深度遍历获取列的最大层级与最终列
    let depthLevel = 0
    depthForEach(props.columns, (item, parentItem, level) => {
      if (level > depthLevel) {
        depthLevel = level
      }

      if (!item.children || !item.children.length) {
        columns.value.push(item)
      }

      // 获取单元格宽度
      let width = 0
      breadthForEach(item, (o) => {
        if (!o.children || !o.children.length) {
          width += o.width || column.width
        }
      })
      item.width = width
    })

    // 获取头部展示列数据
    const colunmsArr: any = []

    // 存在子级则处理树结构数据
    breadthForEach(props.columns, (item: any, parentItem: any, level: number) => {
      if (parentItem) {
        if (parentItem.fixed && !item.fixed) {
          item.fixed = true
        }
      }

      const obj = {
        rowSpan: item.children && item.children.length ? 1 : depthLevel - level + 1,
        colSpan: getMaxBreadthNum(item),
        column: item,
      }

      !colunmsArr[level] ? (colunmsArr[level] = [obj]) : colunmsArr[level].push(obj)
    })

    colunmsArr.forEach((arr, h) => {
      let index = 0
      findRight(arr, (o, i) => {
        if (o.column.fixed) {
          o.column.right = !index ? 0 : o.column.width + arr[i + 1].column.right

          // 设置显示阴影的项
          const prevItem = arr[i - 1]
          if (prevItem && !prevItem.column.fixed) {
            o.column.rightShadow = true
            rightFixedColumns.value.push(o)
          }
        }
        index++
        return !o.column.fixed
      })

      let prevFixedItem: any
      let isCentreFixed = false
      arr.find((o: any, i: number) => {
        if (o.column.fixed && o.column.right === undefined) {
          const prevItem = arr[i - 1]
          const nextItem = arr[i + 1]

          o.column.left = !i ? 0 : o.column.width + prevItem.column.left

          if (prevItem && !prevItem.column.fixed) {
            o.column.left = prevFixedItem.column.left + prevFixedItem.column.width
          }

          prevFixedItem = o

          if (isCentreFixed) {
            centreFixedColumns.value.push(o)
          }

          // 设置显示阴影的项
          if ((!prevItem || (prevItem && prevItem.column.fixed)) && nextItem && !nextItem.column.fixed) {
            o.column.leftShadow = true
            if (!isCentreFixed) {
              leftFixedColumns.value.push(o)
            }
            isCentreFixed = true
          }
        }

        return o.right !== undefined
      })
    })

    headColumns.value = colunmsArr
  }

  const setRows = () => {
    rows.value = props.dataSource
  }

  setColumns()
  setRows()

  return {
    columns,
    headColumns,
    leftFixedColumns,
    rightFixedColumns,
    centreFixedColumns,
    rows,
  }
}
