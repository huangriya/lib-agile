<script setup>
  import proportional from '../../../src/components/proportional/index.vue'
</script>

# 等比例缩放容器

高度根据宽度等比例缩放，一般适用于图片、视频显示等场景

## 基本使用

<proportional :value=".50">
高度按宽度50%缩放
</proportional>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <proportional :value=".50"></proportional>
</template>
```

</details>

## api

### props

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 缩放比例 | Number | 1      |
