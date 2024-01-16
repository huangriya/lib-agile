# 颜色选择器

颜色选择

## 按需引入

```vue {4}
<script setup>
import ColorPicker from 'lib-agile/es/components/colorPicker/index.vue.js'
import 'lib-agile/es/components/colorPicker/index.css'
</script>
```

## 基本使用

<script setup>
  import colorPicker from '../../../src/components/colorPicker/index.vue'
</script>

<colorPicker />

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <colorPicker />
</template>
```

</details>

## api

### props

| 参数               | 说明               | 类型   | 默认值      |
| ------------------ | ------------------ | ------ | ----------- |
| color              | 当前选中颜色       | string | #000000     |
| theme              | 主题 light 或 dark | string | light       |
| quickColorsDefault | 快捷颜色默认列表   | Array  | ['#000000'] |

### 事件

| 事件名称         | 说明               | 回调参数             |
| ---------------- | ------------------ | -------------------- |
| change           | 颜色变动后触发     | function(colorValue) |
| selectQuickColor | 选择快捷颜色后触发 | function(color)      |
