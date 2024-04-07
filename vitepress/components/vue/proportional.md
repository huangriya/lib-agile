<script setup>
  import { defineAsyncComponent, ref, nextTick } from 'vue'
  import proportional from '../../../src/components/proportional/index.vue'

  const value = ref(0.5)

</script>

# 等比例缩放容器

高度根据宽度等比例缩放，一般适用于图片、视频显示等场景

## 基本使用

<input type="radio" name="v" v-model="value" :value="0.2" />20% <input type="radio" name="v" v-model="value" :value="0.5" />50% <input type="radio" name="v" v-model="value" :value="0.7" />70%

<proportional :value="value">
高度按宽度{{value * 100}}%缩放
</proportional>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <proportional :value="0.5"></proportional>
</template>
```

</details>

## api

### props

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 缩放比例 | Number | 1      |
