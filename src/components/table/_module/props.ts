export interface typeColumn {
  key?: string
  label?: string
  props: string
  align?: string
  fixed?: boolean
  resizable?: boolean
  width?: number
  minWidth?: number
  maxWidth?: number
  formatter?: Function
  sortable?: boolean
  className?: string
  ellipsis?: boolean
}

export const column = {
  key: '',

  label: '',

  // 表格内容对应的属性，支持多层访问：如 'user.address[0].city'
  prop: '',

  // 对齐方式
  align: 'left',

  fixed: false,

  // 是否可拖动调整宽度，此时 width 必须是 number 类型
  resizable: false,

  // 列默认宽度
  width: 120,

  minWidth: 80,

  maxWidth: 200,

  // 格式化内容的函数
  formatter: '',

  // 排序
  sortOrder: false,

  // 每一列的样式class
  className: '',
}

const props = {
  // 表格列的配置描述
  columns: {
    type: Array,
    default() {
      return []
    },
  },

  // 数据数组
  dataSource: {
    type: Array,
    default() {
      return []
    },
  },

  // 设置粘性头部和滚动条
  sticky: {
    type: Boolean,
    default: false,
  },

  // 设置粘性头部离顶部距离
  stickyOffsetTop: {
    type: Number,
    default: 0,
  },

  // 表格行 key 的取值
  rowKey: {
    type: String,
    default: '',
  },

  // 当前活跃行
  activeRow: {
    type: String,
    default: '',
  },

  // 自定义空数据时的显示内容
  emptyText: {
    type: String,
    default: '暂无数据',
  },

  // 滚动条展示类型
  scrollDisplayType: {
    type: String,
    default: 'show',
  },

  // 表格行的类名
  rowClassName: {
    type: Function,
  },

  // 分页配置
  pagination: {
    type: [Boolean, Object],
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },
}

export default props
